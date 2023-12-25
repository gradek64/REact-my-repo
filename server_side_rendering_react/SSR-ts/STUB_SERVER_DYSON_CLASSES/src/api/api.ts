import { canUseDom } from '@sainsburys-tech/boltui-utils'
import Logger from '../utils/Logger'

import endpoints from './endpoints'
import { request } from '../helpers/requestHelpers'
import {

  CreateAnonymousSessionAPIRequest,
  CreateAnonymousSessionAPIResponse,
} from 'types/api'
import {
  GuestAccountExistsAPIResponse,
  GuestCreateAccountAPIResponse,
  CreateUserAccountReqBody,
} from 'types/api/account/user'

const isProduction = process.env.NODE_ENV === 'production'

interface Api {
  // Wallet
  getWallet: (userId: string, cookie: string) => unknown
  // Session
  createAnonymousSession: (options: CreateAnonymousSessionAPIRequest) => CreateAnonymousSessionAPIResponse
}

const apiFactory = (): Api => {
  return {
    /*

    // Wallet how the final path look like:

    1.
    prod
    "ACCOUNT_API": "https://argos-account-account-service.int.prd.jspaas.uk",
    stage 
    "ACCOUNT_API": "https://argos-account-account-service.int.stg.jspaas.uk",
    stubs 
    "ACCOUNT_API": "http://localhost:3011",

    2.
    config.accountApiServer = process.env.ACCOUNT_API
    config.accountApiBaseUrl = `/account-api`,

    const accountApiServer = accountApiEndpoint() => config.accountApiServer}${config.accountApiBaseUrl}${endpoint}`
    QUERKY BIT = ${endpoint} is alway empty cause we do not pass anything to the method accountApiEndpoint()


    account path = `${canUseDom() ? '' : accountApiEndpoint() 
    Client : empty canUseDom() && ''
    SERVER: http://localhost:3011/account-api/


    -----URL all together-----

    // const endpoint = endpoints.getWallet(11) => `${account}/users/11/wallet`

    Client : /users/11/wallet
    SERVER: http://localhost:3011/account-api/users/11/wallet
*/

    getWallet: (userId, cookie) => request.get(endpoints.getWallet(userId)).set({ Cookie: cookie }),
    // Session
    createAnonymousSession: (options) =>
      request.post(endpoints.createAnonymousSession(), options) as unknown as CreateAnonymousSessionAPIResponse,
  }
}




/**
 * Helper method to read superagent responses
 */
/* export function checkResponse<T>(response: APIResponse<T>, shouldRedirectToLogin = true) {
  return new Promise((resolve, reject) => {
    if (!response || !response.status) {
      Logger.fatal("We didn't get a response")
      reject()
      return
    }

    if (response.status === StatusCode.NOT_FOUND) {
      reject(response)

      Logger.error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text,
      })
      return
    }
    if (response.status === StatusCode.UNAUTHORIZED && shouldRedirectToLogin) {
      if (canUseDom()) {
        const successUrl = `${window.location.pathname}${window.location.search}`
        window.location.href = `/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(successUrl)}`
      }

      reject(response)

      Logger.error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text,
      })
      return
    }

    if (response.status === StatusCode.BAD_REQUEST) {
      reject(response)

      Logger.error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text,
      })
      return
    }

    if (response && response.ok) {
      resolve(response.body)

      Logger.debug({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        // hide success body in prod as it contains customer data
        text: isProduction ? undefined : response.text,
      })
      return
    }

    if (response && !response.ok) {
      reject(response)

      Logger.error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text,
      })
    }
  })
} */

export default apiFactory()
