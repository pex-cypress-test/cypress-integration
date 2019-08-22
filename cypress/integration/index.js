describe('Pex', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('body').should('contain', 'Pex Cypress test')
  })
})
