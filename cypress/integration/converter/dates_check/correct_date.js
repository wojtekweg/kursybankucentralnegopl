import moment from 'moment';
import {test_converter, select_date} from '../../utilities.js'


describe("[IO-18] Exchange for correct date", function () {
    beforeEach(function () {
      cy.visit("/");
    });

    it('shows todays date', function() {
        var todays_date = moment().format('YYYY-MM-DD');

        cy.get('input[type="Date"]').invoke('val').then((text) => {
            expect(todays_date).to.equal(text);
    });
    })

    it('converts 100 USD to PLN one day ago', function () {
        select_date(1);

        //cy.wait(1000)
        test_converter('USD', 'PLN', 100, 4)
    });

    it('converts 100 EUR to PLN two and a half year ago', function () {
        select_date(180, 2);

        //cy.wait(1000)
        test_converter('EUR', 'PLN', 100, 5)
    });

    it('converts 100 CHF to PLN ten years ago', function () {
        select_date(0, 10);

        //cy.wait(1000)
        test_converter('CHF', 'PLN', 100, 5)
    });

});