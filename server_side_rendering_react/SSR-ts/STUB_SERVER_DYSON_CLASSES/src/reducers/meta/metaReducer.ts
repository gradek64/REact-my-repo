import { createReducer } from '@reduxjs/toolkit'

import {
  GET_COLLECTION_SNAPSHOT,
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  GET_COLLECTION_SNAPSHOT_FAILURE,
  INIT_COLLECTION_SNAPSHOT,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
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
  PREPARE_FOR_CHECKOUT_FAILURE,
  ROUTER_LOCATION_CHANGE,
  START_GUEST_CHECKOUT_FAILURE,
  START_GUEST_CHECKOUT,
  START_GUEST_CHECKOUT_SUCCESS,
  GET_ORDER_RETRIEVAL_SUCCESS,
  FULFILMENT_CREATED_FAILURE,
  FULFILMENT_CREATED_SUCCESS,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILURE,
} from '../../actions'

import { getAdviceFromErrorDetails } from '../../helpers/errorHelpers'
import { hasInStockProducts, hasOutOfStockProducts } from '../../helpers/metaHelpers'

import {
  InitSnapshotFailureActionPayload,
  GetCollectionSnapshotActionPayload,
  GetSnapshotFailureActionPayload,
} from '../../types/actions'
import {
  GetSnapshotAPIErrorAdvice,
  InitSnapshotAPIErrorAdvice,
  InitSnapshotAPINonFatalErrorAdvice,
  FulfilmentType,
  PrepareForCheckoutAPIErrorAdvice,
  CreateFulfilmentAPIErrorAdvice,
} from '../../types/api'
import { StockHoldStatus, MetaState } from '../../types/reducers'

export const initialState: MetaState = {
  loading: false,
  error: false,
  id: null,
  customerId: null,
  missingBillingAddress: false,
  incompleteBooking: false,
  missingCustomerDetails: false,
  stockHoldStatus: StockHoldStatus.IDLE,
  hasStockHoldError: false,
  snapshotStatus: null,
  orderId: null,
  previousLocation: null,
  location: null,
  brand: null,
  fulfilmentType: FulfilmentType.COLLECTION,
  toggleModalDisableEscClose: false,
  modalRemoveScroll: true,
  serverSideCookies: [],
  missingBookingID: false,
  isWcsHandover: true,
  fulfilmentCreated: false,
  redirectToArrangeDelivery: false,
  fatalFulfilmentError: false,
  redirectToPayment: false,
  fatalBookingError: false,
}

const setLoading = (state: MetaState) => {
  state.loading = true
  state.error = false
}
const setErrorAdvice = (
  state: MetaState,
  {
    payload,
  }: {
    payload: InitSnapshotFailureActionPayload | GetSnapshotFailureActionPayload
  },
) => {
  const { error } = payload
  state.loading = false
  state.error = error

  const incompleteBooking = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.INCOMPLETE_BOOKING,
  )

  const missingBillingAddress = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    [InitSnapshotAPIErrorAdvice.PAYMENT_MISSING_BILLING_ADDRESS, InitSnapshotAPIErrorAdvice.PAYMENT_INVALID_TITLE],
  )

  const missingCustomerDetails = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.PAYMENT_MISSING_CUSTOMER_DETAILS,
  )

  if (missingBillingAddress) {
    state.missingBillingAddress = true
    state.customerId = missingBillingAddress.customerId ?? null
  }

  const stockHoldFailedAllocation = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.STOCK_HOLD_FAILED_ALLOCATION,
  )

  if (stockHoldFailedAllocation) {
    state.stockHoldStatus = StockHoldStatus.FAILED
  }

  if (missingCustomerDetails) {
    state.missingCustomerDetails = true
    state.customerId = missingCustomerDetails.customerId ?? null
  }

  if (incompleteBooking) {
    state.incompleteBooking = true
  }
}

/**
 * Saves the ID into state when fetching the snapshot.
 *
 * TODO come up with a better way than duplicating this for GET_STOCK_HOLD_INFO
 * and GET_COLLECTION_SNAPSHOT. Ideally it should all go through a single action.
 */
const setGetting = (state: MetaState, { payload }: { payload: GetCollectionSnapshotActionPayload }) => {
  state.loading = true
  state.error = false
  state.id = payload.id
}

/**
 * For delivery orders, the API can send us either HD or DELIVERY. From a user
 * point of view there's no difference, so we just convert HD to DELIVERY.
 */
const cleanFulfilmentType = (type: FulfilmentType) => (type === FulfilmentType.HD ? FulfilmentType.DELIVERY : type)

const metaReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_STOCK_HOLD_INFO, setGetting)
    .addCase(GET_COLLECTION_SNAPSHOT, setGetting)
    .addCase(INIT_COLLECTION_SNAPSHOT, setLoading)
    .addCase(GET_COLLECTION_SNAPSHOT_FAILURE, setErrorAdvice)
    .addCase(INIT_COLLECTION_SNAPSHOT_FAILURE, setErrorAdvice)
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      const { snapshot } = payload
      state.loading = false
      state.error = false
      state.snapshotStatus = snapshot.status
      state.orderId = snapshot.orderId ?? null
      state.brand = snapshot.source.channelBrand ?? state.brand
      state.hasStockHoldError = initialState.hasStockHoldError
      state.fulfilmentType = cleanFulfilmentType(snapshot.fulfilmentType)
      state.isWcsHandover = snapshot.isWcsHandover

      const productsInStock = hasInStockProducts(payload)
      const productsOutOfStock = hasOutOfStockProducts(payload)
      if (productsInStock && productsOutOfStock) {
        state.stockHoldStatus = StockHoldStatus.PARTIAL
      } else if (productsOutOfStock && !productsInStock) {
        state.stockHoldStatus = StockHoldStatus.FAILED
      }
    })
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      const { id, snapshot, errorStatus } = payload
      state.loading = false
      state.error = false
      state.id = id
      state.snapshotStatus = snapshot.status
      state.orderId = snapshot.orderId ?? null
      state.brand = snapshot.source.channelBrand ?? state.brand
      state.hasStockHoldError = initialState.hasStockHoldError
      state.fulfilmentType = cleanFulfilmentType(snapshot.fulfilmentType)
      state.isWcsHandover = snapshot.isWcsHandover

      if (errorStatus && errorStatus === InitSnapshotAPINonFatalErrorAdvice.STOCK_HOLD_PARTIAL_ALLOCATION) {
        state.stockHoldStatus = StockHoldStatus.PARTIAL
      }
    })
    .addCase(PREPARE_FOR_CHECKOUT_SUCCESS, (state, { payload: { id } }) => {
      state.id = id
    })
    .addCase(PREPARE_FOR_CHECKOUT_FAILURE, (state, { payload: { error } }) => {
      const missingBookingID = getAdviceFromErrorDetails<PrepareForCheckoutAPIErrorAdvice>(
        error,
        PrepareForCheckoutAPIErrorAdvice.MISSING_BOOKING_ID,
      )
      if (missingBookingID) {
        state.missingBookingID = true
      }
    })
    .addCase(START_GUEST_CHECKOUT_FAILURE, (state, { payload: { error } }) => {
      state.error = error
    })
    .addCase(PLACE_ORDER_SUCCESS, (state, { payload }) => {
      state.orderId = payload.order.id
    })
    .addCase(GET_ORDER_CONFIRMATION_SUCCESS, (state, { payload }) => {
      const fulfilments = payload.order.fulfilments
      const type = fulfilments.every((fulfilment) => fulfilment.type === fulfilments[0].type)
        ? payload.order.fulfilments[0].type
        : FulfilmentType.MIXED
      state.fulfilmentType = cleanFulfilmentType(type)
    })
    .addCase(GET_ORDER_RETRIEVAL_SUCCESS, (state, { payload }) => {
      const fulfilments = payload.order.fulfilments
      const type = fulfilments.every((fulfilment) => fulfilment.type === fulfilments[0].type)
        ? payload.order.fulfilments[0].type
        : FulfilmentType.MIXED
      state.fulfilmentType = cleanFulfilmentType(type)
    })
    .addCase(SET_FATAL_ERROR, (state) => {
      state.error = true
    })
    .addCase(ROUTER_LOCATION_CHANGE, (state, { payload: { location } }) => {
      state.previousLocation = state.location
      state.location = location
    })
    .addCase(TOGGLE_MODAL_DISABLE_ESC_CLOSE, (state) => {
      state.toggleModalDisableEscClose = !state.toggleModalDisableEscClose
    })
    .addCase(SET_MODAL_REMOVE_SCROLL, (state, { payload }) => {
      state.modalRemoveScroll = payload
    })
    .addCase(GET_STOCK_HOLD_INFO_FAILURE, (state) => {
      state.hasStockHoldError = true
    })
    .addCase(ADD_SERVER_SIDE_COOKIES, (state, { payload }) => {
      state.serverSideCookies = state.serverSideCookies.concat(payload)
    })
    .addCase(UPDATE_CREDIT_APPLICATION, setGetting)
    .addCase(START_GUEST_CHECKOUT, setGetting)
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (state, { payload }) => {
      const { snapshot } = payload

      state.loading = initialState.loading
      state.error = initialState.error
      state.snapshotStatus = snapshot.status
      state.orderId = snapshot.orderId ?? null
      state.brand = snapshot.source.channelBrand ?? state.brand
      state.hasStockHoldError = initialState.hasStockHoldError
      state.fulfilmentType = cleanFulfilmentType(snapshot.fulfilmentType)
      state.isWcsHandover = snapshot.isWcsHandover
    })
    .addCase(FULFILMENT_CREATED_SUCCESS, (state) => {
      state.incompleteBooking = true
      state.fulfilmentCreated = true
    })
    .addCase(FULFILMENT_CREATED_FAILURE, (state, { payload: { error, fatal } }) => {
      const redirectToArrangeDelivery = getAdviceFromErrorDetails(error, [
        CreateFulfilmentAPIErrorAdvice.POSTCODE_MISMATCH,
        CreateFulfilmentAPIErrorAdvice.STOCK_HOLD_EXCLUSION_FAILURE,
        CreateFulfilmentAPIErrorAdvice.STOCK_HOLD_FAILED_ALLOCATION,
      ])

      state.incompleteBooking = true
      state.fulfilmentCreated = false
      state.redirectToArrangeDelivery = !!redirectToArrangeDelivery
      state.fatalFulfilmentError = fatal || !redirectToArrangeDelivery
    })
    .addCase(CREATE_BOOKING_SUCCESS, (state) => {
      state.redirectToPayment = true
    })
    .addCase(CREATE_BOOKING_FAILURE, (state) => {
      state.fatalBookingError = true
    }),
)

export default metaReducer
