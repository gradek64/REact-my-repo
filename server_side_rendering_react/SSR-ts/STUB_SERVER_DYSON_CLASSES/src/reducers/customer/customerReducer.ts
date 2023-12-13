import { createReducer } from '@reduxjs/toolkit'

import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  MODAL_CLOSE,
  DISABLE_CLOSE_MODAL,
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_FAILURE,
  SET_PENDING_SNAPSHOT_ADDRESS_ID,
  UPDATE_SNAPSHOT_ADDRESS,
  UPDATE_SNAPSHOT_ADDRESS_SUCCESS,
  UPDATE_SNAPSHOT_ADDRESS_FAILURE,
  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
  ADD_MISSING_ADDRESS,
  ADD_MISSING_ADDRESS_SUCCESS,
  ADD_MISSING_ADDRESS_FAILURE,
  ADD_ACCOUNT_ADDRESS_SUCCESS,
  UPDATE_ACCOUNT_ADDRESS_SUCCESS,
  UPDATE_CONTACT_ADDRESS_SUCCESS,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  RESET_ADDRESS_SUBMISSION,
  ADD_ACCOUNT_ADDRESS_FAILURE,
  CHECK_USER_ACCOUNT_EXISTS_SUCCESS,
  CHECK_USER_ACCOUNT_EXISTS_FAILURE,
  UPDATE_CONTACT_AND_BILLING_ADDRESS,
  UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE,
  UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS,
  CREATE_USER_ACCOUNT,
  CREATE_USER_ACCOUNT_SUCCESS,
  CREATE_USER_ACCOUNT_FAILURE,
  START_GUEST_CHECKOUT_SUCCESS,
  GET_MARKETING_PREFERENCES,
  GET_MARKETING_PREFERENCES_SUCCESS,
  GET_MARKETING_PREFERENCES_FAILURE,
} from '../../actions'
import { CustomerState, SavedAddress } from 'types/reducers'
import { SnapshotDeliveryAddress, StatusCode } from 'types/api'
import { UpdateSnapshotAddressType } from 'types/actions'

const initialAddress: SavedAddress = {
  id: '',
  type: '',
  person: {
    title: '',
    firstName: '',
    lastName: '',
  },
  lines: {
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    country: '',
  },
  contactAddress: false,
}

export const initialState: CustomerState = {
  id: null,
  type: null,
  email: '',
  pendingSnapshotAddressId: null,
  billingAddress: initialAddress,
  contactAddress: initialAddress,
  addresses: [],
  loading: false,
  gettingAddresses: false,
  showConfirmAddressAlert: false,
  addingAddress: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
    addedAccountAddressId: null,
  },
  updatingAddress: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
  },
  updatingSnapshotAddress: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
  },
  addingMissingAddress: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
  },
  isAccountAddressSaved: false,
  isContactAddressSaved: false,
  isBillingAddressSaved: false,
  isDeliveryAddressSaved: false,
  errors: {
    getAddresses: false,
  },
  userAccountCheck: {
    loading: false,
    numberOfAttempts: 0,
    exists: false,
    error: false,
  },
  userAccountCreate: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
    created: false,
  },
  updatingContactAndBillingAddress: {
    loading: false,
    numberOfAttempts: 0,
    error: false,
  },
  marketingPreferences: {
    loading: false,
    error: false,
    consents: [],
    notFoundEmail: false,
  },
}

const customerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      const { billingAddress, customer, contactAddress, deliveryAddress } = payload.snapshot

      return {
        ...state,
        billingAddress,
        id: customer?.id || null,
        type: customer?.type || null,
        email: contactAddress?.person?.email,
        contactAddress: {
          ...contactAddress,
          contactAddress: true,
        },
        deliveryAddress,
      }
    })
    .addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, (state, { payload }) => {
      const { billingAddress, customer, contactAddress, deliveryAddress } = payload.snapshot
      return {
        ...initialState,
        id: customer.id,
        type: customer.type || null,
        email: contactAddress.person.email,
        billingAddress,
        deliveryAddress,
      }
    })
    .addCase(START_GUEST_CHECKOUT_SUCCESS, (state, { payload }) => {
      const { customer, contactAddress } = payload.snapshot

      return {
        ...initialState,
        id: customer?.id || null,
        type: customer?.type || null,
        email: contactAddress?.person?.email,
        contactAddress: { ...contactAddress, contactAddress: true },
      }
    })
    .addCase(MODAL_CLOSE, (state) => {
      state.pendingSnapshotAddressId = null

      state.addingAddress = initialState.addingAddress
      state.updatingAddress = initialState.updatingAddress
      state.updatingSnapshotAddress = initialState.updatingSnapshotAddress
    })
    .addCase(GET_ADDRESSES, (state) => {
      state.errors.getAddresses = false
      state.gettingAddresses = true
    })
    .addCase(GET_ADDRESSES_SUCCESS, (state, action) => {
      state.gettingAddresses = false
      state.addresses = action.payload.addresses
    })
    .addCase(GET_ADDRESSES_FAILURE, (state) => {
      state.gettingAddresses = false
      state.errors.getAddresses = true
    })
    .addCase(SET_PENDING_SNAPSHOT_ADDRESS_ID, (state, { payload }) => {
      state.pendingSnapshotAddressId = payload
    })
    .addCase(UPDATE_SNAPSHOT_ADDRESS, (state) => {
      state.updatingSnapshotAddress.loading = true
      state.updatingSnapshotAddress.error = false
    })
    .addCase(UPDATE_SNAPSHOT_ADDRESS_SUCCESS, (state, { payload }) => {
      state.updatingSnapshotAddress = initialState.updatingSnapshotAddress
      state.pendingSnapshotAddressId = null
      state.showConfirmAddressAlert = false

      if (payload.type === UpdateSnapshotAddressType.DELIVERY) {
        state.deliveryAddress = payload.address as SnapshotDeliveryAddress
        state.isDeliveryAddressSaved = true
      } else {
        state.billingAddress = payload.address
        state.isBillingAddressSaved = true
      }
    })
    .addCase(UPDATE_SNAPSHOT_ADDRESS_FAILURE, (state) => {
      state.updatingSnapshotAddress.loading = initialState.updatingSnapshotAddress.loading
      state.updatingSnapshotAddress.error = true
      state.updatingSnapshotAddress.numberOfAttempts += 1
    })
    .addCase(ADD_ADDRESS, (state) => {
      state.addingAddress.loading = true
      state.addingAddress.error = initialState.addingAddress.error
    })
    .addCase(ADD_ADDRESS_SUCCESS, (state, { payload }) => {
      state.addingAddress = initialState.addingAddress

      state.addresses.push(payload.address)
    })
    .addCase(ADD_ADDRESS_FAILURE, (state) => {
      state.addingAddress.loading = initialState.addingAddress.loading
      state.addingAddress.error = true
      state.addingAddress.numberOfAttempts += 1
    })
    .addCase(ADD_ACCOUNT_ADDRESS_FAILURE, (state) => {
      state.addingAddress.loading = initialState.addingAddress.loading
      state.addingAddress.error = true
    })
    .addCase(ADD_ACCOUNT_ADDRESS_SUCCESS, (state, { payload }) => {
      state.addingAddress.addedAccountAddressId = payload.address.id
      state.isAccountAddressSaved = true
    })
    .addCase(ADD_MISSING_ADDRESS, (state) => {
      state.addingMissingAddress.loading = true
      state.addingMissingAddress.error = false
    })
    .addCase(ADD_MISSING_ADDRESS_SUCCESS, (state) => {
      state.addingMissingAddress = initialState.addingMissingAddress
    })
    .addCase(ADD_MISSING_ADDRESS_FAILURE, (state) => {
      state.addingMissingAddress.loading = initialState.addingMissingAddress.loading
      state.addingMissingAddress.error = true
      state.addingMissingAddress.numberOfAttempts += 1
    })
    .addCase(UPDATE_ACCOUNT_ADDRESS_SUCCESS, (state) => {
      state.isAccountAddressSaved = true
    })
    .addCase(DISABLE_CLOSE_MODAL, (state) => {
      state.showConfirmAddressAlert = true
    })
    .addCase(UPDATE_CONTACT_ADDRESS_SUCCESS, (state, { payload }) => {
      const index = state.addresses.findIndex((address) => address.id === payload.address.id)

      // reset the previous contact address -> it's type has changed in WCS so we need to reflect that in our state
      state.addresses.forEach((address, i) => {
        state.addresses[i] =
          index === i ? payload.address : { ...address, contactAddress: false, type: 'ADDRESS_TYPE_BOTH' }
      })
      // set new contact address
      state.contactAddress = payload.address
      state.isContactAddressSaved = true
    })
    .addCase(UPDATE_ADDRESS, (state) => {
      state.updatingAddress.loading = true
      state.updatingAddress.error = false
    })
    .addCase(UPDATE_ADDRESS_SUCCESS, (state, { payload }) => {
      const index = state.addresses.findIndex((address) => address.id === payload.previousAddressId)

      state.updatingAddress = initialState.updatingAddress
      state.addresses = [
        ...state.addresses.slice(0, index),
        { ...payload.newAddress },
        ...state.addresses.slice(index + 1),
      ]
    })
    .addCase(UPDATE_ADDRESS_FAILURE, (state) => {
      state.updatingAddress.loading = false
      state.updatingAddress.error = true
      state.updatingAddress.numberOfAttempts += 1
    })
    .addCase(RESET_ADDRESS_SUBMISSION, (state) => {
      state.addingAddress = initialState.addingAddress
      state.updatingAddress = initialState.updatingAddress
      state.updatingSnapshotAddress = initialState.updatingSnapshotAddress

      state.isAccountAddressSaved = initialState.isAccountAddressSaved
      state.isContactAddressSaved = initialState.isContactAddressSaved
      state.isBillingAddressSaved = initialState.isBillingAddressSaved
      state.isDeliveryAddressSaved = initialState.isDeliveryAddressSaved
    })
    .addCase(CHECK_USER_ACCOUNT_EXISTS_SUCCESS, (state, { payload }) => {
      state.userAccountCheck.exists = payload.userAccountExists
      state.userAccountCheck.loading = initialState.userAccountCheck.loading
      state.userAccountCheck.numberOfAttempts = initialState.userAccountCheck.numberOfAttempts
    })
    .addCase(CHECK_USER_ACCOUNT_EXISTS_FAILURE, (state) => {
      state.userAccountCheck.error = true
      state.userAccountCheck.numberOfAttempts += 1
      state.userAccountCheck.loading = false
    })
    .addCase(UPDATE_CONTACT_AND_BILLING_ADDRESS, (state) => {
      state.updatingContactAndBillingAddress.loading = true
      state.updatingContactAndBillingAddress.error = initialState.updatingContactAndBillingAddress.error
    })
    .addCase(UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS, (state) => {
      state.updatingContactAndBillingAddress.loading = initialState.updatingContactAndBillingAddress.loading
      state.updatingContactAndBillingAddress.error = initialState.updatingContactAndBillingAddress.error
      state.updatingContactAndBillingAddress.numberOfAttempts =
        initialState.updatingContactAndBillingAddress.numberOfAttempts
    })
    .addCase(UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE, (state) => {
      state.updatingContactAndBillingAddress.loading = initialState.updatingContactAndBillingAddress.loading
      state.updatingContactAndBillingAddress.error = true
      state.updatingContactAndBillingAddress.numberOfAttempts += 1
    })
    .addCase(CREATE_USER_ACCOUNT, (state) => {
      state.userAccountCreate.loading = true
      state.userAccountCreate.error = initialState.userAccountCreate.error
    })
    .addCase(CREATE_USER_ACCOUNT_SUCCESS, (state) => {
      state.userAccountCreate.loading = initialState.userAccountCreate.loading
      state.userAccountCreate.error = initialState.userAccountCreate.error
      state.userAccountCreate.numberOfAttempts = initialState.userAccountCreate.numberOfAttempts
      state.userAccountCreate.created = true

      state.userAccountCheck.exists = true
    })
    .addCase(CREATE_USER_ACCOUNT_FAILURE, (state) => {
      state.userAccountCreate.loading = initialState.userAccountCreate.loading
      state.userAccountCreate.error = true
      state.userAccountCreate.numberOfAttempts += 1
    })
    .addCase(GET_MARKETING_PREFERENCES, (state) => {
      state.marketingPreferences.loading = true
      state.marketingPreferences.error = false
    })
    .addCase(GET_MARKETING_PREFERENCES_SUCCESS, (state, { payload }) => {
      state.marketingPreferences.loading = false
      state.marketingPreferences.error = false
      state.marketingPreferences.consents =
        payload?.consents.map((consent) => {
          return { mission: consent.mission, consent: consent.missionConsents[0]?.consent }
        }) || []
    })
    .addCase(GET_MARKETING_PREFERENCES_FAILURE, (state, { payload }) => {
      const { statusCode, status } = payload.error
      const statusResponse = statusCode || status
      state.marketingPreferences.loading = false
      if (statusResponse === StatusCode.NOT_FOUND) {
        state.marketingPreferences.notFoundEmail = true
        return
      }

      state.marketingPreferences.error = true
    })
})

export default customerReducer
