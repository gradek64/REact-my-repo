const SessionManager = require('../../data/SessionManager')
const loginDatasets = require('../../data/LoginDatasets')
const { APILogger, renderCookie } = require('../../helpers')

const AUTH_TOKEN = '1525810%2cs0cQK3x%2fYHAmzqzzT9UfGzU2WLo%3d'
const SUCCESS_REDIRECT_URL = '/login-stub/login/success'

let sessionData
let currentLoginService

const wcsloginService = {
  path: '/webapp/wcs/stores/servlet/LoginService',
  status: (req, res, next) => {
    sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    // TODO: Confirm correct WCS time out duration for `LoginService` endpoint with Arun
    const delay = currentLoginService.login.type === 'UiTimeout' ? 61000 : 0
    setTimeout(() => {
      next()
    }, delay)
  },
  template(req) {
    if (Object.keys(req.cookies).length === 0) {
      APILogger(`Warning: call made without cookies: ${req.path}`)
    }
    const { logonId, logonPassword, origin } = req.body

    const errorBody = errorCodes => ({
      errorCodes,
      meta: {
        authToken: AUTH_TOKEN
      }
    })

    const successBody = {
      redirectUrl: `${SUCCESS_REDIRECT_URL}?origin=${origin}`
    }

    if (/InternalServerError|RequestTimeout/.test(currentLoginService.login.type)) {
      return errorBody(['INTERNAL_SERVER_ERROR'])
    }

    // Retrieve Missing Fields error based on parameters
    if (!logonId && !logonPassword) {
      loginDatasets.MissingCredentials.setup(currentLoginService)
    } else if (!logonId) {
      loginDatasets.MissingEmail.setup(currentLoginService)
    } else if (!logonPassword) {
      loginDatasets.MissingPassword.setup(currentLoginService)
    } else if (!origin) {
      loginDatasets.MissingOrigin.setup(currentLoginService)
    }

    // If error(s) exist for this service, return them
    if (currentLoginService.login.errorCodes.length > 0) {
      return errorBody(currentLoginService.login.errorCodes)
    }

    // Return the redirect URL if successful
    if (currentLoginService.login.type === 'Default') {
      sessionData.user.loginState = 'logged in'
      return successBody
    }

    // Return authentication error
    if (currentLoginService.login.type === 'AuthenticationError') {
      currentLoginService.login.authenticationRetry += 1
      // Persist the retries
      SessionManager.saveSession(sessionData, req)
      let errorCode
      const retries = currentLoginService.login.authenticationRetry
      if (retries >= 6) {
        // Account locked
        errorCode = 'LOGIN_ERROR_MESSAGE_4'
      } else if (retries === 5) {
        // Last attempt
        errorCode = 'LOGIN_ERROR_MESSAGE_3'
      } else if (retries === 4) {
        // Few attempts left
        errorCode = 'LOGIN_ERROR_MESSAGE_2'
      } else {
        errorCode = 'LOGIN_ERROR_MESSAGE_1'
      }
      return errorBody([errorCode])
    }

    // Return empty body by default
    return {}
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'Login_Service_Cookie', res)

    if (currentLoginService.login.type === 'JsError') {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    }

    if (currentLoginService.login.type === 'ParseError') {
      res.append('Content-Type', 'application/json')
      return res.send('{"key":"malformed JSON"')
    }

    // Set Auth Cookies
    if (currentLoginService.login.type === 'Default') {
      res.cookie('stubbed_auth_cookie', 'Login_Success')
    }

    const { status } = currentLoginService.login
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsloginService
