import { formatCheckoutInfo } from './paypalHelper'

describe('when checkout info is formatted for Paypal', () => {
  it('should return the formatted data', () => {
    const totals = {
      outstanding: 140.0,
    }
    const formattedData = {
      flow: 'checkout',
      amount: 140.0,
      currency: 'GBP',
      enableShippingAddress: false,
      shippingAddressEditable: false,
    }
    expect(formatCheckoutInfo(totals)).toEqual(formattedData)
  })
})
