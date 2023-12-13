import {
  PaymentMethodRoutes,
  Payment,
  CreditApplicationPayment,
  GiftCardError,
  SelectablePaymentMethod,
} from '../reducers'
import {
  APIResponse,
  CreditPaymentMethod,
  GiftCardPaymentMethod,
  PaymentMethod,
  PaymentMethodsAPIPayload,
  SavedPaymentMethod,
  CreditPlanAPIPayload,
  GetPaymentMethodsAPIErrorResponse,
  AddPaymentAPIErrorResponse,
} from '../api'

export type GetPaymentMethodsSuccessActionPayload = PaymentMethodsAPIPayload

export interface GetPaymentMethodsFailureActionPayload {
  error: APIResponse<GetPaymentMethodsAPIErrorResponse> | Error
}

export type AddPaymentActionPayload = {
  requestOptions: {
    paymentMethod?: GiftCardPaymentMethod | PaymentMethod.CREDIT_CAPE2
    cardNumber?: number
    code?: number
    creditPlanId?: string
    validationUrl?: string
  }
  onSuccess?: (addPayment: Payment) => void
  onFailure?: () => void
  savedCard?: boolean
}

export interface AddPaymentSuccessActionPayload {
  type: PaymentMethod
  isSavedCard: boolean
}

export interface AddPaymentFailureActionPayload {
  error: APIResponse<AddPaymentAPIErrorResponse> | Error
  type: PaymentMethod
  isSavedCard: boolean
}

export interface DeletePaymentActionPayload {
  id: string
  onSuccess?: () => void
  onFailure?: () => void
}

export interface DeletePaymentSuccessActionPayload {
  deletedPayment: Payment
}

export interface DeletePaymentFailureActionPayload {
  deletedPayment: Payment
}

export interface SetupPaymentMethodActionPayload {
  paymentMethod: PaymentMethod
  savedCard?: boolean
  preventLocationChange?: boolean
  isAutomaticallyAddingPayment?: boolean
}

export interface SetupPaymentMethodFailureActionPayload {
  error: Error
  isAutomaticallyAddingPayment: boolean
}

export type SetupPaypalSessionFailureActionPayload = {
  error: Error
}

export type ChangePaymentLocationActionPayload = PaymentMethodRoutes

export interface UpdateSelectedPaymentMethodActionPayload {
  paymentMethod: SelectablePaymentMethod
  previouslySelectedPaymentMethod: SelectablePaymentMethod
}

export type UpdateSelectedSavedPaymentMethodActionPayload = SavedPaymentMethod | null

export type StartCreditApplicationActionPayload = {
  creditType: CreditPaymentMethod
  onSuccess?: (addedPayment: CreditApplicationPayment) => void
  onFailure?: ({ numberOfAttempts }: { numberOfAttempts: number }) => void
}

export type StartCreditApplicationSuccessActionPayload = {
  creditType: CreditPaymentMethod
}

export type StartCreditApplicationFailureActionPayload = {
  creditType: CreditPaymentMethod
  error: Error
}

export type UpdateCreditApplicationPayload = {
  paymentMethod: CreditPaymentMethod
  creditApplicationStatus: string
  id: string
  cookie: string
}

export interface SubmitFormFailurePayload {
  error: Error
}

export interface GetCreditPlansActionPayload {
  cookie?: string
}

export type GetCreditPlansSuccessActionPayload = CreditPlanAPIPayload

export interface SpecificGiftCardErrorActionPayload {
  error: GiftCardError
}

export type DatacashLoadedActionPayload = boolean

export interface DatacashResizeActionPayload {
  scrollHeight: number
}

export type DatacashErrorActionPayload = {
  errorMessage: string
}
