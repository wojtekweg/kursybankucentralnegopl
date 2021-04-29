const Gold = require("../src/Gold.js");
const nextweek = require("./utilities.js");

test("If future date selected, no API request will be sent and no error will be thrown", () => {
  var the_nextweek = nextweek();
  test_gold = new Gold(1, the_nextweek);
  expect(test_gold.get(the_nextweek)).toBe(0);
});

test("Price of gold as for 05-01-2021", () => {
  test_gold = new Gold(1, "05-01-2021");
  expect(test_gold.get("05-01-2021")).toBe(231.16);
});

test("Price of gold for the not supported date", () => {
  test_gold = new Gold(1, "01-01-2021");
  expect(test_gold.get("01-01-2021")).toBe(0);
});
