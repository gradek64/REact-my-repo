import APILogger from '../../helpers/APILogger'
import { PaymentMethod, OrderAdvice } from '../../../src/types/api'
import { SerialisableStubObject, GetOrderStub } from '../../../src/types/stubs'

const SHIPMENT_COUNT = 1
const SHIPMENT_SORT_BY_START_TIME = true
const AVAILABLE_MONTHLY_CARE = 'singleProductSingleQuantity'
const PAYMENT_TYPE = PaymentMethod.CARD_DEBIT
const NECTAR_LINKED = true
const ELIGIBLE_COMPANY_VOUCHER = false
const ORDER_ADVICE = undefined

class GetOrder implements SerialisableStubObject<GetOrderStub> {
  private _shipmentsCount: number
  private _shipmentSortByStartTime: boolean
  private _availableMonthlyCare: string
  private _paymentType: PaymentMethod
  private _nectarLinked: boolean
  private _eligibleCompanyVoucher: boolean
  private _orderAdvice?: OrderAdvice[]

  setDefaults() {
    this._shipmentsCount = SHIPMENT_COUNT
    this._shipmentSortByStartTime = SHIPMENT_SORT_BY_START_TIME
    this._availableMonthlyCare = AVAILABLE_MONTHLY_CARE
    this._paymentType = PAYMENT_TYPE
    this._nectarLinked = NECTAR_LINKED
    this._eligibleCompanyVoucher = ELIGIBLE_COMPANY_VOUCHER
    this._orderAdvice = ORDER_ADVICE
  }

  constructor() {
    APILogger('API: Creating Confirmation!')
    this.setDefaults()
  }

  toJson() {
    return {
      shipmentsCount: this.shipmentsCount,
      shipmentSortByStartTime: this.shipmentSortByStartTime,
      availableMonthlyCare: this.availableMonthlyCare,
      paymentType: this.paymentType,
      nectarLinked: this.nectarLinked,
      eligibleCompanyVoucher: this.eligibleCompanyVoucher,
      orderAdvice: this.orderAdvice,
    }
  }

  fromJson(json: GetOrderStub) {
    this.shipmentsCount = json.shipmentsCount || SHIPMENT_COUNT
    this.shipmentSortByStartTime =
      typeof json.shipmentSortByStartTime === 'boolean' ? json.shipmentSortByStartTime : SHIPMENT_SORT_BY_START_TIME
    this.availableMonthlyCare = json.availableMonthlyCare || AVAILABLE_MONTHLY_CARE
    this.paymentType = json.paymentType || PAYMENT_TYPE
    this.nectarLinked = typeof json.nectarLinked === 'boolean' ? json.nectarLinked : NECTAR_LINKED
    this.eligibleCompanyVoucher =
      json.eligibleCompanyVoucher != null ? json.eligibleCompanyVoucher : ELIGIBLE_COMPANY_VOUCHER
    this.orderAdvice = json.orderAdvice || ORDER_ADVICE
  }

  reset() {
    this.setDefaults()
  }

  get shipmentsCount() {
    return this._shipmentsCount
  }

  set shipmentsCount(count: number) {
    this._shipmentsCount = count
  }

  get shipmentSortByStartTime() {
    return this._shipmentSortByStartTime
  }

  set shipmentSortByStartTime(value) {
    this._shipmentSortByStartTime = value
  }

  get availableMonthlyCare() {
    return this._availableMonthlyCare
  }

  set availableMonthlyCare(availableMonthlyCare) {
    this._availableMonthlyCare = availableMonthlyCare
  }

  get paymentType() {
    return this._paymentType
  }

  set paymentType(type: PaymentMethod) {
    this._paymentType = type
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultPaymentType() {
    return PAYMENT_TYPE
  }

  get nectarLinked() {
    return this._nectarLinked
  }

  set nectarLinked(nectarLinked) {
    this._nectarLinked = nectarLinked
  }

  set eligibleCompanyVoucher(eligible) {
    this._eligibleCompanyVoucher = eligible
  }

  get eligibleCompanyVoucher() {
    return this._eligibleCompanyVoucher
  }

  get orderAdvice() {
    return this._orderAdvice
  }

  set orderAdvice(type: OrderAdvice[] | undefined) {
    this._orderAdvice = type
  }
}

export default GetOrder
