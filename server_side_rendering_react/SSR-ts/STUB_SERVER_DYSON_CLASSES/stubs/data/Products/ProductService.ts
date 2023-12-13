import { ProductServiceResponse, ProductServiceStub, SerialisableStubObject } from '../../../src/types/stubs'

class ProductService implements SerialisableStubObject<ProductServiceStub> {
  private _response: ProductServiceResponse
  private _responseType: number

  setDefaults() {
    this._response = {
      status: 200,
      error: '',
    }
    this._responseType = 200
  }

  constructor() {
    this.setDefaults()
  }

  get response() {
    return this._response
  }

  set response({ status, error }) {
    this._response = {
      status,
      error,
    }
  }

  get responseType() {
    return this._responseType
  }

  set responseType(value) {
    this._responseType = value
  }

  toJson() {
    return {
      response: this._response,
      responseType: this._responseType,
    }
  }

  fromJson(json: ProductServiceStub) {
    this._response = json.response
    this._responseType = json.responseType
  }

  reset() {
    this.setDefaults()
  }

  updateResponse(status: number, error: string) {
    this._response = { status, error }
    this._responseType = status
  }
}

export default ProductService
