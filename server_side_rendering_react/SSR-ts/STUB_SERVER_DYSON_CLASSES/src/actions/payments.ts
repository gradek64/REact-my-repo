import { createAction } from '@reduxjs/toolkit'

import {
  AddPaymentActionPayload,
  SetupPaymentMethodActionPayload,
  SetupPaypalSessionFailureActionPayload,
  ApplePayFailureActionPayload,
  ChangePaymentLocationActionPayload,
  UpdateSelectedPaymentMethodActionPayload,
  StartCreditApplicationActionPayload,
  UpdateCreditApplicationPayload,
  SubmitFormFailurePayload,
  StartCreditApplicationSuccessActionPayload,
  StartCreditApplicationFailureActionPayload,
  GetCreditPlansActionPayload,
  GetPaymentMethodsSuccessActionPayload,
  GetPaymentMethodsFailureActionPayload,
  AddPaymentSuccessActionPayload,
  AddPaymentFailureActionPayload,
  SpecificGiftCardErrorActionPayload,
  DeletePaymentActionPayload,
  DeletePaymentSuccessActionPayload,
  DeletePaymentFailureActionPayload,
  SetupPaymentMethodFailureActionPayload,
  DatacashResizeActionPayload,
  DatacashLoadedActionPayload,
  UpdateSelectedSavedPaymentMethodActionPayload,
  GetCreditPlansSuccessActionPayload,
  ApplePayActiveCardSuccessPayload,
  DatacashErrorActionPayload,
} from 'types/actions'

export const GET_PAYMENT_METHODS = createAction('GET_PAYMENT_METHODS')
export const GET_PAYMENT_METHODS_SUCCESS =
  createAction<GetPaymentMethodsSuccessActionPayload>('GET_PAYMENT_METHODS_SUCCESS')
export const GET_PAYMENT_METHODS_FAILURE =
  createAction<GetPaymentMethodsFailureActionPayload>('GET_PAYMENT_METHODS_FAILURE')

export const ADD_PAYMENT = createAction<AddPaymentActionPayload>('ADD_PAYMENT')
export const ADD_PAYMENT_SUCCESS = createAction<AddPaymentSuccessActionPayload, 'ADD_PAYMENT_SUCCESS'>(
  'ADD_PAYMENT_SUCCESS',
)
export const ADD_PAYMENT_FAILURE = createAction<AddPaymentFailureActionPayload>('ADD_PAYMENT_FAILURE')

export const RESET_PAYMENT_SUBMISSION = createAction('RESET_PAYMENT_SUBMISSION')

export const RESET_GIFT_CARD_ERRORS = createAction('RESET_GIFT_CARD_ERRORS')
export const SPECIFIC_GIFT_CARD_ERROR = createAction<SpecificGiftCardErrorActionPayload>('SPECIFIC_GIFT_CARD_ERROR')
export const GENERIC_GIFT_CARD_ERROR = createAction('GENERIC_GIFT_CARD_ERROR')

export const PATCH_PAYMENT = createAction('PATCH_PAYMENT')
export const PATCH_PAYMENT_SUCCESS = createAction('PATCH_PAYMENT_SUCCESS')
export const PATCH_PAYMENT_FAILURE = createAction('PATCH_PAYMENT_FAILURE')

export const DELETE_PAYMENT = createAction<DeletePaymentActionPayload>('DELETE_PAYMENT')
export const DELETE_PAYMENT_SUCCESS = createAction<DeletePaymentSuccessActionPayload, 'DELETE_PAYMENT_SUCCESS'>(
  'DELETE_PAYMENT_SUCCESS',
)
export const DELETE_PAYMENT_FAILURE = createAction<DeletePaymentFailureActionPayload>('DELETE_PAYMENT_FAILURE')

export const GET_CREDIT_PLANS = createAction<GetCreditPlansActionPayload | undefined>('GET_CREDIT_PLANS')
export const GET_CREDIT_PLANS_SUCCESS = createAction<GetCreditPlansSuccessActionPayload>('GET_CREDIT_PLANS_SUCCESS')
export const GET_CREDIT_PLANS_FAILURE = createAction('GET_CREDIT_PLANS_FAILURE')
export const RESET_CREDIT_PLANS_ATTEMPTS = createAction('RESET_CREDIT_PLANS_ATTEMPTS')

export const UPDATE_SELECTED_PAYMENT_TAB = createAction<number, 'UPDATE_SELECTED_PAYMENT_TAB'>(
  'UPDATE_SELECTED_PAYMENT_TAB',
)
export const UPDATE_SELECTED_SAVED_PAYMENT_METHOD = createAction<UpdateSelectedSavedPaymentMethodActionPayload>(
  'UPDATE_SELECTED_SAVED_PAYMENT_METHOD',
)
export const UPDATE_SELECTED_PAYMENT_METHOD = createAction<
  UpdateSelectedPaymentMethodActionPayload,
  'UPDATE_SELECTED_PAYMENT_METHOD'
>('UPDATE_SELECTED_PAYMENT_METHOD')

export const SETUP_PAYMENT_METHOD = createAction<SetupPaymentMethodActionPayload>('SETUP_PAYMENT_METHOD')
export const SETUP_PAYMENT_METHOD_SUCCESS = createAction('SETUP_PAYMENT_METHOD_SUCCESS')
export const SETUP_PAYMENT_METHOD_FAILURE =
  createAction<SetupPaymentMethodFailureActionPayload>('SETUP_PAYMENT_METHOD_FAILURE')

export const SETUP_PAYPAL_SESSION_SUCCESS = createAction('SETUP_PAYPAL_SESSION_SUCCESS')
export const SETUP_PAYPAL_SESSION_FAILURE =
  createAction<SetupPaypalSessionFailureActionPayload>('SETUP_PAYPAL_SESSION_FAILURE')

export const DATACASH_RESUME = createAction('DATACASH_RESUME')
export const DATACASH_LISTEN = createAction('DATACASH_LISTEN')
export const DATACASH_RESIZE = createAction<DatacashResizeActionPayload>('DATACASH_RESIZE')
export const DATACASH_LOADED = createAction<DatacashLoadedActionPayload>('DATACASH_LOADED')
export const DATACASH_ERROR = createAction<DatacashErrorActionPayload | undefined>('DATACASH_ERROR')

export const APPLE_PAY_COMPATIBLE = createAction('APPLE_PAY_COMPATIBLE')
export const APPLE_PAY_ACTIVE_CARD_SUCCESS = createAction<ApplePayActiveCardSuccessPayload>(
  'APPLE_PAY_ACTIVE_CARD_SUCCESS',
)
export const APPLE_PAY_ACTIVE_CARD_FAILURE = createAction('APPLE_PAY_ACTIVE_CARD_FAILURE')
export const APPLE_PAY_BEGIN = createAction('APPLE_PAY_BEGIN')
export const APPLE_PAY_LISTEN = createAction('APPLE_PAY_LISTEN')
export const APPLE_PAY_CANCEL = createAction('APPLE_PAY_CANCEL')
export const APPLE_PAY_FAILURE = createAction<ApplePayFailureActionPayload | undefined>('APPLE_PAY_FAILURE')
export const CHANGE_PAYMENT_LOCATION = createAction<ChangePaymentLocationActionPayload>('CHANGE_PAYMENT_LOCATION')
export const RESET_PAYMENT_TABS = createAction('RESET_PAYMENT_TABS')
export const RESET_PAYMENT_OPTIONS_VIEW = createAction('RESET_PAYMENT_OPTIONS_VIEW')
export const SET_ACTIVE_ACCORDION_PAYMENT_METHOD = createAction<SetupPaymentMethodActionPayload>(
  'SET_ACTIVE_ACCORDION_PAYMENT_METHOD',
)

export const START_CREDIT_APPLICATION = createAction<StartCreditApplicationActionPayload>('START_CREDIT_APPLICATION')
export const START_CREDIT_APPLICATION_SUCCESS = createAction<StartCreditApplicationSuccessActionPayload>(
  'START_CREDIT_APPLICATION_SUCCESS',
)
export const START_CREDIT_APPLICATION_FAILURE = createAction<StartCreditApplicationFailureActionPayload>(
  'START_CREDIT_APPLICATION_FAILURE',
)
export const RESET_CREDIT_APPLICATION = createAction('RESET_CREDIT_APPLICATION')

export const UPDATE_CREDIT_APPLICATION = createAction<UpdateCreditApplicationPayload>('UPDATE_CREDIT_APPLICATION')
export const UPDATE_CREDIT_APPLICATION_SUCCESS = createAction('UPDATE_CREDIT_APPLICATION_SUCCESS')
export const UPDATE_CREDIT_APPLICATION_FAILURE = createAction('UPDATE_CREDIT_APPLICATION_FAILURE')

export const SUBMIT_FORM_FAILURE = createAction<SubmitFormFailurePayload>('SUBMIT_FORM_FAILURE')
