/// <reference types="Cypress"/>

describe("WebControls tests", function () {
    it.only("CheckBox Tests", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // multiple assertions in single line
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // multiple checkbox at once
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // radio button
        cy.get('[value="radio3"]').check().should('be.checked')


    })

    it("Dropdown Tests", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        // dynamic dropdowm
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it("Visibility Test", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible');

    })
})