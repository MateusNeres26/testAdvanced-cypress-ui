
const data = require('../../fixtures/data.json')

it("Deve realizar checkout com sucesso", () => {
    cy.login(data.usuario, data.senha)
    cy.addIten()
    cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
    cy.checkoutConfirm()
})

