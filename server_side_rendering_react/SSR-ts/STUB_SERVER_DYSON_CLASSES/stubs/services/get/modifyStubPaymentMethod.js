const { PaymentMethod, PaymentMethodStatus } = require('../../../src/types/api')
const SessionManager = require('../../data/SessionManager')

const modifyStubPaymentMethod = {
  path: '/payment-stub/payment-method',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const query = req.query
    const sessionData = SessionManager.getSession(req)
    const paymentMethods = sessionData.paymentMethods

    if (query.type in PaymentMethod && query.value in PaymentMethodStatus) {
      paymentMethods.setPaymentMethodStatus(PaymentMethod[query.type], PaymentMethodStatus[query.value])
    }

    SessionManager.saveSession(sessionData, req)
    return paymentMethods
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubPaymentMethod
