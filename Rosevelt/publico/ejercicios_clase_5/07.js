/*
7 - Diseña un algoritmo que nos confirme si un año es bisiesto o no.
Caracteristicas de un año bisiesto:

Tiene que ser divisible entre 4
No tiene que ser divisible entre 100
Puede ser divisble entre 100 y entre 400
*/


function numero(anio){
    if( (anio % 4 === 0 && anio % 100 > 0)  || (anio % 100 === 0 && anio % 400 === 0) ) {
        console.info(anio, "es bisiesto");
    }else{
        console.info(anio , "no es bisiesto");
    }
}
numero ("2016");


//ternario
function numero (anio){
((anio % 4 === 0 && anio % 100 > 0)  || (anio % 100 === 0 && anio % 400 === 0)) ? console.info(anio, "es bisiesto")
    :console.info(anio , "no es bisiesto");
}
numero(2016);


//switch
function numero (anio){
    switch(true) {
        case ((anio % 4 === 0 && anio % 100 > 0)  || (anio % 100 === 0 && anio % 400 === 0)):
            console.info(anio, "es bisiesto");
            break;;
        default:
            console.info(anio , "no es bisiesto");
    }
}
numero(2016);

