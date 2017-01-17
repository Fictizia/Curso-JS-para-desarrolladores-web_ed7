/* 5 - Diseña un script que al introducir un numero nos diga si es positivo o negativo.
*/


//usando if...else


function positivoNegativo (valor1){

    var valor1 = prompt("Dime un número")
    if (valor1 < 0) {
        console.log("El número introducido es negativo");
    } else {
        console.log("El número introducido es positivo");
    }
}
positivoNegativo () 



//usando operador ternario

//opcion 1
function positivoNegativo (valor1){
    (valor1 < 0) ? console.log("El número introducido es negativo")
    : 
    console.log("El número introducido es positivo"); 
}
positivoNegativo (-1)

//opcion dos refactorizado
function positivoNegativo (valor1){
    console.log(valor1, (valor1 < 0) ? "El número introducido es negativo" : "El número introducido es positivo"); 
}
positivoNegativo (-1)


//usando switch (no me funciona)
function positivoNegativo (valor1){
    var valor1 = prompt("Dime un número")
    switch (true) {
      case (valor1 < 0):
        console.log("El número introducido es negativo");
        break;
      case (valor1 >= 0):
        console.log("El número introducido es positivo");
}
positivoNegativo (1)