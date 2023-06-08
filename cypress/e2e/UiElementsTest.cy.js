//const { get } = require("cypress/types/lodash");


describe('Interacting with Ui elements', () => {
 // context('720p resolution', () => {
  beforeEach(() => {
   cy.visit('https://demo.automationtesting.in/Register.html');
  //    cy.viewport(1000, 660);
}),
    it('Enter Registretion Details', () => {
        cy.visit('https://demo.automationtesting.in/Register.html');
        //https://demo.automationtesting.in/Register.html
        //first name 
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.enabled').type('kishor');
        //last name 
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.enabled').type('Pawar');
        //address 
         cy.get('.col-md-8 > .form-control').should('be.enabled').type('india 431001');
        //email id
         cy.get('#eid > .form-control').should('be.enabled').type('kishor@gmail.com');
  })

    it('radio button click',()=>{
        cy.get('input[value=FeMale]').check();
        cy.get('input[value=Male]').click();
    })

    it('check box ',()=>{
        cy.get('input[type=checkbox]').check(['Cricket', 'Movies']);
    });

    it('Drop down ',()=>{
        cy.get('#Skills').select('APIs').should('have.that.value','APIs');
        
    });

   
    
    it('multi select Drop down ',()=>{

       cy.get('#msdd').click();

       let language =['English','Catalan','Bulgarian']
       language.forEach(element => {
        cy.get('.ui-corner-all').contains(element).click();
       });
      // cy.get('.ui-corner-all').contains('Catalan').click();
      // cy.get('.ui-corner-all').contains('Bulgarian').click();
    });

    it('span conutry Drop down ',()=>{
        cy.get('[role=combobox]').click({force:true});
       cy.get('.select2-search__field').type('Ind')
       cy.get('.select2-search__field').type('{enter}');
    });

    /*it('select Country ',()=>{
        //drop down with span 
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('Catalan').click();
        cy.get('.ui-corner-all').contains('Bulgarian').click();
     });
*/
})
