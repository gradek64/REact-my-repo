const SessionManager = require('../../data/SessionManager')
const registrationDatasets = require('../../data/RegistrationDatasets')
const { APILogger, renderCookie } = require('../../helpers')

const AUTH_TOKEN = '1525810%2cs0cQK3x%2fYHAmzqzzT9UfGzU2WLo%3d'
const SUCCESS_REDIRECT_URL = '/login-stub/registration/success'

let currentLoginService

const wcsUserRegistrationService = {
  path: '/webapp/wcs/stores/servlet/UserRegistrationService',
  status: (req, res, next) => {
    const sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    const delay = currentLoginService.registration.type === 'UiTimeout' ? 61000 : 0
    setTimeout(() => {
      next()
    }, delay)
  },
  template(req) {
    if (Object.keys(req.cookies).length === 0) {
      APILogger(`Warning: call made without cookies: ${req.path}`)
    }
    const { logonId, origin } = req.body

    const errorBody = errorCode => ({
      errorCode,
      meta: {
        authToken: AUTH_TOKEN
      }
    })

    const successBody = {
      redirectUrl: `${SUCCESS_REDIRECT_URL}?origin=${origin}`
    }

    if (/InternalServerError|RequestTimeout/.test(currentLoginService.registration.type)) {
      return errorBody(['INTERNAL_SERVER_ERROR'])
    }

    // Retrieve Missing Field error based on parameters
    if (!logonId) {
      registrationDatasets.MissingEmail.setup(currentLoginService)
    } else if (!origin) {
      registrationDatasets.InvalidOrigin.setup(currentLoginService)
    }

    // If error(s) exist for this service, return them
    if (currentLoginService.registration.errorCode) {
      return errorBody(currentLoginService.registration.errorCode)
    }

    // Return the redirect URL if successful
    if (currentLoginService.registration.type === 'Default') {
      return successBody
    }

    // Return empty body by default
    return {}
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'User_Registration_Service_Cookie', res)

    if (currentLoginService.registration.type === 'JsError') {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    }

    if (currentLoginService.registration.type === 'ParseError') {
      res.append('Content-Type', 'application/json')
      return res.send('{"key":"malformed JSON"')
    }

    const { status } = currentLoginService.registration
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsUserRegistrationService
