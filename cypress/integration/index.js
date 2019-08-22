describe('Pex', () => {
  it('works', () => {
    cy.visit('/')

    cy.get('.heading').should(
      'contain',
      'The global video & music search engine'
    )
  })
})
