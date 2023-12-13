import { createAction } from '@reduxjs/toolkit'
import {
  AddAccountAddressSuccessActionPayload,
  AddAddressSuccessActionPayload,
  GetAddressesSuccessActionPayload,
  UpdateSnapshotAddressActionPayload,
  UpdateSnapshotAddressSuccessActionPayload,
  UpdateContactAddressSuccessActionPayload,
  UpdateAddressSuccessActionPayload,
  AddAddressActionPayload,
  UpdateAddressActionPayload,
  AddMissingAddressActionPayload,
  UpdateContactAndBillingAddressPayload,
  CheckUserAcountExistsSuccessActionPayload,
  CreateUserAccountPayload,
  GetMarketingPreferencesPayload,
  GetMarketingPreferencesFailurePayload,
  SetMarketingPreferencesFailurePayload,
  GetMarketingPreferencesSuccessPayload,
  SaveMarketingPreferencesPayload,
} from 'types/actions'

export const GET_ADDRESSES = createAction('GET_ADDRESSES')
export const GET_ADDRESSES_SUCCESS = createAction<GetAddressesSuccessActionPayload>('GET_ADDRESSES_SUCCESS')
export const GET_ADDRESSES_FAILURE = createAction('GET_ADDRESSES_FAILURE')

export const SET_PENDING_SNAPSHOT_ADDRESS_ID = createAction<string>('SET_PENDING_SNAPSHOT_ADDRESS_ID')
export const UPDATE_SNAPSHOT_ADDRESS = createAction<UpdateSnapshotAddressActionPayload>('UPDATE_SNAPSHOT_ADDRESS')
export const UPDATE_SNAPSHOT_ADDRESS_SUCCESS = createAction<
  UpdateSnapshotAddressSuccessActionPayload,
  'UPDATE_SNAPSHOT_ADDRESS_SUCCESS'
>('UPDATE_SNAPSHOT_ADDRESS_SUCCESS')
export const UPDATE_SNAPSHOT_ADDRESS_FAILURE = createAction('UPDATE_SNAPSHOT_ADDRESS_FAILURE')

export const ADD_ADDRESS = createAction<AddAddressActionPayload>('ADD_ADDRESS')
export const ADD_ADDRESS_SUCCESS = createAction<AddAddressSuccessActionPayload, 'ADD_ADDRESS_SUCCESS'>(
  'ADD_ADDRESS_SUCCESS',
)
export const ADD_ADDRESS_FAILURE = createAction('ADD_ADDRESS_FAILURE')

export const ADD_MISSING_ADDRESS = createAction<AddMissingAddressActionPayload>('ADD_MISSING_ADDRESS')
export const ADD_MISSING_ADDRESS_SUCCESS = createAction('ADD_MISSING_ADDRESS_SUCCESS')
export const ADD_MISSING_ADDRESS_FAILURE = createAction('ADD_MISSING_ADDRESS_FAILURE')

export const ADD_ACCOUNT_ADDRESS_SUCCESS =
  createAction<AddAccountAddressSuccessActionPayload>('ADD_ACCOUNT_ADDRESS_SUCCESS')
export const ADD_ACCOUNT_ADDRESS_FAILURE = createAction('ADD_ACCOUNT_ADDRESS_FAILURE')

export const UPDATE_ADDRESS = createAction<UpdateAddressActionPayload>('UPDATE_ADDRESS')

export const UPDATE_ADDRESS_SUCCESS = createAction<UpdateAddressSuccessActionPayload, 'UPDATE_ADDRESS_SUCCESS'>(
  'UPDATE_ADDRESS_SUCCESS',
)

export const DISABLE_CLOSE_MODAL = createAction('DISABLE_CLOSE_MODAL')

export const UPDATE_ADDRESS_FAILURE = createAction('UPDATE_ADDRESS_FAILURE')

export const UPDATE_ACCOUNT_ADDRESS_SUCCESS = createAction('UPDATE_ACCOUNT_ADDRESS_SUCCESS')

export const UPDATE_CONTACT_ADDRESS_SUCCESS = createAction<UpdateContactAddressSuccessActionPayload>(
  'UPDATE_CONTACT_ADDRESS_SUCCESS',
)
export const UPDATE_CONTACT_ADDRESS_FAILURE = createAction('UPDATE_CONTACT_ADDRESS_FAILURE')

export const RESET_ADDRESS_SUBMISSION = createAction('RESET_ADDRESS_SUBMISSION')

export const CHECK_USER_ACCOUNT_EXISTS_SUCCESS = createAction<CheckUserAcountExistsSuccessActionPayload>(
  'CHECK_USER_ACCOUNT_EXISTS_SUCCESS',
)
export const CHECK_USER_ACCOUNT_EXISTS_FAILURE = createAction('CHECK_USER_ACCOUNT_EXISTS_FAILURE')
export const UPDATE_CONTACT_AND_BILLING_ADDRESS = createAction<UpdateContactAndBillingAddressPayload>(
  'UPDATE_CONTACT_AND_BILLING_ADDRESS',
)
export const UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS = createAction('UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS')
export const UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE = createAction('UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE')

export const CREATE_USER_ACCOUNT = createAction<CreateUserAccountPayload>('CREATE_USER_ACCOUNT')
export const CREATE_USER_ACCOUNT_SUCCESS = createAction('CREATE_USER_ACCOUNT_SUCCESS')
export const CREATE_USER_ACCOUNT_FAILURE = createAction('CREATE_USER_ACCOUNT_FAILURE')

export const GET_MARKETING_PREFERENCES = createAction<GetMarketingPreferencesPayload>('GET_MARKETING_PREFERENCES')
export const GET_MARKETING_PREFERENCES_SUCCESS = createAction<GetMarketingPreferencesSuccessPayload>(
  'GET_MARKETING_PREFERENCES_SUCCESS',
)
export const GET_MARKETING_PREFERENCES_FAILURE = createAction<GetMarketingPreferencesFailurePayload>(
  'GET_MARKETING_PREFERENCES_FAILURE',
)
export const SAVE_MARKETING_PREFERENCES = createAction<SaveMarketingPreferencesPayload>('SAVE_MARKETING_PREFERENCES')
export const SAVE_MARKETING_PREFERENCES_SUCCESS = createAction('SAVE_MARKETING_PREFERENCES_SUCCESS')
export const SAVE_MARKETING_PREFERENCES_FAILURE = createAction<SetMarketingPreferencesFailurePayload>(
  'SAVE_MARKETING_PREFERENCES_FAILURE',
)
