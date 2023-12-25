import { createReducer } from '@reduxjs/toolkit'

import { GET_WALLET_SUCCESS, GET_WALLET_FAILURE } from '../../actions'

export const initialState = {
  savedPaymentMethods: [],
  error: false,
  status: 'IDLE',
  datacashMigrationAlert: undefined,
}

const walletReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_WALLET_SUCCESS, (state, { payload }) => {
      state.error = false
      state.status = 'Status.resolved'
    })
    .addCase(GET_WALLET_FAILURE, (state) => {
      state.status = 'Status.rejected'
      state.error = true
    })
)

export default walletReducer
