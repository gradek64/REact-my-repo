import { SerialisableStubObject } from 'types/stubs'

class ErrorCodes implements SerialisableStubObject<string[]> {
  private _errorCodes: string[]

  setDefaults() {
    this._errorCodes = []
  }

  constructor() {
    this.setDefaults()
  }

  get errorCodes() {
    return this._errorCodes
  }

  set errorCodes(error) {
    this._errorCodes = error
  }

  addError(error: string) {
    this.errorCodes.push(error)
  }

  reset() {
    this.setDefaults()
  }

  toJson() {
    return this.errorCodes
  }

  fromJson(json: string[]) {
    this._errorCodes = json
  }
}

export default ErrorCodes
