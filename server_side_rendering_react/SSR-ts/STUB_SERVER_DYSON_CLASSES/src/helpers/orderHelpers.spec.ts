import {
  formatOrderSummaryDate,
  getAllShipments,
  getCollectionId,
  getFormattedProducts,
  getFulfilmentStore,
  getFulfilmentType,
  getGiftCardSpend,
  getNectarCardSpend,
  getOrderLines,
  getPartNumbers,
  getProduct,
  productWithCare as getProductWithCare,
  getProductId,
  getPromoCodes,
  getShipmentStatus,
  getShipmentTitle,
  isFulfilmentStatus,
  nectarCardUsed,
  orderGetDeliveryAddress,
  getOrderTargetingData,
  getBoughtCategories,
  getProductInformation,
  sortShipmentsByCollectionStartDate,
  isDigitalShipmentType,
  isPhysicalShipmentType,
  getProductIdsFromOrder,
  convertToTimezone,
  cleanFulfilmentType,
} from './orderHelpers'
import { Fulfilment, FulfilmentStatus, FulfilmentType, ShipmentType } from '../types/api'
import {
  getOrderResponse,
  getOrderResponseWithDeliveryFulfilment,
  getOrderResponseWithHomeDeliveryFulfilment,
  getOrderResponseWithMixedShipmentsSort,
  singleFulfilment,
} from 'mocks/responses/orderConfirmation'
import {
  orderCollection,
  orderDelivery,
  orderTotalBetween100And200,
  orderTotalBetween10And25,
  orderTotalBetween200And500,
  orderTotalBetween25And50,
  orderTotalBetween50And100,
  orderTotalOver500,
  orderTotalUnder10,
  orderWithMultipleGiftCards,
  orderWithMultiplePromos,
  orderWithNectarSpend,
  orderWithSingleGiftCard,
  orderWithSinglePromo,
  products,
} from 'mocks/state'
import { getProductsHabitatProduct, getProductsMultipleProduct, getProductsSingleProduct } from 'mocks/responses'

const fulfilmentWithRejectedStatus: Fulfilment = {
  ...singleFulfilment[0],
  status: FulfilmentStatus.REJECTED,
}

const fulfilmentWithFulfilledStatus: Fulfilment = {
  ...singleFulfilment[0],
  status: FulfilmentStatus.FULFILLED,
}

const fulfilmentWithFailedStatus: Fulfilment = {
  ...singleFulfilment[0],
  status: FulfilmentStatus.FAILED,
}

const fulfilmentWithPendingStatus: Fulfilment = {
  ...singleFulfilment[0],
  status: FulfilmentStatus.PENDING,
}

test('Fulfilment status matches the provided type', () => {
  expect(isFulfilmentStatus(FulfilmentStatus.REJECTED, fulfilmentWithRejectedStatus)).toBeTruthy()
  expect(isFulfilmentStatus(FulfilmentStatus.FAILED, fulfilmentWithFailedStatus)).toBeTruthy()
  expect(isFulfilmentStatus(FulfilmentStatus.PENDING, fulfilmentWithPendingStatus)).toBeTruthy()
  expect(isFulfilmentStatus(FulfilmentStatus.FULFILLED, fulfilmentWithFulfilledStatus)).toBeTruthy()

  expect(isFulfilmentStatus(FulfilmentStatus.REJECTED, fulfilmentWithFailedStatus)).toBeFalsy()
  expect(isFulfilmentStatus(FulfilmentStatus.REJECTED, fulfilmentWithFulfilledStatus)).toBeFalsy()
  expect(isFulfilmentStatus(FulfilmentStatus.REJECTED, fulfilmentWithPendingStatus)).toBeFalsy()
})

describe('Get product ids from order response', () => {
  test('should return product ids from orderLines', () => {
    const order = {
      fulfilments: [
        {
          shipments: [
            {
              orderLines: [{ product: { id: 'productId1' } }, { product: { id: 'productId2' } }],
            },
          ],
        },
      ],
    }
    const partNumbers = getProductIdsFromOrder(order.fulfilments as [])
    expect(partNumbers).toEqual(['productId1', 'productId2'])
  })

  test('should reduce product ids from multiple shipments', () => {
    const order = {
      fulfilments: [
        {
          shipments: [
            {
              orderLines: [{ product: { id: 'productId1' } }, { product: { id: 'productId2' } }],
            },
            {
              orderLines: [{ product: { id: 'productId3' } }, { product: { id: 'productId4' } }],
            },
          ],
        },
      ],
    }
    const partNumbers = getProductIdsFromOrder(order.fulfilments as [])
    expect(partNumbers).toEqual(['productId1', 'productId2', 'productId3', 'productId4'])
  })

  test('should remove duplicate product ids from orderLines', () => {
    const orderWithProductDuplicates = {
      fulfilments: [
        {
          shipments: [
            {
              orderLines: [{ product: { id: 'productId1' } }, { product: { id: 'productId1' } }],
            },
          ],
        },
      ],
    }

    const partNumbers = getProductIdsFromOrder(orderWithProductDuplicates.fulfilments as [])
    expect(partNumbers).toEqual(['productId1'])
  })
})

test('Formatting a valid dateString in the format "ddd DD MMM', () => {
  const validDate = { input: '2019-04-10T09:43:44.000', formatDateResult: 'Wed 10 Apr' }
  expect(formatOrderSummaryDate(validDate.input)).toEqual(validDate.formatDateResult)
})

test('Order retrieval array helpers', () => {
  const shipments = orderCollection.order.confirmation.shipments
  const orderLines = shipments.successful[0].orderLines
  expect(getAllShipments(shipments)).toEqual([...shipments.successful])
  expect(getOrderLines(shipments)).toEqual(shipments.successful[0].orderLines)
  expect(getProduct(orderLines[0])).toEqual(orderLines[0].product)
  expect(getProductId(orderLines[0])).toEqual(orderLines[0].product.id)
  expect(getCollectionId(shipments.successful[0])).toEqual(shipments.successful[0].collectionId)
})

describe('Order delivery address helper', () => {
  test('returns deliveryAddress for order with delivery', () => {
    const confirmation = orderDelivery.order.confirmation
    expect(orderGetDeliveryAddress(confirmation)).toEqual(confirmation.deliveryAddress)
  })
  test('returns undefined for order without delivery', () => {
    const confirmation = orderCollection.order.confirmation
    expect(orderGetDeliveryAddress(confirmation)).toEqual(confirmation.deliveryAddress)
  })
})

test('Get part numbers from shipments state', () => {
  expect(getPartNumbers(orderCollection.order.confirmation.shipments)).toEqual(['4572383'])
})

test('Get store details from get order retrieval response', () => {
  expect(getFulfilmentStore(getOrderResponse)).toEqual(orderCollection.order.confirmation.store)
})

test('Get fulfilment type from get order retrieval response', () => {
  expect(getFulfilmentType(getOrderResponse)).toEqual('COLLECTION')
})

test('Get fulfilment type from get order retrieval response, delivery', () => {
  expect(getFulfilmentType(getOrderResponseWithDeliveryFulfilment)).toEqual('DELIVERY')
})

test('Get fulfilment type from get order retrieval response, HD', () => {
  expect(getFulfilmentType(getOrderResponseWithHomeDeliveryFulfilment)).toEqual('DELIVERY')
})

test('Clean fulfilment type from get order retrieval response, delivery', () => {
  expect(cleanFulfilmentType(getOrderResponseWithDeliveryFulfilment.fulfilments[0].type)).toEqual('DELIVERY')
})

test('Clean fulfilment type from get order retrieval response, HD', () => {
  expect(cleanFulfilmentType(getOrderResponseWithHomeDeliveryFulfilment.fulfilments[0].type)).toEqual('DELIVERY')
})

test('Get total gift card spend from get order retrieval response', () => {
  expect(getGiftCardSpend(orderWithSingleGiftCard.order.confirmation.payments.payments)).toBe(10)
  expect(getGiftCardSpend(orderWithMultipleGiftCards.order.confirmation.payments.payments)).toBe(29.99)
})

test('Get total Nectar Card spend from get order retrieval response', () => {
  expect(getNectarCardSpend(orderWithNectarSpend.order.confirmation.payments.payments)).toBe(200.94)
})

test('Get a verdict as to whether the order contains a Nectar Card spend', () => {
  expect(nectarCardUsed(orderWithNectarSpend.order.confirmation.payments.payments)).toBe(true)
  expect(nectarCardUsed(orderWithSingleGiftCard.order.confirmation.payments.payments)).toBe(false)
})

test('Get a list of promotion references from the order', () => {
  expect(getPromoCodes(orderWithSinglePromo.order.confirmation.promotions)).toEqual(['20off-furniture'])
  expect(getPromoCodes(orderWithMultiplePromos.order.confirmation.promotions)).toEqual([
    'ConsistentPromotion',
    'DISCOUNT10',
    '10OFF',
  ])
})

test('Get products and apply monthly care if applicable', () => {
  const mockOrderLines = [products[0], products[1]]
  const mockAvailableCare = [
    { productSku: products[0].product.id, warranties: [{ sku: 'sku', type: 'type', price: 5, currency: 'gbp' }] },
  ]

  expect(getFormattedProducts(mockOrderLines, mockAvailableCare)).toEqual([
    {
      ...products[0],
      monthlyCare: {
        sku: 'sku',
        type: 'type',
        price: 5,
        currency: 'gbp',
      },
    },
    {
      ...products[1],
      monthlyCare: {},
    },
  ])
})

test('Getting products and no products are present', () => {
  expect(getFormattedProducts([], [])).toEqual([])
})

test('Getting a title based on the shipments', () => {
  const collectionFulfilment = orderCollection.order.confirmation.shipments.successful[0]
  const deliveryFulfilment = orderDelivery.order.confirmation.shipments.successful[0]

  // Single shipments
  expect(getShipmentTitle(collectionFulfilment.type)).toBe('Collection details')
  expect(getShipmentTitle(deliveryFulfilment.type)).toBe('Delivery details')

  // Multiple shipments
  expect(getShipmentTitle(collectionFulfilment.type, 0, 2)).toBe('Collection 1 of 2')
  expect(getShipmentTitle(collectionFulfilment.type, 1, 2)).toBe('Collection 2 of 2')
  expect(getShipmentTitle(deliveryFulfilment.type, 0, 2)).toBe('Delivery 1 of 2')
  expect(getShipmentTitle(deliveryFulfilment.type, 1, 2)).toBe('Delivery 2 of 2')
})

test('Getting a fulfilment status for accessing shipment redux state', () => {
  expect(getShipmentStatus(fulfilmentWithFulfilledStatus)).toBe('successful')
  expect(getShipmentStatus(fulfilmentWithPendingStatus)).toBe('pending')
  expect(getShipmentStatus(fulfilmentWithFailedStatus)).toBe('failed')
  expect(getShipmentStatus(fulfilmentWithRejectedStatus)).toBe('failed')
})

test('Check if product has associated product care', () => {
  const mockAvailableCare = [
    { productSku: products[0].product.id, warranties: [{ sku: 'sku', type: 'type', price: 5, currency: 'gbp' }] },
  ]
  expect(getProductWithCare(mockAvailableCare, products[0].product.id)).toEqual(mockAvailableCare[0])
  expect(getProductWithCare(mockAvailableCare, products[1].product.id)).toBeUndefined()
})

test('Getting order targeting data for DFP', () => {
  expect(getOrderTargetingData(orderCollection.order.confirmation.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'under10',
  })
  expect(getOrderTargetingData(orderDelivery.order.confirmation.amounts?.total, FulfilmentType.DELIVERY)).toEqual({
    orderType: 'home-delivery',
    orderTotal: 'under10',
  })
  expect(getOrderTargetingData(orderTotalUnder10.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'under10',
  })
  expect(getOrderTargetingData(orderTotalBetween10And25.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'between10and25',
  })
  expect(getOrderTargetingData(orderTotalBetween25And50.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'between25and50',
  })
  expect(getOrderTargetingData(orderTotalBetween50And100.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'between50and100',
  })
  expect(getOrderTargetingData(orderTotalBetween100And200.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'between100and200',
  })
  expect(getOrderTargetingData(orderTotalBetween200And500.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'between200and500',
  })
  expect(getOrderTargetingData(orderTotalOver500.amounts?.total, FulfilmentType.COLLECTION)).toEqual({
    orderType: 'fast-track',
    orderTotal: 'over500',
  })
})

test('Formatting PDP products response to extract the categories that the product(s) fall within', () => {
  const mockSinglePartNumbers = ['123']
  const mockMultiPartNumbers = ['123', '456']

  expect(getBoughtCategories(mockSinglePartNumbers, getProductsSingleProduct)).toEqual({
    PID: '123',
    BoughtBrand: 'Indesit',
    BoughtCat1: '787124 - Appliances',
    BoughtCat2: '788337 - Laundry',
    BoughtCat3: '29614 - Tumble dryers',
    BoughtSKUs: ['3568831'],
    LowLevelCatId: '29614',
  })

  expect(getBoughtCategories(mockMultiPartNumbers, getProductsMultipleProduct)).toEqual({
    PID: '123,456',
    BoughtBrand: 'Duracell,Energizer,Energizer',
    BoughtCat1: '29949 - Technology,29949 - Technology,29949 - Technology',
    BoughtCat2:
      '29962 - Household batteries and battery chargers,29962 - Household batteries and battery chargers,29962 - Household batteries and battery chargers',
    BoughtCat3: '30218 - Batteries,30218 - Batteries,30218 - Batteries',
    BoughtSKUs: ['9805237', '4996873', '9162011'],
    LowLevelCatId: '30218,30218,30218',
  })
})

test('getProductInformation should return an object containing product information', () => {
  expect(getProductInformation(getProductsSingleProduct)).toEqual({
    3568831: {
      categoryId: '29614',
      isHabitatProduct: false,
      parentSKU: '3568831.P',
    },
  })

  expect(getProductInformation(getProductsMultipleProduct)).toEqual({
    4996873: {
      categoryId: '30218',
      isHabitatProduct: false,
    },
    9805237: {
      categoryId: '30218',
      isHabitatProduct: false,
    },
    9162011: {
      categoryId: '30218',
      isHabitatProduct: false,
    },
  })

  expect(getProductInformation(getProductsHabitatProduct)).toEqual({
    9162011: {
      categoryId: '29739',
      isHabitatProduct: true,
    },
  })
})

test('Sorting fulfilment shipments by collection start date', () => {
  // first date is before second date
  let first = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-06T22:34:59.999',
    },
  }

  let second = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-08T22:34:59.999',
    },
  }

  expect(sortShipmentsByCollectionStartDate(first, second)).toBe(-1)

  // first date is after second date
  first = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-08T22:34:59.999',
    },
  }

  second = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-06T22:34:59.999',
    },
  }

  expect(sortShipmentsByCollectionStartDate(first, second)).toBe(1)

  // first date is equal to second date
  first = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-08T22:34:59.999',
    },
  }

  second = {
    ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0],
    timeWindow: {
      ...getOrderResponseWithMixedShipmentsSort.fulfilments[0].shipments[0].timeWindow,
      start: '2020-04-08T22:34:59.999',
    },
  }
  expect(sortShipmentsByCollectionStartDate(first, second)).toBe(0)
})

test('detecting physical and digital shipment types', () => {
  const physicalShipments = [
    ShipmentType.SMALL_ITEM,
    ShipmentType.LARGE_ITEM,
    ShipmentType.CLOTHING,
    ShipmentType.PRE_ORDER,
  ]
  const digitalShipments = [ShipmentType.DIGITAL_DOWNLOAD, ShipmentType.WARRANTY]

  physicalShipments.forEach((shipment) => {
    expect(isPhysicalShipmentType(shipment)).toBe(true)
    expect(isDigitalShipmentType(shipment)).toBe(false)
  })

  digitalShipments.forEach((shipment) => {
    expect(isPhysicalShipmentType(shipment)).toBe(false)
    expect(isDigitalShipmentType(shipment)).toBe(true)
  })

  expect(isPhysicalShipmentType(ShipmentType.PREPAY)).toBe(false)
  expect(isDigitalShipmentType(ShipmentType.PREPAY)).toBe(false)
})

// Outside of the UK's DST
const timezoneUSA = '2020-01-01T14:30:00.000-05:00'
const timezoneUTC = '2020-01-01T14:30:00.000Z'
const timezoneIND = '2020-01-01T14:30:00.000+05:30'

// Inside of the UK's DST
const dstTimezoneUSA = '2020-07-01T14:30:00.000-05:00'
const dstTimezoneUTC = '2020-07-01T14:30:00.000Z'
const dstTimezoneIND = '2020-07-01T14:30:00.000+0530'

// These times should always be rendered as the London time
test('converts timezones to London time', () => {
  expect(convertToTimezone(timezoneUSA)).toEqual('1/1/2020, 7:30:00 PM')
  expect(convertToTimezone(timezoneUTC)).toEqual('1/1/2020, 2:30:00 PM')
  expect(convertToTimezone(timezoneIND)).toEqual('1/1/2020, 9:00:00 AM')

  expect(convertToTimezone(dstTimezoneUSA)).toEqual('7/1/2020, 8:30:00 PM')
  expect(convertToTimezone(dstTimezoneUTC)).toEqual('7/1/2020, 3:30:00 PM')
  expect(convertToTimezone(dstTimezoneIND)).toEqual('7/1/2020, 10:00:00 AM')
})
