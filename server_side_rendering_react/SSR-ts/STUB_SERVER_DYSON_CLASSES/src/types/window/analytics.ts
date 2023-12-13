import { Currency } from '../reducers'

export type EventName = string
export type EventAction = string

export type EventAttributes = Record<string, unknown>

export interface Event {
  eventInfo: {
    eventName: EventName
    eventAction: EventAction
  }
  attributes?: EventAttributes
}

type Lightbox =
  | Record<string, never>
  | {
      type: string
      clickOrigin: string
      content?: string[]
    }

export interface AnalyticsPaymentCart {
  price: {
    total: number
    currency: Currency
    savings: number
    deliveryCost?: number
  }
  item: {
    id: string
    name: string
    quantity: number
    price: number
    originalPrice: number
    savings: number
  }[]
}

export interface AnalyticsOutOfStockCart {
  price: {
    total: number
    currency: Currency
    savings: number
  }
  item: {
    productId: string
    name: string
    quantity: number
    quantityOOS: number
    price: number
    originalPrice: number
    savings: number
    categoryId: string | null
    promoType: string | null
    OutOfStockStatus: 'outOfStock' | 'partiallyAvailable' | 'inStock'
  }[]
  stock: {
    totalQuantityOOS: number
    totalValueOOS: number
    basketValueChange: number
    basketQuantityChange: number
  }
}

export interface AnalyticsGuestCheckout {
  price: {
    total: number
    currency: Currency
    savings: number
  }
  item: {
    id: string
    name: string
    quantity: number
    price: number
    originalPrice: number
    savings: number
  }[]
}

export interface AnalyticsTransactionItem {
  categoryid: string
  id: string
  monthlyCareOffered: boolean
  name?: string
  originalPrice: number
  price: number
  quantity: number
  savings: number
  isHabitatProduct: boolean
  parentSKU?: string
}

export interface AnalyticsTransaction {
  capeApplicationCompleted: boolean
  mppApplicationCompleted: boolean
  collectionId: string[]
  giftCardSpend: number
  item: AnalyticsTransactionItem[]
  nectarCardSpend: number
  nectarCardUsed: boolean
  nectarPotentialPointsEarned: number
  nectarPointsEarned: number
  orderNumber: [string]
  payment: {
    paymentSelected: string[]
  }
  price: {
    currency: Currency
    savings: number
    total: number
    deliveryCost?: number
  }
  promoCode: string[]
  storeId?: string
  type: 'Prepay' | 'Buy'
}

export interface AnalyticsUser {
  profile: [
    {
      attributes?: {
        loginStatus: string
      }
      localisation?: {
        postCode: string
        status?: string
        store?: string
      }
      profileInfo?: {
        profileID: string
      }
      wallet?: {
        savedCardStatus: boolean
      }
      nectar?: boolean
    },
  ]
}

export interface AnalyticsPageFormField {
  id: string
  valid?: boolean
  errorMessage?: string
}

export interface AnalyticsPageForm {
  fields: AnalyticsPageFormField[]
}

export interface Delivery {
  slotsOffered: number
  sameDayOffered: boolean
  tomorrowOffered: boolean
  sameDayDeliveryEarliestLeadTimeOffered: string[] | string
}

export interface DigitalData {
  track: (eventName: EventName) => void
  event?: Event[]
  page: {
    pageInfo: {
      pageName: string
    }
    attributes: {
      channel: string
      platform: string | { hasAddressInAddressBook: boolean }
      errorType?: string
      error?: string
      // Set in the edit address modal
      preferredAddress?: boolean
      // Set on the out of stock page
      stockhold?: {
        OutOfStock: string
        promotion: boolean
      }
      services?: string
      contents?: string[]
      errorMessage?: string
      journeySegmentation?: string
      deliveries?: Delivery[]
      deliverySlotsSmallItemsDetails?: string[]
      deliverySlotsLargeItemsDetails?: string[]
    }
    lightBox?: Lightbox
    form?: AnalyticsPageForm[]
  }
  user?: [AnalyticsUser]
  cart?: AnalyticsPaymentCart | AnalyticsOutOfStockCart
  transaction?: AnalyticsTransaction
}
