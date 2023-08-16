/// <reference types="Cypress"/>


describe("Alerts and Popups tests", () => {
    it("alert tests", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // cypress auto accepts alerts and popups hence events are used to validate for any text of the alert/popup
        cy.on('window:alert', (txt) => {

            expect(txt).to.eql('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (txt) => {

            expect(txt).to.eql('Hello , Are you sure you want to confirm?')
        })

    })
})