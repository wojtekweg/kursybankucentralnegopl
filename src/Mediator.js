//Mediator design pattern
class Mediator {
	
	constructor (source){
		this.start = undefined
		this.end = undefined
		this.left = source.getElementById('dateLeft')
		let parent = this
		this.left.onchange = function () {parent.notify("left", parent.left.value)}
		this.right = source.getElementById('dateRight')
		this.right.onchange = function () {parent.notify("right", parent.right.value)}
		this.chart = new Chart(parent);
		this.c = source.getElementById('can').getContext('2d')
	}
	
	notify(obj, message){
		switch (obj){
			case "left":
				this.start = message
				this.getChart()
			break;
			case "right":
				this.end = message
				this.getChart()
			break;
			case "chart":
				
				/*var height = 150
				var max = 5
				var column = 3.14 / max * height
				c.fillRect(0, height - column, 30, column)*/
			break;
		}
	}
	
	getChart(){
		if (this.start != undefined && this.end != undefined){
			this.chart.get(this.start, this.end, "USD")
		}
	}

}