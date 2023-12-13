import { START_GUEST_CHECKOUT_SUCCESS, GET_COLLECTION_SNAPSHOT_SUCCESS } from '../../actions'
import { betterInitialGetSnapshotResponse } from '../../config/testUtils/__mocks__/responses'
import { FulfilmentType, GetSnapshotAPIPayload, OrderCharge, SnapshotAmounts } from '../../types/api'
import totalsReducer, { initialState } from './totalsReducer'

const subtotalCharge: OrderCharge = {
  type: 'SUBTOTAL',
  total: {
    withSavings: 96.05,
    withoutSavings: 96.05,
    saving: 0,
  },
}

const deliveryCharge: OrderCharge = {
  type: 'SHIPPING',
  total: {
    withSavings: 3.95,
    withoutSavings: 3.95,
    saving: 0,
  },
}

const amounts: SnapshotAmounts = {
  total: {
    withSavings: 100,
    withoutSavings: 110,
    saving: 10,
  },
  outstanding: 100,
}

const collectionSnapshot: GetSnapshotAPIPayload = {
  ...betterInitialGetSnapshotResponse,
  snapshot: {
    ...betterInitialGetSnapshotResponse.snapshot,
    amounts,
  },
}
const deliverySnapshot: GetSnapshotAPIPayload = {
  ...betterInitialGetSnapshotResponse,
  snapshot: {
    ...betterInitialGetSnapshotResponse.snapshot,
    fulfilmentType: FulfilmentType.DELIVERY,
    amounts: {
      ...amounts,
      breakdown: [subtotalCharge, deliveryCharge],
    },
  },
}

test('When GET_COLLECTION_SNAPSHOT_SUCCESS is dispatched', () => {
  const newCollectionState = totalsReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS(collectionSnapshot))
  expect(newCollectionState).toEqual({
    withSavings: 100,
    withoutSavings: 110,
    saving: 10,
    outstanding: 100,
    subtotal: 110,
    delivery: undefined,
  })

  const newDeliveryState = totalsReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS(deliverySnapshot))
  expect(newDeliveryState).toEqual({
    withSavings: 100,
    withoutSavings: 110,
    saving: 10,
    outstanding: 100,
    subtotal: 96.05,
    delivery: 3.95,
  })
})

test('When START_GUEST_CHECKOUT_SUCCESS is dispatched', () => {
  const newCollectionState = totalsReducer(initialState, START_GUEST_CHECKOUT_SUCCESS(collectionSnapshot))
  expect(newCollectionState).toEqual({
    withSavings: 100,
    withoutSavings: 110,
    saving: 10,
    outstanding: 100,
    subtotal: 110,
    delivery: undefined,
  })

  const newDeliveryState = totalsReducer(initialState, START_GUEST_CHECKOUT_SUCCESS(deliverySnapshot))
  expect(newDeliveryState).toEqual({
    withSavings: 100,
    withoutSavings: 110,
    saving: 10,
    outstanding: 100,
    subtotal: 96.05,
    delivery: 3.95,
  })
})
