import { GetWalletAPIErrorAdvice, SavedPaymentMethod } from 'types/api'
import { SerialisableStubObject, WalletStubObject, WalletScenario } from 'types/stubs'

export default class Wallet implements SerialisableStubObject<WalletStubObject> {
  private _walletType: WalletScenario
  private _responseType: number
  private _savedPaymentMethods: SavedPaymentMethod[]
  private _response: {
    status: number
    error?: GetWalletAPIErrorAdvice
  }

  setDefaults() {
    this._walletType = WalletScenario.NO_SAVED_CARDS
    this._savedPaymentMethods = []
    this._response = {
      status: 200,
    }
    this._responseType = 200
  }

  constructor() {
    this.setDefaults()
  }

  // Getters/Setters
  get walletType() {
    return this._walletType
  }

  set walletType(value) {
    this._walletType = value
  }

  get savedPaymentMethods() {
    return this._savedPaymentMethods
  }

  set savedPaymentMethods(value) {
    this._savedPaymentMethods = value
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

  // Saving/Loading
  toJson(): WalletStubObject {
    return {
      walletType: this._walletType,
      savedPaymentMethods: this._savedPaymentMethods,
      response: this._response,
      responseType: this._responseType,
    }
  }

  fromJson(json: WalletStubObject) {
    this._walletType = json.walletType
    this._savedPaymentMethods = json.savedPaymentMethods
    this._response = json.response
    this._responseType = json.responseType
  }

  // Interactions
  getDetails() {
    return {
      savedPaymentMethods: this._savedPaymentMethods,
    }
  }

  reset() {
    this.setDefaults()
  }

  updateResponse(status: number, error?: GetWalletAPIErrorAdvice) {
    this._response = { status, error }
    this._responseType = status
  }

  addSavedPayment(savedPayment: SavedPaymentMethod) {
    this._savedPaymentMethods.push(savedPayment)
  }

  removeSavedPayment(token: SavedPaymentMethod['token']) {
    const paymentToRemove = this._savedPaymentMethods.find((savedPayment) => savedPayment.token === token)

    if (paymentToRemove) {
      const index = this._savedPaymentMethods.indexOf(paymentToRemove)
      this._savedPaymentMethods.splice(index, 1)
    }
  }

  clearSavedPayments() {
    this._savedPaymentMethods = []
  }
}
