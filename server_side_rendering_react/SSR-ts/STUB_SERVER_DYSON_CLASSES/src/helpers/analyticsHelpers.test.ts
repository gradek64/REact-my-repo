import { determineMarketingEventAttributes } from './analyticsHelpers'

describe('when consent is Y', () => {
  test('should return no opt in option', () => {
    const result = determineMarketingEventAttributes('Y', undefined)
    expect(result).toEqual({ optInType: 'no opt in option', customSiteSection: 'guest_checkout' })
  })
})

describe('when consent is N', () => {
  test('should return full opt in and checkbox ticked', () => {
    const result = determineMarketingEventAttributes('N', true)
    expect(result).toEqual({ optInType: 'full opt in', checkboxTicked: 'Yes', customSiteSection: 'guest_checkout' })
  })
  test('should return full opt in and checkbox unticked', () => {
    const result = determineMarketingEventAttributes('N', false)
    expect(result).toEqual({ optInType: 'full opt in', checkboxTicked: 'No', customSiteSection: 'guest_checkout' })
  })
})

describe('when consent is null', () => {
  test('should return soft opt in and checkbox ticked', () => {
    const result = determineMarketingEventAttributes(null, true)
    expect(result).toEqual({ optInType: 'soft opt in', checkboxTicked: 'Yes', customSiteSection: 'guest_checkout' })
  })
  test('should return soft opt in and checkbox unticked', () => {
    const result = determineMarketingEventAttributes(null, false)
    expect(result).toEqual({ optInType: 'soft opt in', checkboxTicked: 'No', customSiteSection: 'guest_checkout' })
  })
})
