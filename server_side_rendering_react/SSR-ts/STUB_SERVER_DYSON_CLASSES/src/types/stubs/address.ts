import {
  addAddressResponseData,
  getAddressResponseData,
  updateAddressResponseData,
  updateBillingAddressResponseData,
  updateContactAddressResponseData,
  updateDeliveryAddressResponseData,
} from '../../../stubs/data/Address'
import { AccountAddressLines, AccountAddressPerson } from '../api'

export interface AddressStub {
  id?: string
  person: AccountAddressPerson
  lines: AccountAddressLines
  contactAddress?: boolean
}

export interface AddressResponseTypes {
  addAccountAddress: keyof typeof addAddressResponseData
  updateAccountAddress: keyof typeof updateAddressResponseData
  getAccountAddresses: keyof typeof getAddressResponseData

  updateBillingAddress: keyof typeof updateBillingAddressResponseData
  updateContactAddress: keyof typeof updateContactAddressResponseData
  updateDeliveryAddress: keyof typeof updateDeliveryAddressResponseData
}

export interface AddressesStub {
  billingAddress?: AddressStub
  contactAddress?: AddressStub
  deliveryAddress?: AddressStub
  accountAddresses: AddressStub[]
  addressType: AddressType
  isFirstAddressPreferred: boolean
  responseTypes: AddressResponseTypes
}

export enum AddressType {
  BLANK_ADDRESS = 'BlankAddress',
  NO_ADDRESSES = 'NoAddresses',
  SINGLE_ADDRESS = 'SingleAddress',
  FOREIGN_ADDRESS = 'ForeignAddress',
  DEFAULT = 'Default',
  BELOW_LIMIT_ADDRESSES = 'BelowLimitAddresses',
  AT_LIMIT_ADDRESSES = 'AtLimitAddresses',
  MANY_ADDRESSES = 'ManyAddresses',
}

export enum ModifyAddressPresetsTypeParam {
  setBillingUK = 'setBillingUK',
  setBillingInternational = 'setBillingInternational',
  setBillingMultiCharFirstName = 'setBillingMultiCharFirstName',
  setBillingSingleCharFirstName = 'setBillingSingleCharFirstName',
  setBillingMatchContact = 'setBillingMatchContact',
  setBillingMatchDelivery = 'setBillingMatchDelivery',
  setBillingUnique = 'setBillingUnique',
  setContactUK = 'setContactUK',
  setContactInternational = 'setContactInternational',
  setContactMultiCharFirstName = 'setContactMultiCharFirstName',
  setContactSingleCharFirstName = 'setContactSingleCharFirstName',
  setContactMatchBilling = 'setContactMatchBilling',
  setContactMatchDelivery = 'setContactMatchDelivery',
  setContactUnique = 'setContactUnique',
  setDeliveryMultiCharFirstName = 'setDeliveryMultiCharFirstName',
  setDeliverySingleCharFirstName = 'setDeliverySingleCharFirstName',
  setDeliveryOnlyLocalizedPostcode = 'setDeliveryOnlyLocalizedPostcode',
  setDeliveryMatchBilling = 'setDeliveryMatchBilling',
  setDeliveryMatchContact = 'setDeliveryMatchContact',
  setDeliveryUnique = 'setDeliveryUnique',
}
