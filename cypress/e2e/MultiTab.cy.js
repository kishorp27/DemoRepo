//https://the-internet.herokuapp.com/windows

require('chai/register-should'); 


describe('Multi Tab  TestSuite', () => {
   /*  context('720p resolution', () => {
     beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.viewport(1000, 660);
   }),*/

       it('switching to new window', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').invoke('removeAttr','target').click();
        
     })
   
    }) 
