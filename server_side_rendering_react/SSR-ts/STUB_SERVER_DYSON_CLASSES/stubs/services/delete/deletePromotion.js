const SessionManager = require('../../data/SessionManager')

const deletePromotion = {
  path: '/checkout-api-v2/checkouts/:snapshotId/promotions',
  method: 'DELETE',
  delay: 100,
  cache: false,
  render(req, res) {
    const sessionData = SessionManager.getSession(req)
    const basket = sessionData.basket
    const { reference } = req.body
    const promotion = sessionData.promotion
    const { status, error } = promotion.deletePromotionResponse
    const orderPayments = sessionData.orderPayments

    if (error) {
      return res.status(status).send({ error })
    }

    orderPayments.removeOtherPaymentOptions()
    const amount = reference && basket.getPromoAmount(reference)

    basket.deletePromo({
      reference: reference.toUpperCase(),
      amount,
    })

    orderPayments.recalculatePaymentAmounts(basket)
    basket.updatePromoTotals()

    SessionManager.saveSession(sessionData, req)
    return res.status(204).send()
  },
}

module.exports = deletePromotion
