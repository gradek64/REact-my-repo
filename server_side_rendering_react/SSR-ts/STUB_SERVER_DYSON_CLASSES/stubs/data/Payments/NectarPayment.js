const { PaymentMethod } = require('../../../src/types/api')

const last4Digits = () => Math.floor(1000 + Math.random() * 9000)

class NectarPayment {
  setDefaults() {
    this._accountType = 'C'
    this._redemptionPermission = true
    this._firstName = 'Argos'
    this._lastName = 'Argos'
    this._title = 'Mr'
    this._minSpendingLimit = 2.5
    this._minSpendingLimitPoints = 250
    this._maxSpendingLimit = 200
    this._maxSpendingLimitPoints = 40000
    this._increment = 2.5
    this._incrementPoints = 500
    this._exchangeRate = 2
    this._last4Digits = last4Digits()
    this._paymentMethod = PaymentMethod.CARD_NECTAR_SPEND
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      accountType: this.NectarPayment.accountType,
      redemptionPermission: this.NectarPayment.redemptionPermission,
      firstName: this.NectarPayment.firstName,
      lastName: this.NectarPayment.lastName,
      title: this.NectarPayment.title,
      minSpendingLimit: this.NectarPayment.minSpendingLimit,
      minSpendingLimitPoints: this.NectarPayment.minSpendingLimitPoints,
      maxSpendingLimit: this.NectarPayment.maxSpendingLimit,
      maxSpendingLimitPoints: this.NectarPayment.maxSpendingLimitPoints,
      increment: this.NectarPayment.increment,
      incrementPoints: this.NectarPayment.incrementPoints,
      exchangeRate: this.NectarPayment.exchangeRate,
    }
  }

  fromJson(json) {
    this._accountType = json.accountType
    this._redemptionPermission = json.redemptionPermission
    this._firstName = json.firstName
    this._lastName = json.lastName
    this._title = json.title
    this._minSpendingLimit = json.minSpendingLimit
    this._minSpendingLimitPoints = json.minSpendingLimitPoints
    this._maxSpendingLimit = json.maxSpendingLimit
    this._maxSpendingLimitPoints = json.maxSpendingLimitPoints
    this._increment = json.increment
    this._incrementPoints = json.incrementPoints
    this._exchangeRate = json.exchangeRate
  }

  reset() {
    this.setDefaults()
  }
}
module.exports = NectarPayment
