const SessionManager = require('../../data/SessionManager')
const APILogger = require('../../helpers/APILogger')

const modifyStubIovationService = {
  path: '/login-stub/iovationService',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { query } = req
    const { value } = query
    const sessionData = SessionManager.getSession(req)

    if (query.type === 'setIovationResult') {
      APILogger(`API: Set the Iovation response result to ${value}`)
      sessionData.iovationService.result = value
    }
    SessionManager.saveSession(sessionData, req)
    return sessionData.iovationService.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = modifyStubIovationService
