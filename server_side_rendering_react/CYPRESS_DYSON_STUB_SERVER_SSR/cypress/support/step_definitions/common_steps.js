import { Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../pages/LoginPage'

Then(/^I should (see|not see) the (email suggestion prompt)$/, (seeNotSee, elementKey) => {
  if (seeNotSee === 'see') {
    LoginPage.waitForVisible(elementKey)
  } else {
    LoginPage.doesNotExist(elementKey)
  }
})

Then(/^I click the (email suggestion prompt)$/, (elementKey) => {
  LoginPage.click(elementKey)
})

Then(/^the (email suggestion prompt) should be "([^"]*)"$/, (elementKey, value) => {
  LoginPage.waitForValue(elementKey, value)
})
