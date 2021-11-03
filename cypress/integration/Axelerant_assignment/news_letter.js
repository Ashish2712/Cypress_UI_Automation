/// <reference types="cypress" />

describe('automate the cart', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
it('new letter place holder should present', () => {

        const newItem = 'demonew1@gmail.com'

        cy.get('.newsletter-input').should('have.value', 'Enter your e-mail')
          //  cy.get('.newsletter-input').should('be.visible').should('be.enabled')
        cy.get('.newsletter-input').type(`${newItem}{enter}`)
        cy.get('.newsletter-input').should('have.value', 'You have successfully subscribed to this newsletter.')
        // cy.get('alert alert-success').should('have.text', 'Newsletter : You have successfully subscribed to this newsletter')
        
})

it('navigate to dresses and summer category', ()=> {
    cy.get('.sf-with-ul').eq(3).click()
    cy.url().should('include', 'http://automationpractice.com/index.php?id_category=8&controller=category')

    cy.get('.subcategory-image').eq(2).click()
    cy.url().should('include', 'http://automationpractice.com/index.php?id_category=11&controller=category')
    cy.log("Logging the product price")
    cy.get('.product-price[itemprop="price"]').then(($els) => {

    const texts = Array.from($els, el => el.innerText);
    cy.log(texts.length)
    })
    
})


})