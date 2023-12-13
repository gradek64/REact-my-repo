export interface ArgosCardCreditPlanAPI {
  planNumber: number
  type: number
  description: string
  effectiveFrom: string
  effectiveTo: string
  periodType: PeriodType
  periodDuration: number
  apr: number
  priority: number
  active: boolean
  interestType: number
  interestDescription: string
  basketValue: number
}

export interface MonthlyPaymentCreditPlanAPI extends ArgosCardCreditPlanAPI {
  minimumDuration: number
  maximumDuration: number
  representativeExample?: MonthlyPaymentDetails
  detailedCalculation: MonthlyPaymentDetails[]
}

export type CreditPlanList = (ArgosCardCreditPlanAPI | MonthlyPaymentCreditPlanAPI)[]

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/prepay.get.creditplans.html)
 */
export interface CreditPlanAPIPayload {
  plans: CreditPlanList
}

export enum PeriodType {
  MONTHS = 'Months',
  YEARS = 'Years',
}

interface MonthlyPaymentDetails {
  periodDuration: number
  monthlyAmount: number
  totalCreditCharge: number
  totalAmountPayable: number
  totalCreditAmount: number
  fixedInterestRate: number
}
