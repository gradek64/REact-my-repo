import { extendOrderResponseData } from './ExtendOrderResponseData'
import { SessionResponseStub, SerialisableStubObject } from 'types/stubs'

class ExtendOrder implements SerialisableStubObject<SessionResponseStub> {
  private _response: SessionResponseStub['response']
  private _responseType: SessionResponseStub['responseType']

  setDefaults() {
    this.updateExtendOrderResponse(extendOrderResponseData.SuccessResponse)
  }

  constructor() {
    this.setDefaults()
  }

  get response() {
    return this._response
  }

  set response(res) {
    this._response = res
  }

  get responseType() {
    return this._responseType
  }

  set responseType(type) {
    this._responseType = type
  }

  updateExtendOrderResponse({ response }: { response: SessionResponseStub['response'] }) {
    const { statusCode, error, id } = response
    this._response = { statusCode, error }
    this._responseType = id as string
  }

  toJson() {
    return {
      response: this.response,
      responseType: this._responseType,
    }
  }

  fromJson(json: SessionResponseStub) {
    this._response = json.response
    this._responseType = json.responseType
  }

  reset() {
    this.setDefaults()
  }
}

export default ExtendOrder
