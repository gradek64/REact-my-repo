import { APIResponse } from 'types/api'

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/account/types/customertype.html)
 */
export enum CustomerType {
  REGISTERED = 'REGISTERED',
  GUEST = 'GUEST',
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/account/types/person.html)
 */
export interface AccountAddressPerson {
  title: string
  firstName: string
  lastName: string
  email?: string
  type?: CustomerType
  // Address must contain at-least a mobile phone OR home phone
  mobilePhone?: string
  homePhone?: string
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/account/types/address.html#addressdetails)
 */
export interface AccountAddressLines {
  address1?: string
  address2?: string
  address3?: string
  city?: string
  county?: string
  postcode: string
  country: string
}

