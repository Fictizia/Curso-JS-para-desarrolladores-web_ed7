
//CLASE 8 - Ejercicio cadena
function contarLetra(frase, letra){

	var contador = 0;

	for( i = 0 ; i < frase.length ; i++ ){

		if( frase.charAt(i) === letra ){
			contador++;
		}

	}

	return contador;

}
contarLetra('Fictizia','i');

//CLASE 9
/*1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...]
de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]*/
function juntarArreglos(){

	var array1 = ['Oscar', 'Luis', 'Victor'];
	var array2 = [9897667, 748484, 878787];
	var array3 = [false, true, true];

	var nuevo = [];
	
	for( i = 0 ; i < array1.length ; i++){
		
		var hijonuevo = [];
		
		hijonuevo[0] = array1[i];
		hijonuevo[1] = array2[i];
		hijonuevo[2] = array3[i];

		nuevo[i] = hijonuevo;
	
	}

	console.log(nuevo);

}

/*
2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.
*/
function obtenerNumero(){

	var numero = Math.floor(Math.random()*101);
	return numero;
}

function crearArray(){

	var miArray = [];
	var arrayPares = [];
	var arrayImpares = [];
	var contPares = 0;
	var contImpares = 0;

	//llenar array con 100 números aleatorios
	for (i = 0; i < 100; i++) {
		miArray[i] = obtenerNumero();
	}

	//llenar array de números pares/impares
	for( i = 0 ; i < miArray.length ; i++){
		if(miArray[i] % 2 === 0){
			arrayPares[contPares] = miArray[i];
			contPares++;
		}else{
			arrayImpares[contImpares] = miArray[i];
			contImpares++;
		}	
	}

	console.log(arrayPares);
	console.log(arrayImpares);

}

/*
3 - Vamos a gestionar la lista de asistentes de un evento.

Características:

Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente.
*/
var listaAsistentes = [];
var cont = 0;

function buscarAsistente(array,nombre){

	for(i = 0; i < array.length ; i++){
		if( array[i] === nombre ){
			return i;
		}
	}
	return -1;

}

function buscarVacio(array){

	for(i = 0; i < array.length ; i++){
		if( array[i] === undefined ){
			return i;
		}
	}
	return -1;

}

function eliminarAsistente(nombre){

	var pos = buscarAsistente(listaAsistentes, nombre);

	if(pos === -1){
		console.info('No se ha encontrado al asistente');
	}else {
		delete listaAsistentes[pos];
		console.info('El asistente ha sido dado de baja');
	}

}

function agregarAsistente(nombre){

	var pos = buscarAsistente(listaAsistentes, nombre);

	if(pos === -1){//no está registrado

		var posvacio = buscarVacio(listaAsistentes);//buscamos un lugar vacio(undefined)

		if(posvacio === -1){//si no hay un vacío
			listaAsistentes[cont] = nombre;
			cont++;
		}else{
			listaAsistentes[posvacio] = nombre;
		}
		
	}else{
		console.info('El asistente ya está registrado');
	}
	console.info(listaAsistentes);

}