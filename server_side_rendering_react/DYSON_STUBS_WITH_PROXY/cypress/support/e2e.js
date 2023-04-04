beforeEach(() => {
  Cypress.on('uncaught:exception', (error) => {
    // Returning false here prevents Cypress from
    // failing the test

    if (error.message.includes('Not Found')) {
      return false
    }

    if (error.message.includes('React is not defined')) {
      return false
    }

    if (error.message.includes("Cannot read properties of undefined (reading 'createElement')")) {
      return false
    }

    throw error
  })
})
