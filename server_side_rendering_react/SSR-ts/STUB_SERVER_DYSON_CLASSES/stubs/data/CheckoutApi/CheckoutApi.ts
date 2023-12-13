import { CheckoutEndPointsResponseData } from './CheckoutEndPointsResponseData'
import { SessionResponseStub, SerialisableStubObject, CheckoutApiStub } from 'types/stubs'

class CheckoutApi implements SerialisableStubObject<CheckoutApiStub> {
  private _response: SessionResponseStub['response']
  private _responseType: SessionResponseStub['responseType']
  private _timeZoneIdentifier: boolean

  setDefaults() {
    this.timeZoneIdentifier = true
    this.updateAllCheckoutApiErrorResponse(CheckoutEndPointsResponseData.Success)
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

  get timeZoneIdentifier() {
    return this._timeZoneIdentifier
  }

  set timeZoneIdentifier(value) {
    this._timeZoneIdentifier = value
  }

  updateAllCheckoutApiErrorResponse({ response }: { response: SessionResponseStub['response'] }) {
    const { statusCode, error, id } = response
    this._response = { statusCode, error }
    this._responseType = id as string
  }

  toJson() {
    return {
      response: this.response,
      responseType: this._responseType,
      timeZoneIdentifier: this._timeZoneIdentifier,
    }
  }

  fromJson(json: CheckoutApiStub) {
    this._response = json.response
    this._responseType = json.responseType
    this._timeZoneIdentifier = json.timeZoneIdentifier
  }

  reset() {
    this.setDefaults()
  }
}

export default CheckoutApi
