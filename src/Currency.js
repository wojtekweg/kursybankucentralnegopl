class Currency {
  constructor(code, name, value, date) {
    this.code = code;
    this.name = name;
    this.value = value;
    this.data = data;
  }
  convert(currency_in, currency_out) {}
  get(code, date) {
    return this.code;
  }
}
module.exports = Currency;
