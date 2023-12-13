import { AddressFormValues } from 'types/components'
import { AccountAddress } from 'types/api'
import { AddressState, Brand, Consent } from 'types/reducers'

export interface GetAddressesSuccessActionPayload {
  addresses: AccountAddress[]
}

export enum UpdateSnapshotAddressType {
  BILLING = 'BILLING',
  DELIVERY = 'DELIVERY',
}
export interface UpdateSnapshotAddressActionPayload {
  address: AddressState
  onSuccess: () => void
  onFailure: () => void
  type: UpdateSnapshotAddressType
}

export interface UpdateSnapshotAddressSuccessActionPayload {
  address: AddressState
  type: UpdateSnapshotAddressType
}

export interface AddAddressActionPayload {
  address: Omit<AccountAddress, 'id'>
  onSuccess?: () => void
  onFailure?: () => void
  type: UpdateSnapshotAddressType
}

export interface AddAddressSuccessActionPayload {
  address: AddressState
}

export interface AddAccountAddressSuccessActionPayload {
  address: AccountAddress
}

export interface AddMissingAddressActionPayload {
  customerId: string
  address: Omit<AccountAddress, 'id'>
  onSuccess?: () => void
  onFailure?: () => void
}

export interface UpdateContactAddressSuccessActionPayload {
  address: AccountAddress
}

export interface UpdateAddressActionPayload {
  addressId: string
  type: string
  contactAddress: boolean
  values: AddressFormValues
  onSuccess?: () => void
  onFailure?: () => void
}

export type UpdateContactAndBillingAddressPayload = Omit<
  UpdateAddressActionPayload,
  'addressId' | 'type' | 'contactAddress'
>

export interface UpdateAddressSuccessActionPayload {
  previousAddressId: string
  newAddress: AddressState
}

export interface CheckUserAcountExistsSuccessActionPayload {
  userAccountExists: boolean
}

export interface CreateUserAccountPayload {
  password: string
  marketingPreferenceOptIn: boolean
}

export interface GetMarketingPreferencesPayload {
  email: string
}

export interface GetMarketingPreferencesSuccessPayload {
  consents: {
    mission: Brand
    missionCustomerId: null
    missionConsents: [
      {
        communicationChannel: string
        mission: Brand
        touchpoint: null
        touchpointMission: null
        consent: Consent['consent']
        datetime: number
      },
    ]
  }[]
}

export interface GetMarketingPreferencesFailurePayload {
  error: Response & { statusCode: number }
}

export type SetMarketingPreferencesFailurePayload = GetMarketingPreferencesFailurePayload

export interface SaveMarketingPreferencesPayload {
  email: string
  missionCode: Brand
  consents: [
    {
      touchpoint: 'GUEST'
      consent: Consent['consent']
      mission: Brand
    },
  ]
}
