import { SnapshotAddress, SnapshotDeliveryAddress } from '../api'
import { Brand } from './app'

interface Errors {
  getAddresses: boolean
}

/**
 * Addresses that are retrieved from the account-api have a contactAddress field
 */
interface Address extends SnapshotAddress {
  contactAddress: boolean
}

/**
 * An address that is saved in the user's address book.
 */
export interface SavedAddress extends Address {
  id: string
}

/**
 * When we're unable to save an address to the user's address book, the address
 * won't have an ID and can't be the contact address.
 */
export interface UnsavedAddress extends Address {
  contactAddress: false
}

export type AddressState = SavedAddress | UnsavedAddress

export type BillingAddress = AddressState | SnapshotAddress

export interface Consent {
  mission: Brand
  consent: null | 'Y' | 'N' | 'LI'
}

export interface CustomerState {
  id: string | null
  type: 'REGISTERED' | 'GUEST' | null
  email: string
  pendingSnapshotAddressId: string | null
  billingAddress: BillingAddress
  contactAddress: SavedAddress
  deliveryAddress?: SnapshotDeliveryAddress
  addresses: AddressState[]
  loading: false
  gettingAddresses: boolean
  showConfirmAddressAlert: boolean
  addingAddress: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
    addedAccountAddressId: null | string
  }
  updatingAddress: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
  }
  updatingSnapshotAddress: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
  }
  addingMissingAddress: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
  }
  isAccountAddressSaved: boolean
  isContactAddressSaved: boolean
  isBillingAddressSaved: boolean
  isDeliveryAddressSaved: boolean
  errors: Errors
  userAccountCheck: {
    loading: boolean
    numberOfAttempts: number
    exists: boolean
    error: boolean
  }
  userAccountCreate: {
    loading: boolean
    numberOfAttempts: number
    error: boolean
    created: boolean
  }
  updatingContactAndBillingAddress: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
  }
  marketingPreferences: {
    consents: Consent[]
    error: boolean
    loading: boolean
    notFoundEmail: boolean
  }
}

/**
 * Type guard to allow narrowing the type of address from "Address" to either
 * "SavedAddress" or "UnsavedAddress"
 */
export const isSavedAddress = (address: AddressState): address is SavedAddress => 'id' in address
