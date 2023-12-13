import { SnapshotPromotion } from '../api'
import { ShipmentStub } from './shipment'

export type BasketTotals = {
  basketSaving: number
  basketTotalWithoutSaving: number
  outstanding: number
}

export enum PromoType {
  Default = 'Default',
  Single = 'Single',
  MultiplePromos = 'MultiplePromos',
  ExclusiveWithNonExclusivePromo = 'ExclusiveWithNonExclusivePromo',
}

export interface BasketStub {
  shipments: ShipmentStub[]
  totals: BasketTotals
  promos: SnapshotPromotion[]
  promoType: PromoType
}
