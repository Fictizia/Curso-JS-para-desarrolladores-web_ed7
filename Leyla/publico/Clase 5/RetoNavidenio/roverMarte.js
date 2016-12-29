// JavaScript Document

function orientar(direccion, orientacion){
	
	'use strict';
	var nuevo = '';
	
	switch (orientacion){
		case 'N':
			if ( direccion === 'izquierda'){
				nuevo = 'W'; 
			} else { 
				nuevo = 'E'; 
			}
			break;
		case 'S':
			if ( direccion === 'izquierda'){
					nuevo = 'E'; 
			} else { 
					nuevo = 'W'; 
			}
			break;
		case 'E':
			if ( direccion === 'izquierda'){
					nuevo = 'N'; 
			} else { 
					nuevo = 'S'; 
			}
			break;
		default: //W
			if ( direccion === 'izquierda'){
					nuevo = 'S'; 
			} else { 
					nuevo = 'N'; 
			}
			break;		
	}
	return nuevo;
	
}

function setup(tamanio, coordenadas, instrucciones){
	
	'use strict';
	var posicionX = 0, posicionY = 0;
	var orientacion = "";
	
	//Obtenemos las coordenadas del rover y las guardamos en variables por separado
	coordenadas = coordenadas.split(" ");
	posicionX = parseInt(coordenadas[0]);
	posicionY = parseInt(coordenadas[1]);
	orientacion = coordenadas[2]; 
	
	//console.log("Coordenadas iniciales: " + posicionX + "," + posicionY + "-" + orientacion);	

	var i;
	var paso = '';
	var direccion = '';
	var eslimite = false;
	
	//Recorremos el array con las instrucciones
	for (i = 0; i < instrucciones.length; i++){
		paso = instrucciones[i];
		//console.log('el paso ' + i +' : ' + paso);
		
		/*
		L - girar 90º izquierda
		R - girar 90º derecha
		M - avanzar uno y mantener posicion
		*/

		if(paso === 'L'){
			direccion = 'izquierda';
			orientacion = orientar(direccion, orientacion);	
			//console.log('Nuevo orientar', orientacion);	
		} else if (paso === 'R'){
			direccion = 'derecha';
			orientacion = orientar(direccion, orientacion);
			//console.log('Nuevo orientar', orientacion);	
		} else {
			//M - avanzar
			//Uso una variable foco para indicar si es que ha llegado al límite del tablero
			//Si aún tiene espacio, el rover avanza; sino, se queda en el mismo sitio y muestra un mensaje
			if(!eslimite){
				switch (orientacion){
					case 'N':
						posicionY = posicionY + 1;
						if(posicionY >= tamanio || posicionY <= 0) eslimite = true;
						break;
					case 'S':
						posicionY = posicionY - 1;
						if(posicionY >= tamanio || posicionY <= 0) eslimite = true;
						break;
					case 'E':
						posicionX = posicionX + 1;
						if(posicionX >= tamanio || posicionX <= 0) eslimite = true;
						break;
					default: //W
						posicionX = posicionX - 1;
						if(posicionX >= tamanio || posicionX <= 0) eslimite = true;
						break;		
				}
			} else {
				console.log("El rover ha llegado al límite, no puede avanzar más...");
			}
		
		}
		
	}
	
	console.log('Coordenadas finales: ' + posicionX + ' ' + posicionY + ' ' + orientacion);
	
}

//setup(5, '1 2 N', ['R', 'M', 'R', 'M', 'M', 'M', 'M', 'M', 'L']);
//setup(3, '0 0 N', ['M', 'M', 'R', 'M', 'M']);
setup(5, '1 2 N', ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);






