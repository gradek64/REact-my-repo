import { OutOfStockItem } from '../reducers'
import { ItemDeliveryInfo, Line, ShipmentType } from '../api/snapshot'

export interface Items {
  product: {
    id: string
    title: string
    category?: string
    categoryId?: string
    url?: string
    price: number
    badge: string | null
    promoOffer?: string
    type?: ShipmentType
    leadTimeDays?: string
    notes?: string
  }
  quantity: number
  total: {
    withSavings?: number
    withoutSavings: number
  }
  monthlyCare?: {
    sku: string
    type: string
    price: number
    currency: string
  }
}

export interface ProductsProps {
  items: (Items | Line | OutOfStockItem)[]
  maxProductCards: number
  showPartNumber: boolean
  viewAllItems?: string
  linkTitle?: boolean
  maxProductImages?: number
  hasBorder?: boolean
  orderId?: string
  shipmentType?: ShipmentType
  itemDeliveryInfo?: ItemDeliveryInfo[]
}
