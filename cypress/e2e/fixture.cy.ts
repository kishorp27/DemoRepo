/// <reference types="Cypress"/>

describe('Fixtures Suites', () => {
    let logininfo;
    before(() => {
        cy.fixture('loginInfo').then((data)=>{
            logininfo = data
        })
    })   
        it('Login', () => {
            cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
            cy.get('#Email').clear();
            cy.get('#Email').type(logininfo.email);
            cy.get('#Password').clear();
            cy.get('#Password').type(logininfo.password);
            cy.get('.button-1').click();

        })
    })