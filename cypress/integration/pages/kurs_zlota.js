describe("[IO-15] kursybankucentralnego 'Kursy złota' page", function () {
    beforeEach(function () {
      cy.visit("/");
      cy.get('a').contains('Kurs złota').click()
    });

    it('shows that the site is not done yet', function () {
        cy.contains('Strona w budowie')
    })
  });