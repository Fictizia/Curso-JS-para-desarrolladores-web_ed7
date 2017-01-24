
/* 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:
Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:  Verifica antes de asignar un asistente que no se registro previamente. */


 var invitados = [];

	function nuevo(nuevoInvitado){

		// valido si el nombre ya esta en el array y le informo que ya esta registrado y su "asiento"
		if(invitados.indexOf(nuevoInvitado) >=0 ){
			console.info('lo siento ' + nuevoInvitado + ' ya esta registrado' , 'tu asiento es el:' , invitados.indexOf(nuevoInvitado));
		}

		// si hay algun elemento como undefined en el array lo capturo y le asigno al nuevo invitado esa posición
		else if ( invitados.indexOf(undefined) > 0 ){
			invitados[invitados.indexOf(undefined)] = nuevoInvitado;
		}
		// si no simplemente lo añado al final del array
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
		// valido si esta en la lista de invitados
	 	if(invitados.indexOf(nombre) > 0){
		 	eliminar = invitados.indexOf(nombre);
		 	// lo elimino usando delete para que esa posición se quede como indefined , nadie pierde su indice.
		 	delete invitados[eliminar];
		 	// fuerzo el undefined por que me daba error en la consola ¿? // podria sobreescribirlo a otro valor x ejm "asiento vacio"
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





