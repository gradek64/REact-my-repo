import {
  APIResponse,
  PrepareForCheckoutAPIRequest,
  GetSnapshotAPIPayload,
  InitSnapshotAPIPayload,
  InitSnapshotAPINonFatalErrorAdvice,
} from '../api'
import { ErrorResponse, InitSnapshotAPIErrorAdvice, GetSnapshotAPIErrorAdvice } from '../api/errorResponse'

export interface StartGuestCheckoutActionPayload {
  id: string
  cookie: string
  token?: string
  onSessionCreated: (token: string) => void
}
export type StartGuestCheckoutSuccessActionPayload = GetSnapshotAPIPayload
export interface StartGuestCheckoutFailureActionPayload {
  error: Error
}

export type PrepareForCheckoutActionPayload = {
  cookie: string
  options: PrepareForCheckoutAPIRequest
}

export type InitUserInfoPagePayload = {
  cookie: string
}

export type PrepareForCheckoutSuccessActionPayload = {
  id: string
}

export type PrepareForCheckoutFailureActionPayload = {
  error: Error
}

export type FulfilmentCreatedFailurePayload = {
  error: Error
  fatal: boolean
}

interface SnapshotMethodsFailureActionPayload<T> {
  error: APIResponse<ErrorResponse<T>> | Error
}

export type InitSnapshotFailureActionPayload = SnapshotMethodsFailureActionPayload<InitSnapshotAPIErrorAdvice>
export type GetSnapshotFailureActionPayload = SnapshotMethodsFailureActionPayload<GetSnapshotAPIErrorAdvice>
export interface InitSnapshotSuccessActionPayload extends InitSnapshotAPIPayload {
  errorStatus?: InitSnapshotAPINonFatalErrorAdvice.STOCK_HOLD_PARTIAL_ALLOCATION
}
export type GetSnapshotAPISuccessActionPayload = GetSnapshotAPIPayload

export type AddServerSideCookiesActionPayload = string[]

export type GetCollectionSnapshotActionPayload = {
  id: string
  cookie?: string
}

export type InitSnapshotActionPayload = {
  id?: string
  cookie: string
  userAgent: string | undefined
}
