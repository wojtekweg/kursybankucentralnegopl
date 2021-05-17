class Chart {
	
	constructor(mediator){
		this.mediator = mediator;
	}
	
	get(start, end, currency){
		console.log("xd")
		
		/*var http = new XMLHttpRequest();
		
		var parent = this;
		
		http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${TableNBP.format(this.date)}/`);
		
		http.onreadystatechange = function () {
			if (http.readyState == 4){
				if (http.status == 200) {
					callback(JSON.parse(http.responseText))
				} else {
					parent.date.setDate(parent.date.getDate() - 1)
					http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${TableNBP.format(parent.date)}/`);
					http.send();
				}
			}
		}
		
		http.send();*/
	}
	
}
