/**
 * Generates a user agent to be sent in service-to-service API calls.
 *
 * @param {string} name - The name of your microservice.
 * @param {string} environment - The environment of your microservice (e.g. dev/staging/production/localhost).
 * @param {Object} options - Optional extras to enhance the user agent with more information.
 * @param {string} options.version - If your service is versioned, you can add it here (if it's versioned in the service name, like ui-basket-v1, then you can omit this).
 * @param {string} options.token - A unique token for Akamai firewalls to monitor traffic. See documentation.
 *
 * @returns {string} Your user agent.
 */
export const createUserAgent = (name, environment, options = {}) => {
  let userAgent = ''

  userAgent += name
  userAgent += '/'
  userAgent += environment

  if (options.version) {
    userAgent += ` (v${options.version})`
  }

  if (options.token) {
    userAgent += ` ${options.token}`
  }

  return userAgent
}

export default createUserAgent
