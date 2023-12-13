import * as validators from '@sainsburys-tech/bolt-validators'
import nectarCardNumber from './nectarCardNumber'

describe('nectarCardNumber with Bin Number', () => {
  afterAll(() => {
    const mockIsValidNectarCardNumber = validators.isValidNectarCardNumber as jest.Mock
    mockIsValidNectarCardNumber.mockRestore()
  })
  const binNumber = '98263000'
  test('should return an error message if the value is empty or invalid and validate with prefixed bin Number', () => {
    jest.spyOn(validators, 'isValidNectarCardNumber')

    expect(nectarCardNumber('')).toBe('Sorry, that Nectar card number is invalid. Please check and try again.')
    expect(validators.isValidNectarCardNumber).toBeCalledWith(binNumber)

    expect(nectarCardNumber('123 45')).toBe('Sorry, that Nectar card number is invalid. Please check and try again.')
    expect(validators.isValidNectarCardNumber).toBeCalledWith(`${binNumber}12345`)
  })

  test('should return null if it is a valid nectar card number', () => {
    jest.spyOn(validators, 'isValidNectarCardNumber')

    expect(nectarCardNumber('12345678909')).toBe(null)
    expect(validators.isValidNectarCardNumber).toBeCalledWith(`${binNumber}12345678909`)
  })
})
