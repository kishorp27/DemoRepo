///<reference types = "Cypress"/>


declare namespace Cypress{
    interface Chainable {
        getIframeDocument(value: string): Chainable<Element>
    }
}