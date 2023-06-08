/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('iframe Handling',()=>{
    it.skip('Handle iframe',()=>{
        cy.visit('https://qavbox.github.io/demo/iframes/');
        cy.getIframeDocument('#Frame2').find('#frameinput').type('Hello')
        cy.getIframeDocument('#Frame2').contains('Category3').click();

    })
    it('Handle iframe with Plugin',()=>{
        cy.visit('https://qavbox.github.io/demo/iframes/');
       cy.frameLoaded('#Frame2').find('#frameinput').type('Hello')
        
    })
})