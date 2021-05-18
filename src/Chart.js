class Chart {
	
	constructor(mediator){
		this.mediator = mediator;
	}
	
	get(start, end, currency){
		if (Chart.check(start, end)){
			var http = new XMLHttpRequest();
			var parent = this;
			http.open("GET", `http://api.nbp.pl/api/exchangerates/rates/A/${currency}/${start}/${end}`);
			http.onreadystatechange = function () {
				if (http.readyState == 4){
					if (http.status == 200) {
						parent.mediator.notify("chart", JSON.parse(http.responseText))
					} else {
						parent.mediator.notify("chart", false)
					}
				}
			}
			http.send();
		} else {
			this.mediator.notify("chart", false)
		}
	}
	
	static check(start, end){
		let left = new Date(start);
		let right = new Date(end);
		if (right < left || right - left > 86400000 * 92){
			return false;
		}
		return true;
	}
}