const {
  DEFAULT_LOGIN_RESPONSE,
  DEFAULT_REGISTRATION_RESPONSE,
  DEFAULT_FORGOTTEN_PASSWORD_RESPONSE,
  DEFAULT_PASSWORD_LINK_RESPONSE,
  DEFAULT_PASSWORD_CHANGE_RESPONSE
} = require('./constants')
const LoginService = require('./LoginService')
const User = require('./User')
const IovationService = require('./IovationService')

const loginDatasets = require('./LoginDatasets')
const registrationDatasets = require('./RegistrationDatasets')
const forgottenPasswordDatasets = require('./ForgottenPasswordDatasets')
const passwordLinkDatasets = require('./PasswordLinkDatasets')
const passwordChangeDatasets = require('./PasswordChangeDatasets')

class SessionData {
  setDefaults() {
    this.loginService.reset()
    this.user.reset()

    this.setupLoginResponse(DEFAULT_LOGIN_RESPONSE)
    this.setupRegistrationResponse(DEFAULT_REGISTRATION_RESPONSE)
    this.setupForgottenPasswordResponse(DEFAULT_FORGOTTEN_PASSWORD_RESPONSE)
    this.setupPasswordLinkResponse(DEFAULT_PASSWORD_LINK_RESPONSE)
    this.setupPasswordChangeResponse(DEFAULT_PASSWORD_CHANGE_RESPONSE)
  }

  constructor(json) {
    this.user = new User()
    this.loginService = new LoginService()
    this.iovationService = new IovationService()
    if (!json) {
      this.setDefaults()
    } else {
      this.user.fromJson(json.user)
      this.loginService.fromJson(json.loginService)

      this.setupLoginResponse(this.loginService.login.type || DEFAULT_LOGIN_RESPONSE)
      this.setupRegistrationResponse(this.loginService.registration.type || DEFAULT_REGISTRATION_RESPONSE)
      this.setupForgottenPasswordResponse(this.loginService.forgottenPassword.type || DEFAULT_FORGOTTEN_PASSWORD_RESPONSE)
      this.setupPasswordLinkResponse(this.loginService.passwordLink.type || DEFAULT_PASSWORD_LINK_RESPONSE)
      this.setupPasswordChangeResponse(this.loginService.passwordChange.type || DEFAULT_PASSWORD_CHANGE_RESPONSE)
    }
  }

  toJson() {
    return {
      user: this.user.toJson(),
      loginService: this.loginService.toJson(),
      iovationService: this.iovationService.toJson()
    }
  }

  setupLoginResponse(responseType) {
    loginDatasets[responseType].setup(this.loginService)
  }

  setupRegistrationResponse(responseType) {
    registrationDatasets[responseType].setup(this.loginService)
  }

  setupForgottenPasswordResponse(responseType) {
    forgottenPasswordDatasets[responseType].setup(this.loginService)
  }

  setupPasswordLinkResponse(responseType) {
    passwordLinkDatasets[responseType].setup(this.loginService)
  }

  setupPasswordChangeResponse(responseType) {
    passwordChangeDatasets[responseType].setup(this.loginService)
  }

  reset() {
    this.setDefaults()
  }
}

module.exports = SessionData
