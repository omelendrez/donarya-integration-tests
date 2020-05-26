/// <reference types="cypress" />

describe('Testing DonarYa', () => {
  it('Visits DonarYa', () => {

    cy.visit('/')

    // Go to Login page
    cy.get('.nav-link')
      .contains('Login')
      .click()

    cy.url()
      .should('include', '/login')

    // Enter credentials
    cy.get('#email')
      .type('omar.melendrez@gmail.com')
      .should('have.value', 'omar.melendrez@gmail.com')

    cy.get('#password')
      .type('Master1*')
      .should('have.value', 'Master1*')

    cy.get('form')
      .contains('form', 'Ingresar')
      .submit()

    cy.url()
      .should('eq', 'https://donarya.herokuapp.com/')

    // Check local storage data
    cy.window()
      .then(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        expect(user.email).to.eq('omar.melendrez@gmail.com')
        expect(user.fullName).to.eq('Omar Melendrez')
        expect(user.id).to.eq(12)
        expect(user.username).to.eq('omarmele')
      })

    // Go to the other pages
    cy.get('.nav-link')
      .contains('Donaciones')
      .click()

    cy.url()
      .should('include', '/donaciones')

    cy.get('.nav-link')
      .contains('Donar')
      .click()

    cy.url()
      .should('include', '/donar')

    cy.get('#description')
      .type('Test de donacion')
      .should('have.value', 'Test de donacion')

    cy.get('.btn-primary')
      .contains(' Agregar artículo')
      .click()

    cy.get('#title')
      .type('Zapatillas')
      .should('have.value', 'Zapatillas')

    cy.get('.fa-save')
      .click()

    cy.get('.btn-primary')
      .contains(' Agregar artículo')
      .click()

    cy.get('#title')
      .type('Camisa')
      .should('have.value', 'Camisa')

    cy.get('.fa-save')
      .click()

    cy.get('.btn-primary')
      .contains(' Agregar artículo')
      .click()

    cy.get('#title')
      .type('Pantalón')
      .should('have.value', 'Pantalón')

    cy.get('.fa-save')
      .click()

    cy.get('.btn-success')
      .contains('Enviar donación')
      .click()

    cy.get('.alert')
      .should('contain.text', 'Donación enviada. Muchas gracias por su generosidad!')

    cy.get('.nav-link')
      .contains('Donaciones')
      .click()

    cy.url()
      .should('include', '/donaciones')


  })
})