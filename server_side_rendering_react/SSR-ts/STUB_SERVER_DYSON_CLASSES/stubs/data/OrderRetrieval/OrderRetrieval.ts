import APILogger from '../../helpers/APILogger'
import { OrderRetrievalOrders, OrderRetrievalStub, SerialisableStubObject } from '../../../src/types/stubs'
import { ShipmentStatusType } from 'types/api'

export const getCollectionId = (index: number) => `FT091${790 + index}`

const VAT_RECEIPT_TYPE = 'SuccessWithReceipt'
const ORDER_RETRIEVAL_TYPE = 'OrderRetrieved'
const IS_CANCELLABLE = true
const createOrder = (index: number) => {
  return {
    collectionId: getCollectionId(index),
    isAmendable: true,
    isCancellable: true,
    status: ShipmentStatusType.READY_TO_COLLECT,
    extended: false,
  }
}

class OrderRetrieval implements SerialisableStubObject<OrderRetrievalStub> {
  private _orderRetrievalType: string
  private _receiptType: 'SuccessWithReceipt' | 'SuccessWithNoReceipt' | 'BadRequest'
  private _orders: OrderRetrievalOrders
  private _isCancellable: boolean

  buildOrders = (val: number) => {
    for (let index = this._orders?.length; index < val; index += 1) {
      this._orders.push(createOrder(index))
    }

    if (val < this._orders?.length) {
      this._orders = this._orders.slice(0, val)
    }
  }

  setDefaults() {
    this._orderRetrievalType = ORDER_RETRIEVAL_TYPE
    this._receiptType = VAT_RECEIPT_TYPE
    this._isCancellable = IS_CANCELLABLE
    this._orders = [createOrder(0)]
  }

  constructor() {
    APILogger('API: Creating Order Retrieval!')
    this.setDefaults()
  }

  toJson() {
    return {
      orderRetrievalType: this._orderRetrievalType,
      receiptType: this._receiptType,
      orders: this._orders,
      isCancellable: this._isCancellable,
    }
  }

  fromJson(json: OrderRetrievalStub) {
    this.orderRetrievalType = json.orderRetrievalType || ORDER_RETRIEVAL_TYPE
    this.receiptType = json.receiptType || VAT_RECEIPT_TYPE
    this.isCancellable = json.isCancellable || IS_CANCELLABLE
    this.orders = json.orders || [createOrder(0)]
  }

  reset() {
    this.setDefaults()
  }

  get orderRetrievalType() {
    return this._orderRetrievalType
  }

  set orderRetrievalType(type) {
    this._orderRetrievalType = type
  }

  get receiptType() {
    return this._receiptType
  }

  set receiptType(type) {
    this._receiptType = type
  }

  get orders() {
    return this._orders
  }

  set orders(val) {
    this._orders = val
  }

  get isCancellable() {
    return this._orders.some((item) => item?.isCancellable)
  }

  set isCancellable(val) {
    this._isCancellable = val
  }
}

export default OrderRetrieval
