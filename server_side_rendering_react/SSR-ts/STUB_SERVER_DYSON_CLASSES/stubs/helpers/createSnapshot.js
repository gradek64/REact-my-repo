const { OrderSnapshotStatus } = require('../../src/types/api')

const createSnapshot = (req, sessionData) => {
  const {
    arrangeDelivery,
    user,
    basket,
    store,
    orderPayments,
    nectar: { nectar },
    snapshotService,
  } = sessionData

  const { snapshotStatus, orderId, brandMismatch, customerType, isWcsHandover } = snapshotService
  const source = {
    ...snapshotService.source,
    channelBrand: brandMismatch ? 'NOT_A_BRAND' : req.brand,
  }
  const deliveryAddress =
    basket.hasDeliveryShipment() || basket.hasHomeDeliveryShipment()
      ? user.addresses.getSnapshotDeliveryAddress()
      : undefined

  if (
    [
      OrderSnapshotStatus.ORDER_SNAPSHOT_CREATE_FULFILMENT_FAILED,
      OrderSnapshotStatus.ORDER_SNAPSHOT_PENDING_BOOKING,
    ].includes(snapshotStatus.status)
  ) {
    // When the create fulfilment soft fails, we need to return a further stripped down snapshot
    const fulfilmentCreated = arrangeDelivery.createFulfilmentResponseType === 'FulfilmentCreated'
    const postcodeMismatch = !deliveryAddress?.person
    const lines = fulfilmentCreated && !postcodeMismatch ? basket.getSnapshotLines() : []
    return {
      status: snapshotStatus.status,
      currency: 'GBP',
      customer: snapshotService.getSnapshotCustomer(),
      fulfilmentType: basket.getSnapshotFulfilmentType(),
      deliveryAddress,
      lines,
      amounts: fulfilmentCreated ? basket.getSnapshotAmounts(false) : { total: {} },
      stockHolds: postcodeMismatch ? undefined : basket.getSnapshotStockholds(),
      promotions: basket.getSnapshotPromotions(),
      payments: orderPayments.paymentDetails,
      source,
      isWcsHandover,
    }
  }

  // A snapshot with no customer type cannot have any personal info in it for
  // security purposes, so will return a fairly empty snapshot.
  if (customerType === 'NONE') {
    return {
      currency: 'GBP',
      fulfilmentType: basket.getSnapshotFulfilmentType(),
      source,
      customer: {},
      lines: basket.getSnapshotLines(),
      amounts: {
        total: {},
      },
      stockHolds: basket.getSnapshotStockholds(), // todo: should be no "holds"
      shipments: [],
      promotions: [],
      payments: {
        payments: [],
        wallet: [],
      },
    }
  }

  return {
    status: snapshotStatus.status,
    orderId,
    currency: 'GBP',
    customer: snapshotService.getSnapshotCustomer(),
    fulfilmentType: basket.getSnapshotFulfilmentType(),
    billingAddress: user.addresses.getSnapshotBillingAddress(),
    contactAddress: user.addresses.getSnapshotContactAddress(),
    deliveryAddress,
    lines: basket.getSnapshotLines(),
    amounts: basket.getSnapshotAmounts(),
    stockHolds: basket.getSnapshotStockholds(),
    shipments: basket.getSnapshotShipments(),
    promotions: basket.getSnapshotPromotions(),
    payments: orderPayments.paymentDetails,
    store: basket.hasCollectionShipment() ? store.currentStore : undefined,
    source,
    nectar,
    isWcsHandover,
  }
}

module.exports = createSnapshot
