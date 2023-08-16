class Navbar {

    getHome(){
        return cy.contains('Home')
    }

    getShop(){
        return cy.contains('Shop')
    }

    getCheckOut(){
        return cy.contains('Checkout')
    }

}

export default Navbar