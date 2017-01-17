/* Diseña un algoritmo para calcular el porcentaje de chicos y Chicas en nuestro curso.
Trucos:
Calcular porcentajes (segmento*100)/total
*/

function porcentajeAlumnos(totalChicas, totalChicos){
    'use strict';
    console.group("porcentaje de alumnos");

        var totalAlumnos = totalChicas + totalChicos;
        var porcentajeChicas = (totalChicas*100)/totalAlumnos;
        var porcentajeChicos = (totalChicos*100)/totalAlumnos;

        console.log("El total de alumnos es:", totalAlumnos)

        console.info("El total de chicas es:", totalChicas, " un ", porcentajeChicas, "%");

        console.info("El total de chicos es:", totalChicos, " un ", porcentajeChicos, "%");

    console.groupEnd();   
};

porcentajeAlumnos(2,6);