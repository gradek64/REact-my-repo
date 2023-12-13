const optedInValue = '1'

/**
 * Name of the cookie consent
 */
const cookieName = 'CONSENTMGR'

/**
 * Name of the cookie consent categories
 */
const categories = {
  performance: 'c1:',
  marketing: 'c3:'
}

/**
 * Get value of consent cookie
 * @param {string} cookies list of cookies
 * @returns {string} consent cookie value
 */
const getConsentCookieValue = (cookies) => {
  const newConsentCookie = cookies && cookies.split(';').filter((cookie) => cookie.trim().startsWith(`${cookieName}=`))
  return newConsentCookie && newConsentCookie.length ? newConsentCookie[0].split('=')[1] : ''
}

/**
 * Get relevant consent section (e.g. c1 = performance, c3 = marketing) in cookie value
 * @param {string} cookieValue consent cookie value
 * @param {string} category cookie consent category name
 * @returns {array} cookie consent category section (name and value e.g 'c1:1')
 *
 * Example cookie value: 'c1:1|c2:0|c3:1|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c14:0|c15:0|ts:1575020721807|consent:true'
 */
const getCategorySection = (cookieValue, category) => {
  return decodeURI(cookieValue)
    .split('|')
    .filter((section) => section.trim().startsWith(categories[category]))
}

/**
 * Check if user has opted in for a category
 * @param {array} categorySection cookie consent category section (Example category section: 'c1:1')
 * @returns {boolean} true if opted in / false if not opted in
 */
const hasOptedIn = (categorySection) => {
  if (!categorySection) return false
  const consentValue = categorySection.split(':')[1]
  return consentValue === optedInValue
}

export default {
  cookieName,
  categories,
  getConsentCookieValue,
  getCategorySection,
  hasOptedIn
}
