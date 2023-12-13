import type { FulfilmentType } from '../api/snapshot'
import type { Brand } from './app'
import { InitialiseSnapshotAPIErrorResponse, GetSnapshotAPIErrorResponse } from '../api/errorResponse'
import { APIResponse } from '../api'

export interface MetaState {
  customerId: string | null
  id: string | null
  error: boolean | Pick<APIResponse<InitialiseSnapshotAPIErrorResponse | GetSnapshotAPIErrorResponse>, 'status'> | Error
  loading: boolean
  missingBillingAddress: boolean
  missingCustomerDetails: boolean
  hasStockHoldError: boolean
  toggleModalDisableEscClose: boolean
  brand: Brand | null
  location: Location | null
  modalRemoveScroll: boolean
  orderId: string | null
  previousLocation: Location | null
  snapshotStatus: string | null
  stockHoldStatus: StockHoldStatus
  fulfilmentType: FulfilmentType
  serverSideCookies: string[]
  missingBookingID: boolean
  incompleteBooking: boolean
  isWcsHandover: boolean
  fulfilmentCreated: boolean
  redirectToArrangeDelivery: boolean
  fatalFulfilmentError: boolean
  redirectToPayment: boolean
  fatalBookingError: boolean
}

interface Location {
  pathname: string
  search: string
  hash: string
}

export interface Details {
  type: string
  advice: string
}

export enum StockHoldStatus {
  IDLE = 'IDLE',
  PARTIAL = 'PARTIAL',
  FAILED = 'FAILED',
}
