import { createReducer } from '@reduxjs/toolkit'

import {
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  GET_ORDER_CONFIRMATION_SUCCESS,
  START_GUEST_CHECKOUT_SUCCESS,
  GET_ORDER_RETRIEVAL_SUCCESS,
} from '../../actions'
import { getFulfilmentStore } from '../../helpers/orderHelpers'
import { Store, GetSnapshotAPIPayload } from '../../types/api'
import { StoreState } from '../../types/reducers'

export const initialState: StoreState = {
  id: undefined,
  name: undefined,
  postcode: undefined,
}

const setInitialState = (state: StoreState, { payload }: { payload: GetSnapshotAPIPayload }) => {
  if (!payload.snapshot.store) return

  state.id = payload.snapshot.store.id
  state.name = payload.snapshot.store.legacyName
  state.postcode = payload.snapshot.store.postcode
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, setInitialState)
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, setInitialState)
    .addCase(START_GUEST_CHECKOUT_SUCCESS, setInitialState)
    .addCase(GET_ORDER_CONFIRMATION_SUCCESS, (state, { payload }) => {
      const store = getFulfilmentStore(payload.order) as Store
      if (store) {
        state.id = store.id
        state.name = store.name
        state.postcode = store.postcode
      }
    })
    .addCase(GET_ORDER_RETRIEVAL_SUCCESS, (state, { payload }) => {
      const store = getFulfilmentStore(payload.order) as Store
      if (store) {
        state.id = store.id
        state.name = store.name
        state.postcode = store.postcode
      }
    })
})

export default reducer
