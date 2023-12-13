import { errorMessages } from '@sainsburys-tech/bolt-validators'

import validateGiftCardNumber from './giftCardNumber'

describe('When validating a gift card number', () => {
  describe('and the value includes a valid bin range', () => {
    it('should not show an error message', () => {
      expect(validateGiftCardNumber('10000000000000000000')).toBe(null)
      expect(validateGiftCardNumber('6338270000000000000')).toBe(null)

      expect(validateGiftCardNumber('9826027800000000000')).toBe(null)
    })
  })

  describe('and the value is blank', () => {
    it('should error', () => {
      expect(validateGiftCardNumber('')).toBe(errorMessages.GIFTCARD_NUMBER_REQUIRED)
      expect(validateGiftCardNumber(' ')).toBe(errorMessages.GIFTCARD_NUMBER_REQUIRED)
    })
  })

  describe('and the value does not start with 98260278, 10000 or 633827', () => {
    it('should error', () => {
      const invalidErrorMessage =
        'Sorry, Gift card numbers must start with 98260278, 10000 or 633827. Enter prepaid Gift cards as a Credit/Debit card under Payment options.'

      expect(validateGiftCardNumber('20', true)).toBe(invalidErrorMessage)
      expect(validateGiftCardNumber('00', true)).toBe(invalidErrorMessage)
      expect(validateGiftCardNumber('01000', true)).toBe(invalidErrorMessage)
      expect(validateGiftCardNumber('98260278', true)).not.toBe(invalidErrorMessage)
    })
  })

  describe('and the bin range is valid', () => {
    describe('but the amount of characters is less than the required amount', () => {
      it('should error', () => {
        expect(validateGiftCardNumber('1000011111')).toBe(errorMessages.GIFTCARD_LENGTH)
        expect(validateGiftCardNumber('6338270000000')).toBe(errorMessages.FLEXECASH_LENGTH)
        expect(validateGiftCardNumber('982602780000000', true)).toBe(errorMessages.FLEXECASH_LENGTH)
      })
    })

    describe('but the amount of characters is more than the required amount', () => {
      it('should error', () => {
        expect(validateGiftCardNumber('10000111111111111111111111111')).toBe(errorMessages.GIFTCARD_LENGTH)
        expect(validateGiftCardNumber('6338270000000000000000000000000')).toBe(errorMessages.FLEXECASH_LENGTH)
        expect(validateGiftCardNumber('9826027800000000000000000000000', true)).toBe(errorMessages.FLEXECASH_LENGTH)
      })
    })
  })
})
