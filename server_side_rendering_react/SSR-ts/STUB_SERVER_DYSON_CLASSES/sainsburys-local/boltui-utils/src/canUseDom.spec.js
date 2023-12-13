import canUseDom from './canUseDom'

describe('canUseDom tests', () => {
  it('should return true if window is defined with the needed', () => {
    expect(canUseDom()).toBe(true)
  })
  it('should return false when one of three window expectations are not met (on server)', () => {
    Object.defineProperty(document, 'createElement', {
      configurable: true,
      writable: true,
      value: null
    })
    expect(canUseDom()).toBe(false)
  })
})
