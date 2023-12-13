const SessionManager = require('../../data/SessionManager')

const deletePayment = {
  path: '/checkout-api-v2/checkouts/:id/payments/:paymentId',
  method: 'DELETE',
  delay: 100,
  cache: false,
  render(req, res) {
    const sessionData = SessionManager.getSession(req)
    const orderPayments = sessionData.orderPayments
    const basket = sessionData.basket

    /* Error handling */
    const { status, error } = orderPayments._deletePaymentResponse

    if (error) {
      return res.status(status).send({ error })
    }

    basket.updateTotalRemovingSaving(
      orderPayments.payments.find((payment) => payment.id === req.params.paymentId).amount,
    )

    orderPayments.deletePayment(req.params.paymentId)
    orderPayments.removeOtherPaymentOptions()
    SessionManager.saveSession(sessionData, req)
    return res.status(204).send()
  },
}

module.exports = deletePayment
