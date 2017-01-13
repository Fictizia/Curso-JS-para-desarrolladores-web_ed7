
/*
 Retorna un entero aleatorio entre min (incluido) y max (excluido)
 sintaxis:     Math.floor(Math.random() * (11 - 0)) + 0;
 Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
 */

function azar(){

var moneda =  Math.floor(Math.random() * (3 - 1)) + 1;

	if( moneda % 2 === 0){
		console.log("cara");
	}else{
			console.log("cruz");
	}
}

azar();
