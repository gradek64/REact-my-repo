import { round2Decimals } from '../../helpers'
import { ProductStub } from '../../../src/types/stubs'
import {
  ConfirmationProduct,
  ProductAttribute,
  SnapshotProduct,
  SnapshotTotal,
  ShipmentType,
  StockHoldProductStatus,
} from '../../../src/types/api'
import ProductDetailsDatasets from './ProductDetailsDatasets'

class Product {
  private _id: string
  private _name: string
  private _retailPrice: number
  private _saving: number
  private _allocated: number
  private _requested: number
  private _type: ShipmentType
  private _isProductCare: boolean
  private _notes: string | undefined
  private _status: StockHoldProductStatus | undefined
  private _leadTimeDays: string | undefined

  constructor({
    id,
    saving = 0,
    allocated = 1,
    requested = allocated,
    type = ShipmentType.SMALL_ITEM,
    isProductCare = false,
    notes,
    leadTimeDays,
    status,
  }: {
    id: string
    saving?: number
    allocated?: number
    requested?: number
    type?: ShipmentType
    isProductCare?: boolean
    notes?: string
    status?: StockHoldProductStatus
    leadTimeDays?: string
  }) {
    this._id = id
    this._name = ProductDetailsDatasets[this._id].name
    this._retailPrice = ProductDetailsDatasets[this._id].price
    this._saving = saving
    this._allocated = allocated
    this._requested = requested
    this._type = type
    this._isProductCare = isProductCare
    this._notes = notes
    this._leadTimeDays = leadTimeDays
    this._status = status
  }

  toJson(): ProductStub {
    return {
      id: this._id,
      saving: this._saving,
      allocated: this._allocated,
      requested: this._requested,
      type: this._type,
      status: this._status,
      isProductCare: this._isProductCare,
      notes: this._notes,
      leadTimeDays: this._leadTimeDays,
    }
  }

  get product(): SnapshotProduct | ConfirmationProduct {
    return {
      id: this._id,
      title: this._name,
      price: this._retailPrice,
      status: this._status,
      type: this._type,
      attribute: this._isProductCare ? ProductAttribute.PRODUCT_CARE : undefined,
      notes: this._notes,
      leadTimeDays: this._leadTimeDays,
    }
  }

  get total(): SnapshotTotal {
    return {
      withSavings: this.totalWithSaving,
      withoutSavings: this.totalWithoutSaving,
      saving: this.saving,
    }
  }

  get totalWithSaving() {
    const total = this.totalWithoutSaving - this.saving
    return round2Decimals(total)
  }

  get totalWithoutSaving() {
    const total = this._allocated * this._retailPrice
    return round2Decimals(total)
  }

  get saving() {
    const total = this._allocated * this._saving
    return round2Decimals(total)
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get requested() {
    return this._requested
  }

  get allocated() {
    return this._allocated
  }

  get notes() {
    return this._notes
  }

  get leadTimeDays() {
    return this._leadTimeDays
  }

  get type() {
    return this._type
  }

  set type(type: ShipmentType) {
    this._type = type
  }

  get status(): StockHoldProductStatus | undefined {
    return this._status
  }

  set status(productStatus: StockHoldProductStatus | undefined) {
    this._status = productStatus
  }

  isAvailable() {
    return this._allocated > 0 && this._status !== StockHoldProductStatus.EXCLUDED
  }

  isAllocated() {
    return this._allocated > 0
  }

  isFullyReserved() {
    return this._allocated === this._requested
  }
}

export default Product
