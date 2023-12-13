import { CreditPlansStub, SerialisableStubObject } from '../../../src/types/stubs'
import {
  MonthlyPlanLengthAndAPRInt,
  argosCardCreditPlansDatasets,
  monthlyPaymentCreditPlanDatasets,
  creditPlansResponseDatasets,
} from './Datasets'

class CreditPlans implements SerialisableStubObject<CreditPlansStub> {
  private _creditPlansResponseType: keyof typeof creditPlansResponseDatasets
  private _argosCardCreditPlanType: keyof typeof argosCardCreditPlansDatasets
  private _monthlyPaymentCreditPlanType: keyof typeof monthlyPaymentCreditPlanDatasets
  private _monthlyPaymentCreditAPRAndLength: MonthlyPlanLengthAndAPRInt

  constructor() {
    this.setDefaults()
  }

  setDefaults() {
    this._argosCardCreditPlanType = 'Multiple'
    this._monthlyPaymentCreditPlanType = 'Default'
    this._creditPlansResponseType = 'Success'
    this._monthlyPaymentCreditAPRAndLength = {
      apr: 19.9,
      minimumDuration: 12,
      maximumDuration: 48,
    }
  }

  getCreditPlansResponse() {
    const creditPlansResponse = creditPlansResponseDatasets[this._creditPlansResponseType].setupCreditPlansResponse
    const error = creditPlansResponse.error ? creditPlansResponse.error.message : null
    const status = creditPlansResponse.statusCode
    return { error, status }
  }

  getMonthlyPaymentCreditPlans() {
    return monthlyPaymentCreditPlanDatasets[this._monthlyPaymentCreditPlanType].setupMonthlyPaymentCreditPlan({
      apr: this._monthlyPaymentCreditAPRAndLength.apr,
      minimumDuration: this._monthlyPaymentCreditAPRAndLength.minimumDuration,
      maximumDuration: this._monthlyPaymentCreditAPRAndLength.maximumDuration,
    })
  }

  getArgosCardCreditPlans() {
    return argosCardCreditPlansDatasets[this._argosCardCreditPlanType].setupArgosCardCreditPlans()
  }

  getAllCreditPlans() {
    return [...this.getMonthlyPaymentCreditPlans(), ...this.getArgosCardCreditPlans()]
  }

  toJson() {
    return {
      creditPlansResponseType: this._creditPlansResponseType,
      argosCardCreditPlanType: this._argosCardCreditPlanType,
      monthlyPaymentCreditPlanType: this._monthlyPaymentCreditPlanType,
      monthlyPaymentCreditAPRAndLength: this._monthlyPaymentCreditAPRAndLength,
    }
  }

  fromJson(json: CreditPlansStub) {
    this._creditPlansResponseType = json.creditPlansResponseType
    this._argosCardCreditPlanType = json.argosCardCreditPlanType
    this._monthlyPaymentCreditPlanType = json.monthlyPaymentCreditPlanType
    this._monthlyPaymentCreditAPRAndLength = json.monthlyPaymentCreditAPRAndLength
  }

  reset() {
    this.setDefaults()
  }

  setMonthlyPaymentPlanValues({ apr, minimumDuration, maximumDuration }: MonthlyPlanLengthAndAPRInt) {
    this._monthlyPaymentCreditAPRAndLength = { apr, minimumDuration, maximumDuration }
  }

  setCreditPlansResponseType(type: keyof typeof creditPlansResponseDatasets) {
    this._creditPlansResponseType = type
  }

  setArgosCardCreditPlanType(type: keyof typeof argosCardCreditPlansDatasets) {
    this._argosCardCreditPlanType = type
  }

  setMonthlyPaymentCreditPlanType(type: keyof typeof monthlyPaymentCreditPlanDatasets) {
    this._monthlyPaymentCreditPlanType = type
  }

  getMonthlyPaymentPlanValues(value: 'apr' | 'minimumDuration' | 'maximumDuration') {
    return this._monthlyPaymentCreditAPRAndLength[value]
  }

  getCreditPlansResponseType() {
    return this._creditPlansResponseType
  }

  getArgosCardCreditPlanType() {
    return this._argosCardCreditPlanType
  }

  getMonthlyPaymentCreditPlanType() {
    return this._monthlyPaymentCreditPlanType
  }
}
export default CreditPlans
