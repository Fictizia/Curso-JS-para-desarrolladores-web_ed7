var year = 1973

if (year%4 == 0){
	if (year%100 == 0 && year%400 == 0){
		console.log("SI bisiesto");
	}else{
		if(year%100 == 0){
			console.log("NO bisiesto");}
		else{
			console.log("SI bisiesto");
		}
	}
}else{
	console.log("NO bisiesto");
}