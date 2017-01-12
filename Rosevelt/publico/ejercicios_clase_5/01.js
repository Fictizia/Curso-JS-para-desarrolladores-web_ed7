
/*
Diseña un algoritmo que lea dos números y los compare. 
Como resultado esperamos que nos diga cual es mayor... o si son iguales. 
*/

function comparar ( num1, num2){

    if(num1 > num2){
        console.info('numero 1 es mayor');
    } else if(num1 < num2){
      console.info('numero 2 es mayor');  
    }
    else{
        console.info('son iguales');
    }
}
comparar(10,20);

//ternario

function comparar ( num1, num2){
    (num1 > num2)? console.info('numero 1 es mayor')
        : (num1 < num2) ? console.info('numero 2 es mayor')
        : console.info('son iguales');

}
comparar(10,20);

//switch

function comparar ( num1, num2){
    switch(true) {
        case (num1 > num2):
            console.info('numero 1 es mayor');
            break;
        case (num1 < num2):
            console.info('numero 2 es mayor'); 
            break;
        default:
            console.info('son iguales');
    }
}
comparar(10,20);
