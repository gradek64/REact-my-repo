import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import stubHelper from '../../helpers/StubHelper'

Given(/^I am a (guest|logged out|logged in|recognised) user$/, (state) => {
  stubHelper.setMockedUserLoginState(state)
})

Then(/^I am logged in$/, () => {
  stubHelper.getMockedUserLoginState().then((state) => {
    expect(state).equal('logged in')
  })

  cy.getCookie('stubbed_userState_cookie').should('have.property', 'value', 'LOGGEDIN')
})

Then(/^I am logged out$/, () => {
  stubHelper.getMockedUserLoginState().then((state) => {
    expect(state).equal('guest')
  })
  cy.getCookie('stubbed_userState_cookie').should('not.have.property', 'value', 'LOGGEDIN')
})

Then(/^I am recognised$/, () => {
  stubHelper.getMockedUserLoginState().then((state) => {
    expect(state).equal('recognised')
  })
  cy.getCookie('stubbed_userState_cookie').should('have.property', 'value', 'RECOGNISED')
})

Then(/^I have successfully reset my password$/, () => {
  cy.getCookie('stubbed_auth_cookie').should('have.property', 'value', 'Password_Change_Success')
})
