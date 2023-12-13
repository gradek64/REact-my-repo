import { errorMessages } from '@sainsburys-tech/bolt-validators'

import giftCardFlexecashCode from './giftCardFlexecashCode'

describe('When validating a Flexecash card security number', () => {
  describe('and no value is entered', () => {
    it('should provide an error', () => {
      expect(giftCardFlexecashCode('')).toBe(errorMessages.FLEXECASH_PIN_REQUIRED)
    })
  })
  describe('and the required number of values is not met', () => {
    it('should provide an error', () => {
      expect(giftCardFlexecashCode('1')).toBe(errorMessages.FLEXECASH_PIN_LENGTH)
      expect(giftCardFlexecashCode('32')).toBe(errorMessages.FLEXECASH_PIN_LENGTH)
      expect(giftCardFlexecashCode('4567')).toBe(errorMessages.FLEXECASH_PIN_LENGTH)
      expect(giftCardFlexecashCode('00000000000')).toBe(errorMessages.FLEXECASH_PIN_LENGTH)
    })
  })
  describe('and the value is valid', () => {
    it('should NOT provide an error', () => {
      expect(giftCardFlexecashCode('123')).toBe(null)
      expect(giftCardFlexecashCode('000')).toBe(null)
    })
  })
})
