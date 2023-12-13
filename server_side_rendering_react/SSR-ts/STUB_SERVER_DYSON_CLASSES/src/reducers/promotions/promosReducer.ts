import { createReducer } from '@reduxjs/toolkit'
import { PromosState } from '../../types/reducers'

import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  START_GUEST_CHECKOUT_SUCCESS,
  ADD_PROMO,
  ADD_PROMO_SUCCESS,
  ADD_PROMO_FAILURE,
  ADD_PROMO_SPECIFIC_FAILURE,
  DELETE_PROMO,
  DELETE_PROMO_FAILURE,
  RESET_PROMO_ERRORS,
  MODAL_CLOSE,
  MODAL_OPEN,
} from '../../actions'
import { GetSnapshotAPIPayload } from 'types/api'

export const initialState: PromosState = {
  added: [],
  addingPromo: false,
  numOfAddPromoAttempts: 0,
  addPromoError: null,
}

const resetErrorsState = (state: PromosState) => {
  state.numOfAddPromoAttempts = initialState.numOfAddPromoAttempts
  state.addPromoError = initialState.addPromoError
  state.added = state.added.map((promo) => {
    return { ...promo, deleteError: false, deleting: false }
  })
}

const getAddedPromoState = (payload: GetSnapshotAPIPayload): PromosState['added'] => {
  return payload.snapshot.promotions.map((promo) => {
    return { ...promo, deleting: false, deleteError: false }
  })
}

const promosReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(ADD_PROMO, (state) => {
      state.addingPromo = true
      state.addPromoError = initialState.addPromoError
    })
    .addCase(ADD_PROMO_SUCCESS, (state) => {
      state.addingPromo = initialState.addingPromo
      state.numOfAddPromoAttempts = 0
    })
    .addCase(ADD_PROMO_FAILURE, (state) => {
      state.addingPromo = initialState.addingPromo
      state.numOfAddPromoAttempts += 1
    })
    .addCase(ADD_PROMO_SPECIFIC_FAILURE, (state, { payload }) => {
      const { advice } = payload
      state.addPromoError = advice
      state.addingPromo = initialState.addingPromo
    })
    .addCase(DELETE_PROMO, (state, { payload: { reference } }) => {
      const promo = state.added.find((currentPromo) => currentPromo.reference === reference)
      if (promo) {
        promo.deleting = true
        promo.deleteError = false
      }
    })
    .addCase(DELETE_PROMO_FAILURE, (state, { payload: { reference } }) => {
      const promo = state.added.find((currentPromo) => currentPromo.reference === reference)
      if (promo) {
        promo.deleting = false
        promo.deleteError = true
      }
    })
    .addCase(RESET_PROMO_ERRORS, resetErrorsState)
    .addCase(MODAL_CLOSE, resetErrorsState)
    .addCase(MODAL_OPEN, resetErrorsState)
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      state.added = getAddedPromoState(payload)
    })
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (state, { payload }) => {
      state.added = getAddedPromoState(payload)
    })
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      state.added = getAddedPromoState(payload)
    }),
)

export default promosReducer
