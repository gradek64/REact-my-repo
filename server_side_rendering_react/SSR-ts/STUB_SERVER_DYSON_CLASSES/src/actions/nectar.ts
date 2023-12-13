import { createAction } from '@reduxjs/toolkit'

import {
  Toggle2faRequiredActionPayload,
  AddNectarCardPayload,
  AddNectarCardFailurePayload,
  AddNectarCardSuccessPayload,
  DeleteNectarCardPayload,
  DeleteNectarCardFailurePayload,
  DeleteNectarCardSuccessPayload,
  UpdateNectarSuccessActionPayload,
} from 'types/actions'

export const UPDATE_NECTAR = createAction('UPDATE_NECTAR')
export const UPDATE_NECTAR_SUCCESS = createAction<UpdateNectarSuccessActionPayload, 'UPDATE_NECTAR_SUCCESS'>(
  'UPDATE_NECTAR_SUCCESS',
)
export const UPDATE_NECTAR_FAILURE = createAction('UPDATE_NECTAR_FAILURE')

export const ADD_NECTAR = createAction<AddNectarCardPayload>('ADD_NECTAR')
export const ADD_NECTAR_SUCCESS = createAction<AddNectarCardSuccessPayload>('ADD_NECTAR_SUCCESS')
export const ADD_NECTAR_FAILURE = createAction<AddNectarCardFailurePayload>('ADD_NECTAR_FAILURE')

export const DELETE_NECTAR = createAction<DeleteNectarCardPayload>('DELETE_NECTAR')
export const DELETE_NECTAR_SUCCESS = createAction<DeleteNectarCardSuccessPayload>('DELETE_NECTAR_SUCCESS')
export const DELETE_NECTAR_FAILURE = createAction<DeleteNectarCardFailurePayload>('DELETE_NECTAR_FAILURE')

export const TOGGLE_2FA_REQUIRED = createAction<Toggle2faRequiredActionPayload>('TOGGLE_2FA_REQUIRED')
export const INVALID_2FA_CODE = createAction('INVALID_2FA_CODE')
export const NECTAR_INSUFFICIENT_BALANCE = createAction('NECTAR_INSUFFICIENT_BALANCE')
export const RESET_NECTAR_INSUFFICIENT_BALANCE = createAction('RESET_NECTAR_INSUFFICIENT_BALANCE')

export const REQUEST_NEW_2FA_CODE = createAction('REQUEST_NEW_2FA_CODE')
export const REQUEST_NEW_2FA_CODE_ERROR = createAction('REQUEST_NEW_2FA_CODE_ERROR')
export const RESET_INVALID_2FA_CODE_ERROR = createAction('RESET_INVALID_2FA_CODE_ERROR')
