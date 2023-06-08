describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
   // cy.get('iframe')
    cy.get('.gb_ma')
    .should('have.text', 'Sign in')
  })
})