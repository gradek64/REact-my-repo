import { PaymentMethod, OrderSnapshotStatus, StatusCode, CreditPaymentMethod, FulfilmentType } from '../../api'

export interface NewRelicAttributes {
  paymentMethod?: PaymentMethod
  paymentSessionId?: string
  savedCard?: boolean
  has2FaCode?: boolean
  orderStatus?: OrderSnapshotStatus
  promoCode?: string
  statusCode?: StatusCode
  advice?: string
  errorMessage?: string
  addressValidationError?: string
  dtsReference?: string
  orderNumber?: number
  cardNumber?: string
  token?: string
  last4Digits?: string
  creditType?: CreditPaymentMethod
  paypalPaymentType?: string
  fulfilmentType?: FulfilmentType
  eligibleForPayLater?: boolean
  savedCardType?: string
  binRange?: '98260278' | '10000' | '633827' | 'UNKNOWN'
  checkboxType?: 'optOut' | 'optIn'
  savedConsentValue?: string
  tab?: number
}
