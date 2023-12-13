/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { canUseDom } from '@sainsburys-tech/boltui-utils'
import { PaymentMethod } from 'types/api'
import { PaymentMethodRoutes, Season, SelectablePaymentMethod } from 'types/reducers'

const host = process.env.HOST || 'localhost'
const port = '8080'
const prepayApi = process.env.GATEWAY_API || ''
const accountApi = process.env.ACCOUNT_API || ''
const marketingAPI = canUseDom() ? '' : 'http://localhost:8080'
const productApi = canUseDom() ? '' : 'http://localhost:8080'
const sessionManagerApi = canUseDom() ? '' : 'http://localhost:8080'
const getUserInfoApi = process.env.WCS_API || ''
const vatReceiptApi = canUseDom() ? '' : 'http://localhost:8080'

interface GiftCard {
  binRange?: string
  minLength?: number
  maxLength?: number
  pinNumberLength?: number
  securityCodeLength?: number
  image?: string
}

export enum GiftCardTypes {
  'GENERIC' = 'GENERIC',
  'CARD_GIFT_ARGOS' = 'CARD_GIFT_ARGOS',
  'NEW_GIFT_CARD_ARGOS' = 'NEW_GIFT_CARD_ARGOS',
  'CARD_GIFT_FLEXECASH' = 'CARD_GIFT_FLEXECASH',
}

export type LegacyConfig = {
  app: {
    rootFontSize: number
  }
  paymentMethodsOrder: ReadonlyArray<SelectablePaymentMethod>
  paymentMethodRoutes: Record<string, PaymentMethodRoutes>
  placeOrderAnimation: {
    seasons: { [key in Season]: Season }
    [key: string]: any
  }

  prepayApiServer: string
  accountApiServer: string
  productApiServer: string
  marketingApiServer: string
  sessionManagerServer: string
  getUserInfoApiServer: string
  getVatReceiptServer: string
  prepayApiBaseUrl: string
  orderApiBaseUrl: string
  accountApiBaseUrl: string
  productApiBaseUrl: string
  marketingApiBaseUrl: string
  sessionManagerBaseUrl: string
  getUserInfoApiBaseUrl: string
  getVatReceiptApiBaseUrl: string
  nectar: {
    CARD_NECTAR: {
      binNumber: string
      cardNumberLength: number
    }
  }
  giftCardTypes: {
    [key in GiftCardTypes]: GiftCard
  }

  // fallback as we continue to type this
  // because of the "as const" most types should be inferred anyway
  [key: string]: any
}

const config: LegacyConfig = {
  host,
  port,
  prepayApiServer: prepayApi,
  accountApiServer: accountApi,
  productApiServer: productApi,
  getVatReceiptServer: vatReceiptApi,
  marketingApiServer: marketingAPI,
  sessionManagerServer: sessionManagerApi,
  getUserInfoApiServer: getUserInfoApi,
  prepayApiBaseUrl: `/checkout-api-v2`,
  orderApiBaseUrl: `/checkout-api-v2`,
  accountApiBaseUrl: `/account-api`,
  productApiBaseUrl: `/checkout/proxy/product-gateway`,
  marketingApiBaseUrl: `/checkout/proxy/marketing-preferences`,
  sessionManagerBaseUrl: `/internal/proxy/session-manager`,
  getUserInfoApiBaseUrl: `/webapp/wcs/stores/servlet/GetUserInfo`,
  getVatReceiptApiBaseUrl: `/checkout/proxy/receipt-service`,
  app: {
    rootFontSize: 16,
  },
  timings: {
    fadeInOut: 200,
    snapshotLockDelay: 5000,
    placeOrderShowErrorDelay: 500,
  },
  paymentMethodRoutes: {
    default: PaymentMethodRoutes.DEFAULT,
    creditDebitCard: PaymentMethodRoutes.CARD_DEBIT,
    paypal: PaymentMethodRoutes.PAYPAL,
    applePay: PaymentMethodRoutes.APPLE_PAY,
    argosCardCreditPlan: PaymentMethodRoutes.CARD_ARGOS_CREDIT,
  },
  statuses: {
    initialisationInProgress: 202,
  },
  paymentMethodsOrder: [
    PaymentMethod.CARD_DEBIT,
    PaymentMethod.CARD_ARGOS_CREDIT,
    PaymentMethod.PAYPAL,
    PaymentMethod.APPLE_PAY,
  ],
  nectar: {
    CARD_NECTAR: {
      binNumber: '98263000',
      cardNumberLength: 11,
    },
  },
  giftCardTypes: {
    GENERIC: {},
    CARD_GIFT_ARGOS: {
      binRange: '10000',
      minLength: 20,
      maxLength: 20,
      pinNumberLength: 4,
      image: 'https://i1.adis.ws/i/Argos/GiftCard',
    },
    NEW_GIFT_CARD_ARGOS: {
      binRange: '98260278',
      minLength: 19,
      maxLength: 19,
      pinNumberLength: 4,
      image: 'https://i1.adis.ws/i/Argos/GiftCard',
    },
    CARD_GIFT_FLEXECASH: {
      binRange: '633827',
      minLength: 19,
      maxLength: 19,
      securityCodeLength: 3,
      image: 'https://i1.adis.ws/i/Argos/Flexecash',
    },
  },
  maximumNumberOfGiftCards: 8,
  placeOrderAnimation: {
    seasons: {
      default: Season.DEFAULT,
      xmas: Season.XMAS,
      defaultTu: Season.DEFAULT_TU,
      xmasTu: Season.XMAS_TU,
      defaultHabitat: Season.DEFAULT_HABITAT,
      xmasHabitat: Season.XMAS_HABITAT,
      halloween: Season.HALLOWEEN,
      pride: Season.PRIDE,
      prideTu: Season.PRIDE_TU,
      prideHabitat: Season.PRIDE_HABITAT,
      blackHistoryMonth: Season.BLACK_HISTORY_MONTH,
      blackHistoryMonthHabitat: Season.BLACK_HISTORY_MONTH_HABITAT,
      blackHistoryMonthTu: Season.BLACK_HISTORY_MONTH_TU,
    },
    initialDelayMs: 2000,
    colors: {
      variants: {
        default: {
          bgMask: '#FFF9FA',
        },
        xmas: {},
      },
    },
    box: {
      lid: {
        animDurationMs: 4000,
      },
    },
    products: {
      total: 3,
      animYAxisMoveDistancePx: 320,
      animTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
      animDurationMs: 3500,
    },
    text: {
      intervalDurationMs: 3000,
      options: ['Calling elves...', 'Shaking mistletoe...', 'Working our magic...', "Won't be much longer..."],
    },
  },
} as const

export default config
