import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

Then(/^I should (be|not be) on the (forgot password page|expired link page)$/, (beNotBe, elementKey) => {
  const expectVisible = beNotBe === 'be'
  if (expectVisible) {
    ForgotPasswordPage.waitForVisible(elementKey)
  } else {
    ForgotPasswordPage.waitForNotVisible(elementKey)
  }
})

Then(
  /^I should (see|not see) the (forgotten email address field|send link button|resend link button|forgotten email error message|retry enter email link)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      ForgotPasswordPage.waitForVisible(elementKey)
    } else {
      ForgotPasswordPage.doesNotExist(elementKey)
    }
  },
)

Then(/^I should see the (email sent confirmation)$/, (elementKey) => {
  ForgotPasswordPage.waitForVisible(elementKey)
})

When(/^I enter "([^"]*)" in the (forgotten email address field)$/, (value, elementKey) => {
  ForgotPasswordPage.setValue(elementKey, value)
})

Then(/^the (confirmation email address|forgotten email address field) should be "([^"]*)"$/, (elementKey, value) => {
  ForgotPasswordPage.isValue(elementKey, value)
})

Then(/^the (forgotten email error message) should be "([^"]*)"$/, (elementKey, value) => {
  ForgotPasswordPage.isValue(elementKey, value)
})

When(/^I click the (send link button|resend link button|retry enter email link)$/, (elementKey) => {
  ForgotPasswordPage.click(elementKey)
})
