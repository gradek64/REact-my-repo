/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
const getLicenseKey = () =>
  process.env.NEW_RELIC_APP_NAME === 'Argos_Checkout_Payment_UI_PRODUCTION'
    ? '3fdc681c1bba59de01010f1a46d82cf18999e8d2' // Prod (Digital Family)
    : 'eeef179f25b4e1d05aec83ac57fb4708dac0NRAL' // Pre-prod (Digital Pre-Prod)
exports.config = {
  /**
   * When false, the agent won' start up.
   */
  agent_enabled: false,
  /**
   * Array of application names.
   */
  app_name: ['Argos_Checkout_Payment_UI_DEV'],
  /**
   * Array of application labels.
   */
  labels: {
    Realm: 'Argos',
    Area: 'Checkout',
    Purpose: 'Test',
    Environment: 'dev',
    Service: 'ui',
  },
  /**
   * Your New Relic license key.
   */
  license_key: getLicenseKey(),
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
  /**
   * When true, all request headers except for those listed in attributes.exclude
   * will be captured for all traces, unless otherwise specified in a destination's
   * attributes include/exclude lists.
   */
  allow_all_headers: true,
  attributes: {
    /**
     * Prefix of attributes to exclude from all destinations. Allows * as wildcard
     * at end.
     *
     * NOTE: If excluding headers, they must be in camelCase form to be filtered.
     *
     * @env NEW_RELIC_ATTRIBUTES_EXCLUDE
     */
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*',
    ],
  },
}
