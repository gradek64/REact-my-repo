import { ShipmentType } from 'types/api'

export interface Slot {
  id?: string
  x?: string
  y?: string
  deliveryCharge?: number
  type: ShipmentType
}

export interface ArrangeDeliveryFormValues {
  slots: Slot[]
  ageRestrictionChecked: boolean
  _ageRestrictionShowing: boolean
  [key: `instruction-${string}`]: string
}
