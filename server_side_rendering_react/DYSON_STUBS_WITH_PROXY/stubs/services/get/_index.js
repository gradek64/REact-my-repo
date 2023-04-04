/* eslint-disable import/no-extraneous-dependencies */
const handlebars = require('handlebars')
const fs = require('fs')
const SessionManager = require('../../data/SessionManager')
const loginDatasets = require('../../data/LoginDatasets')
const registrationDatasets = require('../../data/RegistrationDatasets')
const forgottenPasswordDatasets = require('../../data/ForgottenPasswordDatasets')
const passwordLinkDatasets = require('../../data/PasswordLinkDatasets')
const passwordChangeDatasets = require('../../data/PasswordChangeDatasets')
const brandOptionsDatasets = require('../../data/BrandOptionsDatasets')

module.exports = {
  path: '/',
  render(req, res) {
    const sessionData = SessionManager.getSession(req)
    const { loginService, user, iovationService } = sessionData

    const data = {
      loginOptions: user.loginOptions,
      selectedLoginValue: user.loginState,
      loginDatasets,
      selectedLoginType: loginService.login.type,
      registrationDatasets,
      selectedRegistrationType: loginService.registration.type,
      forgottenPasswordDatasets,
      selectedForgottenPasswordType: loginService.forgottenPassword.type,
      passwordLinkDatasets,
      selectedPasswordLinkType: loginService.passwordLink.type,
      passwordChangeDatasets,
      selectedPasswordChangeType: loginService.passwordChange.type,
      sessionDataJson: JSON.stringify(sessionData.toJson(), null, '\t'),
      selectedSetCookie: loginService.responseCookie,
      iovationResultOptions: iovationService.resultOptions,
      selectedIovationResultValue: iovationService.result,
      brandOptionsDatasets,
      brandCookie: req.cookies.brand
    }

    fs.readFile('./stubs/services/get/controlPanel.hbs', 'utf-8', (error, source) => {
      const template = handlebars.compile(source)
      handlebars.registerHelper('option', (value, label, info = '', disabled = false, selectedValue) => {
        const selectedAttr = value === selectedValue ? ' selected="selected"' : ''
        const disabledAttr = disabled ? ' disabled' : ''
        return new handlebars.SafeString(`<option value="${value}" title="${disabled ? 'UNHANDLED SCENARIO: ' : ''}${info}"${selectedAttr}${disabledAttr}>${label}</option>`)
      })
      handlebars.registerHelper('checkedIf', valueIsTrue => (valueIsTrue ? ' checked' : ''))
      const html = template(data)
      res.status(200).send(html)
    })
  }
}
