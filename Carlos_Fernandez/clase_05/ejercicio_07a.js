function yearLock(year){
	if (year%4 == 0){
		if (year%100 == 0 && year%400 == 0){
			console.log("SI bisiesto");
		}else if (year%100 == 0){
			console.log("NO bisiesto");
		}else{
			console.log("SI bisiesto");
		}
	}else{
		console.log("NO bisiesto");
	}
}

yearLock(2001);