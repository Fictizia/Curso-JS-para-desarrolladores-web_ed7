
/*
Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
*/

function averiguarMayor ( num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        console.info('numero 1 es mayor');
    } else if(num2 > num3){
      console.info('numero 2 es mayor');  
    }
    else{
        console.info('numero 3 es mayor');
    }
}
averiguarMayor(10,20,30);

//ternario

function averiguarMayor ( num1, num2, num3){
    (num1 > num2 && num1 > num3)? console.info('numero 1 es mayor')
        : (num2 > num3) ? console.info('numero 2 es mayor')
        : console.info('numero 3 es mayor');

}
averiguarMayor(10,20,30);

//switch

function averiguarMayor ( num1, num2, num3){
    switch(true) {
        case (num1 > num2 && num1 > num3):
            console.info('numero 1 es mayor');
            break;
        case (num2 > num3):
            console.info('numero 2 es mayor'); 
            break;
        default:
            console.info('numero 3 es mayor');
    }
}
averiguarMayor(10,20,30);
