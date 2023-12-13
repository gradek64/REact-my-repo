import { StatusCode } from '../api/StatusCodes'

export interface GetProductCategoryFailureActionPayload {
  error: {
    status: StatusCode
  }
}

export interface GetProductCategorySuccessActionPayload {
  productCategoryIds: string[]
}

export interface GetAgeRestrictionsSuccessActionPayload {
  ageRestrictedIds: string[]
}
