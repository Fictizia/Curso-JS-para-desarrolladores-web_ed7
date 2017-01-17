/* 1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

Usando if...else
*/


//usando if...else

function comparacionNumeros (valor1, valor2){

    if (valor1 > valor2) {
        console.log("El valor 1 es mayor");
    } else if (valor1 < valor2){
        console.log("El valor 1 es menor");
    } else {
        console.log("Valor 1 y valor 2 son iguales!!");
    }
}


//usando operador ternario

function comparacionNumeros (valor1, valor2){

    (valor1 > valor2) ? console.log("El valor 1: (",valor1,") es mayor") 
    : 
    (valor1 < valor2) ? console.log("El valor 2: (",valor2,") es mayor") 
    : 
    console.log("Valor 1 y valor 2 son iguales!!");
    
}

comparacionNumeros (2, 3)


//usando switch

function comparacionNumeros (valor1, valor2){

	switch (true) {
	  case (valor1 > valor2):
	    console.log("El valor 1: (",valor1,") es mayor");
	    break;
	  case (valor1 < valor2):
	    console.log("El valor 2: (",valor2,") es mayor");
	    break;
	  default:
	    console.log("Valor 1 y valor 2 son iguales!!");	}
}
comparacionNumeros (2, 3)
