export const determineMarketingEventAttributes = (marketingConsent, isChecked) => {
  if (marketingConsent === 'Y' || marketingConsent === undefined) {
    return { optInType: 'no opt in option', customSiteSection: 'guest_checkout' }
  }
  if (marketingConsent === 'N' && isChecked) {
    return { optInType: 'full opt in', checkboxTicked: 'Yes', customSiteSection: 'guest_checkout' }
  }
  if (marketingConsent === 'N' && !isChecked) {
    return { optInType: 'full opt in', checkboxTicked: 'No', customSiteSection: 'guest_checkout' }
  }
  if (marketingConsent === null && isChecked) {
    return { optInType: 'soft opt in', checkboxTicked: 'Yes', customSiteSection: 'guest_checkout' }
  }
  if (marketingConsent === null && !isChecked) {
    return { optInType: 'soft opt in', checkboxTicked: 'No', customSiteSection: 'guest_checkout' }
  }
  return null
}
