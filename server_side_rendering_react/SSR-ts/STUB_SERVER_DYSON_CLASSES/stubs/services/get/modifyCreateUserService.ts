import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import {
  createUserAccountServiceResponseData,
  CreateUserResponsesTypes,
} from '../../data/User/CreateUserAccountService/CreateUserAccountResponseData'
import { RequestWithSession } from 'types/stubs/session'

interface ResponseObj extends Response {
  body: Record<string, unknown>
}
const modifyCreateUserAccountService = {
  path: '/payment-stub/create-user-account-service',
  method: 'GET',
  delay: 0,
  cache: false,
  template: (req: RequestWithSession & { query: { type: string; value: CreateUserResponsesTypes } }) => {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)

    const createUserAccountService = sessionData.createUserAccountService
    if (query.type === 'createUserAccountService') {
      if (createUserAccountServiceResponseData[value]) {
        createUserAccountService.updateCreateUserAccountServiceResponse(createUserAccountServiceResponseData[value])
        console.log(
          `API: Set create user account service response - ${createUserAccountServiceResponseData[value].description}`,
        )
      } else {
        return { error: 'Response not found' }
      }
    }

    SessionManager.saveSession(sessionData, req)
    return createUserAccountService.toJson()
  },
  render: (_, res: ResponseObj) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyCreateUserAccountService
