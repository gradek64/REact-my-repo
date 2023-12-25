

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


export interface MetaState {
  customerId: string | null
  id: string | null
  error: boolean | Error
  loading: boolean
  missingBillingAddress: boolean
  missingCustomerDetails: boolean
  hasStockHoldError: boolean
  toggleModalDisableEscClose: boolean
  brand: any | null
  location: Location | null
  modalRemoveScroll: boolean
  orderId: string | null
  previousLocation: Location | null
  snapshotStatus: string | null
  stockHoldStatus: StockHoldStatus
  fulfilmentType: any
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
