import { MonthlyPaymentCreditPlanAPI, PeriodType } from '../../../../src/types/api/creditPlans'

const plan = (props = {}): MonthlyPaymentCreditPlanAPI => {
  return {
    planNumber: 10024,
    type: 0,
    description: 'MPP - Default: 24m, Min: 12m, Max: 48m at 19.9',
    periodDuration: 0,
    effectiveFrom: '2013-10-16T00:00:00Z',
    effectiveTo: '9999-12-31T23:59:59Z',
    periodType: PeriodType.MONTHS,
    apr: 19.9,
    priority: 1,
    active: true,
    interestType: 4,
    interestDescription: '',
    basketValue: 0,
    minimumDuration: 12,
    maximumDuration: 48,
    representativeExample: {
      periodDuration: 24,
      monthlyAmount: 7.51,
      totalCreditCharge: 30.24,
      totalAmountPayable: 180.24,
      totalCreditAmount: 150.0,
      fixedInterestRate: 19.9,
    },
    detailedCalculation: [
      {
        periodDuration: 12,
        monthlyAmount: 13.77,
        totalCreditCharge: 16.53,
        totalAmountPayable: 165.24,
        totalCreditAmount: 150.0,
        fixedInterestRate: 19.9,
      },
      {
        periodDuration: 13,
        monthlyAmount: 12.81,
        totalCreditCharge: 16.53,
        totalAmountPayable: 166.53,
        totalCreditAmount: 150.0,
        fixedInterestRate: 19.9,
      },
    ],
    ...props,
  }
}

export interface MonthlyPlanLengthAndAPRInt {
  apr: number
  maximumDuration: number
  minimumDuration: number
}

// Single monthly plan
function setupMonthlyPaymentCreditPlanEmpty(): MonthlyPaymentCreditPlanAPI[] {
  const monthlyPaymentCreditPlans = []
  return monthlyPaymentCreditPlans
}

// Single monthly plan
function setupMonthlyPaymentCreditPlanDefault({
  apr,
  minimumDuration,
  maximumDuration,
}: MonthlyPlanLengthAndAPRInt): MonthlyPaymentCreditPlanAPI[] {
  const monthlyPaymentCreditPlans = [plan({ apr, minimumDuration, maximumDuration })]
  return monthlyPaymentCreditPlans
}

// Alternate monthly plan with different min/max duration
function setupMonthlyPaymentCreditPlanAlternate({
  apr,
  minimumDuration,
  maximumDuration,
}: MonthlyPlanLengthAndAPRInt): MonthlyPaymentCreditPlanAPI[] {
  const monthlyPaymentCreditPlans = [
    plan({
      planNumber: 10026,
      minimumDuration,
      maximumDuration,
      apr,
    }),
  ]

  return monthlyPaymentCreditPlans
}

// Promotional monthly plan with different APR
function setupMonthlyPaymentCreditPlanPromotional({
  apr,
  minimumDuration,
  maximumDuration,
}: MonthlyPlanLengthAndAPRInt): MonthlyPaymentCreditPlanAPI[] {
  const tomorrow = new Date()
  tomorrow.setDate(new Date().getDate() + 1)

  const monthlyPaymentCreditPlans = [
    plan({
      effectiveFrom: '2022-08-10T00:00:00Z',
      effectiveTo: tomorrow,
      minimumDuration,
      maximumDuration,
      apr,
    }),
  ]

  return monthlyPaymentCreditPlans
}

const monthlyPaymentCreditPlanDatasets = {
  Empty: {
    description: 'Empty: No MPP Option',
    setupMonthlyPaymentCreditPlan: setupMonthlyPaymentCreditPlanEmpty,
  },
  Default: {
    description: 'Default',
    setupMonthlyPaymentCreditPlan: setupMonthlyPaymentCreditPlanDefault,
  },
  Alternate: {
    description: 'Alternate',
    setupMonthlyPaymentCreditPlan: setupMonthlyPaymentCreditPlanAlternate,
  },
  PromotionalAPR: {
    description: 'Promotional',
    setupMonthlyPaymentCreditPlan: setupMonthlyPaymentCreditPlanPromotional,
  },
}

export { monthlyPaymentCreditPlanDatasets }
