
describe('Login', () => {
    it('Realizar login com credenciais corretas', () => {

        const email = 'souzamariajulia44@gmail.com'
        const password = 'SenhaForte123'

        cy.visit('https://luma-demo.scandipwa.com/')
        cy.get('#myAccount').click();

        cy.get('input[name = "email"]').should('be.visible').type(email)
        cy.get('input[name = "password"]').should('be.visible').type(password)

        cy.get('.MyAccountOverlay-SignInButton button').click();
    })
} )