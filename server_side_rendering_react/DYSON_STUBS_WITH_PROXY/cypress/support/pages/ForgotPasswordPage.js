import Page from './Page'

// prettier-ignore
const elements = {
  'forgot password page': { selector: () => '[data-e2e="forgotten-password-page"]', type: 'web' },
  'expired link page': { selector: () => '[data-e2e="expired-link-page"]', type: 'web' },
  'forgotten email address field': { selector: () => '#email', type: 'edit' },
  'forgotten email error message': { selector: () => '#emailErrorMessage', type: 'label' },
  'send link button': { selector: () => '[data-e2e="send-link-button"]', type: 'button' },
  'resend link button': { selector: () => '[data-e2e="send-link-button"]', type: 'button' },
  'email sent confirmation': { selector: () => '[data-e2e="email-sent"]', type: 'label' },
  'confirmation email address': { selector: () => '[data-e2e="confirmation-email-address"]', type: 'label' },
  'retry enter email link': { selector: () => '[data-e2e="retry-enter-email-link"]', type: 'link' },
}

class ForgotPasswordPage extends Page {
  constructor() {
    super(elements)
  }
}

export default new ForgotPasswordPage()
