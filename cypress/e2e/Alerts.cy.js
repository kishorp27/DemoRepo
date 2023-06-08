describe('Alerts TestSuite', () => {
    context('720p resolution', () => {
   /* beforeEach(() => {
       cy.visit('https://demo.automationtesting.in/Alerts.html');
       cy.viewport(1000, 660);
  }),*/
      it('Click on Alert and verify message  ', () => {
        cy.visit('https://demo.automationtesting.in/Alerts.html');
       cy.get('#OKTab').click();
       cy.on('window:alert',(str)=>{
        expect(str).to.equal('I am an alert box!')
       })
    });

    it('Click on Alert and verify message  ', () => {
        cy.visit('https://demo.automationtesting.in/Alerts.html');
        cy.get('#OKTab').click();
        cy.on('window:alert',(str)=>{
         expect(str).to.equal('I am an alert box!')
        })        
     });
  
     it('Alert with OK and Cancel Button', () => {
        cy.visit('https://demo.automationtesting.in/Alerts.html');
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Press a Button !');
           })    
     
     });
   }) 
})