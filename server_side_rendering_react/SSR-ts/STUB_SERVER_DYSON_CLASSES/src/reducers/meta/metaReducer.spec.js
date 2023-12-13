import metaReducer, { initialState } from './metaReducer'

import {
  GET_COLLECTION_SNAPSHOT,
  INIT_COLLECTION_SNAPSHOT,
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_COLLECTION_SNAPSHOT_FAILURE,
  INIT_COLLECTION_SNAPSHOT_FAILURE,
  PLACE_ORDER_SUCCESS,
  GET_ORDER_CONFIRMATION_SUCCESS,
  SET_FATAL_ERROR,
  TOGGLE_MODAL_DISABLE_ESC_CLOSE,
  SET_MODAL_REMOVE_SCROLL,
  GET_STOCK_HOLD_INFO_FAILURE,
  GET_STOCK_HOLD_INFO,
  ADD_SERVER_SIDE_COOKIES,
  UPDATE_CREDIT_APPLICATION,
  PREPARE_FOR_CHECKOUT_SUCCESS,
  START_GUEST_CHECKOUT_FAILURE,
  START_GUEST_CHECKOUT,
  START_GUEST_CHECKOUT_SUCCESS,
  GET_ORDER_RETRIEVAL_SUCCESS,
  FULFILMENT_CREATED_SUCCESS,
  FULFILMENT_CREATED_FAILURE,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILURE,
} from '../../actions'

import {
  PAYMENT_MISSING_BILLING_ADDRESS,
  PAYMENT_INVALID_TITLE,
  GENERIC_ERROR,
  POSTCODE_MISMATCH,
} from '../../config/testUtils/__mocks__/responses/errors'
import { StockHoldStatus } from '../../types/reducers'
import { FulfilmentType } from '../../types/api/snapshot'
import { CreditApplicationStatus } from '../../types/api'
import {
  getOrderResponse,
  getOrderResponseWithDeliveryFulfilment,
  getOrderResponseWithMixedFulfilment,
} from '../../config/testUtils/__mocks__/responses'

const loadingState = {
  ...initialState,
  loading: true,
  error: false,
}

const errorState = {
  ...initialState,
  loading: false,
  error: true,
}

const initAction = { type: '', payload: undefined }
const mockSnapshot = { id: '123456' }
const mockError = new Error('something went wrong')
const mockErrorMissingAddress = { response: { body: { error: PAYMENT_MISSING_BILLING_ADDRESS.error } } }
const mockErrorInvalidTitle = { response: { body: { error: PAYMENT_INVALID_TITLE.error } } }

const mockInitialisedSnapshot = {
  ...initialState,
  stockHoldStatus: StockHoldStatus.IDLE,
  id: '123456',
  snapshotStatus: 'SnapshotSuccessfullyInitialised',
}

describe('When the prepay state is initialised', () => {
  it('should have the correct starting values', () => {
    expect(metaReducer(undefined, initAction)).toEqual(initialState)
  })
})

describe('When the loading state is idle', () => {
  const prevState = errorState

  describe('and a prepay get call is triggered', () => {
    it('should remove the current error and activate the loading state', () => {
      const newState = metaReducer(prevState, GET_COLLECTION_SNAPSHOT({ id: 'snapshotIdFromUrl' }))
      expect(newState).toEqual({
        ...prevState,
        error: false,
        loading: true,
        id: 'snapshotIdFromUrl',
      })
    })
  })

  describe('and a prepay get call is triggered (via the get stock hold action)', () => {
    it('should remove the current error and activate the loading state', () => {
      const newState = metaReducer(prevState, GET_STOCK_HOLD_INFO({ id: 'snapshotIdFromUrl' }))
      expect(newState).toEqual({
        ...prevState,
        error: false,
        loading: true,
        id: 'snapshotIdFromUrl',
      })
    })
  })

  describe('and a prepay initialise call is triggered', () => {
    it('should remove the current error and activate the loading state', () => {
      const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT())
      expect(newState).toEqual({
        ...prevState,
        error: false,
        loading: true,
      })
    })
  })
})

describe('When the loading state is active', () => {
  const prevState = { ...loadingState, id: mockSnapshot.id }

  describe('and a prepay get call is successful', () => {
    const newState = metaReducer(
      prevState,
      GET_COLLECTION_SNAPSHOT_SUCCESS({
        snapshot: {
          ...mockSnapshot,
          source: { deviceId: '4d84b94d-96ef-4b50-b8f5-35e85662e05d', channelBrand: 'ARGOS' },
          status: 'OrderSnapshotOrderPlaced',
          fulfilmentType: FulfilmentType.COLLECTION,
          orderId: 'id',
          isWcsHandover: true,
          lines: [],
          stockHolds: [{ holds: [] }],
        },
      }),
    )

    it('disable the loading state', () => {
      expect(newState.error).toEqual(false)
      expect(newState.loading).toEqual(false)
    })

    it('should add the snapshot to the state', () => {
      expect(newState).toStrictEqual({
        ...mockInitialisedSnapshot,
        snapshotStatus: 'OrderSnapshotOrderPlaced',
        orderId: 'id',
        isWcsHandover: true,
        brand: 'ARGOS',
        fulfilmentType: FulfilmentType.COLLECTION,
      })
    })
  })

  describe('and a prepay initialise call is successful', () => {
    const newState = metaReducer(
      prevState,
      INIT_COLLECTION_SNAPSHOT_SUCCESS({
        ...mockSnapshot,
        snapshot: {
          status: 'SnapshotSuccessfullyInitialised',
          source: { channelBrand: 'HABITAT' },
          isWcsHandover: true,
          fulfilmentType: FulfilmentType.COLLECTION,
        },
      }),
    )

    it('disable the loading state', () => {
      expect(newState.error).toEqual(false)
      expect(newState.loading).toEqual(false)
    })

    it('should add the snapshot to the state', () => {
      expect(newState).toStrictEqual({
        ...mockInitialisedSnapshot,
        brand: 'HABITAT',
        isWcsHandover: true,
        fulfilmentType: FulfilmentType.COLLECTION,
      })
    })
  })

  describe('and a prepay get call fails', () => {
    const newState = metaReducer(prevState, GET_COLLECTION_SNAPSHOT_FAILURE({ error: mockError }))

    it('disable the loading state and add the error', () => {
      expect(newState).toEqual({
        ...prevState,
        error: mockError,
        loading: false,
      })
    })
  })

  describe('and a prepay initialise call fails', () => {
    const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT_FAILURE({ error: mockError }))

    it('disable the loading state and add the error', () => {
      expect(newState).toEqual({
        ...initialState,
        id: '123456',
        error: mockError,
        loading: false,
      })
    })
  })

  describe('and a prepay initialise call fails due to a missing billing address', () => {
    const newState = metaReducer(
      prevState,
      INIT_COLLECTION_SNAPSHOT_FAILURE({ error: mockErrorMissingAddress.response }),
    )

    it('disable the loading state and add set the customer id from the error to state', () => {
      expect(newState).toEqual({
        ...initialState,
        id: '123456',
        error: mockErrorMissingAddress.response,
        loading: false,
        customerId: '1787636',
        missingBillingAddress: true,
      })
    })
  })

  describe('and a prepay initialise call fails due to an invalid title', () => {
    const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT_FAILURE({ error: mockErrorInvalidTitle.response }))

    it('disable the loading state and add set the customer id from the error to state', () => {
      expect(newState).toEqual({
        ...initialState,
        id: '123456',
        error: mockErrorInvalidTitle.response,
        loading: false,
        customerId: '1787636',
        missingBillingAddress: true,
      })
    })
  })
})

test('When an order is placed ', () => {
  const newState = metaReducer(
    initialState,
    PLACE_ORDER_SUCCESS({ status: 'OrderSnapshotOrderPending', order: { id: 'id' } }),
  )
  expect(newState).toEqual({
    ...initialState,
    orderId: 'id',
  })
})

test('Should identify the fulfilment type when getting an order confirmation', () => {
  const collectionState = metaReducer(initialState, GET_ORDER_CONFIRMATION_SUCCESS({ order: getOrderResponse }))
  expect(collectionState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.COLLECTION,
  })

  const deliveryState = metaReducer(
    initialState,
    GET_ORDER_CONFIRMATION_SUCCESS({ order: getOrderResponseWithDeliveryFulfilment }),
  )
  expect(deliveryState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.DELIVERY,
  })

  const mixedState = metaReducer(
    initialState,
    GET_ORDER_CONFIRMATION_SUCCESS({ order: getOrderResponseWithMixedFulfilment }),
  )
  expect(mixedState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.MIXED,
  })
})

test('Should identify the fulfilment type when retrieving order', () => {
  const collectionState = metaReducer(initialState, GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderResponse }))
  expect(collectionState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.COLLECTION,
  })

  const deliveryState = metaReducer(
    initialState,
    GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderResponseWithDeliveryFulfilment }),
  )
  expect(deliveryState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.DELIVERY,
  })

  const mixedState = metaReducer(
    initialState,
    GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderResponseWithMixedFulfilment }),
  )
  expect(mixedState).toEqual({
    ...initialState,
    fulfilmentType: FulfilmentType.MIXED,
  })
})

test('When a fatal error occurs, error should be set', () => {
  const newState = metaReducer(initialState, SET_FATAL_ERROR({ error: mockError }))
  expect(newState).toEqual({ ...initialState, error: true })
})

test('When a location change action is dispatched, previousLocation and location should be updated', () => {
  const newState = metaReducer(
    { ...initialState, location: { pathname: 'prevLoc' } },
    { type: '@@router/LOCATION_CHANGE', payload: { location: { pathname: 'new path' } } },
  )
  expect(newState).toEqual({
    ...initialState,
    previousLocation: { pathname: 'prevLoc' },
    location: { pathname: 'new path' },
  })
})

test('When the brand is missing from the get response, default to Argos', () => {
  const prevState = { ...loadingState, id: mockSnapshot.id }
  const getState = metaReducer(
    prevState,
    GET_COLLECTION_SNAPSHOT_SUCCESS({
      snapshot: {
        ...mockSnapshot,
        source: { deviceId: '4d84b94d-96ef-4b50-b8f5-35e85662e05d' },
        status: 'OrderSnapshotOrderPlaced',
        orderId: 'id',
        isWcsHandover: true,
        lines: [],
        stockHolds: [{ holds: [] }],
        fulfilmentType: FulfilmentType.COLLECTION,
      },
    }),
  )

  expect(getState).toStrictEqual({
    ...mockInitialisedSnapshot,
    snapshotStatus: 'OrderSnapshotOrderPlaced',
    orderId: 'id',
    brand: null,
    stockHoldStatus: StockHoldStatus.IDLE,
    fulfilmentType: FulfilmentType.COLLECTION,
  })
})

test('When the brand is missing from the initial response, default to Argos', () => {
  const prevState = { ...loadingState, id: mockSnapshot.id }
  const initState = metaReducer(
    prevState,
    INIT_COLLECTION_SNAPSHOT_SUCCESS({
      ...mockSnapshot,
      snapshot: {
        status: 'SnapshotSuccessfullyInitialised',
        source: {},
        isWcsHandover: true,
        fulfilmentType: FulfilmentType.COLLECTION,
      },
    }),
  )

  expect(initState).toStrictEqual({ ...mockInitialisedSnapshot })
})

test('When address finder dropdown is opened, a flag should be set', () => {
  let newState = metaReducer(initialState, {})
  expect(newState).toEqual({ ...initialState, toggleModalDisableEscClose: false })
  newState = metaReducer(initialState, TOGGLE_MODAL_DISABLE_ESC_CLOSE())
  expect(newState).toEqual({ ...initialState, toggleModalDisableEscClose: true })
  newState = metaReducer(newState, TOGGLE_MODAL_DISABLE_ESC_CLOSE())
  expect(newState).toEqual({ ...initialState, toggleModalDisableEscClose: false })
})

test('When product PDP response fails should flag with Stock Hold error', () => {
  let newState = metaReducer(initialState, {})
  expect(newState).toEqual({ ...initialState, hasStockHoldError: false })
  newState = metaReducer(initialState, GET_STOCK_HOLD_INFO_FAILURE())
  expect(newState).toEqual({ ...initialState, hasStockHoldError: true })
})

test('When toggling the modal removeScroll plugin', () => {
  const prevState = metaReducer(initialState, {})
  expect(prevState).toEqual({ ...initialState, modalRemoveScroll: true })

  const removeScrollDisabledState = metaReducer(prevState, SET_MODAL_REMOVE_SCROLL(false))
  expect(removeScrollDisabledState).toEqual({ ...initialState, modalRemoveScroll: false })

  const removeScrollEnabledState = metaReducer(removeScrollDisabledState, SET_MODAL_REMOVE_SCROLL(true))
  expect(removeScrollEnabledState).toEqual({ ...initialState, modalRemoveScroll: true })
})

test('When the error status is stockhold partial allocation, the stock hold status should be PARTIAL', () => {
  const snapshot = {
    ...mockInitialisedSnapshot,
    orderId: '1234',
    status: 'ORDER_SNAPSHOT_INITIALISED',
    source: {},
  }

  const errorStatus = 'STOCK_HOLD_PARTIAL_ALLOCATION'
  const id = '123456'
  const prevState = {
    ...initialState,
    id: '123456',
  }

  const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ id, snapshot, errorStatus }))
  expect(newState).toEqual({
    ...prevState,
    orderId: '1234',
    snapshotStatus: 'ORDER_SNAPSHOT_INITIALISED',
    stockHoldStatus: StockHoldStatus.PARTIAL,
  })
})

test('When the error status is stock info error, the stock hold status should be IDLE', () => {
  const snapshot = {
    ...mockInitialisedSnapshot,
    orderId: '1234',
    status: 'ORDER_SNAPSHOT_INITIALISED',
    source: {},
  }
  const errorStatus = 'STOCK_INFO_ERROR'
  const id = '123456'
  const prevState = {
    ...initialState,
    id: '123456',
  }

  const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ id, snapshot, errorStatus }))
  expect(newState).toEqual({
    ...prevState,
    orderId: '1234',
    snapshotStatus: 'ORDER_SNAPSHOT_INITIALISED',
    stockHoldStatus: StockHoldStatus.IDLE,
  })
})

test('When the error status is stock hold allocation failed, the stock hold status should be FAILED', () => {
  const prevState = initialState
  const error = {
    body: {
      error: {
        message: 'Stock hold could not be made for any product(s)',
        details: [{ advice: 'STOCK_HOLD_FAILED_ALLOCATION' }],
      },
    },
  }

  const newState = metaReducer(prevState, INIT_COLLECTION_SNAPSHOT_FAILURE({ error }))
  expect(newState).toEqual({
    ...prevState,
    error,
    stockHoldStatus: StockHoldStatus.FAILED,
  })
})

test('Given ADD_SERVER_SIDE_COOKIES is dispatched, Then append the payload to the cookies already in state', () => {
  const firstPayload = ['cookie1=value1', 'cookie2=value2']
  const firstState = metaReducer(initialState, ADD_SERVER_SIDE_COOKIES(firstPayload))

  expect(firstState).toEqual({ ...initialState, serverSideCookies: firstPayload })

  const secondPayload = ['cookie3=value3', 'cookie4=value4']
  const secondState = metaReducer(firstState, ADD_SERVER_SIDE_COOKIES(secondPayload))

  expect(secondState).toEqual({ ...initialState, serverSideCookies: [...firstPayload, ...secondPayload] })
})

test('When updating the credit application, The snapshot id should be set', () => {
  const id = '20ec757a-4f50-43fd-aa35-d79bfc3bf506'
  const newState = metaReducer(
    initialState,
    UPDATE_CREDIT_APPLICATION({ creditStatus: CreditApplicationStatus.FAILED, id, cookie: 'mockCookie' }),
  )
  expect(newState).toEqual({ ...initialState, id, loading: true })
})

test('When PREPARE_FOR_CHECKOUT_SUCCESS is dispatched, The snapshot id should be set', () => {
  const id = '20ec757a-4f50-43fd-aa35-d79bfc3bf506'
  const newState = metaReducer(initialState, PREPARE_FOR_CHECKOUT_SUCCESS({ id }))
  expect(newState).toEqual({ ...initialState, id })
})

test('When START_GUEST_CHECKOUT_FAILURE is dispatched, Then error should be set in state', () => {
  const error = new Error('oh no something broke :(')
  const newState = metaReducer(initialState, START_GUEST_CHECKOUT_FAILURE({ error }))
  expect(newState).toEqual({
    ...initialState,
    error,
  })
})

test('When START_GUEST_CHECKOUT is dispatched, The snapshot id should be set', () => {
  const id = '20ec757a-4f50-43fd-aa35-d79bfc3bf506'
  const newState = metaReducer(
    initialState,
    START_GUEST_CHECKOUT({ cookie: 'cookie', id, onSessionCreated: () => undefined }),
  )
  expect(newState).toEqual({ ...initialState, id, loading: true })
})

describe('When START_GUEST_CHECKOUT_SUCCESS is dispatched', () => {
  const prevState = { ...loadingState, id: mockSnapshot.id }
  const newState = metaReducer(
    prevState,
    START_GUEST_CHECKOUT_SUCCESS({
      snapshot: {
        ...mockSnapshot,
        source: { deviceId: '4d84b94d-96ef-4b50-b8f5-35e85662e05d', channelBrand: 'ARGOS' },
        status: 'OrderSnapshotOrderPlaced',
        fulfilmentType: FulfilmentType.COLLECTION,
        isWcsHandover: true,
        orderId: 'id',
        lines: [],
        stockHolds: [{ holds: [] }],
      },
    }),
  )

  it('should disable the loading state', () => {
    expect(newState.error).toEqual(false)
    expect(newState.loading).toEqual(false)
  })

  it('should add the snapshot to the state', () => {
    expect(newState).toStrictEqual({
      ...mockInitialisedSnapshot,
      snapshotStatus: 'OrderSnapshotOrderPlaced',
      orderId: 'id',
      isWcsHandover: true,
      brand: 'ARGOS',
      fulfilmentType: FulfilmentType.COLLECTION,
    })
  })
})

test('When FULFILMENT_CREATED_SUCCESS is dispatched, fulfilmentCreated should be set to true', () => {
  const newState = metaReducer(initialState, FULFILMENT_CREATED_SUCCESS())
  expect(newState.fulfilmentCreated).toEqual(true)
})

test('When FULFILMENT_CREATED_FAILURE is dispatched without a validation error, fulfilmentCreated should be set to false', () => {
  const prevState = { ...initialState, fulfilmentCreated: true }

  const newState = metaReducer(
    prevState,
    FULFILMENT_CREATED_FAILURE({
      error: {
        body: GENERIC_ERROR,
      },
    }),
  )
  expect(newState.fulfilmentCreated).toEqual(false)
})

test('When FULFILMENT_CREATED_FAILURE is dispatched with a validation error, redirectToArrangeDelivery should be set to true', () => {
  const newState = metaReducer(
    initialState,
    FULFILMENT_CREATED_FAILURE({
      error: {
        body: POSTCODE_MISMATCH,
      },
    }),
  )
  expect(newState.fulfilmentCreated).toEqual(false)
  expect(newState.redirectToArrangeDelivery).toEqual(true)
})

test('When CREATE_BOOKING_SUCCESS is dispatched, redirectToPayment is set to true', () => {
  const newState = metaReducer(initialState, CREATE_BOOKING_SUCCESS())
  expect(newState.redirectToPayment).toEqual(true)
})

test('When CREATE_BOOKING_FAILURE is dispatched, fatalBookingError is set to true', () => {
  const newState = metaReducer(initialState, CREATE_BOOKING_FAILURE())
  expect(newState.fatalBookingError).toEqual(true)
})
