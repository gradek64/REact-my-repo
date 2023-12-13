import { ShipmentStatusType } from 'types/api'

export type OrderRetrievalOrders = Array<{
  collectionId: string
  status: ShipmentStatusType
  isAmendable: boolean
  isCancellable: boolean
  extended: boolean
}>

export interface OrderRetrievalStub {
  orderRetrievalType: string
  receiptType: 'SuccessWithReceipt' | 'SuccessWithNoReceipt' | 'BadRequest'
  orders: OrderRetrievalOrders
  isCancellable: boolean
}
