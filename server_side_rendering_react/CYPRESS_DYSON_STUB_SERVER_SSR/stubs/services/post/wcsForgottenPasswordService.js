const SessionManager = require('../../data/SessionManager')
const forgottenPasswordDatasets = require('../../data/ForgottenPasswordDatasets')
const { APILogger, renderCookie } = require('../../helpers')

const AUTH_TOKEN = '1525810%2cs0cQK3x%2fYHAmzqzzT9UfGzU2WLo%3d'

let currentLoginService

const wcsForgottenPasswordService = {
  path: '/webapp/wcs/stores/servlet/ForgottenPasswordService',
  status: (req, res, next) => {
    const sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    const delay = currentLoginService.forgottenPassword.type === 'UiTimeout' ? 61000 : 0
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

    const successBody = logonId => ({
      data: {
        mailRecipient: logonId
      },
      meta: {
        authToken: AUTH_TOKEN
      }
    })

    if (/InternalServerError|RequestTimeout/.test(currentLoginService.forgottenPassword.type)) {
      return errorBody('INTERNAL_SERVER_ERROR')
    }

    // Retrieve Missing Fields error based on parameters
    const { logonId } = req.body
    if (!logonId) {
      forgottenPasswordDatasets.InvalidEmail.setup(currentLoginService)
    }

    // If error(s) exist for this service, return them
    if (currentLoginService.forgottenPassword.errorCode) {
      return errorBody(currentLoginService.forgottenPassword.errorCode)
    }

    // Successful call
    if (/Default|EmailNotRegistered/.test(currentLoginService.forgottenPassword.type)) {
      return successBody(logonId)
    }

    // Return empty body by default
    return {}
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'Forgotten_Password_Service_Cookie', res)

    if (currentLoginService.forgottenPassword.type === 'JsError') {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    }

    if (currentLoginService.forgottenPassword.type === 'ParseError') {
      res.append('Content-Type', 'application/json')
      return res.send('{"key":"malformed JSON"')
    }

    const { status } = currentLoginService.forgottenPassword
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsForgottenPasswordService
