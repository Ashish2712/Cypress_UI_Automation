/// <reference types="cypress" />

describe('add to card and checkout', () => {
    it('go to home page', () => { 
      cy.visit('http://automationpractice.com/index.php');
    })
    it('search the product', () => {
        cy.get('#search_query_top').type('dress').click();
    })
    it('select the 1st product', () => {
        cy.get('.homefeatured>li:nth-child(1)').click();
    })
    it('add to cart', () => {
      cy.get('#add_to_cart').click();
    })
})