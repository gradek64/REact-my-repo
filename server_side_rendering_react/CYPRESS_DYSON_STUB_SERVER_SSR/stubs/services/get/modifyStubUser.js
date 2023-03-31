const SessionManager = require('../../data/SessionManager')
const APILogger = require('../../helpers/APILogger')

const modifyStubUser = {
  path: '/login-stub/user',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { query } = req
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const { user } = sessionData
    if (query.type === 'setLoginState') {
      APILogger(`API: Set the user to ${value}`)
      user.loginState = value
    }
    SessionManager.saveSession(sessionData, req)
    return user.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = modifyStubUser
