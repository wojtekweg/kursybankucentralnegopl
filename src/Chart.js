class Chart {
	
	constructor(mediator){
		this.mediator = mediator;
	}
	
	get(start, end, currency){
		
		var http = new XMLHttpRequest();
		
		var parent = this;
		
		http.open("GET", `http://api.nbp.pl/api/exchangerates/rates/A/${currency}/${start}/${end}`);
		
		http.onreadystatechange = function () {
			if (http.readyState == 4){
				if (http.status == 200) {
					parent.mediator.notify("chart", JSON.parse(http.responseText))
				}
			}
		}
		
		http.send();
	}
	
}
