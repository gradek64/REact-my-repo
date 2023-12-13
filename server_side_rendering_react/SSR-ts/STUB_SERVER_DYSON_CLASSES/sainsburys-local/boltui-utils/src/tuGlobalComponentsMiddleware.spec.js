import { getGlobalComponentsHost, tuGlobalComponentsMiddleware } from './tuGlobalComponentsMiddleware'

const mockResponse = (modules = ['header', 'footer']) => {
  return {
    markup: {
      header: modules.includes('header') ? '<html>HEADER MARKUP</html>' : undefined,
      headerlite: modules.includes('headerlite') ? '<html>HEADERLITE MARKUP</html>' : undefined,
      footer: modules.includes('footer') ? '<html>FOOTER MARKUP</html>' : undefined
    },
    assets: {
      scripts: '<script>ASSETS</script>',
      styles: '<style>STYLE TAGS</style>'
    }
  }
}

const fetchMock = (resolvedData) => ({
  json: () => Promise.resolve(resolvedData)
})

global.fetch = jest.fn(() => {
  return Promise.resolve(() => fetchMock(mockResponse))
})

describe('When fetching the middleware', () => {
  const next = jest.fn()
  const fetchEnvironment = 'development'
  const headers = { headers: { Accept: 'application/json', Cache: 'no-cache', 'Content-Type': 'application/json' } }

  const expectedFooter = `<div data-ui-version="2" data-use-max-width><html>FOOTER MARKUP</html></div>`
  const expectedHeader = `<div data-ui-version="2" data-use-max-width><html>HEADER MARKUP</html></div>`
  const expectedHeaderlite = `<div data-ui-version="2" data-use-max-width><html>HEADERLITE MARKUP</html></div>`
  const expectedStyles = '<style>STYLE TAGS</style>'
  const expectedScripts = `
      <script crossorigin src="https://cdn.tu.co.uk/assets/react/prop-types.min.js"></script>
      <script>ASSETS</script>
      `

  beforeEach(() => {
    fetch.mockClear()
  })

  test('and it fetches the header and footer when modules not defined', async () => {
    const req = {}
    const mockedResponse = mockResponse()
    fetch.mockImplementationOnce(() => fetchMock(mockedResponse))
    await tuGlobalComponentsMiddleware(fetchEnvironment)(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('develop')}/manifest?modules=header,footer&version=canary`,
      headers
    )

    expect(req.globalComponents).toEqual({
      footer: expectedFooter,
      header: expectedHeader,
      styles: expectedStyles,
      scripts: expectedScripts
    })

    // Repeated check will keep the cache and won't fetch again
    await tuGlobalComponentsMiddleware(fetchEnvironment)(req, {}, next)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test('and it fetches the header', async () => {
    const req = {}
    const modules = ['header']
    const mockedResponse = mockResponse(modules)
    fetch.mockImplementationOnce(() => fetchMock(mockedResponse))
    await tuGlobalComponentsMiddleware(fetchEnvironment, modules)(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('develop')}/manifest?modules=${modules.join()}&version=canary`,
      headers
    )

    expect(req.globalComponents).toEqual({
      header: expectedHeader,
      styles: expectedStyles,
      scripts: expectedScripts
    })
  })

  test('and it fetches the footer', async () => {
    const req = {}
    const modules = ['footer']
    const mockedResponse = mockResponse(modules)
    fetch.mockImplementationOnce(() => fetchMock(mockedResponse))
    await tuGlobalComponentsMiddleware(fetchEnvironment, modules)(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('develop')}/manifest?modules=${modules.join()}&version=canary`,
      headers
    )

    expect(req.globalComponents).toEqual({
      footer: expectedFooter,
      styles: expectedStyles,
      scripts: expectedScripts
    })
  })

  test('and it fetches the headerlite', async () => {
    const req = {}
    const modules = ['headerlite']
    const mockedResponse = mockResponse(modules)
    fetch.mockImplementationOnce(() => fetchMock(mockedResponse))
    await tuGlobalComponentsMiddleware(fetchEnvironment, modules)(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('develop')}/manifest?modules=${modules.join()}&version=canary`,
      headers
    )

    expect(req.globalComponents).toEqual({
      headerlite: expectedHeaderlite,
      styles: expectedStyles,
      scripts: expectedScripts
    })
  })

  test('and it returns nothing and does not error if the api call fails', async () => {
    const req = {}
    fetch.mockImplementation(() => Promise.reject(new Error('API is down')))

    await tuGlobalComponentsMiddleware('staging')(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(req.globalComponents).toEqual(undefined)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('staging')}/manifest?modules=header,footer&version=canary`,
      headers
    )
  })

  test('and pageType is passed in, it adds the correct query param', async () => {
    const req = {}
    const mockedResponse = mockResponse()
    fetch.mockImplementationOnce(() => fetchMock(mockedResponse))
    await tuGlobalComponentsMiddleware('development', ['header', 'footer'], 'checkout')(req, {}, next)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${getGlobalComponentsHost('develop')}/manifest?modules=header,footer&pageType=checkout&version=canary`,
      headers
    )

    expect(req.globalComponents).toEqual({
      footer: expectedFooter,
      header: expectedHeader,
      styles: expectedStyles,
      scripts: expectedScripts
    })
  })
})

describe('When getting the correct host url', () => {
  test('and it fetches the dev url by default', () => {
    const url = getGlobalComponentsHost()
    expect(url).toEqual('https://tu-global-components.public.eu-west-1.dev.deveng.systems')
  })

  test('and it fetches the staging url when staging is passed in', () => {
    const url = getGlobalComponentsHost('staging')
    expect(url).toEqual('https://tu-global-components.public.eu-west-1.staging.deveng.systems')
  })

  test('and it fetches the production url when production is passed in', () => {
    const url = getGlobalComponentsHost('production')
    expect(url).toEqual('https://tu-global-components.public.eu-west-1.production.deveng.systems')
  })
})
