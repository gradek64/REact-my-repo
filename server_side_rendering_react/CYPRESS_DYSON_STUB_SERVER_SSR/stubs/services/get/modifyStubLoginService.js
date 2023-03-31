/* eslint-disable prefer-destructuring */
const SessionManager = require('../../data/SessionManager')
const loginDatasets = require('../../data/LoginDatasets')
const registrationDatasets = require('../../data/RegistrationDatasets')
const forgottenPasswordDatasets = require('../../data/ForgottenPasswordDatasets')
const passwordLinkDatasets = require('../../data/PasswordLinkDatasets')
const passwordChangeDatasets = require('../../data/PasswordChangeDatasets')
const APILogger = require('../../helpers/APILogger')

const modifyStubLoginService = {
  path: '/login-stub/loginService',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const { query } = req
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const loginService = sessionData.loginService
    if (query.type === 'setCookie') {
      loginService.setCookie(value)
      APILogger(`API: Set response cookie - ${value}`)
    }
    if (query.type === 'loginData') {
      if (loginDatasets[value]) {
        loginDatasets[value].setup(loginService)
        APILogger(`API: Set login response - ${loginDatasets[value].description}`)
      } else {
        return { error: 'Login response not found' }
      }
    }
    if (query.type === 'registrationData') {
      if (registrationDatasets[value]) {
        registrationDatasets[value].setup(loginService)
        APILogger(`API: Set registration response - ${registrationDatasets[value].description}`)
      } else {
        return { error: 'Registration response not found' }
      }
    }
    if (query.type === 'forgottenPasswordData') {
      if (forgottenPasswordDatasets[value]) {
        forgottenPasswordDatasets[value].setup(loginService)
        APILogger(`API: Set forgotten password response - ${forgottenPasswordDatasets[value].description}`)
      } else {
        return { error: 'Forgotten password response not found' }
      }
    }
    if (query.type === 'passwordLinkData') {
      if (passwordLinkDatasets[value]) {
        passwordLinkDatasets[value].setup(loginService)
        APILogger(`API: Set verify password link response - ${passwordLinkDatasets[value].description}`)
      } else {
        return { error: 'Verify Password Link response not found' }
      }
    }
    if (query.type === 'passwordChangeData') {
      if (passwordChangeDatasets[value]) {
        passwordChangeDatasets[value].setup(loginService)
        APILogger(`API: Set password change response - ${passwordChangeDatasets[value].description}`)
      } else {
        return { error: 'Password Change response not found' }
      }
    }
    SessionManager.saveSession(sessionData, req)
    return loginService.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = modifyStubLoginService
