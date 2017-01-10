
/*
 Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.
Trucos: Calcular porcentajes (segmento*100)/total
*/

//
	var mujeres = 2;
	var hombres = 6;
	var total = 8;

	console.info("\"las mujeres son el\" ", (mujeres*100)/total ,"%") ;
	console.info("\"las mujeres son el\" ", (hombres*100)/total ,"%") ;
	console.info("\"total alumnos\" ", total) ;


// como funcion ( profe )

  function porcentajeAlumnos(totalHombres, totalMujeres){
        var totalAlumnos = totalHombres + totalMujeres;
        var porcentajeMujeres = (totalMujeres*100)/totalAlumnos;
        var porcentajeHombres = (totalHombres*100)/totalAlumnos;

        console.info("El total de alumnos es:", totalAlumnos)

        console.log("El total de mujeres es:", totalMujeres);
        console.info("El % de mujeres es:", porcentajeMujeres);

        console.log("El total de hombres es:", totalHombres);
        console.info("El % de hombres es:", porcentajeHombres);
    };

    porcentajeAlumnos(6,2);
