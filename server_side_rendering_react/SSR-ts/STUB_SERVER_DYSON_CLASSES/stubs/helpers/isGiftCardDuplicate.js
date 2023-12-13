/**
 * @param {Array} payments - payments array
 * @param {String} giftCardType - CARD_GIFT_ARGOS or CARD_GIFT_FLEXECASH
 * @param {String} cardNumber - the card number that the user has submitted
 * @returns {Boolean} - does the payments array already contain this gift card?
 */
function isGiftCardDuplicate(payments, giftCardType, cardNumber) {
  return payments.find(
    (payment) =>
      payment.last4Digits === cardNumber.slice(cardNumber.length - 4) && payment.paymentMethod === giftCardType,
  )
}

module.exports = isGiftCardDuplicate
