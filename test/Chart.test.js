const Chart = require("../src/Chart.js");

// static functions

test("Too many days", () => {
  expect(Chart.check("2002-02-01", "2019-02-21")).toBe(false);
});

test("Good amount of days", () => {
  expect(Chart.check("2021-02-01", "2021-02-21")).toBe(true);
});