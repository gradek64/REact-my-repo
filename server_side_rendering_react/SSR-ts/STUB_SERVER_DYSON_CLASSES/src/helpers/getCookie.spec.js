import getCookie from './getCookie'

describe('getCookie helper tests', () => {
  it(`should return undefined if no cookie defined`, () => {
    const cookie = getCookie('nothinghere')
    expect(cookie).toBeUndefined()
  })

  it('should return things if cookie is defined', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'bestCookie=oatmeal',
    })
    const bestCookie = getCookie('bestCookie')
    expect(bestCookie).toBe('oatmeal')
  })
})
