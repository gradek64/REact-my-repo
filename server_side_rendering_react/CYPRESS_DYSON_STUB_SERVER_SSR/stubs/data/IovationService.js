class IovationService {
  resultOptions = {
    A: {
      description: 'Allow',
      value: 'A',
      info: 'Iovation result - Allow'
    },
    R: {
      description: 'Review',
      value: 'R',
      info: 'Iovation result - Review'
    },
    D: {
      description: 'Deny',
      value: 'D',
      info: 'Iovation result - Deny'
    },
  }

  setDefaults() {
    this.setResult(this.resultOptions.A.value)
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      result: this._result,
    }
  }

  fromJson(json) {
    this._result = json.result
  }

  reset() {
    this.setDefaults()
  }

  setResult(value) {
    this._result = value
  }

  get result() {
    return this._result
  }

  set result(value) {
    this._result = value
  }

  get resultOptions() {
    return this.resultOptions
  }
}

module.exports = IovationService
