import { FulfilmentType, ShipmentType, Product as SnapshotProduct, OrderCharge } from './snapshot'
import { Earnings, AvailableCare, OrderStatus, OrderPayment, AddressState, Channel, SubBrand } from '../reducers'
import { SnapshotPromotion } from './promotions'
import { ErrorResponse } from './errorResponse'
import { GetProductsAPIPayload } from './product'
import { CustomerType } from './account/address'
import { OrderRetrievalOrderPayment } from 'types/reducers/order'

export enum FulfilmentLocationType {
  DELIVERY = 'DELIVERY',
  STORE = 'STORE',
}

export enum ShipmentStatusType {
  CANCELLED = 'CANCELLED',
  COLLECTED = 'COLLECTED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  UNKNOWN = 'UNKNOWN',
  READY_TO_COLLECT = 'READY_TO_COLLECT',
  RETURNED = 'RETURNED',
}

export interface ConfirmationProduct extends SnapshotProduct {
  notes?: string
  leadTimeDays?: string
  type?: ShipmentType
}

export interface PlaceOrderSuccessAPIPayload {
  order: {
    id: string
  }
}

export interface OrderAmounts {
  total: {
    withSavings: number
    withoutSavings: number
    saving: number
  }
  breakdown?: OrderCharge[]
}

interface OrderLineItem {
  withSavings: number
  saving: number
  promotions: SnapshotPromotion[]
}

export interface OrderLine {
  product: SnapshotProduct | ConfirmationProduct
  quantity: number
  total: {
    withSavings: number
    withoutSavings: number
    saving: number
  }
  items?: OrderLineItem[]
}

export interface GuestRetrievalOrderLine extends OrderLine {
  isCancellable: boolean
  status: ShipmentStatusType
}

export interface OrderTimeWindow {
  start: string
  end: string
}

interface ShipmentCore {
  collectionId?: string
  shipmentNumber?: string
  timeWindow?: OrderTimeWindow
  orderLines: OrderLine[]
}

export interface OrderConfirmationShipment extends ShipmentCore {
  instruction?: string
  bookingId?: string
  shipmentType?: ShipmentType
  bookingDetails?: {
    bookingId?: string
    reservationId?: string
    slot: {
      deliveryTimeWindow: OrderTimeWindow
      charges: {
        id: string
        type: string
        amount: number
      }[]
    } | null
  }
}

export interface OrderRetrievalShipment extends ShipmentCore {
  status: ShipmentStatusType
  isAmendable: boolean
  isCancellable: boolean
}

export interface SendOrderDataToAdManagerPayload {
  orders: [
    {
      customerId: '' // it is always empty string
      sessionId: string
      orderDate: string
      id: string
      orderItems: [
        {
          sku: string
          quantity: number
          regularUnitPrice: number
          totalOrderItemPriceAfterDiscounts: number
        },
      ]
    },
  ]
}

export type Shipment = OrderConfirmationShipment | OrderRetrievalShipment
export interface GetOrderConfirmationSuccessAPIPayload {
  order: OrderConfirmationResponseSuccessProps
  partNumbers: string[]
  products: GetProductsAPIPayload
}
export interface GetOrderRetrievalSuccessAPIPayload {
  order: OrderRetrievalResponseSuccessProps
}

interface OrderService {
  type: string
  productId: string
  amount: number
}
export type OrderAddress = Pick<AddressState, 'type' | 'person' | 'lines'>

export interface OrderSource {
  salesChannel: Channel
  ipAddress: string
  channelBrand: string
}

export interface OrderSourceRetrieval {
  subBrand: SubBrand
}

interface StoreTimetableHours {
  open: string
  close: string
}

export interface Store {
  id: string
  name: string
  legacyName: string
  town: string
  county: string
  postcode: string
  addressLine: (string | null)[]
  location: {
    longitude: string
    latitude: string
  }
  timetable: {
    defaultWeek: {
      monday: StoreTimetableHours[]
      tuesday: StoreTimetableHours[]
      wednesday: StoreTimetableHours[]
      thursday: StoreTimetableHours[]
      friday: StoreTimetableHours[]
      saturday: StoreTimetableHours[]
      sunday: StoreTimetableHours[]
    }
  }
}

export interface Fulfilment {
  fulfilmentNumber: string | null
  status: FulfilmentStatus
  paymentType: string
  supplier: string
  stockHoldId: string
  collectionPin?: string
  type: FulfilmentType
  location: {
    store?: Store
    shipping?: OrderAddress
    type: FulfilmentLocationType
  }
  shipments: Shipment[]
}

export interface GuestRetrievalAddress {
  type: string
  person: {
    email: string
  }
  lines: {
    postcode: string
  }
}

export interface GuestRetrievalFulfilment {
  type: FulfilmentType
  location: {
    store?: Store
    shipping?: GuestRetrievalAddress
    type: FulfilmentLocationType
  }
  shipments: OrderRetrievalShipment[]
}

export interface OrderResponseErrorProps extends ErrorResponse<string> {
  id: string
  statusCode: number
  status?: string
}

export interface OrderAdvice {
  type: OrderAdviceType
  regarding: OrderAdviceInfo
  message: string
}

export interface OrderConfirmationResponseSuccessProps {
  id?: string
  statusCode?: number
  orderNumber: string | null
  creationDate: string | null
  customer: {
    id: string
    firstName: string
    lastName: string
    email: string
    mobilePhone?: string
    newCape2Application: boolean
    customerType: CustomerType
  } | null
  fulfilments: Fulfilment[]
  amounts: OrderAmounts | null
  promotions: SnapshotPromotion[]
  source: OrderSource | null
  statusDate: string | null
  services?: OrderService
  stockHoldId?: string
  currency: string | null
  availableCare: AvailableCare[]
  status: OrderStatus | null
  payments: {
    payments: OrderPayment[]
    masterReference: string | null
    giftCardsTotal?: number | null
  }
  billingAddress: OrderAddress | null
  contactAddress: OrderAddress | null
  deliveryAddress?: OrderAddress | null
  earnings: Earnings
  advices?: OrderAdvice[]
}

export interface OrderRetrievalResponseSuccessProps {
  orderNumber: string | null
  creationDate: string | null
  customer: { email: string } | null
  fulfilments: GuestRetrievalFulfilment[]
  amounts: OrderAmounts | null
  source: OrderSourceRetrieval | null
  currency: string | null
  availableCare: AvailableCare[]
  payments?: {
    payments: OrderRetrievalOrderPayment[]
    giftCardsTotal?: number
  }
  earnings?: Earnings
  advices?: OrderAdvice[]
  isCancellable: boolean
}

export enum PlaceOrderErrorDetailsAdvice {
  PROMOTION_CV_DISABLED = 'PROMOTION_CV_DISABLED',
  PAYMENT_NOT_PROCESSABLE = 'PAYMENT_NOT_PROCESSABLE',
  PROMOTION_VOUCHER_NOT_VALID = 'PROMOTION_VOUCHER_NOT_VALID',
  PAYMENT_REJECTED = 'PAYMENT_REJECTED',
}

export enum OrderSnapshotStatus {
  ORDER_SNAPSHOT_INITIALISED = 'ORDER_SNAPSHOT_INITIALISED',
  ORDER_SNAPSHOT_UPDATE_SENT = 'ORDER_SNAPSHOT_UPDATE_SENT',
  ORDER_SNAPSHOT_ORDER_PENDING = 'ORDER_SNAPSHOT_ORDER_PENDING',
  ORDER_SNAPSHOT_ORDER_PLACED = 'ORDER_SNAPSHOT_ORDER_PLACED',
  ORDER_SNAPSHOT_PENDING_BOOKING = 'ORDER_SNAPSHOT_PENDING_BOOKING',
  ORDER_SNAPSHOT_CREATE_FULFILMENT_FAILED = 'ORDER_SNAPSHOT_CREATE_FULFILMENT_FAILED',
  ORDER_SNAPSHOT_BOOKING_COMPLETE = 'ORDER_SNAPSHOT_BOOKING_COMPLETE',
  ORDER_SNAPSHOT_INVALID_DETAILS = 'ORDER_SNAPSHOT_INVALID_DETAILS',
  ORDER_SNAPSHOT_FAILED = 'ORDER_SNAPSHOT_FAILED',
  ORDER_SNAPSHOT_ORDER_EXCEPTION = 'ORDER_SNAPSHOT_ORDER_EXCEPTION',
  ORDER_SNAPSHOT_ORDER_REJECTED = 'ORDER_SNAPSHOT_ORDER_REJECTED',
  ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR = 'ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR',
  ORDER_SNAPSHOT_INITIALISATION_FAILED = 'ORDER_SNAPSHOT_INITIALISATION_FAILED',
  ORDER_SNAPSHOT_UNRECOVERABLE_ORDER_ERROR = 'ORDER_SNAPSHOT_UNRECOVERABLE_ORDER_ERROR',
  ORDER_SNAPSHOT_UNRECOVERABLE_PROMOTION_ERROR = 'ORDER_SNAPSHOT_UNRECOVERABLE_PROMOTION_ERROR',
}

export enum FulfilmentStatus {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
  FAILED = 'FAILED',
}

export enum OrderAdviceType {
  ORDER_ADVICE_INFO = 'ORDER_ADVICE_INFO',
  ORDER_ADVICE_FAILURE = 'ORDER_ADVICE_FAILURE',
}

export enum OrderAdviceInfo {
  NECTAR_ACCOUNT_VERIFICATION_ERROR = 'NECTAR_ACCOUNT_VERIFICATION_ERROR',
  NECTAR_POINTS_RETRIEVE_ERROR = 'NECTAR_POINTS_RETRIEVE_ERROR',
  COMPANY_VOUCHER_CHECK_ERROR = 'COMPANY_VOUCHER_CHECK_ERROR',
  PAYMENTS_RETRIEVE_ERROR = 'PAYMENTS_RETRIEVE_ERROR',
  DELIVERY_SLOT_RETRIEVE_ERROR = 'DELIVERY_SLOT_RETRIEVE_ERROR',
  ORDER_ATTRIBUTES_ERROR = 'ORDER_ATTRIBUTES_ERROR',
}
