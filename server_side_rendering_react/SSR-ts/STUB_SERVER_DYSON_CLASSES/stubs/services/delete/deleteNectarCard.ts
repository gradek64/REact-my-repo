import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import { RequestWithSession } from 'types/stubs/session'

const deleteNectar = {
  path: '/checkout-api-v2/checkouts/:id/nectar/card',
  method: 'DELETE',
  delay: 100,
  cache: false,
  render(req: RequestWithSession, res: Response) {
    const sessionData = SessionManager.getSession(req)
    const nectar = sessionData.nectar

    const { statusCode, error } = nectar.removeNectarResponse

    if (error) {
      return res.status(statusCode).send({ error })
    }

    nectar.isLinked = false
    nectar.card = undefined

    SessionManager.saveSession(sessionData, req)
    return res.sendStatus(200)
  },
}

module.exports = deleteNectar
