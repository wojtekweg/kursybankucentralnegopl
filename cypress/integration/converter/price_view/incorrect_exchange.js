describe("[IO-12] Incorrect exchanges tests", function () {
    beforeEach(function () {
      cy.visit("/");
    });

    it('does not accept string input', function () {
      var input_value = 'j* bydgoszcz'
      cy.contains('Przelicz z:').next().within(() => { cy.get('input').clear().type(input_value) });
      cy.get('button').click();
      cy.contains('Przelicz na:').next().within(() => { 
        cy.get('input').invoke('val').should('be.empty')});
    });

    it('does not accept JS parsed input', function () {
        var input_values = ['[true, false]', 'undefined', false, undefined, null]
        for(var i = 0; i < input_values.length; i++){
            cy.contains('Przelicz z:').next().within(() => { cy.get('input').clear().type(String(input_values[i])) });
            cy.get('button').click();
            cy.contains('Przelicz na:').next().within(() => { 
            cy.get('input').invoke('val').should('be.empty')});
        }
      });
});