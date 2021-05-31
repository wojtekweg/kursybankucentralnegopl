describe("[IO-16] kursybankucentralnego 'Historia kursów walut' page", function () {
    beforeEach(function () {
      cy.visit("/");
      cy.get('a').contains('Historia kursów').click()
    });

    it('shows the chart', function () {
        cy.get('canvas')
    })
  });