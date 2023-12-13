/* eslint-disable no-proto */

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from './localStorageWithExpiration'

describe('localStorageWithExpiration ', () => {
  const store = {}
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => setTimeout(() => cb(), 0))
  jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key) => {
    return store[key]
  })
  jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation((key, value) => {
    store[key] = `${value}`
  })
  jest.spyOn(window.localStorage.__proto__, 'removeItem').mockImplementation((key) => {
    delete store[key]
  })

  it('should set an item with time', () => {
    const mockDate = new Date(2021, 9, 1, 10, 0, 0)
    const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
    const ttl = 20000
    setLocalStorageWithExpiry('food', ['banana'], ttl)
    const expectedResponse = { food: JSON.stringify({ value: ['banana'], expiry: mockDate.getTime() + ttl }) }
    expect(store).toEqual(expectedResponse)
    dateSpy.mockRestore()
  })

  it('should get an item from localStorage', () => {
    const mockDate = new Date(2021, 9, 1, 10, 0, 0)
    const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
    const item = getLocalStorageWithExpiry('food')
    expect(item).toEqual(['banana'])
    dateSpy.mockRestore()
  })

  it('should remove item from localStorage if expired', () => {
    const mockDate = new Date(2021, 9, 1, 10, 1, 3)
    const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
    const item = getLocalStorageWithExpiry('food')
    expect(item).toEqual(null)
    expect(store).toEqual({})
    dateSpy.mockRestore()
  })
})
