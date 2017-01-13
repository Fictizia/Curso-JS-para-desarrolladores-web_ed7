

//2 - Diseña un script que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.


var controlador = 0;
var sumaronDiez = 0;

while(controlador < 100){

	dado1 = Math.floor(Math.random() * (7 - 0)) + 0;
	dado2 = Math.floor(Math.random() * (7 - 0)) + 0;

	if(dado1 + dado2 === 10){

		sumaronDiez += 1;
	}
	//mi_comprobacion
	console.log(dado1 + dado2);
	//
	controlador++
}

console.log("coincidencias:" , sumaronDiez);