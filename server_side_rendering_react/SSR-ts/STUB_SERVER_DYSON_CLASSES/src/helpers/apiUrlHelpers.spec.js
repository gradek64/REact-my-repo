import { canUseDom } from '@sainsburys-tech/boltui-utils'
import {
  prepayApiEndpoint,
  accountApiEndpoint,
  orderApiEndpoint,
  productApiEndpoint,
  getUserInfoApiEndpoint,
  marketingPreferencesApiEndpoint,
} from './apiUrlHelpers'

jest.mock('@sainsburys-tech/boltui-utils', () => ({
  canUseDom: jest.fn(),
}))
jest.mock('../config/config', () => ({
  prepayApiServer: 'https://checkout-gateway.argos',
  accountApiServer: 'https://account-service.argos',
  productApiServer: 'https://www.argos.co.uk',
  getUserInfoApiServer: 'https://www.argos.co.uk',
  marketingApiServer: 'https://www.argos.co.uk',
  prepayApiBaseUrl: '/checkout-api-v2',
  accountApiBaseUrl: '/account-api',
  orderApiBaseUrl: '/checkout-api-v2',
  productApiBaseUrl: '/product-gateway',
  getUserInfoApiBaseUrl: '/webapp/wcs/stores/servlet/GetUserInfo',
  marketingApiBaseUrl: '/checkout/proxy/marketing-preferences',
}))

describe('when the API is being called from the server', () => {
  beforeAll(() => {
    canUseDom.mockImplementation(() => false)
  })

  it('should use absolute URLs and hit the service directly', () => {
    expect(prepayApiEndpoint('/prepay')).toBe('https://checkout-gateway.argos/checkout-api-v2/prepay')
    expect(accountApiEndpoint('/account')).toBe('https://account-service.argos/account-api/account')
    expect(orderApiEndpoint('/order')).toBe('https://checkout-gateway.argos/checkout-api-v2/order')
    expect(productApiEndpoint('/product/123,456')).toBe('https://www.argos.co.uk/product-gateway/product/123,456')
    expect(getUserInfoApiEndpoint()).toBe('https://www.argos.co.uk/webapp/wcs/stores/servlet/GetUserInfo')
    expect(marketingPreferencesApiEndpoint()).toBe('https://www.argos.co.uk/checkout/proxy/marketing-preferences')
  })
})

describe('when the API is being called from the client', () => {
  beforeAll(() => {
    canUseDom.mockImplementation(() => true)
  })

  it('should use relative URLs', () => {
    expect(prepayApiEndpoint('/prepay')).toBe('/checkout-api-v2/prepay')
    expect(accountApiEndpoint('/account')).toBe('/account-api/account')
    expect(orderApiEndpoint('/order')).toBe('/checkout-api-v2/order')
    expect(productApiEndpoint('/product/123,456')).toBe('/product-gateway/product/123,456')
    expect(getUserInfoApiEndpoint()).toBe('/webapp/wcs/stores/servlet/GetUserInfo')
    expect(marketingPreferencesApiEndpoint()).toBe('/checkout/proxy/marketing-preferences')
  })
})
