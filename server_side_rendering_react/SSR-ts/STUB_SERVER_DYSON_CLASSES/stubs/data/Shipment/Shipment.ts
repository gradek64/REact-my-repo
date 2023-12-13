import * as uuid from 'uuid'
import {
  FulfilmentType,
  SnapshotShipment,
  Slot as SnapshotSlot,
  NonBookableSlot as SnapshotNonBookableSlot,
  ShipmentType,
  SnapshotStockHoldInfo,
  SnapshotLine,
  FulfilmentStatus,
  OrderLine,
  ItemDeliveryInfo,
  ConfirmationProduct,
  StockHoldProductStatus,
  BookingRequest,
} from '../../../src/types/api'
import BasketDatasets from './BasketDatasets'

import {
  SerialisableStubObject,
  ShipmentStub,
  CollectionBasketType,
  BasketType,
  DeliveryBasketType,
  ShipmentOptions,
  StockHold,
  SlotAvailability,
  SlotSetType,
  ParcelItems,
  ConsignmentStub,
  DeliverableDays,
  DeliveryFlag,
  DeliveryFlags,
} from '../../../src/types/stubs'
import Product from '../Products/Product'
import { buildSlotTimes, getCurrentDate, getDateIsoString, generateSlots } from '../../helpers'

class Shipment implements SerialisableStubObject<ShipmentStub> {
  private _shipmentId: string
  private _stockholdId: string
  private _fulfilmentStatus: FulfilmentStatus
  private _fulfilmentType: FulfilmentType
  private _shipmentType: ShipmentType
  private _products: Product[]
  private _basketType: BasketType
  private _specialOfferSaving: number
  private _deliveryInstruction: string | undefined
  private _slotAvailability: SlotAvailability
  private _slotDateOffset: number
  private _startDate: string
  private _deliverableDays: DeliverableDays
  private _deliveryFlags: DeliveryFlags[]
  private _isSpecialDelivery: boolean
  private _slotStartTime: string
  private _slotEndTime: string
  private _deliveryCharge: number

  constructor(fulfilmentType: FulfilmentType = FulfilmentType.COLLECTION, options: ShipmentOptions = {}) {
    this.setDefaults()

    if (fulfilmentType === FulfilmentType.COLLECTION) {
      this._fulfilmentType = FulfilmentType.COLLECTION
      this._shipmentType = options.shipmentType ?? ShipmentType.PREPAY
      this._basketType = options.basketType ?? CollectionBasketType.DEFAULT
    } else if (fulfilmentType === FulfilmentType.DELIVERY) {
      this._fulfilmentType = FulfilmentType.DELIVERY
      this._shipmentType = options.shipmentType ?? ShipmentType.CLOTHING
      this._basketType = options.basketType ?? DeliveryBasketType.DEFAULT
    } else {
      this._fulfilmentType = FulfilmentType.HD
      this._shipmentType = options.shipmentType ?? ShipmentType.SMALL_ITEM
      this._basketType = options.basketType ?? DeliveryBasketType.DEFAULT
    }

    if (options.deliveryInstruction) {
      this.setDeliveryInstruction(options.deliveryInstruction)
    }

    this.setBasket()

    // These need to be called after setBasket
    this.setSnapshotSlot()
    this._deliveryCharge = this.getDeliveryCharge()
  }

  setDefaults() {
    this._shipmentId = uuid.v4()
    this._stockholdId = uuid.v4()
    this._products = []
    this._specialOfferSaving = 0
    this._fulfilmentStatus = FulfilmentStatus.FULFILLED
    this._slotAvailability = SlotAvailability.ALL_AVAILABLE
    this._slotDateOffset = 0
    this._startDate = getDateIsoString(getCurrentDate())
    this._deliverableDays = DeliverableDays.SEVEN
    this._deliveryFlags = [DeliveryFlag.NORMAL_DELIVERY]
    this._isSpecialDelivery = false
    this._deliveryCharge = 0
  }

  reset() {
    this.setDefaults()
  }

  toJson() {
    return {
      shipmentId: this._shipmentId,
      stockholdId: this._stockholdId,
      fulfilmentStatus: this._fulfilmentStatus,
      fulfilmentType: this._fulfilmentType,
      shipmentType: this._shipmentType,
      products: this._products.map((product) => product.toJson()),
      basketType: this._basketType,
      specialOfferSaving: this._specialOfferSaving,
      deliveryInstruction: this._deliveryInstruction,
      slotAvailability: this._slotAvailability,
      startDate: this._startDate,
      deliverableDays: this._deliverableDays,
      deliveryFlags: this._deliveryFlags,
      isSpecialDelivery: this._isSpecialDelivery,
      slotStartTime: this._slotStartTime,
      slotEndTime: this._slotEndTime,
      deliveryCharge: this._deliveryCharge,
      slotDateOffset: this._slotDateOffset,
    }
  }

  fromJson(json: ShipmentStub) {
    this._shipmentId = json.shipmentId
    this._stockholdId = json.stockholdId
    this._fulfilmentStatus = json.fulfilmentStatus
    this._fulfilmentType = json.fulfilmentType
    this._shipmentType = json.shipmentType
    this._products = json.products.map((product) => new Product(product))
    this._basketType = json.basketType
    this._specialOfferSaving = json.specialOfferSaving
    this._deliveryInstruction = json.deliveryInstruction
    this._slotAvailability = json.slotAvailability
    this._startDate = json.startDate
    this._deliverableDays = json.deliverableDays
    this._deliveryFlags = json.deliveryFlags
    this._isSpecialDelivery = json.isSpecialDelivery
    this._slotStartTime = json.slotStartTime
    this._slotEndTime = json.slotEndTime
    this._deliveryCharge = json.deliveryCharge
    this._slotDateOffset = json.slotDateOffset
  }

  get shipmentId() {
    return this._shipmentId
  }

  get stockholdId() {
    return this._stockholdId
  }

  get fulfilmentStatus() {
    return this._fulfilmentStatus
  }

  get fulfilmentType() {
    return this._fulfilmentType === FulfilmentType.HD ? FulfilmentType.DELIVERY : this._fulfilmentType
  }

  get rawFulfilmentType() {
    return this._fulfilmentType
  }

  get shipmentType() {
    return this._shipmentType
  }

  get specialOfferSaving() {
    return this._specialOfferSaving
  }

  get basketType() {
    return this._basketType
  }

  get deliveryInstruction() {
    return this._deliveryInstruction
  }

  get slotAvailability() {
    return this._slotAvailability
  }

  set slotAvailability(availability) {
    this._slotAvailability = availability
  }

  get slotDateOffset() {
    return this._slotDateOffset
  }

  set slotDateOffset(offset: number) {
    this._slotDateOffset = offset
    if (this._slotDateOffset < 0) {
      this._slotDateOffset = 0
    }
  }

  get startDate() {
    return this._startDate
  }

  get deliverableDays() {
    return this._deliverableDays
  }

  set deliverableDays(deliverableDays: DeliverableDays) {
    this._deliverableDays = deliverableDays
  }

  get deliveryFlags() {
    return this._isSpecialDelivery ? [DeliveryFlag.SPECIAL_DELIVERY] : [DeliveryFlag.NORMAL_DELIVERY]
  }

  get isSpecialDelivery() {
    return this._isSpecialDelivery
  }

  set isSpecialDelivery(value: boolean) {
    this._isSpecialDelivery = value
  }

  get products() {
    return this._products
  }

  get slotStartTime() {
    return this._slotStartTime
  }

  get slotEndTime() {
    return this._slotEndTime
  }

  get deliveryCharge() {
    return this._deliveryCharge
  }

  set deliveryCharge(deliveryCharge: number) {
    this._deliveryCharge = deliveryCharge
  }

  getLines(includeUnavailable = false): SnapshotLine[] {
    return this._products
      .filter((product) => includeUnavailable || product.isAvailable())
      .map((product) => ({
        id: uuid.v4(),
        product: product.product,
        total: product.total,
        quantity: product.allocated,
        shipmentId: this._shipmentId,
      }))
  }

  getOrderLines(isOrderAttributesError?: boolean, shipmentType?: string): OrderLine[] {
    const orderAttributesError = (product: ConfirmationProduct) => {
      if (isOrderAttributesError) {
        switch (shipmentType) {
          case ShipmentType.WARRANTY:
          case ShipmentType.RECYCLING_SERVICE:
            return { ...product, type: undefined, attribute: undefined }
          case ShipmentType.PRE_ORDER:
            return { ...product, type: undefined, notes: undefined }
          case ShipmentType.SUPPLIER_DIRECT_FULFILLED:
            return { ...product, type: undefined, leadTimeDays: undefined }
          default:
            return product
        }
      }
      return product
    }

    return this._products
      .filter((product) => product.isAvailable())
      .map((product) => ({
        product: orderAttributesError(product.product as ConfirmationProduct),
        total: product.total,
        quantity: product.allocated,
      }))
  }

  getSnapshotStockhold(): SnapshotStockHoldInfo {
    return {
      id: this._stockholdId,
      fulfilmentLocationId: '140',
      holds: this._products.map((product) => {
        return {
          id: uuid.v4(),
          productId: product.id,
          requested: product.requested,
          allocated: product.allocated,
          status: product.status,
          fullyReserved: product.isFullyReserved(),
          title: product.name,
        }
      }),
    }
  }

  getSnapshotShipment(): SnapshotShipment {
    return {
      id: this._shipmentId,
      stockHoldId: this._stockholdId,
      fulfilmentType: this._fulfilmentType,
      type: this._shipmentType,
      slot: this.getSnapshotSlot(),
      itemDeliveryInfo: this.getSnapshotItemDeliveryInfo(),
    }
  }

  private getSnapshotItemDeliveryInfo(): ItemDeliveryInfo[] | undefined {
    // Only exists for pre-order shipments
    if (this.shipmentType === ShipmentType.PRE_ORDER) {
      return this._products.map((product) => {
        return {
          productId: product.id,
          notes: product?.notes ?? '',
        }
      })
    }

    // Only exists for sdf shipments
    if (this.shipmentType === ShipmentType.SUPPLIER_DIRECT_FULFILLED) {
      return this._products.map((product) => {
        return {
          productId: product.id,
          leadTimeDays: product?.leadTimeDays ? Number(product.leadTimeDays) : undefined,
        }
      })
    }

    return undefined
  }

  getSnapshotSlot(): SnapshotSlot | SnapshotNonBookableSlot | undefined {
    // slot only exists for delivery shipments, excluding digital downloads and warranties
    if (
      this._fulfilmentType === FulfilmentType.COLLECTION ||
      this.shipmentType === ShipmentType.DIGITAL_DOWNLOAD ||
      this.shipmentType === ShipmentType.WARRANTY ||
      this.shipmentType === ShipmentType.RECYCLING_SERVICE
    ) {
      return undefined
    }

    const bookingId = uuid.v4()
    const skus = this._products
      .filter((product) => product.isAvailable())
      .map((product) => {
        return { id: product.id, type: 'STANDARD', price: product.totalWithoutSaving }
      })

    if (this.shipmentType === ShipmentType.PRE_ORDER) {
      return { skus, bookingId }
    }

    return {
      id: uuid.v4(),
      startTime: this._slotStartTime,
      endTime: this._slotEndTime,
      instruction: this._deliveryInstruction,
      skus,
      bookingId,
    }
  }

  setSnapshotSlot(booking?: BookingRequest) {
    const { slotId = '', instruction } = booking ?? {}
    const { startTime, endTime } = buildSlotTimes(slotId)

    this._slotStartTime = startTime
    this._slotEndTime = endTime

    if (instruction) {
      this._deliveryInstruction = instruction
    }
  }

  setBasket(basketType: BasketType = this._basketType) {
    this._basketType = basketType

    const { products } = BasketDatasets[this._shipmentType][basketType]

    this._products = products
    this._products.forEach((product) => {
      product.type = this._shipmentType
    })
    this._specialOfferSaving = products.reduce((acc, product) => acc + product.saving, 0)
  }

  setShipmentType(shipmentType: ShipmentType) {
    this._shipmentType = shipmentType

    // use the default basket for the new shipment type
    this.setBasket()

    this.setSnapshotSlot()
    this._deliveryCharge = this.getDeliveryCharge()
  }

  setFulfilmentStatus(fulfilmentStatus: FulfilmentStatus) {
    this._fulfilmentStatus = fulfilmentStatus
  }

  toggleDeliveryInstructions() {
    this._deliveryInstruction = this._deliveryInstruction
      ? undefined
      : 'The buzzer is broken, please knock on the window'
  }

  setDeliveryInstruction(instruction: string) {
    this._deliveryInstruction = instruction
  }

  getDeliveryCharge(): number {
    // delivery charge depends on the shipment type
    if ([ShipmentType.CLOTHING, ShipmentType.SMALL_ITEM].includes(this._shipmentType)) return 3.95
    if (this._shipmentType === ShipmentType.LARGE_ITEM) return 6.95

    return 0
  }

  createStockHolds(): StockHold[] {
    return this.products.map((product) => ({
      productId: product.id,
      requested: product.requested,
      allocated: product.allocated,
      fulfilmentLocationId: 'Node 1',
      dateRequested: getDateIsoString(getCurrentDate()),
      status: product.status,
    }))
  }

  createParcelItems(): ParcelItems[] {
    const freeDelivery = !this._deliveryCharge

    return this.products
      .filter(
        (product) =>
          product.status !== StockHoldProductStatus.EXCLUDED && product.status !== StockHoldProductStatus.UNAVAILABLE,
      )
      .map((product) => ({
        productId: product.id,
        quantity: product.allocated,
        freeDelivery,
        isDeliverable: true,
        itemType: product.type,
      }))
  }

  createConsignment(): ConsignmentStub {
    const slots = generateSlots(this.slotAvailability, this.slotDateOffset, this.deliveryFlags)
    return {
      consignmentType: this.shipmentType,
      consignmentId: this._shipmentId,
      allowInstructions: !!this.deliveryInstruction,
      parcelItems: this.createParcelItems(),
      slots: this.hasSlots() ? slots : [],
      booking: null,
      startDate: this.startDate,
      deliverableDays: this.deliveryFlags.includes(DeliveryFlag.SPECIAL_DELIVERY) ? 0 : this.deliverableDays,
      deliveryFlags: this.deliveryFlags,
      firstSlotDate: slots[0].startDateTime,
    }
  }

  updateSlotSet(slotSet: SlotSetType) {
    switch (slotSet) {
      case SlotSetType.NEXT:
        this.slotDateOffset += 7
        break
      case SlotSetType.PREVIOUS:
        this.slotDateOffset -= 7
        break
      default:
        this.slotDateOffset = 0
    }
  }

  hasSlots() {
    return [ShipmentType.CLOTHING, ShipmentType.SMALL_ITEM, ShipmentType.LARGE_ITEM].includes(this.shipmentType)
  }
}

export default Shipment
