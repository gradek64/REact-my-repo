import { Status } from 'types/Status'
import { Line, Shipment, StockHoldProductStatus } from 'types/api/snapshot'

export interface Product {
  id: string
  title: string
  type?: string
  price?: number
}

export interface OutOfStockProduct extends Product {
  id: string
  title: string
  category?: string
  categoryId?: string
  url?: string
  price: number
  badge: string | null
  promoOffer?: string
}

export interface Total {
  withSavings: number
  withoutSavings: number
  saving: number
}

export interface OutOfStockItem {
  product: OutOfStockProduct
  quantity: number
  allocated: number
  requested: number
  status?: StockHoldProductStatus
  total: Total
}

export interface ShipmentWithProducts extends Shipment {
  products: Line[]
}

export interface BasketState {
  loading: boolean
  error: boolean
  products: Line[]
  outOfStock: OutOfStockItem[]
  excludedProducts: OutOfStockItem[]
  shipments: ShipmentWithProducts[]
  productCategoryIds: string[]
  ageRestrictions: {
    status: Status
    products: string[]
  }
}

export type OutOfStockActionPayload = {
  outOfStock: OutOfStockItem[]
  excludedProducts: OutOfStockItem[]
}
