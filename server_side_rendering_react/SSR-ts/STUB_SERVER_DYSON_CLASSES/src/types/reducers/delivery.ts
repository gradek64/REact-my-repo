import { ShipmentType, DeliverableDays, DeliveryFlags } from 'types/api'
import { Booking, StockHoldInformation } from 'types/stubs'

export interface Consignment {
  allowInstructions?: boolean
  consignmentId: string
  booking: Booking | null
  consignmentType: ShipmentType
  products: {
    productId: string
    quantity: number
    freeDelivery: boolean
    isDeliverable: boolean
    itemType: string
  }[]
  slots: {
    id: string
    y: string
    x: string
    value: string
    deliveryCharge: number
    ariaLabel: string
    segment: string
    disabled: boolean
    today: boolean
    tomorrow: boolean
    startDateTime: string
    endDateTime: string
  }[]
  startDate: string
  deliverableDays: DeliverableDays
  deliveryFlags: DeliveryFlags[]
  loadingMoreSlots: boolean
}

export interface DeliveryState {
  gettingConsignments: {
    loading: boolean
    error: boolean
    numberOfAttempts: number
  }
  consignments: Consignment[]
  stockHoldInformation?: StockHoldInformation
  gettingSlots: {
    [consigmentID: string]: {
      error: boolean
    }
  }
}
