const { addExpectHandler } = require("frisby");

describe("[IO-14] kursybankucentralnego index page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  // it('contains "Kursy Banku Centralnego" in the title', function () {
  //   cy.title().should("contain", "Kursy Banku Centralnego");
  // });

  it('contains navbar', function () {
    cy.get('nav').should("be.visible");
  });

  it('navbar contains four links', function () {
    cy.get('ul').find('li').then($li => {
      expect($li[0]).to.contain.text('Kalkulator')
      expect($li[1]).to.contain.text('Kurs')
      expect($li[2]).to.contain.text('Historia')
      expect($li[3]).to.contain.text('Informacje')
    })})

  it('click all links in navbar', function () {
    cy.get('ul').contains('Kalkulator').click()
    cy.location('pathname').should('eq', '/index.html')
    cy.go('back')
    
    cy.get('ul').contains('Kurs').click()
    cy.location('pathname').should('eq', '/gold.html')
    cy.go('back')
    
    cy.get('ul').contains('Historia').click()
    cy.location('pathname').should('eq', '/chart.html')
    cy.go('back')

    cy.get('ul').contains('Informacje').click()
    cy.location('pathname').should('eq', '/about.html')
    cy.go('back')
  });

  it('shows link to index page', function () {
    cy.get('a[id="logo"]').should('have.attr', 'href').then((href) => {
      cy.visit(href)
    });
  })
})
