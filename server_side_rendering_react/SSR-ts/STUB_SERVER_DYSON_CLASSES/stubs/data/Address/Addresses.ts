import * as uuid from 'uuid'
import { OrderAddress, SnapshotAddress, AccountAddress, SnapshotDeliveryAddress } from '../../../src/types/api'
import { SnapshotContactAddress } from '../../../src/types/api/snapshot'
import { AddressesStub, AddressResponseTypes, AddressType, SerialisableStubObject } from '../../../src/types/stubs'
import getRandomNumberBetween from '../../helpers/getRandomNumberBetween'
import AddressDatasets from './AddressDatasets'

import {
  addAddressResponseData,
  getAddressResponseData,
  updateAddressResponseData,
  updateBillingAddressResponseData,
  updateContactAddressResponseData,
  updateDeliveryAddressResponseData,
} from './Datasets'

import Address from './Address'

class Addresses implements SerialisableStubObject<AddressesStub> {
  private _billingAddress?: Address
  private _contactAddress?: Address
  private _deliveryAddress?: Address
  private _accountAddresses: Address[]
  private _addressType: AddressType
  private _isFirstAddressPreferred: boolean
  private _responseTypes: AddressResponseTypes

  constructor() {
    this.setDefaults()
  }

  setDefaults() {
    this._isFirstAddressPreferred = true
    this._addressType = AddressType.DEFAULT

    this._responseTypes = {
      addAccountAddress: 'AddressAdded',
      updateAccountAddress: 'AddressUpdated',
      getAccountAddresses: 'AddressReturned',

      updateBillingAddress: 'AddressAdded',
      updateContactAddress: 'AddressAdded',
      updateDeliveryAddress: 'AddressAdded',
    }

    this.setAddresses()
  }

  reset() {
    this.setDefaults()
  }

  toJson(): AddressesStub {
    return {
      billingAddress: this._billingAddress?.toJson(),
      contactAddress: this._contactAddress?.toJson(),
      deliveryAddress: this._deliveryAddress?.toJson(),
      accountAddresses: this._accountAddresses.map((address) => address.toJson()),
      addressType: this._addressType,
      isFirstAddressPreferred: this._isFirstAddressPreferred,
      responseTypes: this._responseTypes,
    }
  }

  fromJson(json: AddressesStub) {
    if (json.billingAddress) {
      this._billingAddress = new Address(json.billingAddress)
    }

    if (json.contactAddress) {
      this._contactAddress = new Address(json.contactAddress)
    }

    if (json.deliveryAddress) {
      this._deliveryAddress = new Address(json.deliveryAddress)
    }

    this._accountAddresses = json.accountAddresses.map((jsonAddress) => new Address(jsonAddress))

    this._addressType = json.addressType
    this._isFirstAddressPreferred = json.isFirstAddressPreferred
    this._responseTypes = json.responseTypes
  }

  getSnapshotBillingAddress(): SnapshotAddress | undefined {
    return this._billingAddress?.toSnapshotAddress('ADDRESS_TYPE_BILLING')
  }

  getOrderBillingAddress(): OrderAddress | undefined {
    return this._billingAddress?.toOrderAddress('ADDRESS_TYPE_BILLING')
  }

  updateBillingAddress(newBillingAddress: SnapshotAddress) {
    this._billingAddress = new Address(newBillingAddress)
  }

  getSnapshotContactAddress(): SnapshotAddress | undefined {
    return this._contactAddress?.toSnapshotAddress('ADDRESS_TYPE_CONTACT')
  }

  getOrderContactAddress(): OrderAddress | undefined {
    return this._contactAddress?.toOrderAddress('ADDRESS_TYPE_CONTACT')
  }

  updateContactAddress(newContactAddress: SnapshotContactAddress) {
    this._contactAddress = new Address(newContactAddress)
  }

  getSnapshotDeliveryAddress(): SnapshotAddress | SnapshotDeliveryAddress | undefined {
    return this._deliveryAddress?.toSnapshotDeliveryAddress()
  }

  getOrderDeliveryAddress(): OrderAddress | undefined {
    return this._deliveryAddress?.toOrderAddress('ADDRESS_TYPE_DELIVERY')
  }

  updateDeliveryAddress(newDeliveryAddress: SnapshotAddress) {
    this._deliveryAddress = new Address(newDeliveryAddress)
  }

  removeDeliveryAddress() {
    this._deliveryAddress = undefined
  }

  getAccountAddresses(): AccountAddress[] {
    return this._accountAddresses.map((address) => address.toAccountAddress())
  }

  updateAccountAddress(addressId: string, updatedAccountAddress: AccountAddress): AccountAddress {
    const existingAddressIndex = this._accountAddresses.findIndex(
      (address) => address.toAccountAddress()?.id === addressId,
    )

    if (existingAddressIndex === -1) {
      throw new Error(`Unknown address id: ${addressId}`)
    }

    const existingContactAddress = this._accountAddresses.find((address) => address.contactAddress)

    if (updatedAccountAddress.contactAddress && existingContactAddress) {
      // If new address is the contact address, set contact address field in previous contact address to false
      existingContactAddress.contactAddress = false
    }

    // Mock how actual backend updates existing addresses with new id's.
    const updatedAddress = new Address({ ...updatedAccountAddress })

    this._accountAddresses[existingAddressIndex] = updatedAddress

    return updatedAddress.toAccountAddress()
  }

  addAccountAddress(newAccountAddress: Omit<AccountAddress, 'id'>): AccountAddress {
    const newAddress = new Address({
      ...newAccountAddress,
      contactAddress: newAccountAddress.contactAddress ?? false,
      id: uuid.v4(),
    })

    if (this._accountAddresses.length === 0) {
      // if no existing addresses in the account then force contactAddress: true
      newAddress.contactAddress = true
    }

    if (newAccountAddress.contactAddress) {
      // If new address is the contact address, set contact address field in previous contact address to false
      const existingContactAddress = this._accountAddresses.find((address) => address.contactAddress)
      if (existingContactAddress) {
        existingContactAddress.contactAddress = false
      }
    }

    this._accountAddresses.push(newAddress)

    if (!this._billingAddress) {
      this._billingAddress = newAddress
    }

    if (!this._contactAddress) {
      this._contactAddress = newAddress
    }

    return newAddress.toAccountAddress()
  }

  isFirstAddressPreferred(): boolean {
    return this._isFirstAddressPreferred
  }

  toggleFirstAddressPreferred() {
    this._isFirstAddressPreferred = !this._isFirstAddressPreferred

    const addressCount = this._accountAddresses.length
    const startIndex = addressCount > 1 ? 1 : 0

    // Unset preferred address
    const currentPreferred = this._accountAddresses.findIndex((address) => address.contactAddress)
    this._accountAddresses[currentPreferred].contactAddress = false

    // Set new preferred address
    const newPreferred = this._isFirstAddressPreferred ? 0 : getRandomNumberBetween(startIndex, addressCount)
    this._accountAddresses[newPreferred].contactAddress = true

    this._billingAddress = this._accountAddresses[newPreferred]
    this._contactAddress = this._accountAddresses[newPreferred]

    if (newPreferred !== currentPreferred) {
      console.log(
        `API: setPreferredAddress - address [${newPreferred}] is now the preferred address (was ${currentPreferred})`,
      )
    }
  }

  private setAddresses() {
    const accountAddresses = AddressDatasets[this._addressType].getAccountAddresses()
    this._accountAddresses = accountAddresses

    if (this._accountAddresses.length === 0) {
      this._billingAddress = undefined
      this._contactAddress = undefined
    }

    this._billingAddress = accountAddresses[0]
    this._contactAddress = accountAddresses[0]
  }

  setAddressType(addressType: AddressType) {
    this._addressType = addressType

    this.setAddresses()
  }

  getAddressType(): AddressType {
    return this._addressType
  }

  getResponseTypes() {
    return this._responseTypes
  }

  setAddAccountAddressResponseType(type: keyof typeof addAddressResponseData) {
    this._responseTypes.addAccountAddress = type
  }

  setUpdateAccountAddressResponseType(type: keyof typeof updateAddressResponseData) {
    this._responseTypes.updateAccountAddress = type
  }

  setGetAccountAddressesResponseType(type: keyof typeof getAddressResponseData) {
    this._responseTypes.getAccountAddresses = type
  }

  setUpdateBillingAddressResponseType(type: keyof typeof updateBillingAddressResponseData) {
    this._responseTypes.updateBillingAddress = type
  }

  setUpdateContactAddressResponseType(type: keyof typeof updateContactAddressResponseData) {
    this._responseTypes.updateContactAddress = type
  }

  setUpdateDeliveryAddressResponseType(type: keyof typeof updateDeliveryAddressResponseData) {
    this._responseTypes.updateDeliveryAddress = type
  }

  getAddAccountAddressResponse() {
    return addAddressResponseData[this._responseTypes.addAccountAddress].response
  }

  getUpdateAccountAddressResponse() {
    return updateAddressResponseData[this._responseTypes.updateAccountAddress].response
  }

  getAccountAddressesResponse() {
    return getAddressResponseData[this._responseTypes.getAccountAddresses].response
  }

  getUpdateBillingAddressResponse() {
    return updateBillingAddressResponseData[this._responseTypes.updateBillingAddress].response
  }

  getUpdateContactAddressResponse() {
    return updateBillingAddressResponseData[this._responseTypes.updateContactAddress].response
  }

  getUpdateDeliveryAddressResponse() {
    return updateBillingAddressResponseData[this._responseTypes.updateDeliveryAddress].response
  }
}

export default Addresses
