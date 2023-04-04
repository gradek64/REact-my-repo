import { When } from '@badeball/cypress-cucumber-preprocessor'
import Navigation from '../pages/Navigation'

When(/^I click the browser back button$/, () => {
  cy.go('back')
})

When(/^I am on the Argos domain$/, () => {
  cy.setCookie('brand', 'arg')
})

When(/^I am on the Habitat domain$/, () => {
  cy.setCookie('brand', 'hab')
})

When(/^I am on the Tu domain$/, () => {
  cy.setCookie('brand', 'tuc')
})

When(
  /^I (?:navigate to|am on) the (login page from monthly care journey|login page with an invalid success URL|login page|register page|forgot password page|reset password page|login page with an allow guest parameter|error page)$/,
  (pageName) => {
    Navigation.navigateTo(pageName)
  },
)

When(
  /^I (?:navigate to|am on) the (login page from monthly care journey|login page with an invalid success URL|login page|register page|forgot password page|reset password page|login page with an allow guest parameter) and expect to be redirected$/,
  (pageName) => {
    Navigation.navigateTo(pageName, false)
  },
)

When(/^I click an? (valid|expired) reset password link$/, (validExpired) => {
  if (validExpired === 'valid') {
    Navigation.navigateTo('reset password page')
  } else {
    Navigation.navigateTo('expired link page')
  }
})
