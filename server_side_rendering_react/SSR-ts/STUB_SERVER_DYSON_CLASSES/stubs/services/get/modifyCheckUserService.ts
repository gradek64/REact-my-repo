import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import {
  checkUserAccountServiceResponseData,
  CheckUserResponsesTypes,
} from '../../data/User/CheckUserAccountService/CheckUserAccountResponseData'
import { RequestWithSession } from 'types/stubs/session'

interface ResponseObj extends Response {
  body: Record<string, unknown>
}
const modifyCheckUserAccountService = {
  path: '/payment-stub/check-user-account-service',
  method: 'GET',
  delay: 0,
  cache: false,
  template: (req: RequestWithSession & { query: { type: string; value: CheckUserResponsesTypes } }) => {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const checkUserAccountService = sessionData.checkUserAccountService

    if (query.type === 'checkUserAccountService') {
      if (checkUserAccountServiceResponseData[value]) {
        checkUserAccountService.updateCheckUserAccountServiceResponse(checkUserAccountServiceResponseData[value])
        console.log(
          `API: Set check user account service response - ${checkUserAccountServiceResponseData[value].description}`,
        )
      } else {
        return { error: 'Response not found' }
      }
    }

    SessionManager.saveSession(sessionData, req)
    return checkUserAccountService.toJson()
  },
  render: (_, res: ResponseObj) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyCheckUserAccountService
