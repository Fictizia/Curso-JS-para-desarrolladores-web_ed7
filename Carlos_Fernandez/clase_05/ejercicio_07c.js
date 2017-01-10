var year = 2300;

switch (true){
	case (year%4 == 0):
		switch (true){
			case (year%100 == 0 && year%400 == 0): 
				console.log("SI bisiesto");
				break;
			case (year%100 == 0): 
				console.log("NO bisiesto");
				break;
			default: 
				console.log("SI bisiesto");
		}
	default:
		console.log("NO bisiesto");
}