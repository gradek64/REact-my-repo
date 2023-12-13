import fetch from 'isomorphic-unfetch'

import { navigationHeaderFetcher, navigationHeaderProxy, config } from './navigationHeaderMiddleware'

jest.mock('isomorphic-unfetch')

const mockResponse = {
  markup: '<html>MARKUP</html>',
  assets: '<script>ASSETS</script>',
  styleTags: '<style>STYLE TAGS</style>',
  styleTagElements: [{ props: { 'data-styled': '', dangerouslySetInnerHTML: 'Styles' } }]
}

const fetchMock = (resolvedData) => ({
  then: (callback) => callback({ json: jest.fn(() => Promise.resolve(resolvedData)) })
})

const fetchEnvironment = 'development'

describe('When fetching the header as a service', () => {
  describe('and it is the first request', () => {
    const next = jest.fn()
    const req = {}
    beforeAll(() => {
      fetch.mockClear()
      Date.now = jest.fn(() => 1550573540664)
      fetch.mockImplementationOnce(() => fetchMock(mockResponse))
      navigationHeaderFetcher(fetchEnvironment)(req, {}, next)
    })

    it('should make a new request', () => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(
        `${config.ENDPOINTS[fetchEnvironment]}${config.MANIFEST_PATH}`,
        config.REQUEST_HEADERS
      )
    })

    it('should save the header data', () => {
      expect(req.navigationHeaderService).toEqual({
        ...mockResponse,
        lastUpdated: 1550573540664
      })
    })
  })
  describe('and it has been less than 30 minutes since the last request', () => {
    const next = jest.fn()
    const req = {}
    beforeAll(() => {
      global.navigationHeaderService = {
        default: {
          ...mockResponse,
          lastUpdated: 1550573240664
        }
      }
      fetch.mockClear()
      Date.now = jest.fn(() => 1550573240664)
      navigationHeaderFetcher(fetchEnvironment)(req, {}, next)
    })

    it('should NOT make a new request', () => {
      expect(fetch).toHaveBeenCalledTimes(0)
    })

    it('should save the header data', () => {
      expect(req.navigationHeaderService).toEqual({
        ...mockResponse,
        lastUpdated: 1550573240664
      })
    })
  })

  describe('and it has been over 30 minutes since the last request', () => {
    const next = jest.fn()
    const req = {}
    const oldResponse = {
      assets: 'old assets',
      markup: 'old markup',
      styleTags: 'old styleTags',
      styleTagElements: [{ props: { 'data-styled': '', dangerouslySetInnerHTML: 'old Styles' } }]
    }
    beforeAll(() => {
      global.navigationHeaderService = {
        default: {
          ...oldResponse,
          lastUpdated: 1550573240664
        }
      }
      fetch.mockClear()
      Date.now = jest.fn(() => 1550576009224)
      fetch.mockImplementationOnce(() => fetchMock(oldResponse))
      navigationHeaderFetcher(fetchEnvironment)(req, {}, next)
    })

    it('should make a new request', () => {
      expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('should continue this request with the old cache response', () => {
      expect(req.navigationHeaderService).toEqual({ lastUpdated: 1550573240664, ...oldResponse })
    })

    it('should call the next middleware', () => {
      expect(next).toHaveBeenCalledTimes(1)
    })
  })

  describe('and the request has failed', () => {
    const next = jest.fn()
    const req = { path: '/path/here' }

    beforeAll(() => {
      global.navigationHeaderService = undefined
      global.console.error = jest.fn()
      fetch.mockClear()
      fetch.mockImplementation(() => ({
        then: () => Promise.reject(Error('something went wrong'))
      }))
      Date.now = jest.fn(() => 1550576009224)
      navigationHeaderFetcher(fetchEnvironment)(req, {}, next)
    })

    it('should fire the next middleware with the error', () => {
      expect(global.console.error).toHaveBeenCalledWith(
        JSON.stringify({
          type: 'nav-haas-error',
          msg: `${config.ERR_SCRIPT_LOAD_FAIL} ${config.ENDPOINTS[fetchEnvironment]}${config.MANIFEST_PATH}`,
          path: '/path/here'
        })
      )
      expect(next).toHaveBeenCalledTimes(1)
    })
  })

  describe('and no environment was provided', () => {
    const next = jest.fn()
    const req = {}
    beforeAll(() => {
      fetch.mockClear()
      navigationHeaderFetcher()(req, {}, next)
    })

    it('should default to production', () => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(
        `${config.ENDPOINTS.production}${config.MANIFEST_PATH}`,
        config.REQUEST_HEADERS
      )
    })
  })
})

describe('When generating the path to use for the navigation header proxy', () => {
  describe.each`
    environment
    ${'development'}
    ${'staging'}
    ${'production'}
  `('for the $environment environment', ({ environment }) => {
    const req = {}
    const next = jest.fn()
    navigationHeaderProxy(environment)(req, {}, next)

    it(`should attach the proxy path to the request object`, () => {
      expect(req.navigationHeaderPath).toEqual(`${config.ENDPOINTS[environment]}`)
    })
    it('should fire the next middleware', () => {
      expect(next).toHaveBeenCalledTimes(1)
    })
  })

  describe('with no environment provided', () => {
    const req = {}
    const next = jest.fn()
    console.warn = jest.fn()
    navigationHeaderProxy()(req, {}, next)

    it('should attach the proxy path to the request object', () => {
      expect(req.navigationHeaderPath).toEqual(`${config.ENDPOINTS.production}`)
    })
    it('should fire the next middleware', () => {
      expect(next).toHaveBeenCalledTimes(1)
    })
    it('should log a warning', () => {
      expect(console.warn).toHaveBeenCalledTimes(1)
    })
  })
})
