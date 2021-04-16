const Currency = require("../src/Currency.js");

test_curr = new Currency("PLN", 20, "12-02-2021");

test("When setting a code, Currency.get returns same setted code ", () => {
  expect(test_curr.get()).toBe("PLN");
});
