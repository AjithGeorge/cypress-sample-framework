class CheckOutPage{

    getCheckout(){
        return cy.contains('Checkout')
    }

    getDeliveryLocaltion(){
        return cy.get('#country')
    }

    getSuggestion(){
        return cy.get('.suggestions')
    }

    getCheckbox(){
        return cy.get('#checkbox2')
    }

    getPurchase(){
        return cy.contains('Purchase')
    }

    getAlert(){
        return cy.get('.alert')
    }


}

export default CheckOutPage