const SessionManager = require('../../data/SessionManager')
const passwordLinkDatasets = require('../../data/PasswordLinkDatasets')
const { APILogger, renderCookie } = require('../../helpers')

const HASH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.uKe3CzH_g6oHxlFstQ1BL_Q8_zJKPyJ0dUvZkJsRKBg'
const AUTH_TOKEN = '1525810%2cs0cQK3x%2fYHAmzqzzT9UfGzU2WLo%3d'

let currentLoginService

const wcsVerifyPasswordLinkService = {
  path: '/webapp/wcs/stores/servlet/VerifyPasswordLinkService',
  status: (req, res, next) => {
    const sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    const delay = currentLoginService.passwordLink.type === 'UiTimeout' ? 61000 : 0
    setTimeout(() => {
      next()
    }, delay)
  },
  template(req) {
    if (Object.keys(req.cookies).length > 0) {
      APILogger(`Warning: call made with cookies: ${req.path}`)
    }

    const errorBody = errorCode => ({
      errorCode,
      meta: {
        authToken: AUTH_TOKEN
      }
    })

    const successBody = {
      data: {
        hashToken: HASH_TOKEN
      },
      meta: {
        authToken: AUTH_TOKEN,
        emailId: 'tester@argos.co.uk'
      }
    }

    if (/UnverifiedLink|InternalServerError|RequestTimeout/.test(currentLoginService.passwordLink.type)) {
      return errorBody('INTERNAL_SERVER_ERROR')
    }

    // Retrieve Missing Fields error based on parameters
    const { krypto, traceablereference } = req.body

    if (krypto && traceablereference) {
      if (currentLoginService.passwordLink.type === 'Default') {
        return successBody
      }
    }

    // If error(s) exist for this service, return them
    if (currentLoginService.passwordLink.errorCode) {
      return errorBody(currentLoginService.passwordLink.errorCode)
    }

    // Return empty body by default
    return {}
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'Verify_Password_Link_Service_Cookie', res)

    if (currentLoginService.passwordLink.type === 'JsError') {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    }

    if (currentLoginService.passwordLink.type === 'ParseError') {
      res.append('Content-Type', 'application/json')
      return res.send('{"key":"malformed JSON"')
    }

    const { status } = currentLoginService.passwordLink
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsVerifyPasswordLinkService
