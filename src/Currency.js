class Currency {
  constructor(code, date) {}

  static convert(currency_in, currency_out) {
    return currency_in.value / currency_out.value;
  }

  get(code, date) {
    this.code = code;
    this.date = date;

    if (this.code != "PLN") {
      const http = new XMLHttpRequest();
      http.open(
        "GET",
        `http://api.nbp.pl/api/exchangerates/rates/A/${code.toLowerCase()}/${date}/`
      );
      http.send();

      var parent = this;

      http.onreadystatechange = function () {
        if (http.readyState == 4) {
          parent.value = JSON.parse(http.responseText).rates[0].mid;
          parent.name = JSON.parse(http.responseText).currency;
        }
      };
    } else {
      this.value = 1;
      this.name = "nowy polski złoty";
    }
  }
}

var module = module || {};
module.exports = Currency;
