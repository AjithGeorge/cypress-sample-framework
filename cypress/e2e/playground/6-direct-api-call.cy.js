/// <reference types ="Cypress"/>

describe('simple api call', () => {
    it('first api call', () => {
        cy.request('https://api.openbrewerydb.org/v1/breweries')
            .then((resp) => {
                expect(resp.status).to.eql(200)
                expect(resp.body).to.be.not.empty
            })

    })

    it.only('Session storage -token in local storage', () => {
        // cy.Login().then(()=>{

        cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad: function (window) {

                    window.localStorage.setItem('token', 'hello World')

                }
            })

        //})

    })
})