import {
  setStatuses,
  checkPaymentResponse,
  formatArgosCardCreditPlans,
  formatMonthlyPaymentCreditPlan,
} from './paymentHelpers'

import mockCreditPlans from '../reducers/payments/__mocks__/creditPlans'
import mockMonthlyPlans from '../reducers/payments/__mocks__/monthlyPlans'
import Logger from '../utils/Logger'

jest.mock('../utils/Logger')

describe('When formatting credit plans', () => {
  describe('and there is one normal credit plan', () => {
    it('should return the provided credit plan', () => {
      const creditPlansSingle = [mockCreditPlans[0]]
      expect(formatArgosCardCreditPlans(creditPlansSingle)).toEqual([
        {
          planNumber: '10024',
          title: 'Normal credit',
          duration: null,
          apr: 29.9,
        },
      ])
    })
  })

  describe('and there is one fixed duration credit plan', () => {
    it('should return the provided credit plan', () => {
      const creditPlansSingle = [mockCreditPlans[2]]
      expect(formatArgosCardCreditPlans(creditPlansSingle)).toEqual([
        {
          planNumber: '10023',
          title: '6 months Buy Now, Pay Later',
          duration: '6',
          apr: 29.9,
        },
      ])
    })
  })

  describe('and there are multiple', () => {
    it('should return the all the plans with the "longest" plan first and the "normal" plan last', () => {
      expect(formatArgosCardCreditPlans(mockCreditPlans)).toEqual([
        {
          planNumber: '10022',
          title: '12 months Buy Now, Pay Later',
          duration: '12',
          apr: 29.9,
        },
        {
          planNumber: '10023',
          title: '6 months Buy Now, Pay Later',
          duration: '6',
          apr: 29.9,
        },
        {
          planNumber: '10024',
          title: 'Normal credit',
          duration: null,
          apr: 29.9,
        },
      ])
    })
  })
})

test('When formatting MonthlyPlans it should return the correctly formatted monthly plan', () => {
  expect(formatMonthlyPaymentCreditPlan(mockMonthlyPlans)).toEqual({
    planNumber: '10029',
    title: 'Get longer to pay: from 12 to 48 monthly payments',
    apr: 29.9,
    effectiveTo: null,
    minimumDuration: 12,
    maximumDuration: 48,
  })
})

describe('When checking payment response', () => {
  const paymentId = '12345'
  const errorMsg = 'Payment ID is missing'

  describe('and it is valid', () => {
    it('should return the payment ID', async () => {
      await expect(checkPaymentResponse(paymentId)).resolves.toBe(paymentId)
    })
  })

  describe('and it is not valid', () => {
    it('should give and log an error', async () => {
      await expect(checkPaymentResponse('')).rejects.toBe(errorMsg)
      await expect(checkPaymentResponse(undefined)).rejects.toBe(errorMsg)
      await expect(checkPaymentResponse(null)).rejects.toBe(errorMsg)
      expect(Logger.fatal).toHaveBeenCalledWith(errorMsg)
      expect(Logger.fatal).toHaveBeenCalledTimes(3)
    })
  })
})

describe('When setting methods', () => {
  describe('and valid methods object is passed', () => {
    const sampleMethodsObj = {
      CARD_DEBIT: { status: 'AVAILABLE', incompatibleWith: [] },
      PAYPAL: { status: 'INCOMPATIBLE', incompatibleWith: ['CARD_DEBIT'] },
      APPLE_PAY: { status: 'OVER_MAX_SPEND_LIMIT', incompatibleWith: [] },
      // should not break if chapi send us a new payment method
      UNRECOGNISED_PAYMENT_METHOD: { status: 'AVAILABLE', incompatibleWith: [] },
    }
    const sampleRes = {
      CARD_DEBIT: {
        temporarilyDisabled: false,
        available: true, // <---
        permanentlyDisabled: false,
        incompatible: false,
        paymentComplete: false,
        maxLimitReached: false,
        overMaxSpendLimit: false,
        underMinSpendLimit: false,
        incompatibleWith: [],
      },
      PAYPAL: {
        temporarilyDisabled: false,
        available: false,
        incompatible: true, // <---
        permanentlyDisabled: false,
        paymentComplete: false,
        maxLimitReached: false,
        overMaxSpendLimit: false,
        underMinSpendLimit: false,
        incompatibleWith: ['CARD_DEBIT'],
      },
      APPLE_PAY: {
        temporarilyDisabled: false,
        available: false,
        incompatible: false,
        paymentComplete: false,
        maxLimitReached: false,
        overMaxSpendLimit: true, // <---
        underMinSpendLimit: false,
        permanentlyDisabled: false,
        incompatibleWith: [],
      },
      CARD_ARGOS_CREDIT: {},
      CARD_GIFT_ARGOS: {},
      CARD_GIFT_FLEXECASH: {},
      CARD_NECTAR_SPEND: {},
      CREDIT_CAPE2: {},
      CREDIT_MPP: {},
    }
    it('should set the statuses as requested', () => {
      expect(setStatuses(sampleMethodsObj)).toEqual(sampleRes)
    })
  })
})
