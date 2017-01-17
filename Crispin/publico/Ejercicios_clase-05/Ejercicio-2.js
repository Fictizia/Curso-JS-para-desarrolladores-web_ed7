/* 2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
*/


//usando if...else
function comparacionNumeros (valor1, valor2, valor3){

    if (valor1 > valor2 && valor1 > valor2) {
        console.log("El valor 1 es mayor");
    } else if (valor1 < valor2 && valor2 > valor3){
        console.log("El valor 2 es mayor");
    } else {
        console.log("Valor 3 es mayor!!");
    }
}
comparacionNumeros (2, 3, 20)



//usando operador ternario
function comparacionNumeros (valor1, valor2, valor3){

    (valor1 > valor2 && valor1 > valor3) ? console.log("El valor 1: (",valor1,") es mayor") 
    : 
    (valor1 < valor2 && valor2 > valor3) ? console.log("El valor 2: (",valor2,") es mayor") 
    : 
    console.log("Valor 3 es mayor!!"); 
}
comparacionNumeros (2, 3, 4)



//usando switch
function comparacionNumeros (valor1, valor2, valor3){

	switch (true) {
	  case (valor1 > valor2 && valor1 > valor3):
	    console.log("El valor 1: (",valor1,") es mayor");
	    break;
	  case (valor1 < valor2 && valor2 > valor3):
	    console.log("El valor 2: (",valor2,") es mayor");
	    break;
	  default:
	    console.log("Valor 3 es mayor!!");	
    }
}
comparacionNumeros (2, 3, 1)
