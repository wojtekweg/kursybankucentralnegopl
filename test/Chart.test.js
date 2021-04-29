const Chart = require("../src/Chart.js");

test("For a date range with one day, only one value will be returned in chart.", () => {
  start = "12-02-2021";
  end = "13-02-2021";
  test_chart = new Chart(start, end, "PLN");
  expect(test_chart.get.length).toBe(1);
});

test("For an invalid date range chart won't return anything (and all errors will be handled).", () => {
  start = "12-02-2021";
  end = "10-02-2021";
  test_chart = new Chart(start, end, "PLN");
  expect(test_chart.get.length).toBe(0);
});

test("For a very long date range chart will load properly.", () => {
  start = "01-01-2002";
  end = "29-04-2021";
  test_chart = new Chart(start, end, "PLN");
  expect(test_chart.get.length).toBe(7058);
});
