import { ErrorResponse } from './errorResponse'
import { APIResponse } from '.'

export interface Lines {
  address1: string
  address2: string
  address3: string
  city: string
  county: string
  postcode: string
  country: string
}

export interface Person {
  homePhone: string
  mobilePhone: string
  title: string
  firstName: string
  lastName: string
}

interface AddressErrorPayloadData {
  lines: Lines
  person: Person
}

export interface AddressErrorPayload {
  error: APIResponse<ErrorResponse<string>, AddressErrorPayloadData>
}

export enum AddressValidationErrorAdvice {
  ADDRESS_INVALID_ADDRESS_HOUSE = 'ADDRESS_INVALID_ADDRESS_HOUSE',
  ADDRESS_INVALID_ADDRESS_LINE_ONE = 'ADDRESS_INVALID_ADDRESS_LINE_ONE',
  ADDRESS_INVALID_ADDRESS_LINE_TWO = 'ADDRESS_INVALID_ADDRESS_LINE_TWO',
  ADDRESS_INVALID_CITY = 'ADDRESS_INVALID_CITY',
  ADDRESS_INVALID_COUNTY = 'ADDRESS_INVALID_COUNTY',
  ADDRESS_INVALID_COUNTRY = 'ADDRESS_INVALID_COUNTRY',
  ADDRESS_INVALID_POSTCODE = 'ADDRESS_INVALID_POSTCODE',
  ADDRESS_INVALID_HOMEPHONE = 'ADDRESS_INVALID_HOMEPHONE',
  ADDRESS_INVALID_MOBILEPHONE = 'ADDRESS_INVALID_MOBILEPHONE',
  ADDRESS_INVALID_TITLE = 'ADDRESS_INVALID_TITLE',
  ADDRESS_INVALID_FIRSTNAME = 'ADDRESS_INVALID_FIRSTNAME',
  ADDRESS_INVALID_LASTNAME = 'ADDRESS_INVALID_LASTNAME',
}
