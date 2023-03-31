const SessionManager = require('../../data/SessionManager')
const config = require('../../config')

const modifyStubSession = {
  path: '/login-stub/session',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const { query } = req
    const sessionData = SessionManager.getSession(req)

    if (query.type === 'reset') {
      SessionManager.resetSession(req)
    }
    if (query.type === 'destroy') {
      SessionManager.destroySession(req)
    }
    if (config.MULTIPLE_SESSIONS) {
      return req.session ? req.session.data : 'session destroyed'
    }
    return sessionData.toJson()
  },
  render: (req, res) => {
    if (req.query.type === 'destroy' && config.MULTIPLE_SESSIONS) {
      res.clearCookie(config.COOKIE_NAME)
    }
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = modifyStubSession
