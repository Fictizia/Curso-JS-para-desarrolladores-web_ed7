
/*
2 - Crea un Array con 100 numeros enteros al azar. 
Después crea un array para almacenar los números pares y otro array para los impares.

Opcional: Ordena los números pares e impares en sus respectivos arrays

*/

var array = [];

for(i = 0; i < 100; i++){

	var number =  Math.floor(Math.random() * (101- 0)) + 0;
	array[i] = number;
	console.log(i);
}
// creo arrays vacios para luego llenarlo de los valores que cumplan la condición
arrayPares =[];
arrayImpares =[];

function Pares(elem) {
	return elem % 2 === 0 ;
}

function Impares(elem) {
	return elem % 2 !== 0 ;
}

arrayPares = array.filter(Pares);
console.info('numeros pares:' , arrayPares);

arrayImpares = array.filter(Impares);
console.info('numeros impares:' , arrayImpares);




//sort y filter