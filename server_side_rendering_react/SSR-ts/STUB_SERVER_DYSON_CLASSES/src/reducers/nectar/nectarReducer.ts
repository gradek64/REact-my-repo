import { createReducer } from '@reduxjs/toolkit'

import { NectarState } from '../../types/reducers'

import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  START_GUEST_CHECKOUT_SUCCESS,
  ADD_NECTAR,
  ADD_NECTAR_SUCCESS,
  ADD_NECTAR_FAILURE,
  DELETE_NECTAR,
  DELETE_NECTAR_SUCCESS,
  DELETE_NECTAR_FAILURE,
  UPDATE_NECTAR,
  UPDATE_NECTAR_SUCCESS,
  UPDATE_NECTAR_FAILURE,
  MODAL_CLOSE,
  TOGGLE_2FA_REQUIRED,
  INVALID_2FA_CODE,
  RESET_INVALID_2FA_CODE_ERROR,
  REQUEST_NEW_2FA_CODE,
  REQUEST_NEW_2FA_CODE_ERROR,
  NECTAR_INSUFFICIENT_BALANCE,
  RESET_NECTAR_INSUFFICIENT_BALANCE,
} from '../../actions'

export const initialState: NectarState = {
  numOfAddNectarAttempts: 0,
  updatingNectar: false,
  addingNectarCard: false,
  deletingNectarCard: false,
  deletingNectarCardError: false,
  error: false,
  card: undefined,
  requestCodeError: false,
  needs2fa: false,
  invalid2faCode: false,
  sentBy: '',
  sentTo: '',
  insufficientBalanceError: false,
  isLinked: null,
  totalEarnPoints: 0,
}

const nectarReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload: { snapshot } }) => {
      if (snapshot.nectar) {
        state.isLinked = snapshot.nectar.isLinked
        state.totalEarnPoints = snapshot.nectar.baseEarnPoints + snapshot.nectar.promotionEarnPoints
        state.card = snapshot.nectar.card
      }
    })
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload: { snapshot } }) => {
      if (snapshot.nectar) {
        state.isLinked = snapshot.nectar.isLinked
        state.totalEarnPoints = snapshot.nectar.baseEarnPoints + snapshot.nectar.promotionEarnPoints
      }
    })
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (state, { payload: { snapshot } }) => {
      if (snapshot.nectar) {
        state.isLinked = snapshot.nectar.isLinked
        state.card = snapshot.nectar.card
      }
    })
    .addCase(ADD_NECTAR, (state) => {
      state.error = initialState.error
      state.addingNectarCard = true
    })
    .addCase(ADD_NECTAR_SUCCESS, (state) => {
      state.error = initialState.error
      state.numOfAddNectarAttempts = 0
      state.addingNectarCard = initialState.addingNectarCard
    })
    .addCase(ADD_NECTAR_FAILURE, (state) => {
      state.error = true
      state.numOfAddNectarAttempts += 1
      state.addingNectarCard = false
    })
    .addCase(DELETE_NECTAR, (state) => {
      state.error = initialState.error
      state.deletingNectarCard = true
      state.deletingNectarCardError = initialState.deletingNectarCardError
    })
    .addCase(DELETE_NECTAR_SUCCESS, (state) => {
      state.error = initialState.error
      state.deletingNectarCard = initialState.deletingNectarCard
      state.deletingNectarCardError = initialState.deletingNectarCardError
    })
    .addCase(DELETE_NECTAR_FAILURE, (state) => {
      state.error = true
      state.deletingNectarCard = initialState.deletingNectarCard
      state.deletingNectarCardError = true
    })
    .addCase(UPDATE_NECTAR, (state) => {
      state.error = initialState.error
      state.invalid2faCode = initialState.invalid2faCode
      state.updatingNectar = true
      state.requestCodeError = initialState.requestCodeError
      state.insufficientBalanceError = initialState.insufficientBalanceError
    })
    .addCase(UPDATE_NECTAR_SUCCESS, (state) => {
      state.error = initialState.error
      state.numOfAddNectarAttempts = 0
      state.updatingNectar = initialState.updatingNectar
    })
    .addCase(UPDATE_NECTAR_FAILURE, (state) => {
      state.error = true
      state.numOfAddNectarAttempts += 1
      state.updatingNectar = false
    })
    .addCase(MODAL_CLOSE, (state) => {
      state.error = initialState.error
      state.invalid2faCode = initialState.invalid2faCode
      state.numOfAddNectarAttempts = initialState.numOfAddNectarAttempts
      state.needs2fa = initialState.needs2fa
      state.sentBy = initialState.sentBy
      state.sentTo = initialState.sentTo
      state.requestCodeError = initialState.requestCodeError
      state.insufficientBalanceError = initialState.insufficientBalanceError
    })
    .addCase(TOGGLE_2FA_REQUIRED, (state, { payload: { sentBy, sentTo, needs2fa } }) => {
      state.needs2fa = needs2fa
      state.error = initialState.error
      state.numOfAddNectarAttempts = initialState.numOfAddNectarAttempts
      state.updatingNectar = initialState.updatingNectar
      state.requestCodeError = initialState.requestCodeError
      if (needs2fa) {
        state.sentBy = sentBy
        state.sentTo = sentTo
      } else {
        state.sentBy = initialState.sentBy
        state.sentTo = initialState.sentTo
      }
    })
    .addCase(INVALID_2FA_CODE, (state) => {
      state.invalid2faCode = true
      state.updatingNectar = initialState.updatingNectar
    })
    .addCase(RESET_INVALID_2FA_CODE_ERROR, (state) => {
      state.invalid2faCode = initialState.invalid2faCode
    })
    .addCase(REQUEST_NEW_2FA_CODE, (state) => {
      state.invalid2faCode = initialState.invalid2faCode
      state.requestCodeError = initialState.requestCodeError
      state.insufficientBalanceError = initialState.insufficientBalanceError
    })
    .addCase(REQUEST_NEW_2FA_CODE_ERROR, (state) => {
      state.requestCodeError = true
    })
    .addCase(NECTAR_INSUFFICIENT_BALANCE, (state) => {
      state.updatingNectar = initialState.updatingNectar
      state.error = true
      state.insufficientBalanceError = true
    })
    .addCase(RESET_NECTAR_INSUFFICIENT_BALANCE, (state) => {
      state.error = initialState.error
      state.insufficientBalanceError = initialState.insufficientBalanceError
    }),
)

export default nectarReducer
