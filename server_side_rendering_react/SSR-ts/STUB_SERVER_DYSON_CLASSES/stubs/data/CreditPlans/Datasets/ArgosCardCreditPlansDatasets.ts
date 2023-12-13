import { ArgosCardCreditPlanAPI, PeriodType } from '../../../../src/types/api/creditPlans'

const plan = (props = {}): ArgosCardCreditPlanAPI => {
  return {
    planNumber: 10024,
    type: 0,
    description: '',
    periodDuration: 0,
    effectiveFrom: '',
    effectiveTo: '',
    periodType: PeriodType.MONTHS,
    apr: 29.9,
    priority: 1,
    active: true,
    interestType: 0,
    interestDescription: '',
    basketValue: 0,
    ...props,
  }
}

// Default single credit plan
export function setupCreditPlansSingle(): ArgosCardCreditPlanAPI[] {
  const argosCardCreditPlans = [plan({ description: 'Normal Credit', priority: 1, planNumber: 10026 })]
  return argosCardCreditPlans
}

// Multiple credit plans
export function setupCreditPlansMultiple(): ArgosCardCreditPlanAPI[] {
  const argosCardCreditPlans = [
    plan({ description: '12 Months Buy Now Pay Later', priority: 1, planNumber: 10024 }),
    plan({ description: '6 Months Buy Now Pay Later', priority: 2, planNumber: 10025 }),
    plan({ description: '3 Months Buy Now Pay Later', priority: 3, planNumber: 10026 }),
    plan({ description: 'Normal Credit', priority: 4, planNumber: 10027 }),
  ]
  return argosCardCreditPlans
}

const argosCardCreditPlansDatasets = {
  Single: {
    description: 'Single: One Argos Card Option',
    setupArgosCardCreditPlans: setupCreditPlansSingle,
  },
  Multiple: {
    description: 'Multiple: Multiple Argos Card Options',
    setupArgosCardCreditPlans: setupCreditPlansMultiple,
  },
}

export { argosCardCreditPlansDatasets }
