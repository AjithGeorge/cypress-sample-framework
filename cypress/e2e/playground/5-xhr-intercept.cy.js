/// <reference types ='Cypress'/>
const baseUrl = Cypress.env('url')
describe("xhr tests", () => {
    it("Intercepting and mocking response", () => {
        cy.visit(baseUrl + '/angularAppdemo/')

        // Mocking the response
        cy.intercept({
            method: 'GET',
            url: baseUrl + '/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]

            }).as('interceptedResponse')

        cy.get('.btn-primary').click()  // The request will be intercepted and the above given response will be returned.
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        cy.wait('@interceptedResponse').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)

        })

    })

    it.only("Changing request on the fly", () => {
        cy.visit(baseUrl + '/angularAppdemo/')

        cy.intercept('GET', baseUrl + '/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = baseUrl + '/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res) => {
                //expect(res.statusCode).to.eql(403)
            })
        }).as('modifiedReq')

        cy.get('.btn-primary').click()
        cy.wait('@modifiedReq')

    })
})