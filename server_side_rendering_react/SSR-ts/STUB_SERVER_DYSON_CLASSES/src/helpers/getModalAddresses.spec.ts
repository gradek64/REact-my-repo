import { getModalAddresses } from './getModalAddresses'
import { singleAddress, fullAddress, foreignCountryAddress, contactAddress } from 'mocks/state'

describe('getModalAddresses', () => {
  it('returns the contact address first in a list of addresses', () => {
    expect(getModalAddresses([singleAddress, contactAddress])).toEqual([contactAddress, singleAddress])
  })

  it('returns the addresses in the same order if there is no contact address', () => {
    const noContactAddresses = [singleAddress, fullAddress]
    expect(getModalAddresses(noContactAddresses)).toEqual(noContactAddresses)
  })

  it('filters out foreign addresses if the modal route is set to delivery', () => {
    expect(getModalAddresses([singleAddress, contactAddress, foreignCountryAddress, fullAddress], 'delivery')).toEqual([
      contactAddress,
      singleAddress,
      fullAddress,
    ])
  })

  it('does not filter out foreign addresses if the modal route is set to payment', () => {
    expect(getModalAddresses([singleAddress, contactAddress, foreignCountryAddress, fullAddress], 'payment')).toEqual([
      contactAddress,
      singleAddress,
      foreignCountryAddress,
      fullAddress,
    ])
  })
})
