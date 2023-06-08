///<Reference types="cypress"/>
require('chai/register-assert');  // Using Assert style
require('chai/register-expect');  // Using Expect style
require('chai/register-should');  // Using Should style


describe('this is sample test Suite',()=>{
    context('720p resolution', () => {
        beforeEach(() => {
          cy.viewport(1280, 720);
    }),

    it('This issample Test Case', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get('#small-searchterms').should('be.enabled').type('Apple MacBook Pro 13-inch');
        
        cy.get('#small-search-box-form > .button-1').click();
        cy.get('.product-box-add-to-cart-button').click();
        cy.get('#product_enteredQuantity_4').clear();
        cy.get('#product_enteredQuantity_4').type('3');
        cy.get('#add-to-cart-button-4').click();
        cy.get('.content > a').click();
        cy.get('.product-subtotal').should('contain.text','$5,00.0');
       
        cy.screenshot();

        
      })
    })

})