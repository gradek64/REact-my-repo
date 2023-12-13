import { Response } from 'express'
import SessionManager from '../../data/SessionManager'

import {
  CheckoutEndPointsResponseData,
  CheckoutApiErrorResponseTypes,
} from '../../data/CheckoutApi/CheckoutEndPointsResponseData'
import { RequestWithSession } from 'types/stubs/session'

interface ResponseObj extends Response {
  body: Record<string, unknown>
}
const modifyCheckoutApi = {
  path: '/payment-stub/checkout-set-api',
  method: 'GET',
  delay: 0,
  cache: false,
  template: (req: RequestWithSession & { query: { type: string; value: CheckoutApiErrorResponseTypes | string } }) => {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const checkoutApi = sessionData.checkoutApi

    if (query.type === 'checkoutApi') {
      if (CheckoutEndPointsResponseData[value as CheckoutApiErrorResponseTypes]) {
        checkoutApi.updateAllCheckoutApiErrorResponse(CheckoutEndPointsResponseData[value])
        console.log(
          `API: Set /checkout-api-v2/* response - ${
            CheckoutEndPointsResponseData[value as CheckoutApiErrorResponseTypes].description
          }`,
        )
      } else {
        return { error: 'Response not found' }
      }
    }

    if (query.type === 'setCheckoutApiTimeZoneIdentifier') {
      checkoutApi.timeZoneIdentifier = value === 'true'
    }

    SessionManager.saveSession(sessionData, req)
    return checkoutApi.toJson()
  },
  render: (_, res: ResponseObj) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyCheckoutApi
