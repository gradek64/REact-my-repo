import dayjs from 'dayjs'
import Response from '../../helpers/API/Response'
import { getAvailableCare, getAvailableCareForDelivery, getDateTime, getOrderResponsePayments } from '../../helpers'
import { SessionDataProps } from '../../../src/types/stubs/session'
import { StatusCode, ShipmentStatusType } from '../../../src/types/api'
import { SubBrand } from '../../../src/types/reducers'
import { DecoratedRequest } from '../../../src/types/server'

/*
  NOTE: The success response model is based on the contract for "Order Retrieval Get" documented in GitBook
  http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/services/orderretrieval/orderretrieval.get

  NOTE: The success response statuses are based on "Order Retrieval Types" documented in GitBook
  http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/services/orderretrieval/types/orders
*/

const successResponse = (req: DecoratedRequest<{ orderId: string }>, sessionData: SessionDataProps) => {
  const { params: { orderId } = { orderId: null }, subBrand } = req
  const {
    basket,
    orderRetrieval,
    store,
    user,
    orderPayments: orderPaymentsSessionData,
    checkoutApi,
    getOrder,
    confirmation,
  } = sessionData
  const orderPayments = orderPaymentsSessionData.toJson()

  const now = getDateTime(
    req.headers && 'x-accept-timezone' in req.headers ? (req.headers['x-accept-timezone'] as string) : 'Europe/London',
  )
  const { timeZoneIdentifier: timezone } = checkoutApi
  const { shipmentSortByStartTime, availableMonthlyCare, shipmentsCount, orderAdvice } = getOrder
  const { orders, isCancellable } = orderRetrieval
  const { shipmentStartTime } = confirmation

  const fulfilmentType = basket.getSnapshotFulfilmentType()
  const isDelivery = basket.isDeliveryFulfilment()

  const collectionShipments = basket.getOrderRetrievalCollectionShipments(
    shipmentStartTime,
    shipmentsCount,
    shipmentSortByStartTime,
    now,
    timezone,
    orders,
  )

  const getSubBrandBasedOnProducts = () => {
    const HasTuItems = basket.getOrderLines().some(({ product }) => !!product.id.includes('tuc'))
    return HasTuItems ? SubBrand.ARGOS_TU : SubBrand.ARGOS_DIGITAL
  }

  const availableCare = isDelivery
    ? getAvailableCareForDelivery(
        basket.getDeliveryFulfilments(orderId, timezone, fulfilmentType, user.addresses.getOrderDeliveryAddress()),
        availableMonthlyCare,
      )
    : getAvailableCare(collectionShipments, availableMonthlyCare)

  const customer = {
    email: user.email,
  }

  const fulfilments = isDelivery
    ? basket.getOrderRetrievalDeliveryFulfilments(orders, user.email, user.addresses.getOrderDeliveryAddress())
    : basket.getOrderRetrievalCollectionFulfilments(collectionShipments, store.currentStore)

  const numberOfUncancelledOrders = orders.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.status !== ShipmentStatusType.CANCELLED ? 1 : 0),
    0,
  )

  const orderAmounts = basket.getOrderAmounts()

  const amounts = isDelivery
    ? orderAmounts // TODO: Needs to be done for delivery, also logic should probably be moved somewhere better if it's complex
    : {
        total: {
          saving: orderAmounts.total.saving * numberOfUncancelledOrders,
          withSavings: orderAmounts.total.withSavings * numberOfUncancelledOrders,
          withoutSavings: orderAmounts.total.withoutSavings * numberOfUncancelledOrders,
        },
      }

  const body = new Response({
    statusCode: StatusCode.OK,
    orderNumber: orderId,
    creationDate: dayjs(now).format('YYYY-MM-DDTHH:mm:ss.SSS'),
    customer,
    fulfilments,
    amounts,
    source: {
      subBrand: subBrand || getSubBrandBasedOnProducts(),
    },
    currency: 'GBP',
    availableCare,
    payments: {
      payments: getOrderResponsePayments(sessionData),
      giftCardsTotal: orderPayments.giftCardsTotal ? (orderPayments.giftCardsTotal as number) : undefined,
    },
    advices: orderAdvice,
    isCancellable,
  }).toJson()

  return {
    status: StatusCode.OK,
    body,
  }
}

export default successResponse
