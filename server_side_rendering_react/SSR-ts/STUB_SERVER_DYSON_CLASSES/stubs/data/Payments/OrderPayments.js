const uuidv4 = require('uuid/v4')
const { PaymentMethod, CreditApplicationStatus } = require('../../../src/types/api')

class OrderPayments {
  setDefaults() {
    this._payments = [] // This will be populated when calling Add/Patch/Delete Payment endpoints
    this._masterReference = ''
    this._traceId = 'PS-b66cd6d5-10b0-43c3-877f-ee7ea97e4afb'
    this._wallet = {}
    this._selectedPaymentMethod = ''

    // stub dashboard properties
    this._giftCardType = 'Default'
    this._nectarType = 'Default'
    this._giftCardCount = 0
    this._flexeCardCount = 0
    this._addPaymentResponse = { status: 201, error: null }
    this._addPaymentResponseType = 'PaymentAdded'
    this._patchPaymentResponse = { status: 204, error: null }
    this._patchPaymentResponseType = 'PaymentCaptured'
    this._deletePaymentResponse = { status: 204, error: null }
    this._deletePaymentResponseType = 'PaymentDeleted'
    this._showPaypalError = false
    this._placeOrderResponse = { status: 201, error: null }
    this._placeOrderResponseType = 'OrderPlaced'
  }

  constructor() {
    this.setDefaults()
  }

  get paymentDetails() {
    return {
      payments: this.payments,
      masterReference: this._masterReference,
      sessionId: this._traceId,
      wallet: this._wallet,
      giftCardsTotal: this._giftCardsTotal,
    }
  }

  get payments() {
    return this._payments.map((payment) => {
      if (payment.paymentMethod.startsWith('CARD_GIFT')) {
        return { ...payment, remainingBalance: this.getRemainingBalance(payment.id) }
      }
      return payment
    })
  }

  set payments(payment) {
    this._payments = payment
  }

  get _giftCardsTotal() {
    return this._payments.reduce(
      (acc, paymentEle) => (paymentEle.paymentMethod.startsWith('CARD_GIFT') ? paymentEle.amount + acc : acc),
      0,
    )
  }

  get giftCardType() {
    return this._giftCardType
  }

  set giftCardType(giftCardType) {
    this._giftCardType = giftCardType
  }

  get nectarType() {
    return this._nectarType
  }

  set nectarType(nectarType) {
    this._nectarType = nectarType
  }

  get selectedPaymentMethod() {
    return this._selectedPaymentMethod
  }

  set selectedPaymentMethod(selectedPaymentMethod) {
    this._selectedPaymentMethod = selectedPaymentMethod
  }

  get addPaymentResponse() {
    return this._addPaymentResponse
  }

  set addPaymentResponse({ status, error }) {
    this._addPaymentResponse = { status, error }
  }

  get addPaymentResponseType() {
    return this._addPaymentResponseType
  }

  set addPaymentResponseType(addPaymentResponseType) {
    this._addPaymentResponseType = addPaymentResponseType
  }

  get showPaypalError() {
    return this._showPaypalError
  }

  set showPaypalError(value) {
    this._showPaypalError = value
  }

  get patchPaymentResponse() {
    return this._patchPaymentResponse
  }

  set patchPaymentResponse({ status, error }) {
    this._patchPaymentResponse = { status, error }
  }

  get patchPaymentResponseType() {
    return this._patchPaymentResponseType
  }

  set patchPaymentResponseType(patchPaymentResponseType) {
    this._patchPaymentResponseType = patchPaymentResponseType
  }

  get deletePaymentResponseType() {
    return this._deletePaymentResponseType
  }

  set deletePaymentResponseType(deletePaymentResponseType) {
    this._deletePaymentResponseType = deletePaymentResponseType
  }

  get placeOrderResponse() {
    return this._placeOrderResponse
  }

  set placeOrderResponse({ status, error }) {
    this._placeOrderResponse = { status, error }
  }

  get placeOrderResponseType() {
    return this._placeOrderResponseType
  }

  set placeOrderResponseType(placeOrderResponseType) {
    this._placeOrderResponseType = placeOrderResponseType
  }

  updateAddPaymentResponse = ({ response }) => {
    const { id, statusCode, error } = response
    this._addPaymentResponse = { status: statusCode, error }
    this._addPaymentResponseType = id
  }

  updatePatchPaymentResponse = ({ response }) => {
    const { id, statusCode, error } = response
    this._patchPaymentResponse = { status: statusCode, error }
    this._patchPaymentResponseType = id
  }

  updateDeletePaymentResponse = ({ response }) => {
    const { id, statusCode, error } = response
    this._deletePaymentResponse = { status: statusCode, error }
    this._deletePaymentResponseType = id
  }

  updatePlaceOrderResponse = ({ response }) => {
    const { id, statusCode, error } = response
    this._placeOrderResponse = { status: statusCode, error }
    this._placeOrderResponseType = id
  }

  reset() {
    this.setDefaults()
  }

  togglePaypalError = () => {
    this._showPaypalError = !this._showPaypalError
  }

  addPayment(payment, paymentOptions) {
    this._payments.push({ id: uuidv4(), ...payment, ...paymentOptions })
    if (payment.paymentMethod === 'CARD_GIFT_ARGOS') this._giftCardCount += 1
    if (payment.paymentMethod === 'CARD_GIFT_FLEXECASH') this._flexeCardCount += 1
  }

  getRemainingBalance(paymentId) {
    const currentPayment = this._payments.find((payment) => payment.id === paymentId)
    return currentPayment && currentPayment.balance - currentPayment.amount
  }

  patchPayment({ amount, paymentId, creditApplicationStatus }) {
    const patchPayment = this._payments.find((payment) => payment.id === paymentId)
    this.deletePayment(paymentId)

    if (typeof amount !== 'undefined') patchPayment.amount = amount
    if (creditApplicationStatus) patchPayment.creditApplicationStatus = creditApplicationStatus
    this._payments.push(patchPayment)
  }

  deletePayment(paymentId) {
    const paymentObj = this._payments.find((payment) => payment.id === paymentId)
    const index = this._payments.indexOf(paymentObj)
    this._payments.splice(index, 1)
    if (paymentObj && paymentObj.paymentMethod === 'CARD_GIFT_ARGOS') this._giftCardCount -= 1
    if (paymentObj && paymentObj.paymentMethod === 'CARD_GIFT_FLEXECASH') this._flexeCardCount -= 1
  }

  resetGiftCards(basket) {
    const giftCardTotal = this.payments
      .filter((payment) => payment.paymentMethod.startsWith('CARD_GIFT'))
      .reduce((total, { amount }) => total + amount, 0)
    basket.updateTotalRemovingSaving(giftCardTotal)
    this.payments = this.payments.filter((payment) => !payment.paymentMethod.startsWith('CARD_GIFT'))
    this._giftCardCount = 0
    this._flexeCardCount = 0
  }

  resetNectar(basket) {
    const nectarCardTotal = this.payments
      .filter((payment) => payment.paymentMethod.startsWith('CARD_NECTAR'))
      .reduce((total, { amount }) => total + amount, 0)
    basket.updateTotalRemovingSaving(nectarCardTotal)
    this.payments = this.payments.filter((payment) => !payment.paymentMethod.startsWith('CARD_NECTAR'))
  }

  getNectarSpend() {
    return this.payments
      .filter((payment) => payment.paymentMethod.startsWith('CARD_NECTAR'))
      .reduce((total, { amount }) => total + amount, 0)
  }

  resetNectarAmounts(basket) {
    if (basket.totals.outstanding >= 0) {
      return
    }
    const nectarCardTotal = this.payments
      .filter((payment) => payment.paymentMethod.startsWith('CARD_NECTAR'))
      .reduce((total, { amount }) => total + amount, 0)
    basket.updateTotalRemovingSaving(nectarCardTotal)
    this.payments
      .filter((payment) => payment.paymentMethod.startsWith('CARD_NECTAR'))
      .forEach((nectarPayment) => {
        nectarPayment.amount = 0
      })
  }

  /**
   * When the basket has been updated (i.e. promo added) and the outstanding is now negative, we need to decide whether
   * to remove or patch the gift card in order to get the outstanding back to positive
   *
   * e.g. basket total £10, gift card £4 and £3 -> outstanding is £3, we then add promo for £8 -> outstanding is -5
   *      we then loop to remove the £3 gift card and patch the £4 gift card to £2
   * @param basket
   */
  resetGiftCardAmounts(basket) {
    if (basket.totals.outstanding >= 0) {
      return
    }
    const currentGiftCardPayments = this.payments.filter((payment) => payment.paymentMethod.startsWith('CARD_GIFT'))
    currentGiftCardPayments.forEach((giftCard) => {
      const overspend = Math.abs(basket._totals.outstanding)
      if (giftCard.amount > overspend) {
        basket.updateTotalRemovingSaving(overspend)
        this.patchPayment({ amount: giftCard.amount - overspend, paymentId: giftCard.id })
      } else {
        basket.updateTotalRemovingSaving(giftCard.amount)
        this.deletePayment(giftCard.id)
      }
    })
  }

  /**
   * When the basket has been updated (i.e. promo deleted) and the outstanding is positive, we need to decide whether
   * to use the remaining balance from each gift card to cover the remaining outstanding
   *
   * e.g. basket total £10, gift card amount £4 but balance is £7, and have promo for £2, when we delete the promo
   *      the gift card should be adjusted to using all £7 balance.
   * @param basket
   */
  adjustGiftCardPayments(basket) {
    const giftCards = this.payments.filter((payment) => payment.paymentMethod.startsWith('CARD_GIFT'))
    giftCards.forEach((card) => {
      const remainingBalance = this.getRemainingBalance(card.id)
      // only check gift cards when there is outstanding to be paid
      if (remainingBalance > 0 && basket._totals.outstanding > 0) {
        const outstandingToRemainingBalanceDiff = basket._totals.outstanding - remainingBalance
        if (outstandingToRemainingBalanceDiff >= 0) {
          // whole balance can be used to cover outstanding
          basket.updateTotalWithSaving(remainingBalance)
          this.patchPayment({ amount: card.balance, paymentId: card.id })
        } else {
          // only part of gift card amount is necessary to cover outstanding
          const patchAmount = outstandingToRemainingBalanceDiff + remainingBalance
          basket.updateTotalWithSaving(patchAmount)
          this.patchPayment({ amount: patchAmount + card.amount, paymentId: card.id })
        }
      }
    })
  }

  recalculatePaymentAmounts(basket) {
    if (basket.totals.outstanding < 0) {
      this.resetNectarAmounts(basket)
      this.resetGiftCardAmounts(basket)
    } else {
      this.adjustGiftCardPayments(basket)
    }
  }

  removeOtherPaymentOptions() {
    if (this._payments.length > 0) {
      this._payments = this._payments.filter(
        (payment) =>
          payment.paymentMethod.startsWith('CARD_GIFT') ||
          payment.paymentMethod.startsWith('CARD_NECTAR') ||
          ([PaymentMethod.CREDIT_CAPE2, PaymentMethod.CREDIT_MPP].includes(payment.paymentMethod) &&
            payment.creditApplicationStatus === CreditApplicationStatus.FAILED),
      )
    }
  }

  toJson() {
    return {
      payments: this.payments,
      masterReference: this._masterReference,
      sessionId: this._traceId,
      wallet: this._wallet,
      giftCardsTotal: this._giftCardsTotal,
      giftCardType: this._giftCardType,
      nectarType: this._nectarType,
      addPaymentResponse: this._addPaymentResponse,
      addPaymentResponseType: this._addPaymentResponseType,
      patchPaymentResponse: this._patchPaymentResponse,
      patchPaymentResponseType: this._patchPaymentResponseType,
      deletePaymentResponse: this._deletePaymentResponse,
      deletePaymentResponseType: this._deletePaymentResponseType,
      showPaypalError: this._showPaypalError,
      placeOrderResponse: this._placeOrderResponse,
      placeOrderResponseType: this._placeOrderResponseType,
      giftCardCount: this._giftCardCount,
      flexeCardCount: this._flexeCardCount,
    }
  }

  fromJson(json) {
    this._payments = json.payments
    this._masterReference = json.masterReference
    this._traceId = json.sessionId
    this._wallet = json.wallet
    this._giftCardType = json.giftCardType
    this._nectarType = json.nectarType
    this._addPaymentResponse = json.addPaymentResponse
    this._addPaymentResponseType = json.addPaymentResponseType
    this._patchPaymentResponse = json.patchPaymentResponse
    this._patchPaymentResponseType = json.patchPaymentResponseType
    this._deletePaymentResponse = json.deletePaymentResponse
    this._deletePaymentResponseType = json.deletePaymentResponseType
    this._showPaypalError = json.showPaypalError
    this._placeOrderResponse = json.placeOrderResponse
    this._placeOrderResponseType = json.placeOrderResponseType
    this._giftCardCount = json.giftCardCount
    this._flexeCardCount = json.flexeCardCount
  }
}
module.exports = OrderPayments
