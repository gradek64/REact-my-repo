import { formatThousandthSeperator, rem } from './numberHelpers'

test('Formatting number with a comma', () => {
  expect(formatThousandthSeperator(10)).toEqual('10')
  expect(formatThousandthSeperator(100)).toEqual('100')
  expect(formatThousandthSeperator(1000)).toEqual('1,000')
  expect(formatThousandthSeperator(10000)).toEqual('10,000')
  expect(formatThousandthSeperator(100000)).toEqual('100,000')
})

test('Converting pixels to rem', () => {
  expect(rem('24px')).toBe('1.5rem')
  expect(rem('24')).toBe('1.5rem')
  expect(rem(24)).toBe('1.5rem')
})
