import { AccountAddressLines } from '../types/api'

export const isPostcodeOnly = (addressLines: AccountAddressLines) => {
  return !!(addressLines && addressLines.postcode && !addressLines.city && !addressLines.address1)
}
