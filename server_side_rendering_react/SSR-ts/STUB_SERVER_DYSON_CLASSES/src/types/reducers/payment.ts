import {
  PaymentMethod,
  SavedPaymentMethod,
  CreditApplicationStatus,
  CreditPaymentMethod,
  AddPaymentAPIErrorAdvice,
} from 'types/api'
import { FeaturesState } from 'types/reducers'

/**
 * A payment the user can add to their checkout.
 *
 * Nectar is automatically added by the API with an amount of £0, hence why it
 * isn't an option.
 */
export type AddablePayment = Exclude<PaymentMethod, PaymentMethod.CARD_NECTAR_SPEND>

/**
 * A payment method that the user can select
 */
export type SelectablePaymentMethod =
  | PaymentMethod.CARD_DEBIT
  | PaymentMethod.CARD_ARGOS_CREDIT
  | PaymentMethod.PAYPAL
  | PaymentMethod.APPLE_PAY

type AddingPayment = {
  [key in AddablePayment]: boolean
}

export type DeletingPayment = Partial<
  Record<
    string,
    {
      deleting: boolean
      error: boolean
      numOfDeletePaymentAttempts: number
    }
  >
>

type Errors = {
  [key in AddablePayment]: boolean
}
interface CreditPlan {
  planNumber: string
  title: string
  apr: number
}
export interface ArgosCardCreditPlan extends CreditPlan {
  duration: string | null
}

export interface MonthlyPaymentCreditPlan extends CreditPlan {
  minimumDuration: number
  maximumDuration: number
  effectiveTo: string
}

interface CreditPlans {
  regularPlans?: ArgosCardCreditPlan[] | null
  monthlyPaymentPlan?: MonthlyPaymentCreditPlan | null
  error: true | null
  loading: boolean
  attempts: number
}

export type PaymentMethodsStatuses = {
  [key in PaymentMethod]: PaymentMethodStatuses
}

export interface PaymentMethodStatuses {
  temporarilyDisabled?: boolean
  available?: boolean
  permanentlyDisabled?: boolean
  incompatible?: boolean
  paymentComplete?: boolean
  maxLimitReached?: boolean
  overMaxSpendLimit?: boolean
  underMinSpendLimit?: boolean
  incompatibleWith?: PaymentMethod[]
}

type Methods = {
  [key in PaymentMethod]: PaymentMethodStatuses
}

export interface ApplePaySessionData {
  epochTimestamp: number
  expiresAt: number
  merchantSessionIdentifier: string
  merchantIdentifier: string
  nonce: string
  domainName: string
  displayName: string
  signature: string
}

export enum Currency {
  GBP = 'GBP',
}

export interface Payment {
  id: string
  currency: Currency
  captureId: string
  amount: number
  paymentMethod: PaymentMethod
  creditPlanId?: string
  cardHolderName?: string
  cardType?: string
  captureUrl?: string
  balance?: number
  remainingBalance?: number
  last4Digits?: string
  applePaySessionData?: ApplePaySessionData
  paypalToken?: string
  payPalNonce?: string
  accountType?: string
  redemptionPermission?: boolean
  balancePoints?: number
  firstName?: string
  lastName?: string
  title?: string
  maxSpendingLimit?: number
  maxSpendingLimitPoints?: number
  minSpendingLimit?: number
  minSpendingLimitPoints?: number
  increment?: number
  incrementPoints?: number
  exchangeRate?: number
  creditApplicationUrl?: string
  creditApplicationStatus?: CreditApplicationStatus
}

export type NectarPayment = Payment & {
  amount: number
  paymentMethod: PaymentMethod.CARD_NECTAR_SPEND
  accountType: string
  redemptionPermission: boolean
  balance: number
  balancePoints: number
  firstName: string
  lastName: string
  title: string
  maxSpendingLimit: number
  maxSpendingLimitPoints: number
  minSpendingLimit: number
  minSpendingLimitPoints: number
  increment: number
  incrementPoints: number
  exchangeRate: number
}

export type PaypalPayment = Payment & {
  paymentMethod: PaymentMethod.PAYPAL
  paypalToken: string
  payPalNonce: string
}

export type CreditApplicationPayment = Payment & {
  paymentMethod: CreditPaymentMethod
  creditApplicationUrl: string
  creditApplicationStatus: CreditApplicationStatus
}

export interface CreditApplicationState {
  loading: boolean
  numberOfAttempts: number
}

export type CreditApplicationStates = Record<CreditPaymentMethod, CreditApplicationState>

export type GiftCardError =
  | AddPaymentAPIErrorAdvice.PAYMENT_GIFT_CARD_EXISTS
  | AddPaymentAPIErrorAdvice.PAYMENT_GIFT_CARD_INVALID
  | AddPaymentAPIErrorAdvice.PAYMENT_INSUFFICIENT_BALANCE
  | AddPaymentAPIErrorAdvice.PAYMENT_MAX_LIMIT_REACHED

export enum PaymentTabs {
  SAVED_CARDS_TAB = 0,
  NEW_PAYMENT_TAB = 1,
}

export interface PaymentsState {
  addingPayment: AddingPayment
  patchingPayment: boolean
  gettingPaymentMethods: boolean
  payments: Payment[]
  loading: boolean
  error: boolean
  errors: Errors
  errorStatus: number | null
  methods: Methods
  applePayOverLimitWarning: boolean
  creditPlans: CreditPlans
  selectedPaymentTab: PaymentTabs
  selectedPaymentMethod: SelectablePaymentMethod
  selectedSavedPaymentMethod: SavedPaymentMethod | null
  activeAccordionPaymentMethod: string | null
  giftCardsTotal: number | null
  datacashIframeHeight: number
  paymentLocation: string
  datacashLoaded: boolean
  deletePayment: DeletingPayment
  deviceHasApplePay: boolean | null
  deviceHasApplePayActiveCard: boolean | null
  giftCardError: GiftCardError | null
  numOfAddGiftCardAttempts: number
  isAutomated: boolean
  features: Pick<FeaturesState, 'paypalFallback'>
  creditApplications: CreditApplicationStates
}

export enum PaymentMethodRoutes {
  DEFAULT = '/',
  CARD_DEBIT = '/creditDebitCard',
  PAYPAL = '/paypal',
  APPLE_PAY = '/applePay',
  CARD_ARGOS_CREDIT = '/argosCardCreditPlan',
}
