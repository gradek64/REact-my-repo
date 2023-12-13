import { createReducer } from '@reduxjs/toolkit'

import {
  START_GUEST_CHECKOUT_SUCCESS,
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  GET_STOCK_HOLD_INFO_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_AGE_RESTRICTIONS_SUCCESS,
  GET_AGE_RESTRICTIONS_FAILURE,
} from '../../actions'
import type { BasketState, ShipmentWithProducts } from 'types/reducers'
import { FulfilmentType, GetSnapshotAPIPayload } from 'types/api'
import { Status } from 'types/Status'

export const initialState: BasketState = {
  loading: false,
  error: false,
  products: [],
  outOfStock: [],
  excludedProducts: [],
  shipments: [],
  productCategoryIds: [],
  ageRestrictions: {
    status: Status.idle,
    products: [],
  },
}

const setInitialState = (state: BasketState, { payload }: { payload: GetSnapshotAPIPayload }) => {
  state.products = payload.snapshot.lines

  const shipments: Record<string, ShipmentWithProducts> = {}

  payload.snapshot.shipments?.forEach((shipment) => {
    shipments[shipment.id] = {
      ...shipment,
      products: [],
      fulfilmentType:
        payload.snapshot.fulfilmentType === FulfilmentType.HD
          ? FulfilmentType.DELIVERY
          : payload.snapshot.fulfilmentType,
    }
  })

  payload.snapshot.lines?.forEach((line) => {
    shipments[line.shipmentId]?.products?.push(line)
  })

  state.shipments = Object.values(shipments)
}

const basketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, setInitialState)
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (state, { payload }) => {
      state.products = payload.snapshot.lines
    })
    .addCase(GET_STOCK_HOLD_INFO_SUCCESS, (state, { payload }) => {
      state.outOfStock = payload.outOfStock || []
      state.excludedProducts = payload.excludedProducts || []
    })
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      state.products = payload.snapshot.lines
    })
    .addCase(GET_PRODUCT_CATEGORY_SUCCESS, (state, { payload }) => {
      state.productCategoryIds = payload.productCategoryIds
    })
    .addCase(GET_AGE_RESTRICTIONS_SUCCESS, (state, { payload }) => {
      state.ageRestrictions.status = Status.resolved
      state.ageRestrictions.products = payload.ageRestrictedIds
    })
    .addCase(GET_AGE_RESTRICTIONS_FAILURE, (state) => {
      state.ageRestrictions.status = Status.rejected
    })
})

export default basketReducer
