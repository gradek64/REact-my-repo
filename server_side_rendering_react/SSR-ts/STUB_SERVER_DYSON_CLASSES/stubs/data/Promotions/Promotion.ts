import { AddPromotionAPIErrorAdvice, DeletePromotionAPIErrorAdvice, ErrorResponse } from 'types/api'
import { PromotionStub, SerialisableStubObject } from 'types/stubs'

class Promotion implements SerialisableStubObject<PromotionStub> {
  private _addPromotionResponse: PromotionStub['addPromotionResponse']
  private _addPromotionResponseType: PromotionStub['addPromotionResponseType']
  private _deletePromotionResponse: PromotionStub['deletePromotionResponse']
  private _deletePromotionResponseType: PromotionStub['deletePromotionResponseType']
  private _shouldExpireSubsequentPromos: boolean

  setDefaults() {
    this._addPromotionResponse = { status: 201, error: null }
    this._addPromotionResponseType = 'PromotionApplied'
    this._deletePromotionResponse = { status: 204, error: null }
    this._deletePromotionResponseType = 'PromotionDeleted'
    this._shouldExpireSubsequentPromos = false
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      addPromotionResponse: this._addPromotionResponse,
      addPromotionResponseType: this._addPromotionResponseType,
      deletePromotionResponse: this._deletePromotionResponse,
      deletePromotionResponseType: this._deletePromotionResponseType,
      shouldExpireSubsequentPromos: this._shouldExpireSubsequentPromos,
    }
  }

  fromJson(json: PromotionStub) {
    this._addPromotionResponse = json.addPromotionResponse
    this._addPromotionResponseType = json.addPromotionResponseType
    this._deletePromotionResponse = json.deletePromotionResponse
    this._deletePromotionResponseType = json.deletePromotionResponseType
    this._shouldExpireSubsequentPromos = json.shouldExpireSubsequentPromos
  }

  reset() {
    this.setDefaults()
  }

  get addPromotionResponse() {
    return this._addPromotionResponse
  }

  set addPromotionResponse({ status, error }) {
    this._addPromotionResponse = { status, error }
  }

  get addPromotionResponseType() {
    return this._addPromotionResponseType
  }

  set addPromotionResponseType(addPromotionResponseType) {
    this._addPromotionResponseType = addPromotionResponseType
  }

  get deletePromotionResponse() {
    return this._deletePromotionResponse
  }

  set deletePromotionResponse({ status, error }) {
    this._deletePromotionResponse = { status, error }
  }

  get deletePromotionResponseType() {
    return this._deletePromotionResponseType
  }

  set deletePromotionResponseType(deletePromotionResponseType) {
    this._deletePromotionResponseType = deletePromotionResponseType
  }

  get shouldExpireSubsequentPromos() {
    return this._shouldExpireSubsequentPromos
  }

  set shouldExpireSubsequentPromos(shouldExpireSubsequentPromos) {
    this._shouldExpireSubsequentPromos = shouldExpireSubsequentPromos
  }

  updateAddPromotionResponse = ({
    response,
  }: {
    response: { id: string; statusCode: number; error: ErrorResponse<AddPromotionAPIErrorAdvice> }
  }) => {
    const { id, statusCode, error } = response
    this._addPromotionResponse = { status: statusCode, error }
    this._addPromotionResponseType = id
  }

  updateDeletePromotionResponse = ({
    response,
  }: {
    response: { id: string; statusCode: number; error: ErrorResponse<DeletePromotionAPIErrorAdvice> }
  }) => {
    const { id, statusCode, error } = response
    this._deletePromotionResponse = { status: statusCode, error }
    this._deletePromotionResponseType = id
  }
}

export default Promotion
