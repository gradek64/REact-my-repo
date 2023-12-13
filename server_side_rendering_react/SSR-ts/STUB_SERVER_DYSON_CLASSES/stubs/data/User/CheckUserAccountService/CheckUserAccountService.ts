import { checkUserAccountServiceResponseData } from './CheckUserAccountResponseData'
import { SessionResponseStub, SerialisableStubObject } from 'types/stubs'

class CheckUserAccountService implements SerialisableStubObject<SessionResponseStub> {
  private _response: SessionResponseStub['response']
  private _responseType: SessionResponseStub['responseType']

  setDefaults() {
    this.updateCheckUserAccountServiceResponse(checkUserAccountServiceResponseData.IsNotRegistered)
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

  updateCheckUserAccountServiceResponse({ response }: { response: SessionResponseStub['response'] }) {
    const { statusCode, error, id } = response

    this._response = { statusCode, error }
    this._responseType = id as string
  }

  toJson() {
    return {
      response: this._response,
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

export default CheckUserAccountService
