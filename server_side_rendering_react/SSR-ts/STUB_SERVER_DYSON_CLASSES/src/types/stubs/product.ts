import { ShipmentType, StockHoldProductStatus } from '../api'

export interface ProductStub {
  id: string
  saving: number
  allocated: number
  requested: number
  type: ShipmentType
  status?: StockHoldProductStatus
  isProductCare: boolean
  notes?: string
  leadTimeDays?: string
}

export type ProductServiceResponse = {
  status: number
  error: string
}

export interface ProductServiceStub {
  response: ProductServiceResponse
  responseType: number
}
