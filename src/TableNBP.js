class TableNBP {
	
	constructor (date){
		this.date = new Date(date);
		
		var http = new XMLHttpRequest();
		
		var parent = this;
		
		http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${this.format(this.date)}/`);
		
		http.onreadystatechange = function () {
			if (http.readyState == 4){
				if (http.status == 200) {
					this.table = JSON.parse(http.responseText)
				} else {
					parent.date.setDate(parent.date.getDate() - 1)
					http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${parent.format(parent.date)}/`);
					http.send();
				}
			}
		}
		
		http.send();
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