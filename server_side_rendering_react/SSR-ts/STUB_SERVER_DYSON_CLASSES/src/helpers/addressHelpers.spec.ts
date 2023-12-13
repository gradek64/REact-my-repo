import { isPostcodeOnly } from './addressHelpers'

describe('isPostcodeOnly', () => {
  it('should return true for an address with only postcode', () => {
    const address = { postcode: '12345', city: '', country: '', address1: '' }
    expect(isPostcodeOnly(address)).toBe(true)
  })

  it('should return false for an address with city and postcode', () => {
    const address = { postcode: '12345', city: 'City', country: '', address1: '' }
    expect(isPostcodeOnly(address)).toBe(false)
  })

  it('should return true for an address with country and postcode', () => {
    const address = { postcode: '12345', country: 'Country' }
    expect(isPostcodeOnly(address)).toBe(true)
  })

  it('should return false for an address with address1 and postcode', () => {
    const address = { postcode: '12345', city: '', country: '', address1: 'Address1' }

    expect(isPostcodeOnly(address)).toBe(false)
  })

  it('should return false for an empty address', () => {
    const address = { postcode: '', city: '', country: '', address1: '' }
    expect(isPostcodeOnly(address)).toBe(false)
  })
})
