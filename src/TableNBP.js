//Observer design pattern

//S - It's only puropose is to handle connecting to NBP
//O - Class can be extended in various ways (getting data for more days at once, so user don't need to get new data when date is changed), but modyfying is rather hard 
//L - If there would be any child classes for some reason, they can use static methods freely
//I - There are no interfaces in JavaScript
//D - Once again, there are no interfaces in JavaScript

class TableNBP {
	
	//Creates new object
	constructor (date, callback){
		
		//Check if date is within a good range
		this.date = new Date(date);
		this.date = TableNBP.range(this.date);
		
		//Query
		let http = new XMLHttpRequest();
		let parent = this;
		http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${TableNBP.format(this.date)}/`);
		http.onreadystatechange = function () {
			if (http.readyState == 4){
				if (http.status == 200) {
					
					//When everything is ready, calling the callback function and sending the JSON
					callback(JSON.parse(http.responseText))
				} else {
					
					//Is something is wrong - the date of the previous day is tried
					parent.date.setDate(parent.date.getDate() - 1)
					http.open("GET", `http://api.nbp.pl/api/exchangerates/tables/A/${TableNBP.format(parent.date)}/`);
					http.send();
				}
			}
		}
		http.send();
	}
	
	//Check if date is within a good range
	static range(d){
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
	
	//Formats date object into a string sufficient for a query
	static format(d){
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

//For testing purposes
var module = module || {};
module.exports = TableNBP;