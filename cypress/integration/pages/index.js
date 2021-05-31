describe("kursybankucentralnego home page", function () {
    beforeEach(function () {
      cy.visit("/");
    });

    it('shows link to index page', function () {
      cy.get('a[id="logo"]').should('have.attr', 'href').then((href) => {
        cy.visit(href)
      });
    });
  });
  