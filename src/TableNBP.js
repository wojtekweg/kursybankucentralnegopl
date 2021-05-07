class TableNBP {
	
	constructor (date, callback){
		this.date = new Date(date);
		this.date = this.range(this.date)
		
		var http = new XMLHttpRequest();
		
		var parent = this;
		
		http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${this.format(this.date)}/`);
		
		http.onreadystatechange = function () {
			if (http.readyState == 4){
				if (http.status == 200) {
					callback(JSON.parse(http.responseText))
				} else {
					parent.date.setDate(parent.date.getDate() - 1)
					http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${parent.format(parent.date)}/`);
					http.send();
				}
			}
		}
		
		http.send();
	}
	
	range(d){
		var start = new Date("2002-01-02")
		var end = new Date()
		if (d < start){
			return start
		}
		if (d > end){
			return end
		}
		return d
	}
	
	format(d){
		var day = d.getDate()
		if (day < 10) {
			day = "0" + day
		}
		var month = d.getMonth() + 1
		if (month < 10) {
			month = "0" + month
		}
		return d.getFullYear() + "-" + month + "-" + day
	}
}