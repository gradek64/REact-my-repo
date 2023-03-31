const SessionManager = require('../../data/SessionManager')
const { APILogger, renderCookie } = require('../../helpers')

let currentLoginService

const wcsLogoffService = {
  path: '/webapp/wcs/stores/servlet/LogoffService',
  method: 'POST',
  delay: 100,
  cache: false,
  template(req) {
    if (Object.keys(req.cookies).length === 0) {
      APILogger(`Warning: call made without cookies: ${req.path}`)
    }
    const sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    const { user } = sessionData
    user.loginState = 'guest'
    SessionManager.saveSession(sessionData, req)
    return { loginState: user.loginState }
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'User_Logoff_Service_Cookie', res)

    const status = 200
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsLogoffService
