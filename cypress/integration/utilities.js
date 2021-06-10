import moment from 'moment';


export function test_converter(currency_in, currency_out, money_amount, expected_rate, error_range=2) {
    cy.contains('Przelicz z:').next().within(() => { 
      cy.get('input').clear().type(money_amount);
      cy.get('.select').children().select(currency_in);
    });
  
    cy.contains('Przelicz na:').parent().find('.select').children().select(currency_out);
    cy.get('button').click();
  
    cy.contains('Przelicz na:').next().within(() => { 
      cy.get('input').invoke('val').then(parseFloat)
        .should('be.gt', (expected_rate / error_range) * money_amount)
        .should('be.lt', (expected_rate * error_range) * money_amount);
    });
  }

export function select_date(delta_days=0, delta_years=0) {
    var future_date = moment().subtract(delta_days, 'days').subtract(delta_years, 'years');  // MM/DD/YYYY
    var isWeekend = (future_date.day() === 6) || (future_date.day()  === 0);
        
    cy.get('input[type="Date"]').type(future_date.format('YYYY-MM-DD')) //.type('{enter}')
    cy.get('button').click();

    if (isWeekend) {
        cy.contains('Data została zmieniona na najnowszą poprzednią dostępną')
    }
    else {
        cy.get('input[type="Date"]').invoke('val').then((text) => {
            expect(future_date.format('YYYY-MM-DD')).to.equal(text)
        })
    }
}