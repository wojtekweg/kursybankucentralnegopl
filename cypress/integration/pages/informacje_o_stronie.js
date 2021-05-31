describe("[IO-17] kursybankucentralnego 'Informacje o stronie' page", function () {
    beforeEach(function () {
      cy.visit("/");
      cy.get('a').contains('Informacje').click()
    });

    it('shows the info', function () {
        cy.contains("Strona internetowa została stworzona w ramach projektu na potrzeby przedmiotu Inżynieria Oprogramowania. Twórcy: Zofia Błażyca, Wojciech Węgrzyn, Dawid Moza.")
    })
  });