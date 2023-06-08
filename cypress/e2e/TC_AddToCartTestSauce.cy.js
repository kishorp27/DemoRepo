//const cypress = require('cypress')

describe('this is sample test Suite',()=>{
    context('720p resolution', () => {
        beforeEach(() => {
          cy.viewport(1280, 720);
    }),

    it('This is assignemnt sample Test Case', () => {
        //visit URl
        cy.visit('https://demo.nopcommerce.com/');
        cy.get(':nth-child(1) > .category-item > .title > a').click();
       
      })
    })

})