import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import RegisterPage from '../pages/RegisterPage'

Then(/^I should (be|not be) on the (register page)$/, (beNotBe, elementKey) => {
  const expectVisible = beNotBe === 'be'
  if (expectVisible) {
    RegisterPage.waitForVisible(elementKey)
  } else {
    RegisterPage.doesNotExist(elementKey)
  }
})

Then(
  /^I should (see|not see) the (register email address field|register email error message|register button|sign in link)$/,
  (seeNotSee, elementKey) => {
    if (seeNotSee === 'see') {
      RegisterPage.isVisible(elementKey)
    } else {
      RegisterPage.isNotVisible(elementKey)
    }
  },
)

When(/^I enter "([^"]*)" in the (register email address field)$/, (value, elementKey) => {
  RegisterPage.setValue(elementKey, value)
})

Then(/^the (register email error message|register email address field) should be "([^"]*)"$/, (elementKey, value) => {
  RegisterPage.isValue(elementKey, value)
})

When(/^I click the (register button|sign in link)$/, (elementKey) => {
  RegisterPage.click(elementKey)
})
