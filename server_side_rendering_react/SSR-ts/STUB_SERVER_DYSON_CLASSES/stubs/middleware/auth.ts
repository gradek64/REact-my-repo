import { NextFunction, Response } from 'express'
import { match } from 'path-to-regexp'
import SessionManager from '../data/SessionManager'

import snapshotServiceDatasets from '../data/SnapshotService/SnapshotServiceDatasets'
import StubResponse from '../helpers/API/Response'
import { RequestWithSession } from '../../src/types/stubs/session'
import { StatusCode } from '../../src/types/api'

// TODO: remove this when User is typed
type PartialUserStub = {
  loginState: string
}

type Cookies = {
  session_token?: string // eslint-disable-line camelcase
}

const skipCheckoutAuth = (path) => {
  const fn = match('/checkouts/:id\\:calculate', { decode: decodeURIComponent })
  return !!fn(path)
}

const skipAccountAuth = (path) => {
  const fn = match('/users(:check)?', { decode: decodeURIComponent })
  return !!fn(path)
}

export const authAndCreateSession = () => {

}

// Checks the user's WCS session and Session Manager session to see if they
// match the user type in the snapshot.
export const checkoutAuth = (req: RequestWithSession, res: Response, next: NextFunction) => {
  if (skipCheckoutAuth(req.path)) {
    next()
    return
  }

  console.log('autrization here where you suppposed check for cookies session Id', req.cookies)
  console.log({ sessionid: req.cookies.sessionId })

  //you should redirect to the already here when the session id cookie is not present just send back the 
  // StatusCode.UNAUTHORIZED


  const sessionData = SessionManager.getSession(req)
  const { snapshotService, user } = sessionData

  const required = snapshotService.customerType
  const loginState = (user as unknown as PartialUserStub).loginState
  const sessionState = (req.cookies as Cookies).session_token

  let returnAuthError = true

  // If the snapshot is in REGISTERED state, the user must be logged in
  if (required === 'REGISTERED' && loginState === 'logged in') {
    returnAuthError = false
  }

  // If the snapshot is in GUEST state, the user must be logged out and have an anonymous session
  if (required === 'GUEST' && loginState !== 'logged in' && sessionState === 'anonymous') {
    returnAuthError = false
  }

  // If the snapshot has no owner, the user must be a valid owner (either logged in or have an anonymous session)
  if (required === 'NONE' && (loginState === 'logged in' || sessionState === 'anonymous')) {
    returnAuthError = false
  }

  if (returnAuthError) {
    const status = required === 'GUEST' ? StatusCode.FORBIDDEN : StatusCode.UNAUTHORIZED
    const body: StubResponse =
      required === 'GUEST'
        ? snapshotServiceDatasets.snapshotInitialisation.OrderSnapshotAccessForbidden.response
        : snapshotServiceDatasets.snapshotInitialisation.Unauthorized.response

    res.status(status).send(body)
    res.end()
    return
  }

  next()
}

// Checks the user's WCS session.
export const accountAuth = (req: RequestWithSession, res: Response, next: NextFunction) => {
  console.log('---- route =>  /account-api')
  if (skipAccountAuth(req.path)) {
    next()
    return
  }

  const sessionData = SessionManager.getSession(req)
  const { user } = sessionData

  const loginState = (user as unknown as PartialUserStub).loginState


  console.log('loginState', loginState)
  if (loginState !== 'logged in') {
    console.log('not logged in')
    res.sendStatus(StatusCode.UNAUTHORIZED) // TODO: return correct error body
    res.end()

    return
  }

  console.log('should progress goes further on server components')
  next()
}
