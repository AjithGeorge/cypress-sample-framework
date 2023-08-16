/// <reference types="Cypress"/>
import CheckOutPage from "../../pageObjects/CheckOutPage"
import HomePage from "../../pageObjects/HomePage"
import Navbar from "../../pageObjects/Navbar"

Cypress.config('defaultCommandTimeout', 10000)

describe("hooks and framework setup", () => {
    before(() => {
        cy.fixture('test-data').then(function (input) {
            this.data = input
        })

    })

    it("Second ekart tests", function () {
        const homepage = new HomePage()
        const navbar = new Navbar()
        const checkoutpage = new CheckOutPage()

        const url = Cypress.env('url')
        cy.visit(url + "/angularpractice/")

        homepage.getName().type(this.data.name)
        homepage.getGender().select('Female')
        homepage.getTwoWayBinding().should('have.value', this.data.name)
        homepage.getRadioButtonEntrepreneur().should('be.disabled')

        // check for attribute
        homepage.getName().should('have.attr', 'minlength', '2')

        navbar.getShop().click()

        // code block is now moved to commands.js
        this.data.items.forEach(item => {
            cy.selectItem(item)
        });

        navbar.getCheckOut().click()

        checkoutpage.getCheckout().click()
        checkoutpage.getDeliveryLocaltion().type('India')
        checkoutpage.getSuggestion().click()
        checkoutpage.getCheckbox().click({ force: true })
        checkoutpage.getPurchase().click()
        checkoutpage.getAlert().should('include.text', 'Success!')
        checkoutpage.getAlert().then(($el) => {
            expect($el.text().includes('Success!')).to.be.true

        })
    })
})