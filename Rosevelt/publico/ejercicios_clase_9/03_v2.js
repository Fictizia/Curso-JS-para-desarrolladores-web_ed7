
/*
 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:
Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente. */


 var invitados = [];

	function nuevo(nuevoInvitado){

		if(invitados.indexOf(nuevoInvitado) >=0 ){
			console.info('lo siento ' + nuevoInvitado + ' ya esta registrado' , 'tu asiento es el:' , invitados.indexOf(nuevoInvitado));
		}

		else if ( invitados.indexOf(undefined) > 0 ){
			invitados[invitados.indexOf(undefined)] = nuevoInvitado;
		}

		else{
				
			invitados.push(nuevoInvitado);
		}

	}

	nuevo('Ana');
	nuevo('nuria');
	nuevo('Maria');
	nuevo('Miguel');
	console.warn(invitados);


	function darseDeBaja (nombre){
	 	if(invitados.indexOf(nombre) > 0){
		 	//capturo su posición en el array
		 	eliminar = invitados.indexOf(nombre);
		 	// lo elimina pasandolo a undefined , nadie pierde su indice
		 	delete invitados[eliminar];
		 	invitados[eliminar] = undefined;
		 }else{
		 	console.info('no te peudes dar de baja ' + nombre + ' no estas en la lista');
		 }
	 }

	darseDeBaja ('nuria');
	darseDeBaja ('carla');
	console.info(invitados);
	nuevo('rosevelt');
	nuevo('Ana');

	console.info(invitados);





