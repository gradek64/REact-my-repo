const SessionManager = require('../../data/SessionManager')

const patchPayment = {
  path: '/checkout-api-v2/checkouts/:snapshotId/payments/:paymentId',
  method: 'PATCH',
  delay: 100,
  cache: false,
  render: (req, res) => {
    const {
      body: { amount, creditApplicationStatus },
    } = req
    const sessionData = SessionManager.getSession(req)
    const orderPayments = sessionData.orderPayments
    const basket = sessionData.basket

    /* Error handling */
    const { status, error } = orderPayments._patchPaymentResponse

    if (error) {
      return res.status(status).send({ error })
    }

    if (creditApplicationStatus) {
      orderPayments.patchPayment({ creditApplicationStatus, paymentId: req.params.paymentId })
    }

    /* If a payment option exists, remove it (leave nectar, giftcard, credit application) */
    orderPayments.removeOtherPaymentOptions()

    if (typeof amount !== 'undefined') {
      const previousNectarAmount = orderPayments.payments.find((payment) => payment.id === req.params.paymentId).amount
      basket.updateTotalRemovingSaving(previousNectarAmount)
      basket.updateTotalWithSaving(amount)
      orderPayments.patchPayment({ amount, paymentId: req.params.paymentId })
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    return res.status(204).send()
  },
}

module.exports = patchPayment
