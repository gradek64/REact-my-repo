import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import Response from '../../helpers/API/Response'
import { getAvailableCare, getAvailableCareForDelivery, getOrderResponsePayments } from '../../helpers'
import { SessionDataProps } from '../../../src/types/stubs/session'
import { StatusCode, PaymentMethod } from '../../../src/types/api'
import { OrderStatus, Brand, Channel } from '../../../src/types/reducers'
import { DecoratedRequest } from '../../../src/types/server'
import { getDateTime, getUTCFormattedDate } from '../../helpers/dateHelper'

dayjs.extend(utc)
/*
  NOTE: The success response model is based on the contract for "Order Retrieval Get" documented in GitBook
  http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/services/orderretrieval/orderretrieval.get

  NOTE: The success response statuses are based on "Order Retrieval Types" documented in GitBook
  http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/services/orderretrieval/types/orders
*/

const successResponse = (
  req: DecoratedRequest<{ orderId: string }>,
  sessionData: SessionDataProps,
  orderStatus: OrderStatus,
) => {
  const { params: { orderId } = { orderId: null }, brand = Brand.ARGOS } = req
  const {
    basket,
    confirmation,
    store,
    user,
    snapshotService,
    orderPayments: orderPaymentsSessionData,
    checkoutApi,
    getOrder,
  } = sessionData

  const timeZone =
    req.headers && 'x-accept-timezone' in req.headers ? (req.headers['x-accept-timezone'] as string) : 'Europe/London'
  const now = getDateTime(timeZone)

  const orderPayments = orderPaymentsSessionData.toJson()
  const { shipmentStartTime, confirmationType, fulfilmentSet } = confirmation
  const {
    shipmentSortByStartTime,
    availableMonthlyCare,
    nectarLinked,
    eligibleCompanyVoucher,
    shipmentsCount,
    orderAdvice: orderAdviceArray,
  } = getOrder
  const collectionShipments = basket.getOrderConfirmationCollectionShipments(
    shipmentStartTime,
    shipmentsCount,
    confirmationType,
    shipmentSortByStartTime,
    now,
    checkoutApi.timeZoneIdentifier,
  )

  const fulfilmentType = basket.getSnapshotFulfilmentType()
  const isDelivery = basket.isDeliveryFulfilment()

  const billingAddress = user.addresses.getOrderBillingAddress()
  const contactAddress = user.addresses.getOrderContactAddress()

  const fulfilments = isDelivery
    ? basket.getDeliveryFulfilments(
        orderId,
        checkoutApi.timeZoneIdentifier,
        fulfilmentType,
        user.addresses.getOrderDeliveryAddress(),
        orderAdviceArray,
      )
    : basket.getOrderConfirmationCollectionFulfilments(
        orderId,
        orderStatus,
        fulfilmentSet,
        collectionShipments,
        store.currentStore,
      )

  const availableCare = isDelivery
    ? getAvailableCareForDelivery(fulfilments, availableMonthlyCare)
    : getAvailableCare(collectionShipments, availableMonthlyCare)

  const nectar = {
    isLinked: nectarLinked,
    points: 1000,
  }

  const payments = getOrderResponsePayments(sessionData)
  payments.forEach((payment) => {
    if (payment.paymentMethod === PaymentMethod.CREDIT_MPP) {
      payment.paymentReference = 'PP/0009978'
    }
  })

  // Indicates whether the customer has successfully applied for CAPE2 in the current session
  const containsNewCreditApplication = payments.some((payment) => payment.paymentMethod === PaymentMethod.CREDIT_CAPE2)

  const body = new Response({
    statusCode: StatusCode.OK,
    orderNumber: orderId,
    creationDate: getUTCFormattedDate(now, checkoutApi.timeZoneIdentifier),
    customer: {
      id: '2044798',
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobilePhone: user.mobilePhone,
      newCape2Application: containsNewCreditApplication,
      customerType: snapshotService.customerType,
    },
    fulfilments,
    amounts: basket.getOrderAmounts(),
    promotions: basket.promos,
    source: {
      salesChannel: Channel.WEB,
      ipAddress: '10.104.27.239',
      channelBrand: snapshotService.brandMismatch ? 'NOT_A_BRAND' : brand,
    },
    status: orderStatus,
    statusDate: getUTCFormattedDate(now, checkoutApi.timeZoneIdentifier),
    services: undefined,
    stockHoldId: undefined,
    currency: 'GBP',
    availableCare,
    payments: {
      payments,
      masterReference: '',
      giftCardsTotal: orderPayments.giftCardsTotal ? (orderPayments.giftCardsTotal as number) : undefined,
    },
    billingAddress,
    contactAddress,
    earnings: {
      nectar,
      companyVoucher: {
        eligible: eligibleCompanyVoucher,
      },
    },
    advices: orderAdviceArray,
  }).toJson()

  return {
    status: StatusCode.OK,
    body,
  }
}

export default successResponse
