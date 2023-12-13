class DatacashError {
  constructor() {
    this.showDatacashError = false
    this.errorMessage = ''
    this.type = 'Default'
    this.description = ''
  }

  get showDatacashError() {
    return this._showDatacashError
  }

  set showDatacashError(showDatacashError) {
    this._showDatacashError = showDatacashError
  }

  get errorMessage() {
    return this._errorMessage
  }

  set errorMessage(errorMessage) {
    this._errorMessage = errorMessage
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  setError(error) {
    this._description = error.description
    this._errorMessage = error.errorMessage
    this._type = error.type
  }

  reset() {
    this._showDatacashError = false
    this._description = ''
    this._errorMessage = ''
    this._type = 'Default'
  }

  toJson() {
    return {
      showDatacashError: this._showDatacashError,
      errorMessage: this._errorMessage,
      description: this._description,
      type: this._type,
    }
  }

  fromJson(json) {
    this._showDatacashError = json.showDatacashError
    this._errorMessage = json.errorMessage
    this._description = json.description
    this._type = json.type
  }
}

module.exports = DatacashError
