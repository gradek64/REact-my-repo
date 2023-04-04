import Page from './Page'

// prettier-ignore
const elements = {
  'login page': { selector: () => '[data-e2e="login-page-title"]', type: 'web' },
  'monthly care page': { selector: () => '[data-e2e="monthly-care-page-title"]', type: 'web' },
  'error page': { selector: () => '[data-e2e="error-page-title"]', type: 'web' },
  'sign in title': { selector: () => '[data-e2e="login-page-title"]', type: 'label' },
  'sign in again title': { selector: () => '[data-e2e="login-page-title"]', type: 'label' },
  'email address': { selector: () => '[data-e2e="email-address-label"]', type: 'label' },
  'email address field': { selector: () => '#email', type: 'edit' },
  'email error message': { selector: () => '#emailErrorMessage', type: 'label' },
  'password field': { selector: () => '#password', type: 'edit' },
  'password error message': { selector: () => '#passwordErrorMessage', type: 'label' },
  'show password button': { selector: () => '[data-e2e="show-password-button"]', type: 'button' },
  'hide password button': { selector: () => '[data-e2e="hide-password-button"]', type: 'button' },
  'not you link': { selector: () => '[data-e2e="not-you-link"]', type: 'link' },
  'forgot password link': { selector: () => '[data-e2e="forgot-password-link"]', type: 'link' },
  'sign in button': { selector: () => '[data-e2e="login-submit-button"]', type: 'button' },
  'register link': { selector: () => '[data-e2e="register-link"]', type: 'link' },
  'guest checkout link': { selector: () => '[data-e2e="guest-checkout-link"]', type: 'link' },
  'registered user section': { selector: () => '[data-test="registered-user-section"]' },
  'new customers section': { selector: () => '[data-test="new-customers-section"]' },
  'login sections': { selector: () => '[data-test="login-form"] > section' },
  'Tu login info alert': { selector: () => '[data-testid="tu-login-alert"]' },
  'Find out more button': { selector: () => '#trigger-sidedrawer' },
  'Tu sidedrawer': { selector: () => '#sidedrawer-container' },
  'Tu sidedrawer close button': { selector: () => '#sidedrawer-close-button' },
  'Create account link': { selector: () => '#create-account-link' },
  'part of the family logo': { selector: () => '[data-testid="part-of-family-logo"]' }
}

class LoginPage extends Page {
  constructor() {
    super(elements)
  }
}

export default new LoginPage()
