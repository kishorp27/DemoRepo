require('chai/register-should'); 


describe('Navigation TestSuite', () => {
     context('720p resolution', () => {
     beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.viewport(1000, 660);
   }),
       it('go backword and forword ', () => {
        cy.title().should('eq','nopCommerce demo store')

        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq','nopCommerce demo store. Register')

        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')

        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register')
     })
   
    }) 
})