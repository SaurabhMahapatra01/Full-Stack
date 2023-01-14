// Find the year is leap  year or not

var year = 2021

if(year%4 === 0){
	if(year%100 === 0){
		if(year%400 === 0){
			console.log("The year"+year+"is a Leap year")
		}else{
			console.log("The year"+year+"is not a Leap year")
		}
	}else{
		console.log("The year"+year+"is  a Leap year");
	}
}else{
	console.log("The year"+" "+year+" "+"is not a Leap year");.
}