import {test_converter} from '../../utilities.js'

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
      test_converter('USD', 'PLN', 100, 4)
    });
   
    it('converts 10000 EUR to HUF', function () {
      test_converter('EUR', 'HUF', 10000, 355)
    });

    it('converts 0.5 ISK to PHP', function () {
      test_converter('ISK', 'PHP', 0.5, 0.40)
    });
});