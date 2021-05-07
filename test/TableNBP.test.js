const TableNBP = require("../src/TableNBP.js");
const frisby = require("frisby");

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

// date checks

test("Positive date check scenario", (done) => {
  var date = "2021-05-05";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe(date);
    done();
  };
  tab = new TableNBP(date, got_rate);
});

test("Future date check scenario", (done) => {
  var date = "2043-05-07";
  var today = new Date().toISOString().split("T")[0];
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe(today);
    done();
  };
  tab = new TableNBP(date, got_rate);
});

test("Date before 2nd January 2002", (done) => {
  var date = "12-02-1999";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe("2002-01-02");
    done();
  };
  tab = new TableNBP(date, got_rate);
});

test("Holiday date check", (done) => {
  var date = "12-02-1999";
  got_rate = function (table) {
    expect(table[0].effectiveDate).toBe("2002-01-02");
    done();
  };
  tab = new TableNBP(date, got_rate);
});

// redundancy tests

// test("When setting a code, returns same setted code", () => {
//   test_curr = new TableNBP("PLN", "12-02-2021");
//   expect(test_curr.code).toBe("PLN");
// });

// test("PLN will return 1", () => {
//   test_curr = new TableNBP("PLN", "12-02-2021");
//   expect(test_curr.value).toBe(1);
// });

// test("Redundant TableNBP change", () => {
//   test_curr = new TableNBP("USD", "03-04-2021");
//   test_curr.get("USD", "03-04-2021");
//   expect(test_curr.code).toBe("USD");
// });

// // TableNBP names

// test("TableNBP name for USD", () => {
//   test_curr = new TableNBP("USD", "12-02-2021");
//   expect(test_curr.name).toBe("dolar amerykański");
// });

// test("TableNBP name for EUR", () => {
//   test_curr = new TableNBP("EUR", "12-02-2021");
//   expect(test_curr.name).toBe("euro");
// });

// test("TableNBP name for PLN", () => {
//   test_curr = new TableNBP("USD", "12-02-2021");
//   expect(test_curr.name).toBe("złoty polski");
// });

// // TEST DISABLED, BECAUSE SUCH TableNBP IS NOT AVAILABLE IN NBP API
// // but is left commented, because one day we might expand the available currencies
// // test("TableNBP name for TOP (TableNBP with ' sign in the name)", () => {
// //   test_curr = new TableNBP("USD", "12-02-2021");
// //   expect(test_curr.name).toBe("paʻanga tongijska");
// // });

// // historical data

// test("Check that on 12 February 2021 1 EUR was worth 4.4999 PLN (historical data)", () => {
//   test_curr = new TableNBP("EUR", "12-02-2021");
//   expect(test_curr.value).toBe(4.4999);
// });

// test("Invalid TableNBP change", () => {
//   test_curr = new TableNBP("USD", "03-04-2021");
//   test_curr.get("DUPA", "03-04-2021");
//   expect(test_curr.code).toBe("USD");
// });

// test("Lowercase TableNBP name", () => {
//   test_curr = new TableNBP("usd", "05-01-2021");
//   expect(test_curr.value).toBe(3.7031);
// });

// // zakladam, ze testy sa w formacie DD-MM-YYYY (poprawny format), lub YYYY-MM-DD
// test("Invalid date format YYYY-MM-DD", () => {
//   test_curr = new TableNBP("USD", "2021-04-23");
//   expect(test_curr.date).toBe("23-04-2021");
// });

// test("Invalid date format in words", () => {
//   test_curr = new TableNBP("USD", "2021 jun 16");
//   expect(test_curr.date).toBe("16-06-2021");
// });

// test("Check value for invalid date format", () => {
//   test_curr = new TableNBP("EUR", "2021-04-23");
//   expect(test_curr.value).toBe(4.5649);
// });

// // conversion tests

// test("Changing TableNBP from USD to CHF", () => {
//   test_curr = new TableNBP("USD", "03-04-2021");
//   test_curr.get("CHF", "03-04-2021");
//   expect(test_curr.code).toBe("CHF");
// });

// test("Changing TableNBP from PLN to EUR in a past", () => {
//   test_curr = new TableNBP("PLN", "03-04-2004");
//   test_curr.get("EUR", "03-04-2004");
//   expect(test_curr.code).toBe("EUR");
// });
