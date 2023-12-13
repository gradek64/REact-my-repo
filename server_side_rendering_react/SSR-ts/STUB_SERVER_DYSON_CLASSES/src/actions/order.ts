import { createAction } from '@reduxjs/toolkit'
import {
  PlaceOrderSuccessAPIPayload,
  GetOrderRetrievalSuccessAPIPayload,
  GetOrderConfirmationSuccessAPIPayload,
} from '../types/api'
import {
  PlaceOrderActionPayload,
  PlaceOrderFailureActionPayload,
  GetOrderRetrievalActionPayload,
  VatReceiptSuccessLinkActionPayload,
  VatReceiptFailureLinkActionPayload,
  GetOrderConfirmationActionPayload,
  GetOrderFailureActionPayload,
  ExtendOrderActionPayload,
  ExtendOrderSuccessActionPayload,
  ExtendOrderFailureActionPayload,
  CancelOrderActionPayload,
  CancelOrderSuccessActionPayload,
  CancelOrderFailureActionPayload,
} from '../types/actions'

export const PLACE_ORDER = createAction<PlaceOrderActionPayload | undefined>('PLACE_ORDER')
export const PLACE_ORDER_SUCCESS = createAction<PlaceOrderSuccessAPIPayload>('PLACE_ORDER_SUCCESS')
export const PLACE_ORDER_FAILURE = createAction<PlaceOrderFailureActionPayload>('PLACE_ORDER_FAILURE')
export const RESET_PLACE_ORDER = createAction('RESET_PLACE_ORDER')

export const GET_ORDER_RETRIEVAL = createAction<GetOrderRetrievalActionPayload>('GET_ORDER_RETRIEVAL')
export const GET_ORDER_RETRIEVAL_SUCCESS =
  createAction<GetOrderRetrievalSuccessAPIPayload>('GET_ORDER_RETRIEVAL_SUCCESS')
export const GET_ORDER_RETRIEVAL_FAILURE = createAction<GetOrderFailureActionPayload>('GET_ORDER_RETRIEVAL_FAILURE')

export const VAT_RECEIPT_LINK_SUCCESS = createAction<VatReceiptSuccessLinkActionPayload>('VAT_RECEIPT_LINK_SUCCESS')
export const VAT_RECEIPT_LINK_FAILURE = createAction<VatReceiptFailureLinkActionPayload>('VAT_RECEIPT_LINK_FAILURE')

export const CANCEL_ORDER = createAction<CancelOrderActionPayload>('CANCEL_ORDER')
export const CANCEL_ORDER_SUCCESS = createAction<CancelOrderSuccessActionPayload>('CANCEL_ORDER_SUCCESS')
export const CANCEL_ORDER_FAILURE = createAction<CancelOrderFailureActionPayload>('CANCEL_ORDER_FAILURE')

export const GET_ORDER_CONFIRMATION = createAction<GetOrderConfirmationActionPayload>('GET_ORDER_CONFIRMATION')
export const GET_ORDER_CONFIRMATION_SUCCESS = createAction<GetOrderConfirmationSuccessAPIPayload>(
  'GET_ORDER_CONFIRMATION_SUCCESS',
)
export const GET_ORDER_CONFIRMATION_FAILURE = createAction<GetOrderFailureActionPayload>(
  'GET_ORDER_CONFIRMATION_FAILURE',
)

export const EXTEND_SHIPMENT = createAction<ExtendOrderActionPayload>('EXTEND_SHIPMENT')
export const EXTEND_SHIPMENT_SUCCESS = createAction<ExtendOrderSuccessActionPayload>('EXTEND_SHIPMENT_SUCCESS')
export const EXTEND_SHIPMENT_FAILURE = createAction<ExtendOrderFailureActionPayload>('EXTEND_SHIPMENT_FAILURE')
