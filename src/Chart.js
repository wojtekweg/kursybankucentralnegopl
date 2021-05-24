//Is a mediator object

//S - It's only puropose is to handle connecting to NBP
//O - Class can be extended in various ways, but modyfying is rather hard 
//L - If there would be any child classes for some reason, they can use static methods freely
//I - There are no interfaces in JavaScript
//D - Once againg, there are no interfaces in JavaScript

class Chart {
	
	//Creates new chart with a passed mediator object
	constructor(mediator){
		this.mediator = mediator;
	}
	
	get(start, end, currency){
		
		//Checing if date is good
		if (Chart.check(start, end)){
			
			//Query
			var http = new XMLHttpRequest();
			var parent = this;
			http.open("GET", `http://api.nbp.pl/api/exchangerates/rates/A/${currency}/${start}/${end}`);
			http.onreadystatechange = function () {
				if (http.readyState == 4){
					if (http.status == 200) {
						
						//When everything is ready, sending JSON to mediator
						parent.mediator.notify("chart", JSON.parse(http.responseText))
					} else {
						
						//If sometging is wrong, sending false to mediator
						parent.mediator.notify("chart", false)
					}
				}
			}
			http.send();
		} else {
			
			//If sometging is wrong, sending false to mediator
			this.mediator.notify("chart", false)
		}
	}
	
	//Checking if date is good 
	static check(start, end){
		let left = new Date(start);
		let right = new Date(end);
		if (right < left || right - left > 86400000 * 92){
			return false;
		}
		return true;
	}
}

//For testing purposes
var module = module || {};
module.exports = Chart;