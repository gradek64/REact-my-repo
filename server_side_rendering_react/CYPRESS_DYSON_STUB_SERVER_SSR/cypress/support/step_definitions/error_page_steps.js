import { Then } from '@badeball/cypress-cucumber-preprocessor'
import ErrorPage from '../pages/GenericErrorPage'

Then(
  /^I should (see|not see) the (error page title|error page alert)$/,
  (seeNotSee, elementKey) => {
    const expectVisible = seeNotSee === 'see'
    if (expectVisible) {
      ErrorPage.waitForVisible(elementKey)
    } else {
      ErrorPage.doesNotExist(elementKey)
    }
  }
)

Then(
  /^I should see the (argos|habitat|tu) back to trolley button$/,
  (brand) => {
    const basketName = {
      argos: 'trolley',
      habitat: 'bag',
      tu: 'basket'
    }
    cy.contains(`Back to ${basketName[brand]}`)
  }
)
