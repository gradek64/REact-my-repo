import { AddPromotionAPIErrorAdvice, DeletePromotionAPIErrorAdvice, ErrorResponse } from 'types/api'

export type PromotionStub = {
  addPromotionResponse: { status: number; error?: ErrorResponse<AddPromotionAPIErrorAdvice> | null }
  addPromotionResponseType: string
  deletePromotionResponse: { status: number; error?: ErrorResponse<DeletePromotionAPIErrorAdvice> | null }
  deletePromotionResponseType: string
  shouldExpireSubsequentPromos: boolean
}
