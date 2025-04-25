
import { faker } from '@faker-js/faker'

describe('Cadastro', () => {
  it('Realizar cadastro de novo usuário com dados válidos', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName, lastName })
    const password = 'SenhaForte1234'

    Cypress.config('defaultCommandTimeout', 140000)

    cy.visit('https://luma-demo.scandipwa.com/')
    cy.get('#myAccount').click()
    cy.get('.Button.Button_likeLink').eq(1).click()

    cy.get('input[name="firstname"]').type(firstName)
    cy.get('input[name="lastname"]').type(lastName)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirm_password"]').type(password)

    cy.get('Button.MyAccountOverlay-SignUpButton').click({ force: true })

    cy.contains('My Account', { timeout: 140000 }).should('be.visible')
    cy.screenshot('cadastro-sucesso')
  })
})