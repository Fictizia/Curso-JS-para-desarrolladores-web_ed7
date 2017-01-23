
/*
 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:
Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente. */

 var invitados = ['Jose' , 'Nacho' , 'Mario' , 'Hector', 'Helena','David'];

	 function darseDeBaja (nombre){
	 	//capturo su posición en el array
	 	eliminar = invitados.indexOf(nombre);
	 	// lo elimina pasandolo a undefined , nadie pierde su indice
	 	delete invitados[eliminar];
	 	invitados[eliminar] = undefined;
	 }

	darseDeBaja ('Nacho');





	function nuevo(nuevoInvitado){

		function siAlguno (elemento){
			return elemento === undefined;
		}

		//nuevoInvitado = nuevoInvitado.toUpperCase();
		if(invitados.indexOf(nuevoInvitado) >=0 ){
			console.info("lo siento ya esta registrado" , "tu asiento es el:" , invitados.indexOf(nuevoInvitado));
		}

		/*usando some
		else if ( invitados.some(siAlguno) ){
			invitados[invitados.indexOf(undefined)] = nuevoInvitado;
		}*/

		else if ( invitados.indexOf(undefined) > 0 ){
			invitados[invitados.indexOf(undefined)] = nuevoInvitado;
		}

		else{
				
			invitados.push(nuevoInvitado);
		}

	}

nuevo("Ana");
nuevo("nuria");
console.log(invitados);






//if asiento es undefined lo meto ahi




var array = [];

for(i = 0; i < 100; i++){
	var number =  Math.floor(Math.random() * (101- 0)) + 0;
	array[i] = number;
	console.log(i);
}

// creo arrays vacios para luego llenarlo con los valores que cumplan la condición
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



