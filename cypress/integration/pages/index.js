describe("[IO-1] kursybankucentralnego home page", function () {
    beforeEach(function () {
      cy.visit("/");
    });

    it('clicks "Kalkulator" and shows the index', function () {
        cy.contains('Kalkulator').click()
        cy.url().should('equal', 'http://kursybankucentralnego.pl/index.html')
    })

    it('shows view with converter', function () {
      cy.get('div[class="container"]');
      cy.get('div[id="date"]').find('input').should("have.id", "dateInput");
      cy.get('div[class="exchange"]').find('p').first().contains("Przelicz z")
      cy.get('div[class="exchange"]').find('p').last().contains("Przelicz na")
    });

    it('has clickable "Przelicz" button', function () {
        cy.get('button').click();
    })
  });
  