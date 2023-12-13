import { errorMessages } from '@sainsburys-tech/bolt-validators'
import MockDate from 'mockdate'

import giftCardFlexecashExpiry from './giftCardFlexecashExpiry'

describe('When validating a flexecash expiry date', () => {
  beforeEach(() => {
    MockDate.set(new Date(1574785710067)) // 26/11/19
  })

  afterEach(() => {
    MockDate.reset()
  })

  describe('and month and year is valid', () => {
    it('should not error', () => {
      expect(giftCardFlexecashExpiry({ month: '01', year: '30' })).toBe(null)
      expect(giftCardFlexecashExpiry({ month: '10', year: '25' })).toBe(null)
      expect(giftCardFlexecashExpiry({ month: '12', year: '19' })).toBe(null)
    })
  })

  describe('and the expiry date is the current month', () => {
    it('should not error', () => {
      expect(giftCardFlexecashExpiry({ month: '11', year: '19' })).toBe(null)
    })
  })

  describe('and the month and year is blank', () => {
    it('should error', () => {
      expect(giftCardFlexecashExpiry({ month: '', year: '' })).toBe(errorMessages.FLEXECASH_EXPIRY_REQUIRED)
    })
  })

  describe('and the month or year is not in MM or YY formats', () => {
    it('should error', () => {
      expect(giftCardFlexecashExpiry({ month: '01', year: '' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '', year: '23' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '1', year: '23' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '12', year: '2' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '1', year: '2' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
    })
  })

  describe('and the month is invalid', () => {
    it('should error', () => {
      expect(giftCardFlexecashExpiry({ month: '23', year: '20' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '13', year: '20' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
      expect(giftCardFlexecashExpiry({ month: '13', year: '' })).toBe(errorMessages.FLEXECASH_EXPIRY_INVALID)
    })
  })

  describe('and the correctly formatted month & year is in the past', () => {
    it('should error', () => {
      expect(giftCardFlexecashExpiry({ month: '01', year: '12' })).toBe(errorMessages.FLEXECASH_EXPIRY_EXPIRED)
      expect(giftCardFlexecashExpiry({ month: '11', year: '18' })).toBe(errorMessages.FLEXECASH_EXPIRY_EXPIRED)
      expect(giftCardFlexecashExpiry({ month: '10', year: '19' })).toBe(errorMessages.FLEXECASH_EXPIRY_EXPIRED)
    })
  })
})
