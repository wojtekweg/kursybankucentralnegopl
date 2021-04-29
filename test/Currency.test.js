const Currency = require("../src/Currency.js");

test("When setting a code, returns same setted code", () => {
  test_curr = new Currency("PLN", "12-02-2021");
  expect(test_curr.code).toBe("PLN");
});

test("Checking if currency name is good", () => {
  test_curr = new Currency("USD", "12-02-2021");
  expect(test_curr.name).toBe("dolar amerykański");
});

test("Check that on 12 February 2021 1 EUR was worth 4.4999 PLN (historical data).", () => {
  test_curr = new Currency("EUR", "12-02-2021");
  expect(test_curr.value).toBe(4.4999);
});

test("PLN will return 1", () => {
  test_curr = new Currency("PLN", "12-02-2021");
  expect(test_curr.value).toBe(1);
});

test("Date before 2nd January 2002", () => {
  test_curr = new Currency("USD", "12-02-1999");
  expect(test_curr.value).toBe(3.948); //value as for 2-02-2002
});

test("Invalid date", () => {
  test_curr = new Currency("USD", "03-04-2021");
  expect(test_curr.value).toBe(3.8986);
});

test("Changing currency", () => {
  test_curr = new Currency("USD", "03-04-2021");
  test_curr.get("CHF", "03-04-2021");
  expect(test_curr.code).toBe("CHF");
});
