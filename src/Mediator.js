//Mediator design pattern

//S - It's only puropose is to handle communication between objects
//O - Class can be extended in various ways (for example more objects to handle), but modyfying is rather hard 
//L - If there would be any child classes for some reason, they can use static methods freely
//I - There are no interfaces in JavaScript
//D - Once againg, there are no interfaces in JavaScript

class Mediator {
	
	//Creates new mediator with all the objects that it connects
	constructor (source){
		this.left = source.getElementById('dateLeft')
		let parent = this
		this.left.onchange = function () {parent.notify("left", parent.left.value)}
		this.right = source.getElementById('dateRight')
		this.right.onchange = function () {parent.notify("right", parent.right.value)}
		this.chart = new Chart(parent);
		this.canvas = source.getElementById('can')
		this.context = source.getElementById('can').getContext('2d')
		this.select = source.getElementById('currencySelect')
		this.select.onchange = function () {parent.notify('select', parent.select.value)}
		this.code = parent.select.value
		this.span = source.getElementById('dateSpan')
		this.start = this.left.value
		this.end = this.right.value
		this.getChart()
	}
	
	//Function for objects to communicate with the mediator, handles messages
	notify(obj, message){
		switch (obj){
			case "select":
				this.code = message
				this.getChart()
			break;
			case "left":
				this.start = message
				this.getChart()
			break;
			case "right":
				this.end = message
				this.getChart()
			break;
			case "chart":
				if (message != false){
					this.span.innerHTML = ""
					let width = this.canvas.width;
					let height = this.canvas.height;
					this.context.clearRect(0, 0, width, height);
					let max = message.rates[0].mid
					let min = message.rates[0].mid
					for (let i = 1; i < message.rates.length; ++i){
						if (message.rates[i].mid > max){
							max = message.rates[i].mid
						}
						if (message.rates[i].mid < min){
							min = message.rates[i].mid
						}
					}
					let scale = min * 0.99
					max -= scale 
					let size = width / message.rates.length
					for (let i = 0; i < message.rates.length; ++i){
						let column = (message.rates[i].mid - scale) / max * height * 0.9
						this.context.fillRect(i * size + (size * 0.1), height - column, size * 0.8, column)
					}
				} else {
					this.span.innerHTML = "Brak danych dla wybranego zakresu, lub zakres przekracza 93 dni."
				}
			break;
		}
	}
	
	//Checks if all necessary data is provided and getting a chart data if so
	getChart(){
		if (this.start != undefined && this.end != undefined && this.code != undefined){
			this.chart.get(this.start, this.end, this.code)
		}
	}
}

//For testing purposes
var module = module || {};
module.exports = Mediator;