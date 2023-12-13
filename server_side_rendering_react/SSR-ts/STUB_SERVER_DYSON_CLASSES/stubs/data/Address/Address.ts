import {
  OrderAddress,
  SnapshotAddress,
  AccountAddress,
  AccountAddressLines,
  AccountAddressPerson,
  SnapshotDeliveryAddress,
} from '../../../src/types/api'
import { AddressStub, SerialisableStubObject } from '../../../src/types/stubs'

class Address implements SerialisableStubObject<AddressStub> {
  private _id?: string
  private _person: AccountAddressPerson
  private _lines: AccountAddressLines
  private _contactAddress?: boolean

  constructor({
    person,
    lines,
    id,
    contactAddress,
  }: {
    person: AccountAddressPerson
    lines: AccountAddressLines
    id?: string
    contactAddress?: boolean
  }) {
    this._person = person
    this._lines = lines
    this._id = id
    this.contactAddress = contactAddress
  }

  get contactAddress() {
    return this._contactAddress
  }

  set contactAddress(contactAddress) {
    this._contactAddress = contactAddress
  }

  toAccountAddress(): AccountAddress {
    if (!this._id) {
      throw new Error('Address is missing id')
    }

    if (typeof this._contactAddress === 'undefined') {
      throw new Error('Address is missing contact address')
    }

    const accountLines: AccountAddressLines = {
      address1: this._lines.address1,
      address2: this._lines.address2,
      city: this._lines.city,
      postcode: this._lines.postcode,
      country: this._lines.country,
    }

    const accountPerson: AccountAddressPerson = {
      title: this._person.title,
      firstName: this._person.firstName,
      lastName: this._person.lastName,
    }

    // Mock the API behaviour - optional fields aren't returned in the response
    // if they are not set (even if we explicitly send an empty string when
    // adding an address, the empty string will be removed when sending it back
    // to us).
    if (this._lines.address3 && this._lines.address3 !== '') accountLines.address3 = this._lines.address3
    if (this._lines.county && this._lines.county !== '') accountLines.county = this._lines.county
    if (this._person.mobilePhone && this._person.mobilePhone !== '')
      accountPerson.mobilePhone = this._person.mobilePhone
    if (this._person.homePhone && this._person.homePhone !== '') accountPerson.homePhone = this._person.homePhone

    return {
      id: this._id,
      lines: accountLines,
      person: accountPerson,
      type: 'ADDRESS_TYPE_BOTH',
      contactAddress: this._contactAddress,
    }
  }

  toSnapshotAddress(type = 'ADDRESS_TYPE_BOTH'): SnapshotAddress {
    return {
      id: this._id,
      person: {
        ...this._person,
        email: type === 'ADDRESS_TYPE_CONTACT' ? this._person.email : undefined,
      },
      lines: this._lines,
      type,
    }
  }

  toSnapshotDeliveryAddress(): SnapshotAddress | SnapshotDeliveryAddress {
    if (!this._person) {
      return {
        lines: {
          postcode: this._lines?.postcode || '',
          country: this._lines?.country || 'United Kingdom',
        },
      }
    }

    return this.toSnapshotAddress('ADDRESS_TYPE_DELIVERY')
  }

  toOrderAddress(type = 'ADDRESS_TYPE_BOTH'): OrderAddress {
    return {
      person: this._person,
      lines: this._lines,
      type,
    }
  }

  toJson(): AddressStub {
    return {
      id: this._id,
      person: this._person,
      lines: this._lines,
      contactAddress: this._contactAddress,
    }
  }

  fromJson(json: AddressStub) {
    this._id = json.id
    this._person = json.person
    this._lines = json.lines
    this.contactAddress = json.contactAddress
  }
}

export default Address
