/// <reference types="Cypress"/>

describe("ECommerce Site tests", function () {

    it("Simple Cart", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        //using attribute to filter for the required elements
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('products')
        cy.get('.products').find('.product').as('product')

        //using aliasing and restricting elements to parent entity
        cy.get('@product').should('have.length', 4)
        cy.get('@product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            var productName = $el.find('h4.product-name').text()
            if (productName.includes('Cashews')) {
                // just using a different way to get the element.
                // here the element is a promise which cypress has to resolve to get it clicked, so just using the click is not allowed
                // instead we have to wrap it with cy.wrap to get it working.
                cy.wrap($el).find('button').click()
            }

        })

        // manually resolving promise for non cypress commands 
        // here the text() is a jquery function
        cy.get('.brand').then(function (logoElement) {

            cy.log(logoElement.text())

        })

        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

})