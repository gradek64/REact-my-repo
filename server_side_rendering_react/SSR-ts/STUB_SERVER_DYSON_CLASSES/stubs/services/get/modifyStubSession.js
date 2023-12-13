import SessionManager from '../../data/SessionManager'
import { SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS } from '../../data/UserSessionManager/UserSessionManager'

import config from '../../config'

const modifyStubSession = {
  path: '/payment-stub/session',
  method: 'GET',
  delay: 100,
  cache: false,
  render: (req, res) => {
    const query = req.query

    if (query.type === 'reset') {
      SessionManager.resetSession(req)
      res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
    }

    if (query.type === 'destroy') {
      SessionManager.destroySession(req)
      res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)

      if (config.MULTIPLE_SESSIONS) {
        res.clearCookie(config.COOKIE_NAME)
      }
    }

    const body = req.session ? req.session.data : 'session destroyed'

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(body)
  },
}

export default modifyStubSession
