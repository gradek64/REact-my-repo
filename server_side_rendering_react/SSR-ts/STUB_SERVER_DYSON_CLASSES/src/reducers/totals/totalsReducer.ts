import { createReducer } from '@reduxjs/toolkit'

import { START_GUEST_CHECKOUT_SUCCESS, GET_COLLECTION_SNAPSHOT_SUCCESS } from '../../actions'
import { TotalsState } from '../../types/reducers'
import { FulfilmentType, GetSnapshotAPIPayload } from 'types/api'

export const initialState: TotalsState = {
  withSavings: null,
  withoutSavings: null,
  saving: null,
  outstanding: null,
  subtotal: undefined,
  delivery: undefined,
}

const getTotalsState = (payload: GetSnapshotAPIPayload): TotalsState => {
  const {
    snapshot: {
      fulfilmentType,
      amounts: {
        total = { withSavings: null, withoutSavings: null, saving: null },
        outstanding = null,
        breakdown = null,
      },
    },
  } = payload

  const subtotal =
    fulfilmentType === FulfilmentType.COLLECTION
      ? Number(total.withoutSavings)
      : breakdown?.find((charge) => charge.type === 'SUBTOTAL')?.total.withoutSavings

  // Chapi doesn't send an amount if free delivery so this stops it being undefined
  const deliveryChargeFallback = fulfilmentType === (FulfilmentType.DELIVERY || FulfilmentType.HD) ? 0 : undefined

  const delivery =
    breakdown?.find((charge) => charge.type === 'SHIPPING')?.total.withoutSavings ?? deliveryChargeFallback

  return { ...total, outstanding, subtotal, delivery }
}

const totalsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, (_, { payload }) => {
      return getTotalsState(payload)
    })
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (_, { payload }) => {
      return getTotalsState(payload)
    }),
)

export default totalsReducer
