import formatPrice from './formatPrice'

describe(`Formatprice helper tests`, () => {
  it(`should format the price correctly`, () => {
    expect(formatPrice(400.5, '£')).toEqual('£400.50')
    expect(formatPrice(400, '£')).toEqual('£400.00')
    expect(formatPrice(-4.0, '£')).toEqual('− £4.00')
    expect(formatPrice(0, '£')).toEqual('£0.00')
    expect(formatPrice(100, '$')).toEqual('$100.00')
    expect(formatPrice(1235300, '$')).toEqual('$1,235,300.00')
    expect(formatPrice(1235300.45454, '$')).toEqual('$1,235,300.45')
    expect(formatPrice(1235300.45454)).toEqual('£1,235,300.45')
  })
})
