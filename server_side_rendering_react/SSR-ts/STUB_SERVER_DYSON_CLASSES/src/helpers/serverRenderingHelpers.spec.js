import React from 'react'
import { render } from '../utils/@testing-library'

import Logger from '../utils/Logger'
import {
  getJsFiles,
  internalErrorHandler,
  getBrandAndThemeFromHeader,
  getThemeCss,
  getTealiumBrand,
  getTealiumEnv,
  calculateRequestConfig,
  getUserAgentOS,
  isGuestCheckoutEnabled,
} from './serverRenderingHelpers'
import { nconf } from '../../config/envconfig/envConfig'
import { Brand, Channel } from '../types/reducers'
import { GuestCheckoutConfigOptions } from '../types/middleware'
import { CustomerType, FulfilmentType } from '../types/api'

jest.mock('../utils/Logger')
jest.mock('../../config/envconfig/envConfig')
jest.mock('../../dist/asset-manifest.json', () => ({
  'client.js': '/assets/payment/client/client.hash.min.js',
  'vendors~north~south.js': '/assets/payment/client/vendors~north~south.hash.min.js',
  'vendors~east~west.js': '/assets/payment/client/vendors~east~west.hash.min.js',
  'vendors~west~north.js': '/assets/payment/client/vendors~west~north.hash.min.js',
  'north.js': '/assets/payment/client/chunk-north.hash.min.js',
  'south.js': '/assets/payment/client/chunk-south.hash.min.js',
}))

describe('when getting the js files', () => {
  describe('and the server is in development mode', () => {
    let scriptTags

    beforeEach(() => {
      nconf.get.mockReturnValue('development')
      const { container } = render(<div>{getJsFiles(['north', 'south'])}</div>)
      scriptTags = container
    })

    it('should get the client js file', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/client.js"]')).toBeInTheDocument()
    })

    it('should get the chunked js files for each module in the list', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-north.js"]')).toBeInTheDocument()
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-south.js"]')).toBeInTheDocument()
    })

    it('should not get the chunked files for modules not in the list', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-east.js"]')).toBeNull()
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-west.js"]')).toBeNull()
    })
  })

  describe('and the server is in production mode', () => {
    let scriptTags

    beforeEach(() => {
      nconf.get.mockReturnValue('production')
      const { container } = render(<div>{getJsFiles(['north', 'south'])}</div>)
      scriptTags = container
    })

    it('should get the client js file from the manifest', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/client.hash.min.js"]')).toBeInTheDocument()
    })

    it('should get the chunked js files for each module in the list from the manifest', () => {
      expect(
        scriptTags.querySelector('script[src="/assets/payment/client/chunk-north.hash.min.js"]'),
      ).toBeInTheDocument()
      expect(
        scriptTags.querySelector('script[src="/assets/payment/client/chunk-south.hash.min.js"]'),
      ).toBeInTheDocument()
    })

    it('should not get the chunked files for modules not in the list from the manifest', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-east.hash.min.js"]')).toBeNull()
      expect(scriptTags.querySelector('script[src="/assets/payment/client/chunk-west.hash.min.js"]')).toBeNull()
    })

    it('should get the chunked js files shared between modules in the list from the manifest', () => {
      expect(
        scriptTags.querySelector('script[src="/assets/payment/client/vendors~north~south.hash.min.js"]'),
      ).toBeInTheDocument()
      expect(
        scriptTags.querySelector('script[src="/assets/payment/client/vendors~west~north.hash.min.js"]'),
      ).toBeInTheDocument()
    })

    it('should not get the chunked js files shared between modules in the list from the manifest', () => {
      expect(scriptTags.querySelector('script[src="/assets/payment/client/vendors~east~west.hash.min.js"]')).toBeNull()
    })
  })
})

test('When an internal error occurs in development, should show the stack trace', () => {
  nconf.get.mockReturnValue('development')

  const sendMock = jest.fn()
  const statusMock = jest.fn(() => ({ send: sendMock }))
  const error = { message: 'woops dev', stack: 'fixme.js' }
  const req = {}
  const res = { status: statusMock }
  const next = jest.fn()

  internalErrorHandler(error, req, res, next)

  expect(Logger.error).toHaveBeenCalledWith({ name: 'server', msg: 'Internal server error', detail: 'woops dev' })
  expect(statusMock).toHaveBeenCalledWith(500)
  expect(sendMock).toHaveBeenCalledWith(`
        <img src="https://media.giphy.com/media/uOAXDA7ZeJJzW/giphy.gif" /><br />
        <pre>woops dev</pre>
        <pre>fixme.js</pre>
      `)
  expect(sendMock).toHaveBeenCalledTimes(1)
})

test('When an internal error occurs in staging or production, should show the oops error page', () => {
  nconf.get.mockReturnValue('production')

  const redirectMock = jest.fn()
  const error = { message: 'woops prod' }
  const req = {}
  const res = { redirect: redirectMock }
  const next = jest.fn()

  internalErrorHandler(error, req, res, next)

  expect(Logger.error).toHaveBeenCalledWith({ name: 'server', msg: 'Internal server error', detail: 'woops prod' })
  expect(redirectMock).toHaveBeenCalledWith('/checkout/error?type=internal_error')
  expect(redirectMock).toHaveBeenCalledTimes(1)
})

test('should get the correct brand', () => {
  expect(getBrandAndThemeFromHeader('hab')).toEqual({ brand: 'HABITAT', theme: 'HABITAT' })
  expect(getBrandAndThemeFromHeader('tuc')).toEqual({ brand: 'TU', theme: 'TU' })

  // Default to Argos
  expect(getBrandAndThemeFromHeader('arg')).toEqual({ brand: 'ARGOS', theme: 'ARGOS' })
  expect(getBrandAndThemeFromHeader('gol')).toEqual({ brand: 'ARGOS', theme: 'ARGOS' })
})

test('should get the correct CSS', () => {
  expect(getThemeCss('ARGOS')).toEqual('bolt.min.css')
  expect(getThemeCss('HABITAT')).toEqual('bolt-habitat.min.css')
  expect(getThemeCss('TU')).toEqual('bolt-tu.min.css')

  // default to Argos
  expect(getThemeCss('DEFAULT')).toEqual('bolt.min.css')
})

test('Getting the telium environment', () => {
  nconf.get = jest.fn(() => 'stub')
  expect(getTealiumEnv()).toEqual('qa')

  nconf.get = jest.fn(() => 'remoteStub')
  expect(getTealiumEnv()).toEqual('qa')

  nconf.get = jest.fn(() => 'staging')
  expect(getTealiumEnv()).toEqual('qa')

  nconf.get = jest.fn(() => 'production')
  expect(getTealiumEnv()).toEqual('prod')
})

test('Getting the telium brand', () => {
  expect(getTealiumBrand('ARGOS')).toEqual('main')
  expect(getTealiumBrand('HABITAT')).toEqual('habitat')
})

describe('calculateRequestConfig', () => {
  test('Given a feature has a boolean value, then it should return that value', () => {
    expect(calculateRequestConfig({ cape: true }, {})).toEqual({ cape: true })
    expect(calculateRequestConfig({ cape: false }, {})).toEqual({ cape: false })
  })

  test('Given a feature has a string value, then it should return that value', () => {
    expect(calculateRequestConfig({ season: 'xmas' }, {})).toEqual({ season: 'xmas' })
  })

  test('Given a feature has a number value, then it should return that value', () => {
    expect(calculateRequestConfig({ creditRate: 29.9 }, {})).toEqual({ creditRate: 29.9 })
  })

  test('Given a feature has a null value, then it should return false', () => {
    expect(calculateRequestConfig({ cape: null }, {})).toEqual({ cape: false })
  })

  test('Given a feature is enabled for the ARGOS brand, and we are using the ARGOS brand, then it should return true', () => {
    const features = {
      cape: {
        brands: [Brand.ARGOS],
      },
    }

    expect(calculateRequestConfig(features, { brands: Brand.ARGOS })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for the ARGOS brand and we are NOT using the ARGOS brand, then it should return false', () => {
    const features = {
      cape: {
        brands: [Brand.ARGOS],
      },
    }

    expect(calculateRequestConfig(features, { brands: [Brand.HABITAT] })).toEqual({
      cape: false,
    })
  })

  test('Given a feature is enabled for guest, and we are a guest, then it should return true otherwise it should be false', () => {
    const features = {
      cape: {
        customerType: [CustomerType.REGISTERED],
      },
      mpp: {
        customerType: [CustomerType.GUEST],
      },
    }

    expect(calculateRequestConfig(features, { customerType: CustomerType.GUEST })).toEqual({
      cape: false,
      mpp: true,
    })
  })

  test('Given a feature is enabled for the WEB channel, and we are using the WEB channel, then it should return true', () => {
    const features = {
      cape: {
        channels: [Channel.WEB],
      },
    }

    expect(calculateRequestConfig(features, { channels: Channel.WEB })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for the WEB channel, and we are NOT using the WEB channel, then it should return false', () => {
    const features = {
      cape: {
        channels: [Channel.WEB],
      },
    }

    expect(calculateRequestConfig(features, { channels: Channel.APP })).toEqual({
      cape: false,
    })
  })

  test('Given a feature is ENABLED for the ARGOS brand and the WEB channel, and we satisfy that criteria, then it should return true', () => {
    const features = {
      cape: {
        brands: [Brand.ARGOS],
        channels: [Channel.WEB],
      },
    }
    expect(calculateRequestConfig(features, { brands: Brand.ARGOS, channels: Channel.WEB })).toEqual({ cape: true })
  })

  test('Given a feature is ENABLED for the ARGOS brand and the WEB channel, and we PARTIALLY that criteria, then it should return false', () => {
    const features = {
      cape: {
        brands: [Brand.ARGOS],
        channels: [Channel.WEB],
      },
    }
    expect(calculateRequestConfig(features, { brands: Brand.ARGOS, channels: Channel.APP })).toEqual({ cape: false })
  })

  test('Given a feature is enabled for the COLLECTION fulfilment type, and we are using the COLLECTION fulfilment type, then it should return true', () => {
    const features = {
      cape: {
        fulfilments: [FulfilmentType.COLLECTION],
      },
    }

    expect(calculateRequestConfig(features, { fulfilments: FulfilmentType.COLLECTION })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for the COLLECTION fulfilment type, and we are NOT using the COLLECTION fulfilment type, then it should return false', () => {
    const features = {
      cape: {
        fulfilments: [FulfilmentType.COLLECTION],
      },
    }

    expect(calculateRequestConfig(features, { fulfilments: FulfilmentType.DELIVERY })).toEqual({
      cape: false,
    })
  })

  test('Given a feature is enabled for the 1 segment, and we are in the 1 segment, then it should return true', () => {
    const features = {
      cape: {
        segments: ['1'],
      },
    }

    expect(calculateRequestConfig(features, { segments: '1' })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for the 1 segment, and we are in the 2 segment, then it should return false', () => {
    const features = {
      cape: {
        segments: ['1'],
      },
    }

    expect(calculateRequestConfig(features, { segments: '2' })).toEqual({
      cape: false,
    })
  })

  describe('User is REGISTERED user', () => {
    test('Given a feature is enabled for Darth Vader, and we are Darth Vader, then it should return true', () => {
      const features = {
        cape: {
          users: ['darth.vader@ancestry.com'],
        },
      }

      expect(calculateRequestConfig(features, { users: 'darth.vader@ancestry.com' })).toEqual({
        cape: true,
      })
    })

    test('Given a feature is enabled for Darth Vader, and we are NOT Darth Vader, then it should return false', () => {
      const features = {
        cape: {
          users: ['darth.vader@ancestry.com'],
        },
      }

      expect(calculateRequestConfig(features, { users: 'luke.skywalker@ancestry.com' })).toEqual({
        cape: false,
      })
    })

    test('Given a feature is enabled for Darth Vader written in capital letters, and we are Darth Vader, then it should return true', () => {
      const features = {
        cape: {
          users: ['DARTH.VADER@ANCESTRY.COM'],
        },
      }

      expect(calculateRequestConfig(features, { users: 'darth.vader@ancestry.com' })).toEqual({
        cape: true,
      })
    })

    test('Given a feature is enabled for Darth Vader, and in settings the user is set in capital Letters, then it should return true', () => {
      const features = {
        cape: {
          users: ['darth.vader@ancestry.com'],
        },
      }

      expect(
        calculateRequestConfig(features, {
          users: 'darth.VADER@ancestry.com',
        }),
      ).toEqual({
        cape: true,
      })
    })
    test('Given a feature is enabled for guest user Darth Vader, but customer type is REGISTERED, then it should return false', () => {
      const features = {
        cape: {
          UNSAFE_guestUsers: ['darth.vader@ancestry.com'],
        },
      }

      expect(
        calculateRequestConfig(features, {
          UNSAFE_guestUsers: undefined,
          users: 'darth.vader@ancestry.com',
        }),
      ).toEqual({
        cape: false,
      })
    })
  })

  describe('user is GUEST user', () => {
    test('Given a feature is enabled for Darth Vader, but Customer Type is GUEST, then it should return false', () => {
      const features = {
        cape: {
          users: ['darth.vader@ancestry.com'],
        },
      }

      expect(
        calculateRequestConfig(features, { UNSAFE_guestUsers: 'darth.vader@ancestry.com', users: undefined }),
      ).toEqual({
        cape: false,
      })
    })
    test('Given a feature is enabled for Darth Vader guest user, and in settings the user is set in capital Letters, then it should return true', () => {
      const features = {
        cape: {
          UNSAFE_guestUsers: ['darth.vader@ancestry.com'],
        },
      }

      expect(calculateRequestConfig(features, { UNSAFE_guestUsers: 'darth.VADER@ancestry.com' })).toEqual({
        cape: true,
      })
    })
    test('Given a feature is enabled for guest user Darth Vader, and we are NOT guest user Darth Vader, then it should return false', () => {
      const features = {
        cape: {
          users: ['darth.vader@ancestry.com'],
        },
      }

      expect(calculateRequestConfig(features, { users: 'luke.skywalker@ancestry.com' })).toEqual({
        cape: false,
      })
    })
  })

  test('Given a feature is enabled for store 343, and we are collecting from store 343, then it should return true', () => {
    const features = {
      cape: {
        stores: ['343'],
      },
    }

    expect(calculateRequestConfig(features, { stores: '343' })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for store 343, and we are NOT collecting from store 343, then it should return false', () => {
    const features = {
      cape: {
        stores: ['343'],
      },
    }

    expect(calculateRequestConfig(features, { stores: '2401' })).toEqual({
      cape: false,
    })
  })

  test('Given a feature is enabled for a product, and we are buying that product, then it should return true', () => {
    const features = {
      cape: {
        products: ['1111111'],
      },
    }

    expect(calculateRequestConfig(features, { products: ['1111111'] })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for a product, and we are buying that product among other products, then it should return true', () => {
    const features = {
      cape: {
        products: ['1111111'],
      },
    }

    expect(calculateRequestConfig(features, { products: ['1111111', '2222222', '3333333'] })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for a product, and we are NOT buying that product, then it should return false', () => {
    const features = {
      cape: {
        products: ['1111111'],
      },
    }

    expect(calculateRequestConfig(features, { products: ['2222222'] })).toEqual({
      cape: false,
    })
  })

  test('Given a feature is enabled for a product, and product number contains combination of numbers, capital letters, then it should match product consul case insensitive', () => {
    const features = {
      cape: {
        products: ['TU1111111'],
      },
    }

    expect(calculateRequestConfig(features, { products: ['tu1111111'] })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for a product, and consul product number contains combination of numbers, capital letters, then it should match product number in request case insensitive', () => {
    const features = {
      cape: {
        products: ['tu1111111'],
      },
    }

    expect(calculateRequestConfig(features, { products: ['TU1111111'] })).toEqual({
      cape: true,
    })
  })

  test('Given a feature is enabled for a product, and consul product number contains number not string, then it should be converted to String and check match value in request case insensitive', () => {
    const features = {
      cape: {
        products: [6666, '7666', 5555],
      },
    }

    expect(calculateRequestConfig(features, { products: ['5555'] })).toEqual({
      cape: true,
    })
  })

  test('Given a feature has a VALUE field, and we match the criteria, then it should return that value', () => {
    const features = {
      season: {
        brands: [Brand.ARGOS],
        fulfilmentType: [FulfilmentType.COLLECTION],
        channels: [Channel.WEB],
        value: 'xmas',
      },
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.ARGOS,
        fulfilmentType: FulfilmentType.COLLECTION,
        channels: Channel.WEB,
      }),
    ).toEqual({ season: 'xmas' })
  })

  test('Given a feature is an ARRAY, and we match NONE of the criteria, then it should return false', () => {
    const features = {
      cape: [
        {
          brands: [Brand.ARGOS],
        },
        {
          channels: [Channel.WEB],
        },
      ],
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.HABITAT,
        channels: Channel.APP,
      }),
    ).toEqual({ cape: false })
  })

  test('Given a feature is an ARRAY, and we match the criteria, AND it DOES NOT have a value, then it should return true', () => {
    const features = {
      cape: [
        {
          brands: [Brand.ARGOS],
        },
        {
          channels: [Channel.WEB],
        },
      ],
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.ARGOS,
        channels: Channel.APP,
      }),
    ).toEqual({ cape: true })
  })

  test('Given a feature is an ARRAY, and we match the criteria, AND it HAS a value, then it should return the value', () => {
    const features = {
      season: [
        {
          brands: [Brand.ARGOS],
          value: 'default',
        },
        {
          channels: [Channel.WEB],
        },
      ],
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.ARGOS,
        channels: Channel.APP,
      }),
    ).toEqual({ season: 'default' })
  })

  test("Given a feature is an ARRAY, and we match the 'default', AND it has a value AND brand don`t match, then we should return that value from default", () => {
    const features = {
      season: [
        {
          brands: [Brand.ARGOS],
          value: 'xmas',
        },
        {
          channels: [Channel.WEB],
        },
        {
          value: 'default',
        },
      ],
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.HABITAT,
        channels: Channel.APP,
      }),
    ).toEqual({ season: 'default' })
  })
  test("Given a feature is an ARRAY, and we match the 'default', AND it has a value and brand is match, then we should return that value", () => {
    const features = {
      season: [
        {
          brands: [Brand.ARGOS],
          value: 'xmas',
        },
        {
          channels: [Channel.WEB],
        },
        {
          value: 'default',
        },
      ],
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.ARGOS,
        channels: Channel.APP,
      }),
    ).toEqual({ season: 'xmas' })
  })

  test('Given it is called with multiple features, should handle each of them correctly', () => {
    const features = {
      season: [
        {
          brands: [Brand.ARGOS],
          channels: [Channel.WEB],
          fulfilmentType: [FulfilmentType.COLLECTION],
          value: 'pride',
        },
        {
          brands: [Brand.ARGOS],
          channels: [Channel.WEB],
          fulfilmentType: [FulfilmentType.COLLECTION],
          value: 'xmas',
        },
        {
          value: 'default',
        },
      ],
      cape: {
        brands: [Brand.ARGOS, Brand.HABITAT],
        channels: [Channel.WEB],
        fulfilmentType: [FulfilmentType.COLLECTION],
      },
    }

    expect(
      calculateRequestConfig(features, {
        brands: Brand.HABITAT,
        channels: Channel.WEB,
        fulfilmentType: FulfilmentType.COLLECTION,
      }),
    ).toEqual({
      season: 'default',
      cape: true,
    })
  })
})

test('getUserAgentOS should return the correct user agent operating system', () => {
  const androidUserAgent =
    'Argos|4.35|Android/11|samsung SM-A217F|Mozilla/5.0 (Linux; Android 11; SM-A217F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36|phone-v2'

  const androidRequest = {
    get: () => androidUserAgent,
  }

  expect(getUserAgentOS(androidRequest)).toEqual('ANDROID')

  const iPhoneUserAgent =
    'Argos Consumer App | 5.23.2 | iOS/15.2 | iPhone | Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 | phone-v2'

  const iPhoneRequest = {
    get: () => iPhoneUserAgent,
  }

  expect(getUserAgentOS(iPhoneRequest)).toEqual('IOS')

  const iPadUserAgent =
    'Argos Consumer App | 5.23.2 | iOS/14.8 | iPad | Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 | tablet-v2'

  const iPadRequest = {
    get: () => iPadUserAgent,
  }

  expect(getUserAgentOS(iPadRequest)).toEqual('IOS')

  const macUserAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36'

  const macRequest = {
    get: () => macUserAgent,
  }

  expect(getUserAgentOS(macRequest)).toEqual('OTHER')
})

test('isGuestCheckoutEnabled returns the correct values', () => {
  const scenarios = [
    { toggle: true, query: {}, result: true },
    { toggle: GuestCheckoutConfigOptions.ENABLED, query: {}, result: true },
    { toggle: false, query: {}, result: false },
    { toggle: GuestCheckoutConfigOptions.DISABLED, query: {}, result: false },
    { toggle: { fulfilments: ['COLLECTION'] }, query: {}, result: false },
    { toggle: GuestCheckoutConfigOptions.COLLECTION_ONLY, query: {}, result: false },
    { toggle: { fulfilments: ['COLLECTION'] }, query: { fulfilment: 'delivery' }, result: false },
    { toggle: GuestCheckoutConfigOptions.COLLECTION_ONLY, query: { fulfilment: 'delivery' }, result: false },
    { toggle: { fulfilments: ['COLLECTION'] }, query: { fulfilment: 'collection' }, result: true },
    { toggle: GuestCheckoutConfigOptions.COLLECTION_ONLY, query: { fulfilment: 'collection' }, result: true },
    { toggle: { fulfilments: ['DELIVERY'] }, query: {}, result: false },
    { toggle: GuestCheckoutConfigOptions.DELIVERY_ONLY, query: {}, result: false },
    { toggle: { fulfilments: ['DELIVERY'] }, query: { fulfilment: 'collection' }, result: false },
    { toggle: GuestCheckoutConfigOptions.DELIVERY_ONLY, query: { fulfilment: 'collection' }, result: false },
    { toggle: { fulfilments: ['DELIVERY'] }, query: { fulfilment: 'delivery' }, result: true },
    { toggle: GuestCheckoutConfigOptions.DELIVERY_ONLY, query: { fulfilment: 'delivery' }, result: true },
  ]

  scenarios.forEach(({ toggle, query, result }) => {
    expect(isGuestCheckoutEnabled(toggle, query)).toEqual(result)
  })
})
