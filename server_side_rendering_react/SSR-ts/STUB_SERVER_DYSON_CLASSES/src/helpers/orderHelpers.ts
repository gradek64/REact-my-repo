import dayjs from 'dayjs'
import {
  FulfilmentStatus,
  Fulfilment,
  OrderLine,
  Shipment,
  OrderAddress,
  OrderConfirmationResponseSuccessProps,
  FulfilmentType,
  PaymentMethod,
  SnapshotPromotion,
  GetProductsAPIPayload,
  ProductInclude,
  ProductIncludeBreadcrumb,
  SnapshotProduct,
  ShipmentType,
  GuestRetrievalFulfilment,
} from '../types/api'
import { AvailableCare, OrderConfirmationState, OrderPayment, OrderStore, ShipmentState } from 'types/reducers'
import { OrderTimeTableDefaultWeek } from 'types/reducers/order'

/**
 * Checks if a fulfilment status is equal to the provided status
 */
export const isFulfilmentStatus = (expectedStatus: FulfilmentStatus, { status }: Fulfilment): boolean =>
  expectedStatus === status

/**
 * Formats a date string for displaying in the Order Confirmation summary
 */
export const formatOrderSummaryDate = (dateString: string) =>
  dayjs(dateString).isValid() ? dayjs(dateString).format('ddd DD MMM') : null

/**
 * Cumulatively collects all shipments objects from successful, pending & failed arrays
 */
export const getAllShipments = ({
  successful,
  failed,
  pending,
}: OrderConfirmationState['shipments']): ShipmentState[] => [...successful, ...failed, ...pending]

/**
 * Cumulatively collects all shipments objects from successful, pending & failed arrays
 */
export const getAllProductCare = (productCare: OrderConfirmationState['productCare']): OrderLine[] => {
  const { successful, failed, pending } = productCare ?? { successful: [], failed: [], pending: [] }
  return [...successful, ...failed, ...pending]
}

/**
 * Cumulatively collects all orderLines from an array of shipments
 */
export const getOrderLines = (shipments: OrderConfirmationState['shipments']): OrderLine[] =>
  getAllShipments(shipments).reduce((allOrderLines, { orderLines }) => [...allOrderLines, ...orderLines], [])

/**
 * Retrieves product data from an orderLine
 */
export const getProduct = ({ product }: OrderLine): SnapshotProduct => product

/**
 * Retrieves the product id from an orderLine
 */
export const getProductId = ({ product }: OrderLine): string => product.id

/**
 * Retrieves the collection id of a shipment
 */
export const getCollectionId = ({ collectionId }: Shipment): string | undefined => collectionId

/**
 * Retrieves the deliveryAddress from the fulfilment
 */
export const orderGetDeliveryAddress = ({
  fulfilments,
}: OrderConfirmationResponseSuccessProps): OrderAddress | undefined => {
  const deliveryFulfilment = fulfilments.find((fulfilment) => fulfilment.location.shipping)
  return deliveryFulfilment?.location.shipping
}

/**
 * Cumulatively collects all product ids from an array of fulfilments
 */
export const getPartNumbers = (shipments: OrderConfirmationState['shipments']): string[] =>
  getOrderLines(shipments).map(getProductId)

/**
 * Cumulatively collects all product ids from order response
 */
export const getProductIdsFromOrder = (fulfilments: OrderConfirmationState['fulfilments']): string[] => {
  const productIds: string[] = []
  fulfilments.forEach(({ shipments }) => {
    shipments.forEach(({ orderLines }) => {
      orderLines.forEach((orderLine) => {
        productIds.push(getProductId(orderLine))
      })
    })
  })

  return Array.from([...new Set(productIds)])
}

/**
 * Retrieves store data from the fulfilments array of an order confirmation object
 * NOTE: Takes store from first fulfilment as it's always the same store for multiple fulfiments
 */
export const getFulfilmentStore = ({ fulfilments }): OrderStore | undefined => {
  const collection = (fulfilments as Array<Fulfilment | GuestRetrievalFulfilment>).find(
    (fulfilment) => fulfilment?.type === FulfilmentType.COLLECTION,
  )
  return collection?.location?.store
}

/**
 * For delivery orders, the API can send us either HD or DELIVERY. From a user
 * point of view there's no difference, so we just convert HD to DELIVERY.
 */
export const cleanFulfilmentType = (type: FulfilmentType) =>
  type === FulfilmentType.HD ? FulfilmentType.DELIVERY : type

/**
 * Retrieves type property from the first fulfilments array item of an order confirmation object
 * NOTE: Takes type from first fulfilment as Argos do not support mixed fulfilment types
 */
export const getFulfilmentType = ({ fulfilments }: OrderConfirmationResponseSuccessProps): FulfilmentType =>
  cleanFulfilmentType(fulfilments[0].type)

/**
 * Retrieves the total gift card (Argos/Flexecash) spend of an order
 */
export const getGiftCardSpend = (payments: OrderPayment[]): number => {
  const total = payments.reduce((totalGiftCardSpend: number, { amount, paymentMethod = '' }) => {
    const giftCardAmount = paymentMethod.startsWith('CARD_GIFT') ? amount : 0
    return totalGiftCardSpend + giftCardAmount
  }, 0)

  return total
}

/**
 * Retrieves the total Nectar card spend of an order
 */
export const getNectarCardSpend = (payments: OrderPayment[]): number =>
  payments.reduce((totalNectarCardSpend, { amount, paymentMethod }) => {
    const nectarCardAmount = paymentMethod === PaymentMethod.CARD_NECTAR_SPEND ? amount : 0
    return totalNectarCardSpend + nectarCardAmount
  }, 0)

/**
 * Infers whether Nectar card was used in an order
 */
export const nectarCardUsed = (payments: OrderPayment[]): boolean =>
  payments.some(({ paymentMethod }) => paymentMethod === PaymentMethod.CARD_NECTAR_SPEND)

/**
 * Cumulatively collects all promo references from an order
 */
export const getPromoCodes = (promotions: SnapshotPromotion[]): string[] => promotions.map(({ reference }) => reference)

/**
 * Looks for associated care of a product within a collection of data
 */
export const productWithCare = (availableCare: AvailableCare[], productId: string) =>
  availableCare?.find(({ productSku }) => productSku === productId)

/**
 * Generates an array of products including monthly care if it is available
 */
export function getFormattedProducts(orderLines: OrderLine[] | null, availableCare: AvailableCare[]): OrderLine[] {
  if (!orderLines || !(orderLines.length > 0)) {
    return []
  }

  return orderLines.map((orderLine) => {
    const productCare = productWithCare(availableCare, orderLine.product.id)
    let monthlyCare = {}
    if (productCare) {
      monthlyCare = productCare.warranties[0] // Select first item within warranties array - only 1 care per sku ever exists
    }
    return {
      ...orderLine,
      monthlyCare,
    }
  })
}

/**
 * Generates a shipment title for different fulfilments e.g. `Collection details` or `Delivery 1 of 2`
 */
export const getShipmentTitle = (type: FulfilmentType, current = 0, total = 1): string => {
  let title = 'Collection'

  if (type === FulfilmentType.DELIVERY) title = 'Delivery'

  if (total > 1) {
    title += ` ${current + 1} of ${total}`
  } else {
    title += ' details'
  }

  return title
}

/**
 * Returns a formatted status for a fulfilment compatible with the redux shipments state
 */
export const getShipmentStatus = (fulfilment: Fulfilment): 'successful' | 'pending' | 'failed' => {
  let status: 'successful' | 'pending' | 'failed' = 'successful'

  if (
    isFulfilmentStatus(FulfilmentStatus.FAILED, fulfilment) ||
    isFulfilmentStatus(FulfilmentStatus.REJECTED, fulfilment)
  ) {
    status = 'failed'
  }

  if (isFulfilmentStatus(FulfilmentStatus.PENDING, fulfilment)) {
    status = 'pending'
  }

  return status
}

/**
 * Generates DFP targeting orderType & orderTotal properties
 */
export function getOrderTargetingData(
  total: { withSavings: number; withoutSavings: number; saving: number } | undefined,
  fulfilmentType?: FulfilmentType,
) {
  let orderType = 'unknown'
  let orderTotal = ''

  if (fulfilmentType === FulfilmentType.COLLECTION) orderType = 'fast-track'
  if (fulfilmentType === FulfilmentType.DELIVERY) orderType = 'home-delivery'

  if (total) {
    const { withoutSavings } = total
    if (withoutSavings <= 10) orderTotal = 'under10'
    if (withoutSavings > 10 && withoutSavings <= 25) orderTotal = 'between10and25'
    if (withoutSavings > 25 && withoutSavings <= 50) orderTotal = 'between25and50'
    if (withoutSavings > 50 && withoutSavings <= 100) orderTotal = 'between50and100'
    if (withoutSavings > 100 && withoutSavings <= 200) orderTotal = 'between100and200'
    if (withoutSavings > 200 && withoutSavings <= 500) orderTotal = 'between200and500'
    if (withoutSavings > 500) orderTotal = 'over500'
  }

  return {
    orderTotal,
    orderType,
  }
}
/**
 * Provides type buffer for checking types with mixed properties
 */
function containsCategory(included: ProductInclude): included is ProductIncludeBreadcrumb {
  return 'categories' in included
}

/**
 * Generates DFP targeting object from PDP service products response
 */
export function getBoughtCategories(partNumbers: string[], products: GetProductsAPIPayload) {
  /* PDP Data parsing taken from C&R project - re-written without side effects */
  const productsData = Array.isArray(products.data) ? products.data : [products.data]

  const PID = partNumbers
  const BoughtBrand = productsData.map((product) => product.attributes?.brand)
  // Adding applicable SKUs otherwise there's no correlation between products/categories
  const BoughtSKUs = productsData.map(({ id }) => id)

  /* The below is fudged together & totally unreadable - sorry */
  /* Check the tests to see what it outputs =) */
  const BoughtCats =
    products.included?.filter(containsCategory).reduce<Record<string, string[]>>((accumulator, product) => {
      product.categories.forEach((category, idx) => {
        if (category.type !== 'Master Category') {
          const key = `BoughtCat${idx}`
          accumulator[key] = accumulator[key] || []
          accumulator[key].push(`${category.id} - ${category.name}`)
        }

        if (category.type === 'PLP') {
          accumulator.LowLevelCatId = accumulator.LowLevelCatId || []
          accumulator.LowLevelCatId.push(category.id)
        }
      })
      return accumulator
    }, {}) ?? {}

  const BoughtCatsJoined: Record<string, string> = {}

  Object.keys(BoughtCats).forEach((key) => {
    BoughtCatsJoined[key] = BoughtCats[key].join()
  })

  return {
    PID: PID.join(),
    BoughtBrand: BoughtBrand.join(),
    BoughtSKUs,
    ...BoughtCatsJoined,
  }
}

export const getProductInformation = (products: GetProductsAPIPayload) => {
  const productsData = Array.isArray(products.data) ? products.data : [products.data]

  const productInformation = {}

  productsData.forEach((product, index) => {
    const categories = products.included?.filter(containsCategory)[index]?.categories

    productInformation[product.id] = {
      isHabitatProduct: product.attributes.channels?.includes('HABITAT_UK') ?? false,
      categoryId: categories?.find((category) => category.type === 'PLP')?.id ?? '',
      parentSKU: product.attributes?.parentId,
    }
  })

  return productInformation
}

/**
 * Array.sort callback function that sorts shipments within each fulfilment by collection start date
 */
export function sortShipmentsByCollectionStartDate(first: Shipment, second: Shipment): number {
  const firstStartDate = dayjs(first.timeWindow?.start)
  const secondStartDate = dayjs(second.timeWindow?.start)

  if (firstStartDate.isBefore(secondStartDate)) {
    return -1
  }

  if (firstStartDate.isAfter(secondStartDate)) {
    return 1
  }

  return 0
}

export const isDigitalShipmentType = (shipmentType?: ShipmentType): boolean => {
  return shipmentType === ShipmentType.DIGITAL_DOWNLOAD || shipmentType === ShipmentType.WARRANTY
}

export const isPhysicalShipmentType = (shipmentType?: ShipmentType): boolean => {
  return (
    shipmentType === ShipmentType.CLOTHING ||
    shipmentType === ShipmentType.LARGE_ITEM ||
    shipmentType === ShipmentType.SMALL_ITEM ||
    shipmentType === ShipmentType.PRE_ORDER ||
    shipmentType === ShipmentType.RECYCLING_SERVICE ||
    shipmentType === ShipmentType.SUPPLIER_DIRECT_FULFILLED
  )
}

/**
 * Converts a timestamp to timezone, default to Europe/london
 */
export const convertToTimezone = (date: string, timeZone = 'Europe/London') => {
  return new Date(date).toLocaleString('en-US', { timeZone })
}

export const getEarliestCollection = (collectionStart, openingHours: OrderTimeTableDefaultWeek) => {
  const days = [
    openingHours.sunday,
    openingHours.monday,
    openingHours.tuesday,
    openingHours.wednesday,
    openingHours.thursday,
    openingHours.friday,
    openingHours.saturday,
    openingHours.sunday,
  ]

  const date = dayjs(collectionStart)
  const hours = days[date.day()][0]

  // Get the day's opening and closing time
  const [openHour, openMinute] = hours.open.split(':')
  const [closeHour, closeMinute] = hours.close.split(':')

  // Check if the store is open
  if (openHour && openHour.trim() !== '') {
    const open = dayjs(collectionStart).hour(Number(openHour)).minute(Number(openMinute)).second(0).millisecond(0)
    const close = dayjs(collectionStart).hour(Number(closeHour)).minute(Number(closeMinute)).second(0).millisecond(0)

    // The collection time is before the store opens
    if (date.isBefore(open) || date.isSame(open)) return open

    // The collection time is during the store's opening hours
    if (date.isAfter(open) && date.isBefore(close)) return date
  }

  // At this point, either the collection time is after the store's closing
  // time, or the store isn't open

  // Get the next day's opening time
  const dayAfterHours = days[date.day() + 1][0]
  const [dayAfterOpenHour, dayAfterOpenMinute] = dayAfterHours.open.split(':')

  // If the store is open the next day, return it's opening time
  if (dayAfterOpenHour && dayAfterOpenHour.trim() !== '') {
    return dayjs(collectionStart)
      .add(1, 'day')
      .hour(Number(dayAfterOpenHour))
      .minute(Number(dayAfterOpenMinute))
      .second(0)
      .millisecond(0)
  }

  // Fallback to just showing the original time window
  // TODO: log how often this happens cos it's pretty bad UX
  return date
}
