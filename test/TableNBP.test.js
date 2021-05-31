const TableNBP = require("../src/TableNBP.js");

// rates table

test("Dollar rate for 07.05.2021", (done) => {
  var dollar_index_for_07_05_2021 = 1;
  res = got_rate = function (table) {
    expect(table[0].rates[dollar_index_for_07_05_2021].mid).toBe(3.7861);
    done();
  };
  tab = new TableNBP("2021-05-07", res);
});

test("Rates table length for 07.05.2021", (done) => {
  got_rate = function (table) {
    expect(table[0].rates.length).toBe(35);
    done();
  };
  tab = new TableNBP("2021-05-07", got_rate);
});

test("Check that on 12 February 2021 EUR currency code was on 7th index", (done) => {
  var euro_index_for_12_02_2021 = 7;
  got_rate = function (table) {
    expect(table[0].rates[euro_index_for_12_02_2021].code).toBe("EUR");
    done();
  };
  tab = new TableNBP("2021-02-12", got_rate);
});

test("Check that on 7 May 2021 USD currency code was on 1st index", (done) => {
  var dollar_index_for_07_05_2021 = 1;
  got_rate = function (table) {
    expect(table[0].rates[dollar_index_for_07_05_2021].code).toBe("USD");
    done();
  };
  tab = new TableNBP("07.05.2021", got_rate);
});

// date checks

test("Positive date check scenario", (done) => {
  var date = "2021-05-05";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe(date);
    done();
  };
  tab = new TableNBP(date, got_rate);
});

/*test("Future date check scenario", (done) => {
  var date = "2043-05-07";
  var today = new Date().toISOString().split("T")[0];
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe(today);
    done();
  };
  tab = new TableNBP(date, got_rate);
});*/

test("Date before 2nd January 2002", (done) => {
  var date = "12-02-1999";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe("2002-01-02");
    done();
  };
  tab = new TableNBP(date, got_rate);
});

test("Holiday date check", (done) => {
  var date = "2021-05-03";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe("2021-04-30");
    done();
  };
  tab = new TableNBP(date, got_rate);
});

test("Holiday date check with year switch", (done) => {
  var date = "2021-01-03";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe("2020-12-31");
    done();
  };
  tab = new TableNBP(date, got_rate);
});

// historical data

test("Check that on 12 February 2021 1 EUR was worth 4.5029 PLN (historical data)", (done) => {
  var euro_index_for_12_02_2021 = 7;
  got_rate = function (table) {
    expect(table[0].rates[euro_index_for_12_02_2021].mid).toBe(4.5029);
    done();
  };
  tab = new TableNBP("2021-02-12", got_rate);
});

// date tests

test("Invalid date format YYYY-MM-DD", () => {
  test_curr = new TableNBP("2021-04-23", got_rate);
  expect(test_curr.date.toISOString().split("T")[0]).toBe("2021-04-23");
});

test("Invalid date format in words", () => {
  test_curr = new TableNBP("USD", "16 June 2021");
  expect(test_curr.date.toString()).toBe("Invalid Date");
});

// static functions

test("Range for date in future returns today's date", () => {
  var date = new Date("2043-05-07");
  var today = new Date();
  expect(TableNBP.range(date).toISOString().split("T")[0]).toBe(
    today.toISOString().split("T")[0]
  );
});

test("Edge date for static range check scenario (today)", () => {
  var today = new Date();
  expect(TableNBP.range(new Date()).toISOString().split("T")[0]).toBe(
    today.toISOString().split("T")[0]
  );
});

test("Edge date for static range check scenario (2 January 2002)", () => {
  var date = new Date("2002-01-02");
  expect(TableNBP.range(date).toISOString().split("T")[0]).toBe("2002-01-02");
});

test("One day before edge date for static range check scenario (1 January 2002)", () => {
  var date = new Date("2002-01-01");
  expect(TableNBP.range(date).toISOString().split("T")[0]).toBe("2002-01-02");
});

test("Date in between for static range check scenario", () => {
  var date = new Date("2009-04-02");
  expect(TableNBP.range(date).toISOString().split("T")[0]).toBe("2009-04-02");
});

test("Date in range before 2nd January 2002", () => {
  var date = new Date("12-02-1999");
  expect(TableNBP.range(date).toISOString().split("T")[0]).toBe("2002-01-02");
});
