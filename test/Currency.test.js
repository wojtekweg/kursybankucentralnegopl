const Currency = require("../src/Currency.js");

// redundancy tests

test("When setting a code, returns same setted code", () => {
  test_curr = new Currency("PLN", "12-02-2021");
  expect(test_curr.code).toBe("PLN");
});

test("PLN will return 1", () => {
  test_curr = new Currency("PLN", "12-02-2021");
  expect(test_curr.value).toBe(1);
});

test("Redundant currency change", () => {
  test_curr = new Currency("USD", "03-04-2021");
  test_curr.get("USD", "03-04-2021");
  expect(test_curr.code).toBe("USD");
});

// currency names

test("Currency name for USD", () => {
  test_curr = new Currency("USD", "12-02-2021");
  expect(test_curr.name).toBe("dolar amerykański");
});

test("Currency name for EUR", () => {
  test_curr = new Currency("EUR", "12-02-2021");
  expect(test_curr.name).toBe("euro");
});

test("Currency name for PLN", () => {
  test_curr = new Currency("USD", "12-02-2021");
  expect(test_curr.name).toBe("złoty polski");
});

// TEST DISABLED, BECAUSE SUCH CURRENCY IS NOT AVAILABLE IN NBP API
// but is left commented, because one day we might expand the available currencies
// test("Currency name for TOP (currency with ' sign in the name)", () => {
//   test_curr = new Currency("USD", "12-02-2021");
//   expect(test_curr.name).toBe("paʻanga tongijska");
// });

// historical data

test("Check that on 12 February 2021 1 EUR was worth 4.4999 PLN (historical data)", () => {
  test_curr = new Currency("EUR", "12-02-2021");
  expect(test_curr.value).toBe(4.4999);
});

// invalid calls

test("Date before 2nd January 2002", () => {
  test_curr = new Currency("USD", "12-02-1999");
  expect(test_curr.value).toBe(3.948); //value as for 2-02-2002
});

test("Invalid date", () => {
  test_curr = new Currency("USD", "03-04-2021");
  expect(test_curr.value).toBe(3.8986);
});

test("Invalid currency change", () => {
  test_curr = new Currency("USD", "03-04-2021");
  test_curr.get("DUPA", "03-04-2021");
  expect(test_curr.code).toBe("USD");
});

// zakladam, ze testy sa w formacie DD-MM-YYYY (poprawny format), lub YYYY-MM-DD
test("Invalid date format YYYY-MM-DD", () => {
  test_curr = new Currency("USD", "2021-04-23");
  expect(test_curr.date).toBe("23-04-2021");
});

test("Invalid date format in words", () => {
  test_curr = new Currency("USD", "2021 jun 16");
  expect(test_curr.date).toBe("16-06-2021");
});

test("Check value for invalid date format", () => {
  test_curr = new Currency("EUR", "2021-04-23");
  expect(test_curr.value).toBe(4.5649);
});

// conversion tests

test("Changing currency from USD to CHF", () => {
  test_curr = new Currency("USD", "03-04-2021");
  test_curr.get("CHF", "03-04-2021");
  expect(test_curr.code).toBe("CHF");
});

test("Changing currency from PLN to EUR in a past", () => {
  test_curr = new Currency("PLN", "03-04-2004");
  test_curr.get("EUR", "03-04-2004");
  expect(test_curr.code).toBe("EUR");
});
