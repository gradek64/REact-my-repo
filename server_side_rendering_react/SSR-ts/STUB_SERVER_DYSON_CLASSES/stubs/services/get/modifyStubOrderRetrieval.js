import { receiptsDatasets } from '../../data/OrderRetrieval/ReceiptsDatasets'

const SessionManager = require('../../data/SessionManager')
const OrderRetrievalDatasets = require('../../data/OrderRetrieval/OrderRetrievalDatasets')
const { ShipmentStatusType } = require('../../../src/types/api')

const modifyStubConfirmation = {
  path: '/payment-stub/orderRetrieval',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value, index } = query
    const sessionData = SessionManager.getSession(req)
    const { orderRetrieval, getOrder, basket } = sessionData
    let dataset

    if (query.type === 'orderRetrievalResponse') {
      console.log('API: Toggle order retrieval response')
      dataset = OrderRetrievalDatasets[value]
      if (dataset) {
        orderRetrieval.orderRetrievalType = value
        console.log(`API: Set orderRetrieval data - ${dataset.description}`)
      } else {
        return { error: `orderRetrieval response dataset not found for '${value}'` }
      }
    }
    if (query.type === 'receiptResponse') {
      console.log('API: Toggle receipt response')
      dataset = receiptsDatasets[value]
      if (dataset) {
        orderRetrieval.receiptType = value
        console.log(`API: Set receipts data - ${dataset.description}`)
      } else {
        return { error: `receipts response dataset not found for '${value}'` }
      }
    }
    if (query.type === 'toggleCancellable') {
      orderRetrieval.orders[index].isCancellable = value === 'true'
      console.log(`API: Set toggleCancellable to ${value} for shipment ${index}`)
    }
    if (query.type === 'toggleAmendable') {
      orderRetrieval.orders[index].isAmendable = value === 'true'
      console.log(`API: Set toggleAmendable to ${value} for shipment ${index}`)
    }
    if (query.type === 'shipmentStatus') {
      orderRetrieval.orders[index].status = value
      console.log(`API: Set status to ${value} for shipment ${index}`)
    }
    if (query.type === 'addOneOfEachStatus') {
      console.log(`API: Adding one shipment for each status`)
      basket.addCollectionShipment()
      getOrder.shipmentsCount = 7
      Object.keys(ShipmentStatusType).forEach((type, i) => {
        orderRetrieval.orders[i].status = type
        orderRetrieval.orders[i].isCancellable = false
        orderRetrieval.orders[i].isAmendable = false
      })
    }
    if (query.type === 'addAllCancellableAmendableCombinations') {
      console.log(`API: Adding one shipment for every cancellable and amendable combination`)
      basket.addCollectionShipment()
      getOrder.shipmentsCount = 4

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 4; i++) {
        orderRetrieval.orders[i].status = ShipmentStatusType.READY_TO_COLLECT
        orderRetrieval.orders[i].isCancellable = i > 1
        orderRetrieval.orders[i].isAmendable = i % 2 !== 0
      }
    }
    if (query.type === 'reset') {
      console.log(`API: Reseting orderRetrieval data to default`)
      basket.reset()
      getOrder.reset()
      orderRetrieval.reset()
    }
    SessionManager.saveSession(sessionData, req)
    return orderRetrieval.toJson()
  },
  render: (_req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubConfirmation
