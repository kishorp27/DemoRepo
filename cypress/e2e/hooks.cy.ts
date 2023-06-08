///<reference types = "Cypress"/>

//import { afterEach } from "mocha";

describe('Hooks suite',()=>{

    before('This is setup block',()=>{
    cy.log('this is setup block');
})
    beforeEach('',()=>{
        cy.log('this is login block');
    })
    afterEach('',()=>{
        cy.log('this is logout block');
    })

    after('',()=>{
    cy.log('this is tear dowm block');
    })

    it('search ',()=>{
        cy.log('This is search block')
    })
    it('Advanced search ',()=>{
        cy.log('This is Adavanced search block')
    })
    it('Listening Pods ',()=>{
        cy.log('This is Listening block')
    })
})