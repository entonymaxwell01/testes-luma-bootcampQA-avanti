
describe ('Cadastro', () => {

   it('Realizar cadastro de novo usuário com dados válidos', () => {

      const firstName = 'Maria'
      const lastName = 'Souza'
      const email = 'mariajulia@gmail.com'
      const password = 'SenhaForte123'
      const confirm_password = 'SenhaForte123'

      cy.visit('https://luma-demo.scandipwa.com/')
      cy.get('#myAccount').click();
      cy.get('.Button.Button_likeLink').eq(1).click();

      cy.get('input[name = "firstname"]').should('be.visible').type(firstName)
      cy.get('input[name = "lastname"]').should('be.visible').type(lastName)
      cy.get('input[name = "email"]').should('be.visible').type(email)
      cy.get('input[name = "password"]').should('be.visible').type(password)
      cy.get('input[name = "confirm_password"]').should('be.visible').type(confirm_password)

      cy.get('Button.MyAccountOverlay-SignUpButton').click({ force: true })
      
   })
})