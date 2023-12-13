import isEmpty from './isEmpty'

// These follow same return spec as lodash.isEmpty
// https://github.com/lodash/lodash/blob/master/isEmpty.js
describe('isEmpty ', () => {
  it('default', () => {
    expect(isEmpty()).toEqual(true)
  })

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toEqual(true)
  })

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toEqual(true)
  })

  it('should return false for array with items', () => {
    expect(isEmpty([1, 2, 3])).toEqual(false)
  })

  it('should return false for object with properties', () => {
    expect(isEmpty({ abc: 1 })).toEqual(false)
  })

  it('should return true if null', () => {
    expect(isEmpty(null)).toEqual(true)
  })

  it('should return true if true', () => {
    expect(isEmpty(true)).toEqual(true)
  })

  it('should return true if 1', () => {
    expect(isEmpty(1)).toEqual(true)
  })

  it('should return false if "abc"', () => {
    expect(isEmpty('abc')).toEqual(false)
  })
})
