const Currency = require("../src/Currency.js");

test("When setting a code, Currency.get returns same setted code", () => {
  test_curr = new Currency("PLN", 20, "12-02-2021");
  expect(test_curr.code).toBe("PLN");
});

test("Check that on 12 February 2021 1 EUR was worth 4.4999 PLN (historical data).", () => {
  test_curr = new Currency("EUR", 1, "12-02-2021");
  test_curr.convert("EUR", "PLN");
  expect(test_curr.get("PLN", "12-02-2021")).toBe(4.4999);
});

function nextweek() {
  var today = new Date();
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  return nextweek;
}

test("If future date selected, no API request will be sent and no error will be thrown.", () => {
  var the_nextweek = nextweek();
  test_curr = new Currency("EUR", 1, the_nextweek);
  test_curr.convert("EUR", "PLN");
  expect(test_curr.get("PLN", the_nextweek)).toBe(0);
});

test("Setting a same currency will return 1.", () => {
  test_curr = new Currency("EUR", 1, "12-02-2021");
  test_curr.convert("EUR", "EUR");
  expect(test_curr.get("EUR", "12-02-2021")).toBe(1);
});
