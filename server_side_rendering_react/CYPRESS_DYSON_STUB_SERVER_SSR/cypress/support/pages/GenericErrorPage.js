import Page from './Page'

// prettier-ignore
const elements = {
  'error page title': { selector: () => '[data-e2e="error-page-title"]', type: 'web' },
  'error page alert': { selector: () => '[data-e2e="error-page-error-alert"]', type: 'web' },
}

class GenericErrorPage extends Page {
  constructor() {
    super(elements)
  }
}

export default new GenericErrorPage()
