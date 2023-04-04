import Page from './Page'

// prettier-ignore
const elements = {
  'register page': { selector: () => '[data-e2e="register-page-title"]', type: 'web' },
  'register email address field': { selector: () => '#email', type: 'edit' },
  'register email error message': { selector: () => '#emailErrorMessage', type: 'label' },
  'register button': { selector: () => '[data-e2e="register-button"]', type: 'button' },
  'sign in link': { selector: () => '[data-e2e="sign-in-link"]', type: 'link' },
}

class RegisterPage extends Page {
  constructor() {
    super(elements)
  }
}

export default new RegisterPage()
