
	// Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.

	var nombre = 'rosevelt'
	console.time('prueba de tiempo');
		console.log(nombre);
		console.error('%c  %s' ,  'background:red ; color:white; font-size:20px' , 'Hola en formato error');
		console.warn('%c  %s' ,  'background:yellow ; color:black; font-size:20px' ,'Hola en formato alerta');
	console.timeEnd('fin de prueba de tiempo')