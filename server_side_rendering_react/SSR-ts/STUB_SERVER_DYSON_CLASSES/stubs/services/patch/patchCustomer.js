import SessionManager from '../../data/SessionManager'

import { patchCustomerResponseData } from '../../data/Customer/PatchCustomerResponseData'

const patchCustomer = {
  path: '/checkout-api-v2/checkouts/:checkoutId/customer',
  method: 'PATCH',
  delay: 100,
  cache: false,
  render(req, res) {
    const sessionData = SessionManager.getSession(req)
    const { loginState } = sessionData.user

    // If no session_token cookie is present or user is logged in, set the response to return 403
    if (!req.cookies.session_token || loginState === 'logged in') {
      return res
        .status(patchCustomerResponseData.OperationNotAllowed.response.statusCode)
        .send({ error: patchCustomerResponseData.OperationNotAllowed.response.error })
    }

    const { statusCode, error } = sessionData.patchCustomer.response

    if (error) {
      return res.status(statusCode).send({ error })
    }

    if (statusCode === 201) {
      sessionData.snapshotService.setCustomerType('GUEST')
    }

    SessionManager.saveSession(sessionData, req)
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    return res.status(statusCode).send()
  },
}

export default patchCustomer
