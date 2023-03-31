/**
 * Implements the logic to call the Dyson Stub service and keep the session cookie
 * It should be used only in a SetupStubHelper in the BDD project
 */

export default class DysonStubHelper {
  /**
   * Constructor
   * It initiates a cookie jar to keep track of the existing cookies
   * @param {*} baseUrl domain url of the stubbed environment under test
   * @param {*} cookieName name of the cookie used by the stub service
   */
  constructor(baseUrl, cookieName) {
    this.baseUrl = baseUrl
    this.cookieName = cookieName
  }

  /**
   * Calls the stub endpoint to setup the Dyson Stub state
   * It performs a GET call with the parameters if defined (3 retries)
   * @param {*} endpoint stub endpoint to call
   * @param {*} type type parameter for the stub endpoint
   * @param {*} value value parameter for the stub endpoint
   */
  callStub(endpoint, type, value, additionalFields = {}) {
    const qs = {}
    if (type) qs.type = type
    if (value) qs.value = value

    Object.entries(additionalFields).forEach(([additionalFieldKey, additionalFieldValue]) => {
      qs[additionalFieldKey] = additionalFieldValue
    })

    const url = this.baseUrl + endpoint
    return cy.request({ url, qs })
  }
}
