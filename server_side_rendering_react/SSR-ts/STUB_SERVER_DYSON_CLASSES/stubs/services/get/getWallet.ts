import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import { GetWalletAPIPayload, GetWalletErrorAPIPayload } from 'types/api'
import { RequestWithSession } from 'types/stubs/session'

const getWallet = {
  path: '/account-api/users/:id/wallet',
  method: 'GET',
  delay: 100,
  cache: false,
  render: (req: RequestWithSession, res: Response<GetWalletAPIPayload | GetWalletErrorAPIPayload>) => {
    const sessionData = SessionManager.getSession(req)
    console.log('/account-api/users/:id/wallet')
    console.log('all cookies send to the request::====', req.cookies)

    const wallet = sessionData.wallet
    const { status, error } = wallet.response

    console.log('!!!!!! wallet', wallet)

    const body = !error
      ? wallet.getDetails()
      : {
        error: {
          status: 'VALIDATION_ERROR',
          message: 'Request has invalid data',
          details: [
            {
              type: 'uk.co.argos.account.domain.types.headers.auth',
              advice: error,
            },
          ],
        },
      }

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
    return res.status(status).send(body)
  },
}

module.exports = getWallet
