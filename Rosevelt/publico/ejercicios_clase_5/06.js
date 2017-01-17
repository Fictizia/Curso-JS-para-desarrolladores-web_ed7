/*
- Diseña un algoritmo que al introducir un número nos diga si es par o impar.
*/


function numero(num){
    if(num % 2 === 0){
        console.warn(num, "es par");
    }else{
        console.info(num , "es impar");
    }
}
numero (3);


//ternario
function numero (num){
    (num % 2 === 0) ? console.warn(num, "es par"): console.info(num , "es impar");
}
numero(3);


//switch
function numero (num){
    switch(true) {
        case ( num % 2 === 0 ):
            console.warn(num, "es par");
            break;;
        default:
          console.info(num , "es impar");
    }
}
numero(4);

