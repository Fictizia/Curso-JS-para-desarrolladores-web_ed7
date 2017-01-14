/*
5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.
*/


function numero(num){
    if(numero < 0){
        console.warn(num, "es negativo");
    }else{
        console.info(num , "es negativo");
    }
}
numero (3);


//ternario
function numero (num){
    (numero < 0)?console.warn(num, "es negativo"): console.info(num , "es positivo");
}
numero(3);


//switch
function numero (num){
    switch(true) {
        case ( num < 0 ):
            console.warn(num, "es negativo");
            break;;
        default:
          console.info(num , "es positivo");
    }
}
numero(3);

