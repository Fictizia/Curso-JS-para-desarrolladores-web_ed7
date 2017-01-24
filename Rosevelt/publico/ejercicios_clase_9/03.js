
/*
 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:
Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.

Opcional: Verifica antes de asignar un asistente que no se registro previamente. */

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

		
		if(invitados.indexOf(nuevoInvitado) >=0 ){
			console.info("lo siento ya esta registrado" , "tu asiento es el:" , invitados.indexOf(nuevoInvitado));
		}

		/*usando some

		function siAlguno (elemento){
			return elemento === undefined;
		}

		else if ( invitados.some(siAlguno) ){
			invitados[invitados.indexOf(undefined)] = nuevoInvitado;
		}
		*/

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




