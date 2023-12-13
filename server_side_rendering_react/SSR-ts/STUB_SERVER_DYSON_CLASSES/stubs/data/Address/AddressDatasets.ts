import * as uuid from 'uuid'
import { AccountAddress, AccountAddressLines, AccountAddressPerson } from '../../../src/types/api'
import { AddressType } from '../../../src/types/stubs'
import Address from './Address'

export const initialIds = [
  'acda058f-8860-4152-85fe-5bd5f602711b',
  'e0662e11-2416-48f0-8a73-a886815113ff',
  '9eba841e-a3c4-4612-a119-37afff46c8f8',
  '451f205f-e6ea-4293-866b-fd37d67cc200',
  'c0675643-a27e-4718-a396-5d469cf3f5fb',
]

const person: AccountAddressPerson = {
  title: 'Mr',
  firstName: 'Anakin',
  lastName: 'Skywalker',
  mobilePhone: '07890123456',
  homePhone: '02890123456',
  email: 'anakin.skywalker@darkside.com',
}

const foreignAddress: AccountAddressLines = {
  address1: '77',
  address2: 'Kantstrasse Rd',
  address3: '',
  county: 'Freistaat Bayern',
  city: 'Nurnberg',
  country: 'Germany',
  postcode: '90228',
}

const foreignAccountAddress: AccountAddress = {
  id: initialIds[0],
  person,
  lines: foreignAddress,
  contactAddress: true,
  type: 'ADDRESS_TYPE_RESIDENTIAL',
}

export const fakeAddresses: AccountAddressLines[] = [
  {
    address1: 'Flat 34',
    address2: 'Grosvenor House',
    address3: '82 North Street',
    county: 'Berkshire',
    city: 'Reading',
    postcode: 'WS16 4AT',
    country: 'United Kingdom',
  },
  {
    address1: '101',
    address2: 'Seaford Road',
    address3: '',
    county: 'Derbyshire',
    city: 'Derby',
    postcode: 'DY36 3GX',
    country: 'United Kingdom',
  },
  {
    address1: '142',
    address2: 'Tottington Rd',
    address3: '',
    county: 'Greater Manchester',
    city: 'Manchester',
    postcode: 'M1 1AG',
    country: 'United Kingdom',
  },
  {
    address1: '29',
    address2: 'Kings Road',
    address3: '',
    county: 'Greater London',
    city: 'London',
    postcode: 'L10 8ER',
    country: 'United Kingdom',
  },
  foreignAddress,
  {
    address1: '28',
    address2: 'Church Lane',
    address3: '',
    county: 'Merseyside',
    city: 'Liverpool',
    postcode: 'BH24 2EQ',
    country: 'United Kingdom',
  },
  {
    address1: '99',
    address2: 'Wilton Rd',
    address3: 'Pimlico',
    county: 'Greater London',
    city: 'London',
    postcode: 'SW1V 1DT',
    country: 'United Kingdom',
  },
  {
    address1: '489-499',
    address2: 'Avebury Blvd',
    address3: '',
    county: 'Buckinghamshire',
    city: 'Milton Keynes',
    postcode: 'MK9 2NW',
    country: 'United Kingdom',
  },
]

export const blankAddress: AccountAddress = {
  id: initialIds[0],
  type: '',
  person: {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    homePhone: '',
    type: 'GUEST' as AccountAddressPerson['type'],
  },
  lines: {
    address1: '',
    address2: '',
    address3: '',
    city: '',
    postcode: '',
    county: '',
    country: 'United Kingdom',
  },
  contactAddress: false,
}

const getRandomAddress = () => fakeAddresses[Math.floor(Math.random() * fakeAddresses.length)]

const buildAddresses = (numberOfAddresses: number): Address[] => {
  const addresses: Address[] = []

  for (let i = 0; i < numberOfAddresses; i += 1) {
    addresses.push(
      new Address({
        id: initialIds[i] ?? uuid.v4(),
        lines: fakeAddresses[i] ?? getRandomAddress(),
        person,
        contactAddress: i === 0,
      }),
    )
  }

  return addresses
}

const AddressDatasets: Record<AddressType, { description: string; getAccountAddresses: () => Address[] }> = {
  [AddressType.NO_ADDRESSES]: {
    description: '0',
    getAccountAddresses: () => [],
  },
  [AddressType.SINGLE_ADDRESS]: {
    description: '1',
    getAccountAddresses: () => buildAddresses(1),
  },
  [AddressType.FOREIGN_ADDRESS]: {
    description: '1 (foreign)',
    getAccountAddresses: () => [new Address(foreignAccountAddress)],
  },
  [AddressType.BLANK_ADDRESS]: {
    description: '1 (blank)',
    getAccountAddresses: () => [new Address(blankAddress)],
  },
  [AddressType.DEFAULT]: {
    description: '5',
    getAccountAddresses: () => buildAddresses(5),
  },
  [AddressType.BELOW_LIMIT_ADDRESSES]: {
    description: '11',
    getAccountAddresses: () => buildAddresses(11),
  },
  [AddressType.AT_LIMIT_ADDRESSES]: {
    description: '12',
    getAccountAddresses: () => buildAddresses(12),
  },
  [AddressType.MANY_ADDRESSES]: {
    description: '100',
    getAccountAddresses: () => buildAddresses(100),
  },
}

export default AddressDatasets
