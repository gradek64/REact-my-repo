import consentCookieHelper from './consentCookieHelper'

describe('Consent Cookie Helper methods', () => {
  const { getConsentCookieValue, getCategorySection, hasOptedIn } = consentCookieHelper

  describe('when retrieving consent cookie value', () => {
    it('should return cookie value if cookie exists', () => {
      const withConsentCookie = 'other_cookie=abc;CONSENTMGR=value'
      expect(getConsentCookieValue(withConsentCookie)).toEqual('value')
    })
    it('should return empty string if cookie does not exist', () => {
      const withoutConsentCookie = 'other_cookie=abc'
      expect(getConsentCookieValue(withoutConsentCookie)).toEqual('')
    })
  })

  describe('when getting a category section', () => {
    const cookieValue =
      'c1:1|c2:0|c3:1|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c14:0|c15:0|ts:1575020721807|consent:true'

    it('should return the performance category section', () => {
      const categorySection = getCategorySection(cookieValue, 'performance')
      expect(categorySection).toBeInstanceOf(Array)
      expect(categorySection.length).toBe(1)
      expect(categorySection[0].includes('c1')).toEqual(true)
    })
    it('should return the marketing category section', () => {
      const categorySection = getCategorySection(cookieValue, 'marketing')
      expect(categorySection).toBeInstanceOf(Array)
      expect(categorySection.length).toBe(1)
      expect(categorySection[0].includes('c3')).toEqual(true)
    })
    it('should return empty array if invalid section', () => {
      const categorySection = getCategorySection(cookieValue, '')
      expect(categorySection.length).toBe(0)
    })
    it('should return empty array if section does not exist', () => {
      const categorySection = getCategorySection('consent:true', 'performance')
      expect(categorySection.length).toBe(0)
    })
    it('should return empty array if empty cookie value', () => {
      const categorySection = getCategorySection('', 'marketing')
      expect(categorySection.length).toBe(0)
    })
    it('should return empty array if undefined cookie value', () => {
      const categorySection = getCategorySection(undefined, 'marketing')
      expect(categorySection.length).toBe(0)
    })
  })

  describe('when checking if opted in', () => {
    it('should return true when value is 1', () => {
      const optedInSection = 'c1:1'
      expect(hasOptedIn(optedInSection)).toEqual(true)
    })
    it('should return false when value is 0', () => {
      const optedOutSection = 'c1:0'
      expect(hasOptedIn(optedOutSection)).toEqual(false)
    })
    it('should return false if unexpected value', () => {
      const invalidSection = 'c1:a'
      expect(hasOptedIn(invalidSection)).toEqual(false)
    })
    it('should return false if empty value', () => {
      const emptySection = ''
      expect(hasOptedIn(emptySection)).toEqual(false)
    })
    it('should return false if undefined value', () => {
      expect(hasOptedIn()).toEqual(false)
    })
  })
})
