import { NextFunction, Response } from 'express'
import SessionManager from '../data/SessionManager'
import { RequestWithSession } from 'types/stubs/session'

export const setApiCheckoutResponses = (req: RequestWithSession, res: Response, next: NextFunction) => {
  const sessionData = SessionManager.getSession(req)
  // check if error is set for all checkout API
  if (sessionData.checkoutApi.response.statusCode !== 200) {
    const { statusCode } = sessionData.checkoutApi.response
    res.sendStatus(statusCode)
    res.end()
    return
  }
  next()
}
