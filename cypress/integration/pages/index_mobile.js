describe("[IO-1] kursybankucentralnego home page", function () {
    beforeEach(function () {
      cy.viewport('iphone-8')
      cy.visit("/");
    });

    it('clicks "Kalkulator" and shows the index', function () {
      cy.contains('Kalkulator').click()
      cy.url().should('equal', 'http://kursybankucentralnego.pl/index.html')
      cy.get('div[class="exchange"]').should('be.visible')
    })

    it('shows view with converter', function () {
      cy.get('div[class="container"]').should('be.visible');
      cy.get('div[id="date"]').should('be.visible').find('input').should("have.id", "dateInput");
      cy.get('div[class="exchange"]').find('p').first().contains("Przelicz z")
      cy.get('div[class="exchange"]').find('p').last().contains("Przelicz na")
    });

    it('has clickable "Przelicz" button', function () {
        cy.get('button').should('be.visible')
        cy.get('button').click();
    })
  });
