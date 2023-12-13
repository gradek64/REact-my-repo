import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import { extendOrderResponseData, ExtendOrderResponsesTypes } from '../../data/ManageOrder/ExtendOrderResponseData'

import { RequestWithSession } from 'types/stubs/session'

const modifyExtendOrder = {
  path: '/payment-stub/extend-order',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req: RequestWithSession & { query: { type: string; value: ExtendOrderResponsesTypes } }, res: Response) => {
    const { type, value } = req.query
    const sessionData = SessionManager.getSession(req)
    const extendOrder = sessionData.extendOrder

    if (type === 'extendOrderResponseData') {
      if (extendOrderResponseData[value]) {
        extendOrder.updateExtendOrderResponse(extendOrderResponseData[value])
        console.log(`API: Set amend order response - ${extendOrderResponseData[value].description}`)
      } else {
        res.send({ error: 'Response not found' })
        return
      }
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(extendOrder.toJson())
  },
}

module.exports = modifyExtendOrder
