import {
  PaymentMethod,
  OrderLine,
  OrderConfirmationResponseSuccessProps,
  OrderRetrievalResponseSuccessProps,
  FulfilmentType,
  OrderAddress,
  OrderConfirmationShipment,
  OrderRetrievalShipment,
  OrderAdvice,
} from '../api'

/**
 * Do not export - use the OrderPayment type
 *
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/services/orderretrieval/types/orders.html#orderpayment)
 */
interface BaseOrderPayment {
  paymentMethod: PaymentMethod
  currency: string
  amount: number
  paymentReference: string
  last4Digits: string
  cardType: string
  chargeSequence: number
}

interface OrderPaymentDebit extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CARD_DEBIT
  expiryDate: string
  authCode: string
  cardHolderName?: string
}

interface OrderPaymentPaypal extends BaseOrderPayment {
  paymentMethod: PaymentMethod.PAYPAL
  expiryDate: string
}

export interface OrderPaymentNectar extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CARD_NECTAR_SPEND
  amountPoints: number
}

export interface OrderPaymentArgosCredit extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CARD_ARGOS_CREDIT
  expiryDate: string
  authCode: string
  creditPlanId: string
}

export interface OrderPaymentGiftCard extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CARD_GIFT_ARGOS
}

export interface OrderPaymentFlexecash extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CARD_GIFT_FLEXECASH
  expiryDate: string
  authCode: string
}

interface OrderPaymentCreditApplication extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CREDIT_CAPE2
}

export interface OrderPaymentMonthlyPaymentPlan extends BaseOrderPayment {
  paymentMethod: PaymentMethod.CREDIT_MPP
  creditPlanId: string
}

export type OrderPayment =
  | OrderPaymentDebit
  | OrderPaymentPaypal
  | OrderPaymentNectar
  | OrderPaymentArgosCredit
  | OrderPaymentGiftCard
  | OrderPaymentFlexecash
  | OrderPaymentCreditApplication
  | OrderPaymentMonthlyPaymentPlan

export interface OrderRetrievalOrderPayment {
  currency: string
  amount: number
  last4Digits: string
  cardType: string
  creditPlanId?: string
  amountPoints?: number
}

interface Warranties {
  sku: string
  type: string
  price: number
  currency: string
}

export interface AvailableCare {
  productSku: string
  warranties: Warranties[]
}

export interface Earnings {
  companyVoucher: {
    eligible: boolean
  }
  nectar: {
    isLinked: boolean
    points: number
  }
}

export interface OrderTimetableHours {
  open: string
  close: string
}

export interface OrderTimeTableDefaultWeek {
  monday: OrderTimetableHours[]
  tuesday: OrderTimetableHours[]
  wednesday: OrderTimetableHours[]
  thursday: OrderTimetableHours[]
  friday: OrderTimetableHours[]
  saturday: OrderTimetableHours[]
  sunday: OrderTimetableHours[]
}

export interface OrderStore {
  id: string | null
  name: string | null
  legacyName?: string
  town?: string
  county?: string | null
  postcode?: string
  country?: string | null
  addressLine?: (string | null)[]
  location?: {
    longitude: string
    latitude: string
  }
  timetable?: {
    defaultWeek: OrderTimeTableDefaultWeek
  }
}

export interface ProductTargeting {
  PID?: string
  BoughtBrand?: string
  BoughtCat1?: string
  BoughtCat2?: string
  BoughtCat3?: string
  LowLevelCatId?: string
  storeId?: string | null
  storeName?: string | null
  orderTotal: string | null
  orderType: string | null
}

interface ProductInformation {
  [key: string]: {
    isHabitatProduct: boolean
    categoryId: string
    notes?: string
    parentSKU?: string
  }
}

export interface ShipmentState extends OrderConfirmationShipment {
  collectionPin?: string
  type: FulfilmentType
  supplier: string
}

export interface OrderConfirmationState extends OrderConfirmationResponseSuccessProps {
  type?: FulfilmentType
  shipments: {
    successful: ShipmentState[]
    pending: ShipmentState[]
    failed: ShipmentState[]
  }
  productCare?: {
    successful: OrderLine[]
    pending: OrderLine[]
    failed: OrderLine[]
  }
  store?: OrderStore
  deliveryAddress?: OrderAddress
  advices: OrderAdvice[]
}

export interface OrderRetrievalState extends OrderRetrievalResponseSuccessProps {
  type?: FulfilmentType
  vatUrl?: string
  store?: OrderStore
  shipments: OrderRetrievalShipment[]
}

export interface OrderState {
  id: string | null
  customerId: string | null
  confirmation: OrderConfirmationState
  retrieval: OrderRetrievalState
  partNumbers: string[]
  productTargeting: ProductTargeting
  productInformation: ProductInformation
  placeOrder: {
    placing: boolean
    error: boolean
    redirectPath?: string | null
    numberOfAttempts: number
  }
  cancelOrder: {
    cancelling: boolean
    order: {
      successfullyCancelled: boolean
      error: boolean
      numberOfAttempts: number
    }
    shipments: {
      [key: string]: {
        successfullyCancelled: boolean
        error: boolean
        numberOfAttempts: number
      }
    }
  }
  getOrder: {
    getting: boolean
    error: boolean
    redirectPath: string | null
  }
  extendOrder: {
    extending: boolean
    shipments: {
      [key: string]: {
        error: boolean
        numberOfAttempts: number
        extended: boolean
      }
    }
  }
  errorGettingProducts: boolean
}

export enum OrderStatus {
  ORDER_PLACED = 'ORDER_PLACED',
  ORDER_PARTIALLY_PLACED = 'ORDER_PARTIALLY_PLACED',
  ORDER_PARTIALLY_FULFILLED = 'ORDER_PARTIALLY_FULFILLED',
  ORDER_PENDING = 'ORDER_PENDING',
  ORDER_ERROR = 'ORDER_ERROR',
  ORDER_REJECTED = 'ORDER_REJECTED',
  ORDER_FAILED = 'ORDER_FAILED',
  ORDER_EXCEPTION = 'ORDER_EXCEPTION',
}
