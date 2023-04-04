const {
  DEFAULT_RESPONSE_COOKIE,
  DEFAULT_LOGIN_RESPONSE,
  DEFAULT_REGISTRATION_RESPONSE,
  DEFAULT_FORGOTTEN_PASSWORD_RESPONSE,
  DEFAULT_PASSWORD_LINK_RESPONSE,
  DEFAULT_PASSWORD_CHANGE_RESPONSE
} = require('./constants')

class LoginService {
  setDefaults() {
    this.setCookie(DEFAULT_RESPONSE_COOKIE)
    this.setLogin(DEFAULT_LOGIN_RESPONSE, 200, [], 0)
    this.setRegistration(DEFAULT_REGISTRATION_RESPONSE, 200)
    this.setForgottenPassword(DEFAULT_FORGOTTEN_PASSWORD_RESPONSE, 200)
    this.setPasswordLink(DEFAULT_PASSWORD_LINK_RESPONSE, 200)
    this.setPasswordChange(DEFAULT_PASSWORD_CHANGE_RESPONSE, 200, [])
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      responseCookie: this.responseCookie,
      login: {
        type: this.login.type,
        authenticationRetry: this.login.authenticationRetry
      },
      registration: {
        type: this.registration.type
      },
      forgottenPassword: {
        type: this.forgottenPassword.type
      },
      passwordLink: {
        type: this.passwordLink.type
      },
      passwordChange: {
        type: this.passwordChange.type
      }
    }
  }

  fromJson(json) {
    this.setCookie((typeof json.responseCookie !== 'undefined' && String(json.responseCookie)) || DEFAULT_RESPONSE_COOKIE)
    this.login.type = (json.login && json.login.type) || DEFAULT_LOGIN_RESPONSE
    this.login.authenticationRetry = (json.login && json.login.authenticationRetry) || 0
    this.registration.type = (json.registration && json.registration.type) || DEFAULT_REGISTRATION_RESPONSE
    this.forgottenPassword.type = (json.forgottenPassword && json.forgottenPassword.type) || DEFAULT_FORGOTTEN_PASSWORD_RESPONSE
    this.passwordLink.type = (json.passwordLink && json.passwordLink.type) || DEFAULT_PASSWORD_LINK_RESPONSE
    this.passwordChange.type = (json.passwordChange && json.passwordChange.type) || DEFAULT_PASSWORD_CHANGE_RESPONSE
  }

  reset() {
    this.setDefaults()
  }

  setCookie(stringValue) {
    this.responseCookie = stringValue === 'true'
  }

  setLogin(type, status, errorCodes = [], authenticationRetry = null) {
    if (!this.login) {
      this.login = {}
    }
    this.login.type = type
    this.login.status = status
    this.login.errorCodes = errorCodes
    if (authenticationRetry !== null) {
      this.login.authenticationRetry = authenticationRetry
    }
  }

  setRegistration(type, status, errorCode = null) {
    if (!this.registration) {
      this.registration = {}
    }
    this.registration.type = type
    this.registration.status = status
    this.registration.errorCode = errorCode
  }

  setForgottenPassword(type, status, errorCode = null) {
    if (!this.forgottenPassword) {
      this.forgottenPassword = {}
    }
    this.forgottenPassword.type = type
    this.forgottenPassword.status = status
    this.forgottenPassword.errorCode = errorCode
  }

  setPasswordLink(type, status, errorCode = null) {
    if (!this.passwordLink) {
      this.passwordLink = {}
    }
    this.passwordLink.type = type
    this.passwordLink.status = status
    this.passwordLink.errorCode = errorCode
  }

  setPasswordChange(type, status, errorCodes = []) {
    if (!this.passwordChange) {
      this.passwordChange = {}
    }
    this.passwordChange.type = type
    this.passwordChange.status = status
    this.passwordChange.errorCodes = errorCodes
  }
}

module.exports = LoginService
