const Currency = require("/home/wojtek/FrontEnd/kursybankucentralnegopl/src/Currency.js");

test("When setting a code, Currency.get returns same setted code ", () => {
  test_curr = new Currency("PLN");
  expect(test_curr.get()).toBe("PLN");
});
