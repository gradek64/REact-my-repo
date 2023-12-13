import SessionData from './SessionData'
import config from '../config'
import { RequestWithSession } from 'types/stubs/session'

const sessionDataSingleton = new SessionData()

export default class SessionManager {
  static getSession(req: RequestWithSession) {
    if (config.MULTIPLE_SESSIONS) {
      if (!req.session.data) {
        return new SessionData()
      }

      return new SessionData(req.session.data)
    }

    return sessionDataSingleton
  }

  static saveSession(sessionData: SessionData, req: RequestWithSession) {
    if (config.MULTIPLE_SESSIONS) {
      req.session.data = sessionData.toJson()
    }
  }

  static resetSession(req: RequestWithSession) {
    const sessionData = SessionManager.getSession(req)
    sessionData.reset()
    SessionManager.saveSession(sessionData, req)
  }

  static destroySession(req: RequestWithSession) {
    if (config.MULTIPLE_SESSIONS) {
      req.session.destroy(() => {
        /* noop */
      })
    } else {
      SessionManager.resetSession(req)
    }
  }
}

module.exports = SessionManager
