
//=============
//Ejercicio 1
//=============

//forma 1
function comparar(numero1, numero2){
	if ( numero1 === numero2 ){
		console.log("Los números son iguales");
	} else if ( numero1 > numero2 ) {
		console.log("El número 1 es mayor");
	} else {
		console.log("El número 2 es mayor");
	}
}
comparar(10,20);

//forma 2
function comparar (numero1,numero2){
	(numero1 > numero2) ? console.log("El número 1 es mayor")
		: (numero1 < numero2) ? console.log("El número 2 es mayor")
		: console.log("Los números son iguales");
}
comparar(10,20);

//forma 3
function comparar (numero1,numero2){
	switch (true){
		case (numero1 > numero2):
			console.log("El número 1 es mayor");
			break;
		case (numero2 > numero1):
			console.log("El número 2 es mayor");
			break;
		default:
			console.log("Los números son iguales");
	}
}
comparar(10,20);

//=============
//Ejercicio 2
//=============

//forma 1
function fTresNumeros (valor1, valor2, valor3) {

	if ( valor1 > valor2 && valor1 > valor3 ){
		console.log(valor1, "es mayor ");
	} else if ( valor2 > valor3 ){
		console.log(valor2, "es mayor");
	} else {
		console.log(valor3, "es mayor");
	} 

}
fTresNumeros (1,20,3);

//forma 2
function fTresNumeros (valor1, valor2, valor3) {
	(valor1 > valor2 && valor1 > valor3 ) ? console.log( valor1, "es mayor" )
		: valor2 > valor3 ? console.log( valor2, "es mayor")
		: console.log(valor3, "es mayor");

}
fTresNumeros (1,20,3);

//forma 3
function fTresNumeros (valor1, valor2, valor3) {
    switch (true){
        case (valor1 > valor2 && valor1 > valor3):
            console.info(valor1, "es mayor.");
            break;
        case (valor2 > valor3):
            console.info(valor2, "es mayor.");
            break;
        default:
            console.info(valor3, "es mayor.");
    }
}
fTresNumeros (1,20,3);

//=============
//Ejercicio 3
//=============

//forma 1
function fCalculoTresNumeros (valor1, valor2, valor3) {
	if (valor1 < 0){
		console.log("Suma", valor2 + valor3);
	} else {
		console.log("Producto", valor1*valor2*valor3);
	}

}
fCalculoTresNumeros(2,3,4);

//forma 2
function fCalculoTresNumeros (valor1, valor2, valor3) {
	(valor1 < 0) ? console.log("Suma", valor2 + valor3) : console.log("Producto", valor1*valor2*valor3);
}
fCalculoTresNumeros(2,3,4);

//forma 3
function fCalculoTresNumeros (valor1, valor2, valor3) {
	switch (true){
        case (valor1 < 0):
            console.log("Suma", valor2 + valor3);
            break;
        default:
            console.log("Producto", valor1*valor2*valor3);
    }
}
fCalculoTresNumeros(2,3,4);

//=============
//Ejercicio 4
//=============

//forma 1
function fAplicarDescuento(precio, dia, mes){

	if( mes === "diciembre" || mes === "enero" || mes === "febrero" || mes === "marzo" ){
		
		if (dia != "viernes" && dia != "sábado" && dia != "domingo") {
			precio = precio - ((precio*25)/100);
			console.log("Se ha aplicado un 25% dto. El precio final del producto es de: " + precio);
		} else {
			console.log("El precio final del producto es de: " + precio);
		}

	}else{
		console.log("El precio final del producto es de: " + precio);
	}

}
fAplicarDescuento(25, "lunes", "marzo");

//forma 2
function fAplicarDescuento(precio, dia, mes){

	( (mes === "diciembre" || mes === "enero" || mes === "febrero" || mes === "marzo") && (dia != "viernes" && dia != "sábado" && dia != "domingo") )
		? console.log("Se ha aplicado un 25% dto. El precio final del producto es de: " + (precio - ((precio*25)/100)))
		: console.log("El precio final del producto es de: " + precio);

}
fAplicarDescuento(25, "lunes", "marzo");

//forma 3
function fAplicarDescuento(precio, dia, mes){

	switch(true){
		case ( (mes === "diciembre" || mes === "enero" || mes === "febrero" || mes === "marzo") && (dia != "viernes" && dia != "sábado" && dia != "domingo") ):
			console.log("Se ha aplicado un 25% dto. El precio final del producto es de: " + (precio - ((precio*25)/100)));
			break;
		default:
			console.log("El precio final del producto es de: " + precio);
	}

}
fAplicarDescuento(25, "lunes", "marzo");

//=============
//Ejercicio 5
//=============

//forma 1
function fEsPositivo (valor1){
	if ( valor1<0 ){
		console.log("es negativo");
	} else {
		console.log("es positivo");
	}
}
fEsPositivo (5);

//forma 2
function fEsPositivo (valor1){
	valor1 < 0 ? console.log("es negativo") : console.log("es positivo");
}
fEsPositivo (5);

//forma3
function fEsPositivo (valor1){
	switch (true){
        case (valor1 < 0):
            console.log("es negativo");
            break;
        default:
            console.log("es positivo");
    }	
}
fEsPositivo (5);


//=============
//Ejercicio 6
//=============

//forma 1
function esParImpar(numero){
	if( numero % 2 === 0)
		console.log("Es un número par");
	else 
		console.log("Es un número impar");
}
esParImpar(10);

//forma 2
function esParImpar(numero){
	(numero % 2 === 0) ? console.log("Es un número par") : console.log("Es un número impar");
}
esParImpar(10);

//forma 3
function esParImpar(numero){
	switch(true){
		case (numero % 2 === 0): 
			console.log("Es un número par");
			break;
		default:
			console.log("Es un número impar")
	}
}
esParImpar(10);

//=============
//Ejercicio 7
//=============

//forma 1
function esBisiesto(anio){

	if( anio%4 === 0 && anio%100 !== 0 || anio%400 === 0 && anio%100 === 0 ){
		console.log("Es un año bisiesto");
	}else{
		console.log("No es un año bisiesto");
	}

}
esBisiesto(2016);

//forma 2
function esBisiesto(anio){
	( anio%4 === 0 && anio%100 !== 0 || anio%400 === 0 && anio%100 === 0 ) ? console.log("Es un año bisiesto") : console.log("No es un año bisiesto");
}
esBisiesto(2016);

//forma 3
function esBisiesto(anio){
	switch(true){
		case ( anio%4 === 0 && anio%100 !== 0 || anio%400 === 0 && anio%100 === 0 ):
			console.log("Es un año bisiesto");
			break;
		default:
			console.log("No es un año bisiesto");
	}
}
esBisiesto(2016);








