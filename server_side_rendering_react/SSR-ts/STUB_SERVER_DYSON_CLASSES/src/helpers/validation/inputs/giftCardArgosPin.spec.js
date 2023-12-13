import { errorMessages } from '@sainsburys-tech/bolt-validators'

import giftCardArgosPin from './giftCardArgosPin'

describe('When validating a Gift card security number', () => {
  describe('and no value is entered', () => {
    it('should provide an error', () => {
      expect(giftCardArgosPin('')).toBe(errorMessages.GIFTCARD_PIN_REQUIRED)
    })
  })
  describe('and the required number of values is not met', () => {
    it('should provide an error', () => {
      expect(giftCardArgosPin('1')).toBe(errorMessages.GIFTCARD_PIN_LENGTH)
      expect(giftCardArgosPin('32')).toBe(errorMessages.GIFTCARD_PIN_LENGTH)
      expect(giftCardArgosPin('45675')).toBe(errorMessages.GIFTCARD_PIN_LENGTH)
      expect(giftCardArgosPin('00000000000')).toBe(errorMessages.GIFTCARD_PIN_LENGTH)
    })
  })
  describe('and the value is valid', () => {
    it('should NOT provide an error', () => {
      expect(giftCardArgosPin('1234')).toBe(null)
      expect(giftCardArgosPin('0000')).toBe(null)
    })
  })
})
