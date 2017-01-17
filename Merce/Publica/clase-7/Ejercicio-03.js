function fecha(){

	var dia = parseInt(prompt("Introduce un día:")),
	mes = parseInt(prompt("Introduce un mes:")),
	anyo = parseInt(prompt("Introduce un anyo:"));

	switch(true) {
    case (dia === 31 && mes === 04 || mes === 06 || mes === 09 || mes === 11) :
		console.log("El día de ese mes no es correcto");
    break;
	
	case (mes === 02 && dia === 29 || dia === 30) :
			console.log("El día de ese mes no es correcto");	
	break;	
	
	case (mes > 12 || mes < 1) :
		console.log("Ese mes no es correcto");
	break;
    
    default:
			break;
	}
}

fecha(); 