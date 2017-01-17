/* 2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
*/


//usando if...else
function jugarConNumeros (valor1, valor2, valor3){

    if (valor1 < 0) {
        console.log("El valor 1 es negativo vamos a sumar valor2 y valor3 que tiene como resultado:", valor2, "+",valor3, "=", valor2+valor3);
    } else {
        console.log("El valor 1 es positivo vamos a multiplicar todos los valores", valor1,"*",valor2,"*",valor3, "=",valor1*valor2*valor3);
    }
}
jugarConNumeros (2, 3, 20)



//usando operador ternario
function jugarConNumeros (valor1, valor2, valor3){

    (valor1 < 0) ? console.log("El valor 1 es negativo vamos a sumar valor2 y valor3 que tiene como resultado:", valor2, "+",valor3, "=", valor2+valor3)
    : 
    console.log("El valor 1 es positivo vamos a multiplicar todos los valores", valor1,"*",valor2,"*",valor3, "=",valor1*valor2*valor3); 
}
jugarConNumeros (2, 3, 4)



//usando switch (no se porqué me falla)
function jugarConNumeros (valor1, valor2, valor3){

	switch (true) {
	  case (valor1 < 0):
	    console.log("El valor 1 es negativo vamos a sumar valor2 y valor3 que tiene como resultado:", valor2+valor3);
	    break;
	  default:
	    console.log("El valor 1 es positivo vamos a multiplicar todos los valores", valor1*valor2*valor3);
}
jugarConNumeros (2, 3, 1)

