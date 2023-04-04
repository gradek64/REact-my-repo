const SessionData = require('./SessionData')
const config = require('../config')

const sessionDataSingleton = new SessionData()

class SessionManager {
  static getSession(req) {
    if (config.MULTIPLE_SESSIONS) {
      if (!req.session.data) {
        const sessionData = new SessionData()
        return sessionData
      }
      return new SessionData(req.session.data)
    }
    return sessionDataSingleton
  }

  static saveSession(sessionData, req) {
    if (config.MULTIPLE_SESSIONS) {
      req.session.data = sessionData.toJson()
    }
  }

  static resetSession(req) {
    const sessionData = SessionManager.getSession(req)
    sessionData.reset()
    SessionManager.saveSession(sessionData, req)
  }

  static destroySession(req) {
    if (config.MULTIPLE_SESSIONS) {
      req.session.destroy()
    } else {
      SessionManager.resetSession(req)
    }
  }
}

module.exports = SessionManager
