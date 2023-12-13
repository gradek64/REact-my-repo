import { AddressesStub } from '.'

type MarketingPreference = null | 'Y' | 'N' | 'LI'

export interface UserStub {
  userType: string
  addressType?: string
  loginState: string
  title: string
  firstName: string
  lastName: string
  email: string
  homePhone: string
  mobilePhone: string
  addresses: AddressesStub
  marketingPreferences: {
    ARGOS: MarketingPreference
    TU: MarketingPreference
    HABITAT: MarketingPreference
    responseStatus: number
  }
}
