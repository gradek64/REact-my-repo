import { PaymentMethod, OrderAdvice } from '../api'

export interface GetOrderStub {
  shipmentsCount: number
  shipmentSortByStartTime: boolean
  availableMonthlyCare: string
  paymentType: PaymentMethod
  nectarLinked: boolean
  eligibleCompanyVoucher: boolean
  orderAdvice?: OrderAdvice[] | undefined
}
