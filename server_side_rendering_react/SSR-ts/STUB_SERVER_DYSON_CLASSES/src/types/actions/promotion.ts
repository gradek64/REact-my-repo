import {
  AddPromotionAPIErrorAdvice,
  AddPromotionAPIErrorResponse,
  APIResponse,
  DeletePromotionAPIErrorResponse,
} from '../api'

export type PromoActionPayload = {
  reference: string
}

type SuccessFailureCallbacks = {
  onSuccess?: () => null
  onFailure?: () => null
}

export type AddPromoActionPayload = PromoActionPayload & SuccessFailureCallbacks

export type DeletePromoActionPayload = PromoActionPayload & SuccessFailureCallbacks

export interface PromoFailureActionPayload {
  error: APIResponse<AddPromotionAPIErrorResponse | DeletePromotionAPIErrorResponse | Error>
  reference: string
}

export interface PromoSpecificFailureActionPayload extends PromoFailureActionPayload {
  advice: AddPromotionAPIErrorAdvice
}
