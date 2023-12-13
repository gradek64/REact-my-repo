import { createReducer } from '@reduxjs/toolkit'

import { GET_WALLET_SUCCESS, GET_WALLET_FAILURE, SET_FEATURES } from '../../actions'
import { DatacashMigrationAlertType, WalletState } from '../../types/reducers'
import { Status } from '../../types/Status'
import { PaymentMethod } from '../../types/api'

export const initialState: WalletState = {
  savedPaymentMethods: [],
  error: false,
  status: Status.idle,
  datacashMigrationAlert: undefined,
}

const walletReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_WALLET_SUCCESS, (state, { payload }) => {
      state.error = false
      state.status = Status.resolved
      state.savedPaymentMethods = payload.savedPaymentMethods
    })
    .addCase(GET_WALLET_FAILURE, (state) => {
      state.status = Status.rejected
      state.error = true
    })
    .addCase(SET_FEATURES, (state, { payload }) => {
      const { pciOnly, pciAndArgosCard, argosCardOnly } = payload

      const hasSavedDatacashArgosCard = state.savedPaymentMethods.some(
        (method) => method.paymentMethod === PaymentMethod.CARD_ARGOS_CREDIT && method.token.length <= 30,
      )
      const hasSavedArgosCard = state.savedPaymentMethods.some(
        (method) => method.paymentMethod === PaymentMethod.CARD_ARGOS_CREDIT,
      )
      const hasSavedDatacashPCI = state.savedPaymentMethods.some(
        (method) => method.token.length <= 30 && method.paymentMethod === PaymentMethod.CARD_DEBIT,
      )

      const showPCIOnlyAlert = pciOnly && hasSavedDatacashPCI && !hasSavedArgosCard
      const showPCIAndArgosCardAlert = pciAndArgosCard && hasSavedDatacashPCI && hasSavedArgosCard
      const showArgosCardOnlyAlert = argosCardOnly && hasSavedDatacashArgosCard

      if (showPCIOnlyAlert) {
        state.datacashMigrationAlert = DatacashMigrationAlertType.PCI_ONLY
      } else if (showPCIAndArgosCardAlert) {
        state.datacashMigrationAlert = DatacashMigrationAlertType.PCI_AND_ARGOS_CARD
      } else if (showArgosCardOnlyAlert) {
        state.datacashMigrationAlert = DatacashMigrationAlertType.ARGOS_CARD
      }

      if ((pciAndArgosCard && hasSavedArgosCard) || (pciOnly && !hasSavedArgosCard)) {
        state.savedPaymentMethods = state.savedPaymentMethods.filter(
          (method) => method.token.length > 30 || method.paymentMethod !== PaymentMethod.CARD_DEBIT,
        )
      }

      if (argosCardOnly && hasSavedDatacashArgosCard) {
        state.savedPaymentMethods = state.savedPaymentMethods.filter((method) => method.token.length > 30)
      }
    }),
)

export default walletReducer
