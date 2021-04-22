const frisby = require("frisby");

test("Currency API callback from NBP will be available.", async () => {
  return frisby
    .get("http://api.nbp.pl/api/exchangerates/rates/a/chf/")
    .expect("status", 200);
});

test("Gold price API callback from NBP will be available.", async () => {
  return frisby.get("http://api.nbp.pl/api/cenyzlota/").expect("status", 200);
});
