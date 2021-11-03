/// <reference types="cypress" />

describe('automate the cart', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
    it('add_product_to_cart', ()=>{
        cy.get('a.ajax_add_to_cart_button').eq(1).should('be.visible')
        cy.get('a.ajax_add_to_cart_button').eq(1).click()
        cy.get('div.button-container>a[title="Proceed to checkout"]').should('be.visible')
        cy.get('div.button-container>a[title="Proceed to checkout"]').click()
        cy.get('p.cart_navigation>a[title="Proceed to checkout"]').should('be.visible')
        cy.get('p.cart_navigation>a[title="Proceed to checkout"]').click()
    })
})