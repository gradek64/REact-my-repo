import { ErrorResponse } from './errorResponse'

export interface SnapshotPromotion {
  type: PromotionType
  reference: string
  amount: number
  message: string
}

export enum PromotionType {
  PROMOTION_TYPE_DISCOUNT = 'PROMOTION_TYPE_DISCOUNT',
  PROMOTION_TYPE_CODE = 'PROMOTION_TYPE_CODE',
  PROMOTION_TYPE_VOUCHER = 'PROMOTION_TYPE_VOUCHER',
}

export enum AddPromotionAPIErrorAdvice {
  PROMOTION_CODE_INVALID = 'PROMOTION_CODE_INVALID',
  PROMOTION_CODE_EXPIRED = 'PROMOTION_CODE_EXPIRED',
  PROMOTION_CODE_DUPLICATED = 'PROMOTION_CODE_DUPLICATED',
  PROMOTION_CODE_INAPPLICABLE = 'PROMOTION_CODE_INAPPLICABLE',
  PROMOTION_VOUCHER_NOT_VALID = 'PROMOTION_VOUCHER_NOT_VALID',
  PROMOTION_CV_DISABLED = 'PROMOTION_CV_DISABLED',
}

export enum DeletePromotionAPIErrorAdvice {
  PROMOTION_CODE_NOT_FOUND = 'PROMOTION_CODE_NOT_FOUND',
  ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED = 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
  PROMOTION_CALCULATE_ERROR = 'PROMOTION_CALCULATE_ERROR',
}

export type AddPromotionAPIResponse = AddPromotionAPIErrorResponse | null
export type DeletePaymentAPIResponse = DeletePromotionAPIErrorResponse | null

export type AddPromotionAPIErrorResponse = ErrorResponse<AddPromotionAPIErrorAdvice>
export type DeletePromotionAPIErrorResponse = ErrorResponse<DeletePromotionAPIErrorAdvice>
