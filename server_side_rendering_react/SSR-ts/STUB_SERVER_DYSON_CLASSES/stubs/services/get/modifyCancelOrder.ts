import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import { cancelOrderResponseData, CancelOrderResponsesTypes } from '../../data/ManageOrder/CancelOrderResponseData'

import { RequestWithSession } from 'types/stubs/session'

const modifyCancelOrder = {
  path: '/payment-stub/cancel-order',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req: RequestWithSession & { query: { type: string; value: CancelOrderResponsesTypes } }, res: Response) => {
    const { type, value } = req.query
    const sessionData = SessionManager.getSession(req)
    const cancelOrder = sessionData.cancelOrder

    if (type === 'cancelOrderResponseData') {
      if (cancelOrderResponseData[value]) {
        cancelOrder.updateCancelOrderResponse(cancelOrderResponseData[value])
        console.log(`API: Set cancel order response - ${cancelOrderResponseData[value].description}`)
      } else {
        res.send({ error: 'Response not found' })
        return
      }
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(cancelOrder.toJson())
  },
}

module.exports = modifyCancelOrder
