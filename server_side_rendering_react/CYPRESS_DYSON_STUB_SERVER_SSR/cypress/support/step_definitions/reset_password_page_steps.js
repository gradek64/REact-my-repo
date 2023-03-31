import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import ResetPasswordPage from '../pages/ResetPasswordPage'

Then(/^I should (be|not be) on the (reset password page)$/, (beNotBe, elementKey) => {
  const expectVisible = beNotBe === 'be'
  if (expectVisible) {
    ResetPasswordPage.waitForVisible(elementKey)
  } else {
    ResetPasswordPage.waitForNotVisible(elementKey)
  }
})

Then(
  /^I should (see|not see) the (new password field|confirm password field|new password error message|confirm password error message|save password button)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      ResetPasswordPage.waitForVisible(elementKey)
    } else {
      ResetPasswordPage.doesNotExist(elementKey)
    }
  },
)

Then(
  /^I should see the (reset password confirmation|HAAS mini header|HAAS full header|checkout footer|default footer|primary CTA|Habitat full header|Habitat mini footer|Habitat full footer|Tu mini header|Tu full header|Tu mini footer|Tu full footer)$/,
  (elementKey) => {
    ResetPasswordPage.waitForVisible(elementKey)
  },
)

Then(
  /^I should see the (Argos|Habitat|Tu) secondary CTA$/,
  (brand) => {
    const messaging = {
      Argos: '',
      Habitat: ' on Habitat',
      Tu: ' on Tu'
    }
    cy.contains(`Continue shopping${messaging[brand]}`)
  },
)

When(/^I enter "([^"]*)" in the (new password field|confirm password field)$/, (value, elementKey) => {
  ResetPasswordPage.setValue(elementKey, value)
})

When(
  /^I click the (new password field|show hide new password button|show hide confirm password button)$/,
  (elementKey) => {
    ResetPasswordPage.click(elementKey)
  },
)

Then(/^I should (see|not see) the (new password|confirm password)$/, (seeNotSee, element) => {
  const elementKey = `${element} field`
  const expectVisible = seeNotSee === 'see'
  if (expectVisible) {
    ResetPasswordPage.getElement(elementKey).should('have.attr', 'type', 'text')
  } else {
    ResetPasswordPage.getElement(elementKey).should('have.attr', 'type', 'password')
  }
})

When(/^I leave the (new password field|confirm password field)$/, (elementKeyToLeave) => {
  const elementKey = elementKeyToLeave === 'new password field' ? 'confirm password field' : 'new password field'
  ResetPasswordPage.click(elementKey)
})

Then(/^the (password .* criteria) is (met|not met)$/, (elementKey, metNotMet) => {
  const expectMet = metNotMet === 'met'
  if (expectMet) {
    ResetPasswordPage.getElement(elementKey).should('have.class', 'criteria-met')
  } else {
    ResetPasswordPage.getElement(elementKey).should('not.have.class', 'criteria-met')
  }
})

Then(/^the (new password error message|confirm password error message) should be "([^"]*)"$/, (elementKey, value) => {
  ResetPasswordPage.isValue(elementKey, value)
})

When(/^I click the (save password button)$/, (elementKey) => {
  ResetPasswordPage.click(elementKey)
})

Then(/^I should not see sensitive data in the url$/, () => {
  cy.url().should('eq', Cypress.config().baseUrl + '/reset-password')
})
