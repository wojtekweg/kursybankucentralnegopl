class Currency {
  constructor(code, date) {
    this.code = code;
    this.date = date;
  }

  static convert(currency_in, currency_out, money_in) {
    //returns amount of money_in in currency_out currency
    return undefined;
  }

  get(code, date) {
    this.code = code;
    this.date = date;
    var changed = false;
    var invalid_date = true;
    if (invalid_date) {
      changed = true;
      this.date = undefined; //date of day before
      //if date is too old, or from future, get the eldest avaiable, or the newest one
      //if currency is not aviable by 2-01-2002, and sufficent date wasn't found - set value to nan
    }
    if (changed) {
      //inform somehow
    }
    this.name = undefined; //getname
    this.value = undefined; //exchange rate
  }
}

/*function getSite(url){
        const http = new XMLHttpRequest();
        http.open("GET", url);
        http.send();
        return http;
    }
    
    site = getSite('http://api.nbp.pl/api/exchangerates/rates/a/chf/');
    site.onreadystatechange = function () {
        if (site.readyState == 4){
            doc = JSON.parse(site.responseText).rates[0].mid;
            document.write(doc)
        }
    }
*/

module.exports = Currency;
