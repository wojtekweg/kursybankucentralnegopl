class Currency {
  constructor(code, name, value, date) {
    this.code = code;
    this.name = name;
    this.value = value;
    this.date = date;
  }
  convert(currency_in, currency_out) {}
  get(code, date) {
    return undefined;
  }
}
module.exports = Currency;