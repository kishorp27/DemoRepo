///<Reference types="cypress"/>

//https://the-internet.herokuapp.com/windows

require('chai/register-should'); 


describe('Assignment 13 Canvas TestSuite', () => {
   
    it('Click on lets Eat using mouse event', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/canvas');
        cy.get('#burger_canvas').realClick({ position: "bottomRight" });
       // cy.get('.Canvas_canvas__BIlvI').realClick({ x: 100, y: 1240 });
   
     })
   
    }) 
