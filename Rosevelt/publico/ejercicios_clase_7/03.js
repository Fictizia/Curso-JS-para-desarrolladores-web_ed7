

// Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.



	var meses =["enero", "febrero", "marzo"];
		if(ahora.getMonth() === 0){
	}

function fecha (dia, mes, anio){
	var ahora = new Date();
	if( dia ===  ahora.getDate() && mes === ahora.getMonth() && anio === ahora.getFullYear() ){

		console.info( "hoy es" , ahora.toLocaleString());

	} else{
		console.warn("fecha incorrecta");
	}

}

fecha(13,0,2017);