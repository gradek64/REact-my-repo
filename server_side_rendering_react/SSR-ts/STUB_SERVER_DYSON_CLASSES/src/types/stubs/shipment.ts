import { FulfilmentStatus } from '../api'
import { FulfilmentType, ShipmentType, StockHoldProductStatus } from '../api/snapshot'
import { ProductStub } from './product'
import { Brand } from 'types/reducers'

export enum CollectionBasketType {
  DEFAULT = 'Default',
  SINGLE = 'Single',
  SINGLE_TU = 'SingleTu',
  SINGLE_HABITAT = 'SingleHabitat',
  SINGLE_CARE = 'SingleCare',
  MULTIPLE_CARE = 'MultipleCare',
  QUANTITY = 'Quantity',
  LARGE = 'Large',
  MULTIPLE = 'Multiple',
  SAVING = 'Saving',
  SINGLE_ITEM_OUT_OF_STOCK = 'SingleItemOutOfStock',
  SINGLE_ITEM_OUT_OF_STOCK_WITH_PROMOTION = 'SingleItemOutOfStockWithPromotion',
  SINGLE_ITEM_PARTIAL_AVAILABILITY = 'SingleItemPartialAvailability',
  SINGLE_ITEM_PARTIAL_AVAILABILITY_WITH_PROMOTION = 'SingleItemPartialAvailabilityWithPromotion',
  MULTIPLE_ITEMS_OUT_OF_STOCK = 'MultipleItemsOutOfStock',
  MULTIPLE_ITEMS_OUT_OF_STOCK_WITH_PROMOTION = 'MultipleItemsOutOfStockWithPromotion',
  MULTIPLE_ITEMS_SOME_OUT_OF_STOCK = 'MultipleItemsSomeOutOfStock',
  MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY = 'MultipleItemsSomePartialAvailability',
  MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY_WITH_PROMOTION = 'MultipleItemsSomePartialAvailabilityWithPromotion',
}

export enum DeliveryBasketType {
  DEFAULT = 'Default',
  SINGLE = 'Single',
  QUANTITY = 'Quantity',
  LARGE = 'Large',
  SINGLE_GIFT_CARD = 'SingleGiftCard',
  SINGLE_ITEM_OUT_OF_STOCK = 'SingleItemOutOfStock',
  SINGLE_ITEM_EXCLUDED = 'SingleItemExcluded',
  SINGLE_ITEM_PARTIAL_AVAILABILITY = 'SingleItemPartialAvailability',
  SINGLE_ITEM_ERROR = 'SingleItemError',
  MULTIPLE_ITEMS_OUT_OF_STOCK = 'MultipleItemsOutOfStock',
  MULTIPLE_ITEMS_SOME_OUT_OF_STOCK = 'MultipleItemsSomeOutOfStock',
  MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY = 'MultipleItemsSomePartialAvailability',
  MULTIPLE_ITEMS_EXCLUDED = 'MultipleExcluded',
  MULTIPLE_ITEMS_SOME_EXCLUDED = 'MultipleSomeExcluded',
  MULTIPLE_SOME_EXCLUDED_SOME_OUT_OF_STOCK = 'MultipleSomeExcludedSomeOutOfStock',
  MULTIPLE_ITEMS_CANCELLED = 'MultipleCancelled',
  MULTIPLE_ITEMS_SOME_OUT_OF_STOCK_SOME_EXCLUDED = 'MultipleItemsSomeOutOfStockSomeExcluded',
  AGE_RESTRICTED = 'AgeRestricted',
  FOUR_ITEM_BASKET = '4ItemBasket',
  FIVE_ITEM_BASKET = '5ItemBasket',
}

export type BasketType = CollectionBasketType | DeliveryBasketType

export interface ShipmentStub {
  shipmentId: string
  stockholdId: string
  fulfilmentStatus: FulfilmentStatus
  fulfilmentType: FulfilmentType
  shipmentType: ShipmentType
  products: ProductStub[]
  basketType: BasketType
  specialOfferSaving: number
  deliveryInstruction: string | undefined
  slotAvailability: SlotAvailability
  slotDateOffset: number
  startDate: string
  deliverableDays: DeliverableDays
  deliveryFlags: DeliveryFlags[]
  isSpecialDelivery: boolean
  slotStartTime: string
  slotEndTime: string
  deliveryCharge: number
}

export interface ShipmentOptions {
  shipmentType?: ShipmentType
  basketType?: BasketType
  deliveryInstruction?: string
}

export interface FulfilmentStub {
  fulfilmentType: FulfilmentType
  fulfilmentId: string
  stockHoldInformation: StockHoldInformation
  consignments: ConsignmentStub[]
  brand: Brand
  location: Location
}

export interface StockHoldInformation {
  stockHolds: StockHold[]
  fullyReserved: boolean
  masterStockHoldId: string
}

export interface StockHold {
  productId: string
  requested: number
  allocated: number
  fulfilmentLocationId: string
  dateRequested: string
  reservationId?: string
  status: StockHoldProductStatus | undefined
  carrierFulfilled?: boolean
}

export enum LocationType {
  STORE = 'STORE',
  ADDRESS = 'ADDRESS',
}

export type Location = {
  locationType: LocationType
  deliveryLocation: string
}

export interface ConsignmentStub {
  consignmentType: ShipmentType
  consignmentId: string
  allowInstructions: boolean
  parcelItems: ParcelItems[]
  slots: Slot[]
  booking: Booking | null
  startDate: string
  deliverableDays: number
  deliveryFlags: DeliveryFlags[]
  firstSlotDate: string
}

export type ParcelItems = {
  productId: string
  quantity: number
  freeDelivery: boolean
  isDeliverable: boolean
  itemType: ShipmentType
}

export interface Slot {
  slotId: string
  dtId?: string
  isSlotAvailable: boolean
  startDateTime: string
  endDateTime: string
  greenness?: number
  schedule?: string
  slotGroup: string
  slotGroupName?: string
  name?: string
  marginalCost?: string
  deliveryCharge: DeliveryCharge
}

type DeliveryCharge = {
  sku: string
  deliveryChargeType: DeliveryChargeType
  price: string
}

export enum DeliveryChargeType {
  PREMIUM = 'PREMIUM',
  STANDARD = 'STANDARD',
}

export type Booking = {
  bookedSlot: Slot
  bookingId: string
  instructions: { instructionText: string }[]
}

export enum SlotAvailability {
  ALL_AVAILABLE = 'ALL_AVAILABLE',
  PARTIALLY_AVAILABLE = 'PARTIALLY_AVAILABLE',
  NONE_AVAILABLE = 'NONE_AVAILABLE',
}

export enum SlotSetType {
  CURRENT = 'CURRENT',
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
}

export enum DeliverableDays {
  SEVEN = 7,
  FOURTEEN = 14,
  TWENTY_ONE = 21,
  TWENTY_EIGHT = 28,
  THIRTY_FIVE = 35,
  FORTY_TWO = 42,
  FORTY_NINE = 49,
  FIFTY_SIX = 56,
}

export enum DeliveryFlag {
  NORMAL_DELIVERY = 'NORMAL_DELIVERY',
  SPECIAL_DELIVERY = 'SPECIAL_DELIVERY',
}

export type DeliveryFlags = DeliveryFlag
