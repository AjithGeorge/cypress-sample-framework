class HomePage {

    nameBox = '[name="name"]:nth-child(2)'
    genderSelection ='#exampleFormControlSelect1'
    twoWayBinding = '[name="name"]:nth-child(1)'
    entrepreneurRadioButton ='#inlineRadio3'

    getName() {
        return cy.get(this.nameBox)
    }
    getGender() {
        return cy.get(this.genderSelection)
    }
    getTwoWayBinding() {
        return cy.get(this.twoWayBinding)
    }
    getRadioButtonEntrepreneur() {
        return cy.get(this.entrepreneurRadioButton)
    }

}



export default HomePage