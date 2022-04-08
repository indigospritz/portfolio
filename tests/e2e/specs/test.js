// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Howdy')
  })
})

describe('My First Test', () => {
  it('Visits the projects view', () => {
    cy.visit('/projects')
    cy.contains('h1', 'Sample Project 1')
  })
})
