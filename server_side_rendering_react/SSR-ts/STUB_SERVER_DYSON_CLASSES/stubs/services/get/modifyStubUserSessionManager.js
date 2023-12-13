import SessionManager from '../../data/SessionManager'
import { SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS } from '../../data/UserSessionManager/UserSessionManager'
import { userSessionManagerResponseData } from '../../data/UserSessionManager/UserSessionManagerResponseData'

const modifyUserSessionManager = {
  path: '/payment-stub/user-session-manager',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req, res) => {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const userSessionManager = sessionData.userSessionManager

    console.log({ SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS, userSessionManagerResponseData })

    if (query.type === 'userSessionType') {
      if (value === 'user') {
        res.cookie(SESSION_COOKIE_NAME, 'user', SESSION_COOKIE_OPTIONS)
      } else if (value === 'guest') {
        res.cookie(SESSION_COOKIE_NAME, 'guest', SESSION_COOKIE_OPTIONS)
      } else if (value === 'anonymous') {
        res.cookie(SESSION_COOKIE_NAME, 'anonymous', SESSION_COOKIE_OPTIONS)
      } else {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
      }
    }

    if (query.type === 'userSessionManager') {
      if (userSessionManagerResponseData[value]) {
        userSessionManager.updateUserSessionManagerResponse(userSessionManagerResponseData[value])
      } else {
        res.send({ error: 'Response not found' })
        return
      }
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(userSessionManager.toJson())
  },
}

module.exports = modifyUserSessionManager
