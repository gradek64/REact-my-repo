import storeReducer, { initialState } from './storeReducer'
import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_ORDER_CONFIRMATION_SUCCESS,
  GET_ORDER_RETRIEVAL_SUCCESS,
} from '../../actions'
import {
  betterInitialGetSnapshotResponse,
  getOrderResponse,
  getProductsResponse,
  getOrderResponseWithoutStore,
  getOrderRetrievalResponse,
  getOrderRetrievalResponseWithoutStore,
} from '../../config/testUtils/__mocks__/responses'
import { InitSnapshotAPIPayload } from '../../types/api'

const mockGetProducts = { partNumbers: ['123', '456'], products: getProductsResponse }

const store = {
  id: '140',
  legacyName: 'Pimlico Argos in Sainsburys (Victoria)',
  postcode: 'SW1V 1DT',
}

const snapshotPayloadWithStore: InitSnapshotAPIPayload = {
  id: 'snapshotId',
  snapshot: {
    ...betterInitialGetSnapshotResponse.snapshot,
    store,
  },
}

const snapshotPayloadWithoutStore: InitSnapshotAPIPayload = {
  id: 'snapshotId',
  snapshot: {
    ...betterInitialGetSnapshotResponse.snapshot,
    store: undefined,
  },
}

describe('Given INIT_COLLECTION_SNAPSHOT_SUCCESS is dispatched', () => {
  test('And the store is included in the payload', () => {
    const newState = storeReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS(snapshotPayloadWithStore))
    expect(newState).toEqual({
      id: store.id,
      name: store.legacyName,
      postcode: store.postcode,
    })
  })

  test('And the store is not included in the payload', () => {
    const newState = storeReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS(snapshotPayloadWithoutStore))
    expect(newState).toEqual(initialState)
  })
})

describe('Given GET_COLLECTION_SNAPSHOT_SUCCESS is dispatched', () => {
  test('And the store is included in the payload', () => {
    const newState = storeReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS(snapshotPayloadWithStore))
    expect(newState).toEqual({
      id: store.id,
      name: store.legacyName,
      postcode: store.postcode,
    })
  })

  test('And the store is not included in the payload', () => {
    const newState = storeReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS(snapshotPayloadWithoutStore))
    expect(newState).toEqual(initialState)
  })
})

describe('Given GET_ORDER_CONFIRMATION_SUCCESS is dispatched', () => {
  const { partNumbers, products } = mockGetProducts
  test('And the store is included in the payload', () => {
    const newState = storeReducer(
      initialState,
      GET_ORDER_CONFIRMATION_SUCCESS({ order: getOrderResponse, partNumbers, products }),
    )
    expect(newState).toEqual({
      id: '9044',
      name: 'Stevenage',
      postcode: 'SG1 1XN',
    })
  })
  test('And the store is not included in the payload', () => {
    const newState = storeReducer(
      initialState,
      GET_ORDER_CONFIRMATION_SUCCESS({ order: getOrderResponseWithoutStore, partNumbers, products }),
    )
    expect(newState).toEqual(initialState)
  })
})

describe('Given GET_ORDER_RETRIEVAL_SUCCESS is dispatched', () => {
  test('And the store is included in the payload', () => {
    const newState = storeReducer(initialState, GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderRetrievalResponse }))
    expect(newState).toEqual({
      id: '9044',
      name: 'Stevenage',
      postcode: 'SG1 1XN',
    })
  })

  test('And the store is not included in the payload', () => {
    const newState = storeReducer(
      initialState,
      GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderRetrievalResponseWithoutStore }),
    )
    expect(newState).toEqual(initialState)
  })
})
