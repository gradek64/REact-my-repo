import { ShipmentType, FulfilmentStatus } from '../../../src/types/api'
import SessionManager from '../../data/SessionManager'
import basketDatasets from '../../data/Shipment/BasketDatasets'

const snapshotServiceDatasets = require('../../data/SnapshotService/SnapshotServiceDatasets').default
const createFulfilmentServiceDatasets = require('../../data/ArrangeDelivery/Datasets/CreateFulfilmentResponseData')

const failedStockHoldTypes = [
  'SingleItemOutOfStock',
  'SingleItemOutOfStockWithPromotion',
  'MultipleItemsOutOfStock',
  'MultipleItemsOutOfStockWithPromotion',
  'MultipleItemsSomeOutOfStock',
  'SingleItemExcluded',
  'MultipleExcluded',
  'MultipleSomeExcludedSomeOutOfStock',
]
const partialStockHoldTypes = [
  'SingleItemPartialAvailability',
  'MultipleItemsSomePartialAvailability',
  'SingleItemPartialAvailabilityWithPromotion',
  'MultipleItemsSomePartialAvailabilityWithPromotion',
]

const handleStockholdStatuses = (sessionData, value) => {
  const { snapshotService, errorCodes, arrangeDelivery } = sessionData
  errorCodes.reset()

  const { OrderSnapshotInitialisationFailed, SnapshotSuccessfullyInitialised } = snapshotServiceDatasets.snapshotStatus
  const { StockHoldFailedDependency, StockHoldPartialAllocation, SnapshotInitialised } =
    snapshotServiceDatasets.snapshotInitialisation
  const { FulfilmentServiceStockHoldPartialAllocation, FulfilmentServiceStockHoldFailedAllocation, FulfilmentCreated } =
    createFulfilmentServiceDatasets.createFulfilmentResponseData

  if (failedStockHoldTypes.includes(value)) {
    // Set the snapshot 424 initialise response, update snapshot status to failed
    snapshotService.setSnapshotInitialisation(StockHoldFailedDependency)
    snapshotService.updateSnapshotStatus(OrderSnapshotInitialisationFailed)

    // Set the createFulfilment response to 424
    arrangeDelivery.updateCreateFulfilmentResponse(FulfilmentServiceStockHoldFailedAllocation.response)
  } else if (partialStockHoldTypes.includes(value)) {
    // Set the snapshot 200 initialise response & populate errorCodes, update snapshot status to partial allocation
    const errorJson = StockHoldPartialAllocation.response.toJson()
    errorCodes.addError(errorJson.error.status)

    snapshotService.setSnapshotInitialisation(StockHoldPartialAllocation)

    // Set the createFulfilment response to 200
    arrangeDelivery.updateCreateFulfilmentResponse(FulfilmentServiceStockHoldPartialAllocation.response)
  } else {
    snapshotService.setSnapshotInitialisation(SnapshotInitialised)
    snapshotService.updateSnapshotStatus(SnapshotSuccessfullyInitialised)
    arrangeDelivery.updateCreateFulfilmentResponse(FulfilmentCreated.response)
  }
}

const modifyStubShipment = {
  path: '/payment-stub/shipment',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { value, type, index = 0 } = req.query
    const sessionData = SessionManager.getSession(req)
    const { basket, confirmation, user, store, orderRetrieval } = sessionData
    const shipment = basket.getShipmentByIndex(Number(index))
    const isWcsHandover = sessionData.snapshotService.isWcsHandover

    if (['addCollectionShipment', 'addDeliveryShipment', 'addAllDeliveryShipments'].includes(type)) {
      if (type === 'addCollectionShipment') {
        console.log('API: Adding collection shipment')
        basket.addCollectionShipment()
        orderRetrieval.buildOrders(1)
      } else if (type === 'addAllDeliveryShipments') {
        console.log('API: Adding all delivery shipments')
        basket.addAllDeliveryShipments(isWcsHandover)
        orderRetrieval.buildOrders(basket.shipments.length)
      } else {
        const { shipmentType, basketType, deliveryInstruction } = req.query
        // reset store
        store.reset()

        const shipmentOptions = {
          shipmentType,
          basketType,
          deliveryInstruction,
        }

        console.log(
          `API: Adding delivery shipment ${
            Object.values(shipmentOptions).some((v) => typeof v !== 'undefined')
              ? `\n${JSON.stringify(shipmentOptions, null, ' ')}`
              : ''
          }`,
        )

        basket.addDeliveryShipment(shipmentOptions, isWcsHandover)
        orderRetrieval.buildOrders(basket.shipments.length)
      }
    }

    if (!shipment) {
      console.log(`API: Shipment does not exist`)
      return { error: `Shipment does not exist` }
    }

    if (type === 'basketData' && basketDatasets[shipment.shipmentType][value] && !value.includes('Divider')) {
      console.log(`API: Set the basket of shipment ${index} to ${value}`)
      shipment.setBasket(value)
      basket.calculateTotals()

      handleStockholdStatuses(sessionData, value)
    }

    if (type === 'shipmentType' && value in ShipmentType) {
      console.log(`API: Set the shipment type of shipment ${index} to ${value}`)
      shipment.setShipmentType(value)
      basket.calculateTotals()
    }

    if (type === 'fulfilmentStatus' && value in FulfilmentStatus) {
      console.log(`API: Set the fulfilment status of shipment ${index} to ${value}`)
      shipment.setFulfilmentStatus(value)

      confirmation.confirmationType = basket.getOrderStatusFromFulfilmentStatuses()
    }

    if (type === 'toggleDeliveryInstructions') {
      console.log(`API: Toggle delivery instructions for shipment ${index}`)
      shipment.toggleDeliveryInstructions()
    }

    if (type === 'delete') {
      console.log(`API: Deleting shipment ${index}`)
      basket.deleteShipment(shipment)
      orderRetrieval.buildOrders(basket.shipments.length)
    }

    if (type === 'toggleSlotAvailability') {
      console.log(`API: Setting slot availability to ${value} for shipment ${index}`)
      shipment.slotAvailability = value
    }

    if (type === 'toggleDeliverableDays') {
      console.log(`API: Setting deliverable days to ${value} for shipment ${index}`)
      shipment.deliverableDays = value
    }

    if (type === 'toggleSpecialDelivery') {
      console.log(`API: Setting special delivery to ${value} for shipment ${index}`)
      shipment.isSpecialDelivery = value === 'true'
    }

    // If the user's basket contains a delivery shipment that requires a delivery address, and they
    // don't already have a delivery addresses set, then add one.
    // If the user's basket does not contain a delivery shipment that requires a delivery address, then
    // remove the delivery address
    if (basket.hasPhysicalDeliveryShipment() && !user.addresses.getSnapshotDeliveryAddress()) {
      user.addresses.updateDeliveryAddress(user.addresses.getSnapshotContactAddress())
    } else if (!basket.hasPhysicalDeliveryShipment()) {
      user.addresses.removeDeliveryAddress()
    }

    SessionManager.saveSession(sessionData, req)
    return basket.toJson().shipments
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubShipment
