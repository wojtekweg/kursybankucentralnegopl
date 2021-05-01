class Chart {
  constructor(start, end, currency_code) {
    this.start = start;
    this.end = end;
    this.currency_code = currency_code;
  }
  get(start, date) {
    return [];
  }
  draw(rates) {}
}

var module = module || {};
module.exports = Chart;
