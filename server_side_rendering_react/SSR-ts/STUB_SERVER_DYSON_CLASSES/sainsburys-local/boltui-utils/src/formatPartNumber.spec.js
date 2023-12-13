import formatPartNumber from './formatPartNumber'

describe('formatPartNumber', () => {
  it('should format product part number into a SKU', () => {
    expect(formatPartNumber('1234567')).toBe('123/4567')
  })
  it('should not format product part number if not seven characters long', () => {
    expect(formatPartNumber('12345678')).toBe('12345678')
  })
  it('should return empty if no part number', () => {
    expect(formatPartNumber('')).toBe('')
  })
})
