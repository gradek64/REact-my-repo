import { createAction } from '@reduxjs/toolkit'
import {
  PromoActionPayload,
  PromoFailureActionPayload,
  PromoSpecificFailureActionPayload,
  AddPromoActionPayload,
  DeletePromoActionPayload,
} from 'types/actions'

export const ADD_PROMO = createAction<AddPromoActionPayload>('ADD_PROMO')
export const ADD_PROMO_SUCCESS = createAction<PromoActionPayload, 'ADD_PROMO_SUCCESS'>('ADD_PROMO_SUCCESS')
export const ADD_PROMO_FAILURE = createAction<PromoFailureActionPayload>('ADD_PROMO_FAILURE')
export const ADD_PROMO_SPECIFIC_FAILURE = createAction<PromoSpecificFailureActionPayload>('ADD_PROMO_SPECIFIC_FAILURE')
export const DELETE_PROMO = createAction<DeletePromoActionPayload>('DELETE_PROMO')
export const DELETE_PROMO_SUCCESS = createAction<PromoActionPayload, 'DELETE_PROMO_SUCCESS'>('DELETE_PROMO_SUCCESS')
export const DELETE_PROMO_FAILURE = createAction<PromoFailureActionPayload>('DELETE_PROMO_FAILURE')

export const RESET_PROMO_ERRORS = createAction('RESET_PROMO_ERRORS')
