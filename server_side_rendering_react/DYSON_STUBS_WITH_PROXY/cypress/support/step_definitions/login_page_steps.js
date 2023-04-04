import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import StubHelper from '../../helpers/StubHelper'
import LoginPage from '../pages/LoginPage'

Then(/^I should (be|not be) on the (login page|monthly care page|error page)$/, (beNotBe, elementKey) => {
  const expectVisible = beNotBe === 'be'
  if (expectVisible) {
    LoginPage.waitForVisible(elementKey)
  } else {
    LoginPage.doesNotExist(elementKey)
  }
})

Then(
  /^I should (see|not see) the (sign in title|sign in again title|email address field|Tu sidedrawer)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      LoginPage.waitForVisible(elementKey)
    } else {
      LoginPage.waitForNotVisible(elementKey)
    }
  },
)

Then(
  /^I should (see|not see) the (password field|show password button|hide password button)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      LoginPage.isVisible(elementKey)
    } else {
      LoginPage.doesNotExist(elementKey)
    }
  },
)

Then(
  /^the (email address field|email error message|password error message) should be "([^"]*)"$/,
  (elementKey, value) => {
    LoginPage.isValue(elementKey, value)
  },
)

// TODO: Do this better
Then(/^I should see my (email address)$/, (elementKey) => {
  LoginPage.isValue(elementKey, 'anakin.skywalker@darkside.com')
})

Then(
  /^I should (see|not see) the (not you link|forgot password link|sign in button|register link|guest checkout link|Tu login info alert|part of the family logo)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      LoginPage.isVisible(elementKey)
    } else {
      LoginPage.doesNotExist(elementKey)
    }
  },
)

When(/^I enter "([^"]*)" in the (email address field|password field)$/, (value, elementKey) => {
  LoginPage.setValue(elementKey, value)
})

When(/^I enter my (email address)$/, (data) => {
  const elementKey = `${data} field`
  LoginPage.setValue(elementKey, 'anakin.skywalker@darkside.com')
})

When(/^I enter my (password)$/, (data) => {
  const elementKey = `${data} field`
  LoginPage.setValue(elementKey, 'password1980')
})

When(/^I leave the (email address field|password field)$/, (elementKey) => {
  LoginPage.getElement(elementKey).blur()
})

When(
  /^I click the (show password button|hide password button|not you link|forgot password link|register link|Create account link|Find out more button|Tu sidedrawer close button)$/,
  (elementKey) => {
    LoginPage.click(elementKey)
  },
)

When(/^I click the (sign in button)$/, (elementKey) => {
  LoginPage.click(elementKey)
})

Then(/^I should (see|not see) the password$/, (seeNotSee) => {
  const elementKey = 'password field'
  const expectVisible = seeNotSee === 'see'
  if (expectVisible) {
    LoginPage.getElement(elementKey).should('have.attr', 'type', 'text')
  } else {
    LoginPage.getElement(elementKey).should('have.attr', 'type', 'password')
  }
})

Then(/^I should (see|not see) the (email error message|password error message)$/, (seeNotSee, elementKey) => {
  const expectVisible = seeNotSee === 'see'
  if (expectVisible) {
    LoginPage.isVisible(elementKey)
  } else {
    LoginPage.doesNotExist(elementKey)
  }
})

Given(/^the login service is (down|up)$/, (status) => {
  if (status === 'up') StubHelper.setLoginService('loginData', 'Default')
  else if (status === 'down') StubHelper.setLoginService('loginData', 'InternalServerError')
})

Then(
  /^the (\d+)\w{2} section should be the (registered user section|new customers section)$/,
  (sectionNumber, elementKey) => {
    const nthSection = LoginPage.getElements('login sections').eq(
      sectionNumber - 1
    )

    const sectionHeading = elementKey === 'registered user section' ? 'Sign in' : 'New customers'
    nthSection.find('h2').contains(sectionHeading)
  }
)
