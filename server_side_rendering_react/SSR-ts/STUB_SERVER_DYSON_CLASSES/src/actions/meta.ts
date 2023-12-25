import { createAction } from '@reduxjs/toolkit'
import {
  StartGuestCheckoutActionPayload,
  StartGuestCheckoutSuccessActionPayload,
  StartGuestCheckoutFailureActionPayload,
  PrepareForCheckoutActionPayload,
  PrepareForCheckoutFailureActionPayload,
  PrepareForCheckoutSuccessActionPayload,
  AddServerSideCookiesActionPayload,
  InitSnapshotActionPayload,
  GetCollectionSnapshotActionPayload,
  GetSnapshotAPISuccessActionPayload,
  InitSnapshotSuccessActionPayload,
  GetSnapshotFailureActionPayload,
  InitSnapshotFailureActionPayload,
  FulfilmentCreatedFailurePayload,
  InitUserInfoPagePayload,
} from '../types/actions'

import { OutOfStockActionPayload } from '../types/reducers'

export const INIT_USER_INFO_PAGE = createAction<InitUserInfoPagePayload>('INIT_USER_INFO_PAGE')

export const LOAD_APP = createAction('LOAD_APP')

export const START_GUEST_CHECKOUT = createAction<StartGuestCheckoutActionPayload>('START_GUEST_CHECKOUT')
export const START_GUEST_CHECKOUT_SUCCESS =
  createAction<StartGuestCheckoutSuccessActionPayload>('START_GUEST_CHECKOUT_SUCCESS')
export const START_GUEST_CHECKOUT_FAILURE =
  createAction<StartGuestCheckoutFailureActionPayload>('START_GUEST_CHECKOUT_FAILURE')

export const PREPARE_FOR_CHECKOUT = createAction<PrepareForCheckoutActionPayload>('PREPARE_FOR_CHECKOUT')
export const PREPARE_FOR_CHECKOUT_SUCCESS =
  createAction<PrepareForCheckoutSuccessActionPayload>('PREPARE_FOR_CHECKOUT_SUCCESS')
export const PREPARE_FOR_CHECKOUT_FAILURE =
  createAction<PrepareForCheckoutFailureActionPayload>('PREPARE_FOR_CHECKOUT_FAILURE')

export const INIT_COLLECTION_SNAPSHOT = createAction<InitSnapshotActionPayload>('INIT_COLLECTION_SNAPSHOT')
export const INIT_COLLECTION_SNAPSHOT_SUCCESS = createAction<InitSnapshotSuccessActionPayload>(
  'INIT_COLLECTION_SNAPSHOT_SUCCESS',
)
export const INIT_COLLECTION_SNAPSHOT_FAILURE = createAction<InitSnapshotFailureActionPayload>(
  'INIT_COLLECTION_SNAPSHOT_FAILURE',
)

export const GET_COLLECTION_SNAPSHOT = createAction<GetCollectionSnapshotActionPayload>('GET_COLLECTION_SNAPSHOT')
export const GET_COLLECTION_SNAPSHOT_SUCCESS = createAction<GetSnapshotAPISuccessActionPayload>(
  'GET_COLLECTION_SNAPSHOT_SUCCESS',
)
export const GET_COLLECTION_SNAPSHOT_FAILURE = createAction<GetSnapshotFailureActionPayload>(
  'GET_COLLECTION_SNAPSHOT_FAILURE',
)

export const SET_FATAL_ERROR = createAction('SET_FATAL_ERROR')
export const TOGGLE_MODAL_DISABLE_ESC_CLOSE = createAction('TOGGLE_MODAL_DISABLE_ESC_CLOSE')
export const SET_MODAL_REMOVE_SCROLL = createAction<boolean>('SET_MODAL_REMOVE_SCROLL')

export const GET_STOCK_HOLD_INFO = createAction<GetCollectionSnapshotActionPayload>('GET_STOCK_HOLD_INFO')
export const GET_STOCK_HOLD_INFO_SUCCESS = createAction<OutOfStockActionPayload>('GET_STOCK_HOLD_INFO_SUCCESS')
export const GET_STOCK_HOLD_INFO_FAILURE = createAction('GET_STOCK_HOLD_INFO_FAILURE')

export const ADD_SERVER_SIDE_COOKIES = createAction<AddServerSideCookiesActionPayload>('ADD_SERVER_SIDE_COOKIES')

export const FULFILMENT_CREATED_FAILURE = createAction<FulfilmentCreatedFailurePayload>('FULFILMENT_CREATED_FAILURE')
export const FULFILMENT_CREATED_SUCCESS = createAction('FULFILMENT_CREATED_SUCCESS')
