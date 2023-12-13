import { Brand, Channel, Payment } from '../reducers'
import {
  AccountAddress,
  AccountAddressPerson,
  APIResponse,
  InitSnapshotAPINonFatalErrorAdvice,
  OrderSnapshotStatus,
  SnapshotPromotion,
  SnapshotStockHoldInfo,
  Store,
} from 'types/api'

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders#ordersource)
 */
export interface OrderSource {
  salesChannel: Channel
  channelBrand: Brand
  ipAddress: string
  userAgent: string
  deviceId: string
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders#orderamounts)
 */
export type Amounts = UnpopulatedAmounts | PopulatedAmounts

interface UnpopulatedAmounts {
  total: {
    withSavings: null
    withoutSavings: null
    saving: null
  }
  breakdown: null
  outstanding: null
}
interface PopulatedAmounts {
  total: Total
  /**
   * Breakdown is only returned when the fulfilment type is DELIVERY
   */
  breakdown?: OrderCharge[]
  outstanding: number
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders#ordercharges)
 */
export interface OrderCharge {
  type: 'SHIPPING' | 'SUBTOTAL'
  total: Total
}

interface SnapshotAddressPerson extends AccountAddressPerson {
  id?: string
  email?: string
}

// contact address will always contain an email
interface SnapshotContactAddressPerson extends SnapshotAddressPerson {
  email: string
}

export interface SnapshotAddress extends Omit<AccountAddress, 'id' | 'contactAddress'> {
  id?: string
  person: SnapshotAddressPerson
}

export interface SnapshotAddressWithId extends SnapshotAddress {
  id: string
}

/**
 * The contact address will always have an id
 */
export interface SnapshotContactAddress extends SnapshotAddressWithId {
  person: SnapshotContactAddressPerson
}

export type PostcodeMismatchDeliveryAddress = {
  lines: { postcode: string; country: string }
}

export type ValidDeliveryAddress = SnapshotAddressWithId

export type SnapshotDeliveryAddress = ValidDeliveryAddress | PostcodeMismatchDeliveryAddress

/**
 * The customer indicates the type of user the snapshot belongs to, and their
 * customer ID (either their WCS ID, or their Session Manager ID).
 */
export interface SnapshotCustomer {
  id: string
  type?: 'REGISTERED' | 'GUEST'
}

export interface GetSnapshotAPIPayload {
  snapshot: {
    status: OrderSnapshotStatus
    source: OrderSource
    billingAddress: SnapshotAddress
    contactAddress: SnapshotContactAddress
    deliveryAddress?: SnapshotDeliveryAddress
    customer: SnapshotCustomer
    amounts: Amounts
    orderId?: string
    lines: Line[]
    stockHolds: SnapshotStockHoldInfo[] | null
    nectar: {
      isLinked: boolean
      baseEarnPoints: number
      promotionEarnPoints: number
      card?: {
        token: string
        last4Digits: string
      }
    }
    promotions: SnapshotPromotion[]
    payments: {
      payments: Payment[]
      giftCardsTotal?: number
    }
    // store is not returned for delivery fulfilments
    store?: Store
    shipments: Shipment[]
    fulfilmentType: FulfilmentType
    isWcsHandover: boolean
  }
}

export type GetSnapshotAPIResponse = APIResponse<GetSnapshotAPIPayload>

export type PrepareForCheckoutAPIRequest = {
  source: Omit<OrderSource, 'deviceId'>
  fulfilment: FulfilmentType
}

export interface InitSnapshotAPIPayload extends GetSnapshotAPIPayload {
  id: string
  errorCodes?: InitSnapshotAPINonFatalErrorAdvice[]
}

/**
 * The type of fulfilment.
 *
 * Appears at both the shipment and snapshot level. A shipment is either
 * collection or delivery. A snapshot is mixed if it contains both collection
 * and delivery shipments. Mixed checkout isn't supported yet.
 */
export enum FulfilmentType {
  COLLECTION = 'COLLECTION',
  DELIVERY = 'DELIVERY',
  MIXED = 'MIXED',
  HD = 'HD',
}

/**
 * The type of shipment.
 */
export enum ShipmentType {
  PREPAY = 'PREPAY',
  SMALL_ITEM = 'SMALL_ITEM',
  LARGE_ITEM = 'LARGE_ITEM',
  DIGITAL_DOWNLOAD = 'DIGITAL_DOWNLOAD',
  CLOTHING = 'CLOTHING',
  PRE_ORDER = 'PRE_ORDER',
  WARRANTY = 'WARRANTY',
  SUPPLIER_DIRECT_FULFILLED = 'SUPPLIER_DIRECT_FULFILLED',
  RECYCLING_SERVICE = 'RECYCLING_SERVICE',
}

/**
 * HD only stock hold product status.
 */
export enum StockHoldProductStatus {
  FULLY_AVAILABLE = 'FULLY_AVAILABLE',
  PARTIALLY_AVAILABLE = 'PARTIALLY_AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  EXCLUDED = 'EXCLUDED',
  CANCELLED = 'CANCELLED',
  ERROR = 'ERROR',
}

/**
 * Every checkout has at least one shipment. Use the CollectionShipment or
 * DeliveryShipment types where possible, to narrow down the types.
 *
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders#shipment)
 */
export interface Shipment {
  id: string
  stockHoldId: string
  fulfilmentType: FulfilmentType
  type: ShipmentType
  slot?: Slot | NonBookableSlot
  itemDeliveryInfo?: ItemDeliveryInfo[]
}

/**
 * A collection shipment.
 *
 * @see Shipment
 */
export interface CollectionShipment extends Shipment {
  fulfilmentType: FulfilmentType.COLLECTION
  type: ShipmentType.PREPAY
  slot?: never
}

/**
 * A delivery shipment.
 *
 * @see Shipment
 */
export interface DeliveryShipment extends Shipment {
  fulfilmentType: FulfilmentType.DELIVERY | FulfilmentType.HD
  type: Exclude<ShipmentType, ShipmentType.PREPAY>
  slot?: Slot | NonBookableSlot
  itemDeliveryInfo?: ItemDeliveryInfo[]
}

/**
 * A non bookable delivery slot.
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/wcs/hd/small.items.basket.no.slots)
 */
export interface NonBookableSlot {
  skus: Product[]
  bookingId: string
}

/**
 * A delivery slot.
 *
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#slot)
 */
export interface Slot {
  id: string
  startTime: string
  endTime: string
  instruction?: string
  skus: Product[]
  bookingId: string
}

/**
 * 	A list of of key value pairs holding delivery info
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#itemdeliveryinfo)
 */
export interface ItemDeliveryInfo {
  productId: string
  notes?: string
  leadTimeDays?: number
}

/**
 * Each shipment will have a corresponding stock hold information object, which
 * contains a stock hold for each product in the shipment.
 *
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/stock#stockholdinformation)
 */
export interface StockHoldInfo {
  id: string
  holds: StockHold[]

  /** The store or fulfilment centre that the stock is coming from.  */
  fulfilmentLocationId?: string
}

/**
 * The stock hold for a single product.
 *
 * [Gitbook](https://argos-checkout-architecture-reference.int.dev-ie-01.jspaas.uk/docs/orchs/endpoints/checkout/types/stock.html)
 */
export interface StockHold {
  id: string
  productId: string
  requested: number
  allocated: number
  fullyReserved: boolean
  status?: StockHoldProductStatus
  title: string
}

/**
 * Product level attribute
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#productattributetype)
 */
export enum ProductAttribute {
  PRODUCT_CARE = 'PRODUCT_CARE',
}

/**
 * A product
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#product)
 */
export interface Product {
  id: string
  title?: string
  type?: string
  status?: string
  price: number
  attribute?: ProductAttribute
}

/**
 * The total value of a product
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#ordertotal)
 */
export interface Total {
  withSavings: number
  withoutSavings: number
  saving: number
}

/**
 * The order line for a single product.
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#orderline)
 */
export interface Line {
  id: string
  product: Product
  quantity: number
  total: Total
  shipmentId: string
}

export type DeliveryShipmentType = Omit<ShipmentType, ShipmentType.PREPAY>

export type UpdateAddressAPIResponse = APIResponse<{ status: 'ORDER_ADDRESS_UPDATED' }>

export enum DeliverableDays {
  SEVEN = 7,
  FOURTEEN = 14,
  TWENTY_ONE = 21,
  TWENTY_EIGHT = 28,
  THIRTY_FIVE = 35,
  FORTY_TWO = 42,
  FORTY_NINE = 49,
  FIFTY_SIX = 56,
}

export enum DeliveryFlag {
  NORMAL_DELIVERY = 'NORMAL_DELIVERY',
  SPECIAL_DELIVERY = 'SPECIAL_DELIVERY',
}

export type DeliveryFlags = DeliveryFlag
