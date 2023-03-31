import Page from './Page'

// prettier-ignore
const elements = {
  'reset password page': { selector: () => '[data-e2e="reset-your-password-page"]', type: 'web' },
  'new password field': { selector: () => '[id="newPassword"]', type: 'edit' },
  'show hide new password button': { selector: () => '#newPassword + .showHideControl', type: 'button' },
  'new password error message': { selector: () => '#newPasswordErrorMessage', type: 'label' },
  'password minimum characters number criteria': { selector: () => '#isPasswordMinChars', type: 'web' },
  'password minimum letters number criteria': { selector: () => '#isPasswordMinLetters', type: 'web' },
  'password minimum digits number criteria': { selector: () => '#isPasswordMinDigits', type: 'web' },
  'confirm password field': { selector: () => '[id="confirmPassword"]', type: 'edit' },
  'show hide confirm password button': { selector: () => '#confirmPassword + .showHideControl', type: 'button' },
  'confirm password error message': { selector: () => '#confirmPasswordErrorMessage', type: 'label' },
  'save password button': { selector: () => '[data-e2e="save-password-button"]', type: 'button' },
  'reset password confirmation': { selector: () => '[data-e2e="reset-password-confirmation"]', type: 'label' },
  'HAAS mini header': { selector: () => '#haas-v2-mini', type: 'web' },
  'HAAS full header': { selector: () => '#haas-v2', type: 'web' },
  'Habitat full header': { selector: () => '.bolt-habitat #header', type: 'web' },
  'Habitat mini footer': { selector: () => '.bolt-habitat [data-test="component-footer"][type="checkout"]', type: 'web' },
  'Habitat full footer': { selector: () => '.bolt-habitat [data-test="component-footer"][type="default"]', type: 'web' },
  'Tu mini header': { selector: () => '[data-module-name="HeaderLite"]', type: 'web' },
  'Tu full header': { selector: () => '[data-module-name="Header"]', type: 'web' },
  'Tu mini footer': { selector: () => '.bolt-tu [data-test="component-footer"][type="checkout"]', type: 'web' },
  'Tu full footer': { selector: () => '.bolt-tu #footer', type: 'web' },
  'checkout footer': { selector: () => '[data-test="component-footer"][type="checkout"]', type: 'web' },
  'default footer': { selector: () => '[data-test="component-footer"][type="default"]', type: 'web' },
  'primary CTA': { selector: () => '[data-e2e="go-to-trolley"]', type: 'button' },
}

class ResetPasswordPage extends Page {
  constructor() {
    super(elements)
  }
}

export default new ResetPasswordPage()
