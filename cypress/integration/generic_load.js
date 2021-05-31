const { addExpectHandler } = require("frisby");

describe("kursybankucentralnego index page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it('contains "Kursy Banku Centralnego" in the title', function () {
    cy.title().should("contain", "Kursy Banku Centralnego");
  });

  it('contains navbar', function () {
    cy.get('nav').should("be.visible");
  });

  it('navbar contains four links', function () {
    cy.get('ul').find('li').then($li => {
      expect($li[0]).to.contain.text('Kalkulator')
      expect($li[1]).to.contain.text('Kurs')
      expect($li[2]).to.contain.text('Historia')
      expect($li[3]).to.contain.text('Informacje')
    })

    // cy.get('ul').then(items => {
    //   expect(items[0]).to.contain.text('Kalkulator')
    //   expect(items[1]).to.contain.text('Kurs')
    //   expect(items[2]).to.contain.text('Historia')
    //   expect(items[3]).to.contain.text('Informacje')
    // })

    // cy.get('ul').eq(0).should("contain.text", 'Kalkulator');
    // cy.get('ul').eq(1).should("contain.text", 'Kurs');
    // cy.get('ul').eq(2).should("contain.text", 'Historia');
    // cy.get('ul').eq(3).should("contain.text", 'Informacje');
  });

  it('shows link to index page', function () {
    cy.get('a[id="logo"]').should('have.attr', 'href').then((href) => {
      cy.visit(href)
    });
  });
});
