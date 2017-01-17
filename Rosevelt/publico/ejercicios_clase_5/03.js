/*
Diseña un script que siga el siguiente proceso:

Si el primero es negativo, debe sumar los otros dos
Sino multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
*/

function numeros (num1 , num2, num3){
    if(num1 < 0){
        console.log ("la suma del segun do mas el tercero es:", num2 + num3);

    }else{
       console.log ("la multiplicación de los tres numeros es:", num1 * num2 * num3);
    }
}
numeros(5,10,15);

//ternario

function numeros (num1 , num2, num3){
	(num1 < 0)? console.log ("la suma del segun do mas el tercero es:", num2 + num3)
		: console.log ("la multiplicación de los tres numeros es:", num1 * num2 * num3);
}
numeros(5,10,15);


//switch

function numeros (num1 , num2, num3){

   switch(true) {
        case (num1 < 0):
            console.log ("la suma del segun do mas el tercero es:", num2 + num3);
            break;
        default:
        	console.log ("la multiplicación de los tres numeros es:", num1 * num2 * num3);

    }
 }
numeros(5,10,15);