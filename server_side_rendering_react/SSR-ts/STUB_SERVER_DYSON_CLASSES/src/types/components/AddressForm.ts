export interface ExperianAddressFormat {
  address: {
    addressLine1: string
    addressLine2: string
    addressLine3: string
    locality: string
    province: string
    postalCode: string
    country: string
  }
  components: {
    building1: string
    locality1: string
    locality2: string
    locality3: string
    postalCode1: string
    country1: string
    countryISO1: string
    countryISO2: string
    deliveryService1: string
    subBuilding1: string
    organisation1: string
    organisation2: string
    streetNumber1: string
    street1: string
  }
}

export interface AddressFormValues {
  title: string
  firstName: string
  lastName: string
  _phoneType: 'mobilePhone' | 'homePhone'
  mobilePhone: string
  homePhone: string
  country: string
  addressFinder?: string
  address1?: string
  address2?: string
  address3?: string
  city?: string
  county?: string
  postcode: string
  contactAddress: boolean
  email?: string
}
