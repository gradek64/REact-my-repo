import { AddPromotionAPIErrorAdvice, SnapshotPromotion } from '../api'

export type Promotion = SnapshotPromotion & {
  deleting: boolean
  deleteError: boolean
}

export interface PromosState {
  added: Promotion[]
  addingPromo: boolean
  addPromoError: AddPromotionAPIErrorAdvice | null
  numOfAddPromoAttempts: number
}
