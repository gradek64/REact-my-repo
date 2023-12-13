import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import { patchCustomerResponseData, PatchCustomerResponsesTypes } from '../../data/Customer/PatchCustomerResponseData'

import { RequestWithSession } from 'types/stubs/session'

const modifyPatchCustomer = {
  path: '/payment-stub/patch-customer',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (
    req: RequestWithSession & { query: { type: string; value: PatchCustomerResponsesTypes } },
    res: Response,
  ) => {
    const { type, value } = req.query
    const sessionData = SessionManager.getSession(req)
    const patchCustomer = sessionData.patchCustomer

    if (type === 'patchCustomer') {
      if (patchCustomerResponseData[value]) {
        patchCustomer.updatePatchCustomerResponse(patchCustomerResponseData[value])
        console.log(`API: Set check user account service response - ${patchCustomerResponseData[value].description}`)
      } else {
        res.send({ error: 'Response not found' })
        return
      }
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(patchCustomer.toJson())
  },
}

module.exports = modifyPatchCustomer
