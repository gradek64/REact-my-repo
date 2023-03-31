const { baseUrl } = Cypress.config()

const pages = {
  'login page': {
    title: 'Login',
    url: `${baseUrl}/login?pageName=payNow`,
    selector: '[data-e2e="login-page-title"]',
  },
  'login page from monthly care journey': {
    title: 'Login',
    url: `${baseUrl}/login?pageName=monthlyCare&successUrl=%2Fmonthly-care%3FpurchaseOrderId%3D123`,
    selector: '[data-e2e="login-page-title"]',
  },
  'login page with an invalid success URL': {
    title: 'Login',
    url: `${baseUrl}/login?pageName=monthlyCare&successUrl=https:%2F%2Fwww.amazon.co.uk`,
    selector: '[data-e2e="login-page-title"]',
  },
  'login page with an allow guest parameter': {
    title: 'Login',
    url: `${baseUrl}/login?pageName=payNow&successUrl=%2Fcheckout&allowGuest=true`,
    selector: '[data-e2e="login-page-title"]',
  },
  'register page': {
    title: 'Register',
    url: `${baseUrl}/register?pageName=payNow`,
    selector: '[data-e2e="register-page-title"]',
  },
  'forgot password page': {
    title: 'Forgotten Password',
    url: `${baseUrl}/forgotten-password`,
    selector: '[data-e2e="forgotten-password-page"]',
  },
  'expired link page': {
    title: 'Forgotten Password',
    url: `${baseUrl}/reset-password?krypto=12345`,
    selector: '[data-e2e="expired-link-page"]',
  },
  'reset password page': {
    title: 'Reset Password',
    url: `${baseUrl}/reset-password?krypto=12345&traceablereference=abcdef`,
    selector: '[data-e2e="reset-your-password-page"]',
  },
  'error page': {
    title: "Oops, there's been an error",
    url: `${baseUrl}/login/error`,
    selector: '[data-e2e="error-page-title"]',
  },
}

/**
 * Provides basic navigation functions in order to load a page or check whether a page is displayed
 * Handles a pages object listing pages with their url and a UI selector
 *
 * Example of pages:
 * const pages = {
 *   'login page': {
 *      title: 'Login",
 *      url: `http://localhost:3000/login`,
 *      selector: '[data-e2e="login-page"]'
 *   },
 * }
 */

class Navigation {
  /**
   * Constructor
   * @param {Array} pages array of pages with their name, title, url and UI selector
   */
  constructor() {
    this.pages = pages
  }

  /**
   * Retrieves the page corresponding to the pageName
   * It throws an Error if the pageName doesn't exist
   * @param {string} pageName name of the page in the pages collection
   * @throws Error if the pageName doesn't exist
   * */
  getPage(pageName) {
    if (!this.pages[pageName]) {
      throw new Error(`the page '${pageName}' doesn't exist in ${JSON.stringify(this.pages)}`)
    }
    return this.pages[pageName]
  }

  // Page functions

  /**
   * Navigates to the page url and waits for the UI element to be displayed,
   * check for UI element can be skipped using shouldResolve
   * @param {string} pageName name of the page
   * @param {boolean} shouldResolve changes if the UI element existence check happens
   * @returns boolean true if the UI selector is displayed
   */
  navigateTo(pageName, shouldResolve = true) {
    const page = this.getPage(pageName)

    cy.visit(page.url, { failOnStatusCode: shouldResolve }).then(() => {
      if (shouldResolve) cy.get(page.selector).should('exist')
    })

    // Hacky Cypress bug fix see https://github.com/cypress-io/cypress/issues/3200
    cy.document().then((document) => {
      const node = document.createElement('style')
      node.innerHTML = '* { scroll-behavior: auto !important; }'
      document.body.appendChild(node)
    })
  }

  // /**
  //  * Checks whether a page is displayed based on its URL and UI selector
  //  * @param {string} pageName name of the page
  //  * @param {integer} timeout timeout to wait for the UI element selector
  //  * @returns boolean true if the URL and UI element are correct
  //  */

  // isDisplayed(pageName, timeout = 5000) {
  //   const page = this.getPage(pageName)
  //   const expectedPageUrl = page.url
  //   const actualPageUrl = browser.getUrl()
  //   return actualPageUrl === expectedPageUrl && waitForSelector(page.selector, timeout, false)
  // }

  /**
   * Checks whether the specified page is open
   * @param {string} pageName name of the page
   * @throws if the page is not open
   */
  isWindowOpen(pageName) {
    const page = this.getPage(pageName)

    cy.url().should('equal', page.url)
  }

  /**
   * Checks whether the specified page is open
   * @param {string} pageName name of the page
   * @throws if the page is not open
   */
  doesWindowMatchPath(pageName) {
    const page = this.getPage(pageName)

    cy.url().should('match', page.regex)
  }

  // /**
  //  * Switches the current tab (using on page title)
  //  * @param {string} pageName name of the page
  //  */
  // switchWindow(pageName) {
  //   const page = this.getPage(pageName)
  //   browser.switchWindow(page.title)
  //   browser.pause(500)
  // }

  // /**
  //  * Closes the tab (using on page title)
  //  * @param {string} pageName name of the page
  //  */
  // closeWindow(pageName = null) {
  //   if (pageName) {
  //     this.switchWindow(pageName)
  //   }
  //   browser.closeWindow()
  // }

  // /**
  //  * Wait for a window to be opened
  //  * @param {string} pageName name of the page
  //  * @param {integer} timeout timeout to wait for a tab with the page URL or title to be opened (10000ms by default)
  //  * @param {boolean} withAssertion whether an assertion should occur in case of timeout (false by default)
  //  * @returns boolean true if the page is opened in a window
  //  */
  // waitForWindowOpen(pageName, timeout = 10000, withAssertion = true) {
  //   const condition = () => this.isWindowOpen(pageName)
  //   const message = `the window ${pageName} is not open after ${timeout}ms`
  //   return waitUntil(condition, timeout, message, withAssertion)
  // }

  // /**
  //  * Wait for a window to be closed
  //  * @param {string} pageName name of the page
  //  * @param {integer} timeout timeout to wait for a tab with the page URL or title to be closed (10000ms by default)
  //  * @param {boolean} withAssertion whether an assertion should occur in case of timeout (false by default)
  //  * @returns boolean true if the page is opened in a window
  //  */
  // waitForWindowClosed(pageName, timeout = 10000, withAssertion = true) {
  //   const condition = () => {
  //     let isClosed = true
  //     try {
  //       isClosed = !this.isWindowOpen(pageName)
  //     } catch (err) {
  //       isClosed = true
  //     }
  //     return isClosed
  //   }
  //   const message = `the window ${pageName} is not closed after ${timeout}ms`
  //   return waitUntil(condition, timeout, message, withAssertion)
  // }
}

export default new Navigation()
