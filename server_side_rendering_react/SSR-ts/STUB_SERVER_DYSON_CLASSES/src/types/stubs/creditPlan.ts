import {
  MonthlyPlanLengthAndAPRInt,
  argosCardCreditPlansDatasets,
  creditPlansResponseDatasets,
  monthlyPaymentCreditPlanDatasets,
} from '../../../stubs/data/CreditPlans/Datasets'

export interface CreditPlansStub {
  creditPlansResponseType: keyof typeof creditPlansResponseDatasets
  argosCardCreditPlanType: keyof typeof argosCardCreditPlansDatasets
  monthlyPaymentCreditPlanType: keyof typeof monthlyPaymentCreditPlanDatasets
  monthlyPaymentCreditAPRAndLength: MonthlyPlanLengthAndAPRInt
}
