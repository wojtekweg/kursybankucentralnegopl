describe("[IO-4] Today's exchange rate view", function () {
    beforeEach(function () {
      cy.visit("/");
    });

    it('shows the same price for not converted input', function () {
      var input_value = 100
      cy.contains('Przelicz z:').next().within(() => { cy.get('input').clear().type(input_value) });
      cy.get('button').click();
      cy.contains('Przelicz na:').next().within(() => { 
        cy.get('input').invoke('val').should('contain', input_value)});
    });

    it('converts 100 USD to PLN', function () {
      var input_value = 100;
      cy.contains('Przelicz z:').next().within(() => { 
        cy.get('input').clear().type(input_value);
        cy.get('.select').children().select('USD');
      });
      
      cy.get('button').click();
      cy.contains('Przelicz na:').next().within(() => { 
        cy.get('input').invoke('val').then(parseFloat)
          .should('be.gt', 2*input_value)
          .should('be.lt', 6*input_value);
      });
    });
   
    it('converts 10000 EUR to HUF', function () {
      var input_value = 10000;
      cy.contains('Przelicz z:').next().within(() => { 
        cy.get('input').clear().type(input_value);
        cy.get('.select').children().select('EUR');
      });

      cy.contains('Przelicz na:').parent().find('.select').children().select('HUF');
      cy.get('button').click();

      cy.contains('Przelicz na:').next().within(() => { 
        cy.get('input').invoke('val').then(parseFloat)
          .should('be.gt', 200*input_value)
          .should('be.lt', 700*input_value);
      });
    });

    it('converts 0.5 ISK to PHP', function () {
      var input_value = 0.5;
      cy.contains('Przelicz z:').next().within(() => { 
        cy.get('input').clear().type(input_value);
        cy.get('.select').children().select('ISK');
      });

      cy.contains('Przelicz na:').parent().find('.select').children().select('PHP');
      cy.get('button').click();

      cy.contains('Przelicz na:').next().within(() => { 
        cy.get('input').invoke('val').then(parseFloat)
          .should('be.gt', 0*input_value)
          .should('be.lt', input_value);
      });
    });
});