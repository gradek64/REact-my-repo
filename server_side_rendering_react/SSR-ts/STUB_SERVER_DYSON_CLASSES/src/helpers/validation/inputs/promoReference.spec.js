import promoReference from './promoReference'

const validatePromoReference = (value) => {
  return promoReference(value, undefined)
}

describe('When validating a promo reference code', () => {
  describe('and the value is blank', () => {
    it('should error', () => {
      expect(validatePromoReference('')).toBe('Please enter the code to get your discount')
      expect(validatePromoReference(' ')).toBe('Please enter the code to get your discount')
    })
  })

  describe('and the value is a giftcard or flexecash', () => {
    it('should error', () => {
      expect(validatePromoReference('633827', true)).toBe(
        "It looks like you've entered the number for a giftcard, {giftcardLink}",
      )
      expect(validatePromoReference('1000000', true)).toBe(
        "It looks like you've entered the number for a giftcard, {giftcardLink}",
      )
      expect(validatePromoReference('98260278', true)).toBe(
        "It looks like you've entered the number for a giftcard, {giftcardLink}",
      )
    })
  })

  describe('and the value valid', () => {
    it('should not error', () => {
      expect(validatePromoReference('123')).toBe(null)
      expect(validatePromoReference('20-furn')).toBe(null)
    })
  })
})
