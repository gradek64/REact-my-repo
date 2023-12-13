import { createAction } from '@reduxjs/toolkit'

import {
  GetProductCategoryFailureActionPayload,
  GetProductCategorySuccessActionPayload,
  GetAgeRestrictionsSuccessActionPayload,
} from 'types/actions'

export const GET_PRODUCT_CATEGORY = createAction('GET_PRODUCT_CATEGORY')
export const GET_PRODUCT_CATEGORY_FAILURE =
  createAction<GetProductCategoryFailureActionPayload>('GET_PRODUCT_CATEGORY_FAILURE')
export const GET_PRODUCT_CATEGORY_SUCCESS =
  createAction<GetProductCategorySuccessActionPayload>('GET_PRODUCT_CATEGORY_SUCCESS')

export const GET_AGE_RESTRICTIONS_FAILURE = createAction('GET_AGE_RESTRICTIONS_FAILURE')
export const GET_AGE_RESTRICTIONS_SUCCESS =
  createAction<GetAgeRestrictionsSuccessActionPayload>('GET_AGE_RESTRICTIONS_SUCCESS')
