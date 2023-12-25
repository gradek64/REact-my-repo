import { createReducer } from '@reduxjs/toolkit'

import {
  GET_STOCK_HOLD_INFO,
} from '../../actions'

import { StockHoldStatus } from 'types/reducers'

export const initialState = {
   loading: false,
  error: false,
  id: null,
  customerId: null,
  missingBillingAddress: false,
  incompleteBooking: false,
  missingCustomerDetails: false,
  stockHoldStatus: 'IDLE',
  hasStockHoldError: false,
  snapshotStatus: null,
  orderId: null,
  previousLocation: null,
  location: null,
  brand: null,
  fulfilmentType: 'COLLECTION',
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
 
/* const setLoading = (state: MetaState) => {
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
  //state.error = error

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
} */

/**
 * Saves the ID into state when fetching the snapshot.
 *
 * TODO come up with a better way than duplicating this for GET_STOCK_HOLD_INFO
 * and GET_COLLECTION_SNAPSHOT. Ideally it should all go through a single action.
 */
/* const setGetting = (state: MetaState, { payload }: { payload: GetCollectionSnapshotActionPayload }) => {
  state.loading = true
  state.error = false
  state.id = payload.id
} */

/**
 * For delivery orders, the API can send us either HD or DELIVERY. From a user
 * point of view there's no difference, so we just convert HD to DELIVERY.
 */
//const cleanFulfilmentType = (type: FulfilmentType) => (type === FulfilmentType.HD ? FulfilmentType.DELIVERY : type)

const metaReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(GET_STOCK_HOLD_INFO, () => { })

)

export default metaReducer
