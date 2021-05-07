describe("kursybankucentralnego home page", function () {
  beforeEach(function () {
    cy.visit("https://kursybankucentralnego.pl/");
  });

  it('contains "Kursy Banku Centralnego" in the title', function () {
    cy.title().should("contain", "Kursy Banku Centralnego");
  });
});
