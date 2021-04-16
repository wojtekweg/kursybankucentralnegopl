const Gold = require("../src/Gold.js");
const nextweek = require("./utilities.js");

test("If future date selected, no API request will be sent and no error will be thrown.", () => {
  var the_nextweek = nextweek();
  test_gold = new Gold(1, the_nextweek);
  expect(test_curr.get(the_nextweek)).toBe(0);
});
