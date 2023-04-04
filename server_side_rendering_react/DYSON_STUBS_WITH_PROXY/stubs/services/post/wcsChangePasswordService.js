const SessionManager = require('../../data/SessionManager')
const passwordChangeDatasets = require('../../data/PasswordChangeDatasets')
const { APILogger, renderCookie } = require('../../helpers')

const AUTH_TOKEN = '1525810%2cs0cQK3x%2fYHAmzqzzT9UfGzU2WLo%3d'

let currentLoginService

const wcsChangePasswordService = {
  path: '/webapp/wcs/stores/servlet/ChangePasswordService',
  status: (req, res, next) => {
    const sessionData = SessionManager.getSession(req)
    currentLoginService = sessionData.loginService
    const delay = currentLoginService.passwordChange.type === 'UiTimeout' ? 61000 : 0
    setTimeout(() => {
      next()
    }, delay)
  },
  template(req) {
    if (Object.keys(req.cookies).length === 0) {
      APILogger(`Warning: call made without cookies: ${req.path}`)
    }

    const errorBody = errorCodes => ({
      errorCodes,
      meta: {
        authToken: AUTH_TOKEN
      }
    })

    const successBody = {
      data: {
        passwordUpdated: true
      },
      meta: {
        authToken: AUTH_TOKEN
      }
    }

    if (/InternalServerError|RequestTimeout/.test(currentLoginService.passwordChange.type)) {
      return errorBody(['INTERNAL_SERVER_ERROR'])
    }

    // Retrieve Missing Fields error based on parameters
    const { hashToken, authToken, logonId, logonPassword, logonPasswordVerify } = req.body
    if (!hashToken || !authToken) {
      passwordChangeDatasets.InvalidLink.setup(currentLoginService)
    }

    if (!logonId) {
      passwordChangeDatasets.MissingEmail.setup(currentLoginService)
    }

    if (!logonPassword && !logonPasswordVerify) {
      passwordChangeDatasets.MissingFieldValues.setup(currentLoginService)
    } else if (!logonPassword) {
      passwordChangeDatasets.MissingPassword.setup(currentLoginService)
    } else if (!logonPasswordVerify) {
      passwordChangeDatasets.MissingVerifyPassword.setup(currentLoginService)
    } else if (logonPassword !== logonPasswordVerify) {
      passwordChangeDatasets.PasswordMismatch.setup(currentLoginService)
    }

    // If error(s) exist for this service, return them
    if (currentLoginService.passwordChange.errorCodes) {
      return errorBody(currentLoginService.passwordChange.errorCodes)
    }

    // Successful call
    if (currentLoginService.passwordChange.type === 'Default') {
      return successBody
    }

    // Return empty body by default
    return {}
  },
  render(req, res) {
    renderCookie(currentLoginService.responseCookie, 'Change_Password_Service_Cookie', res)

    if (currentLoginService.passwordChange.type === 'JsError') {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    }

    if (currentLoginService.passwordChange.type === 'ParseError') {
      res.append('Content-Type', 'application/json')
      return res.send('{"key":"malformed JSON"')
    }

    // Set Auth Cookie
    if (currentLoginService.passwordChange.type === 'Default') {
      res.cookie('stubbed_auth_cookie', 'Password_Change_Success')
    }

    const { status } = currentLoginService.passwordChange
    APILogger(`${req.path} ${status} ${JSON.stringify(res.body)}`)
    return res.status(status).send(res.body)
  }
}

module.exports = wcsChangePasswordService
