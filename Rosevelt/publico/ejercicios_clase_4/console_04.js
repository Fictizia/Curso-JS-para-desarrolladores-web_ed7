
	
	// Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.

	var nombre = 'rosevelt'

	console.group("error");
		console.time; 
		console.error('%c  %s' ,  'background:red ; color:white; font-size:20px' , 'Hola en formato error');
		console.timeEnd();
	console.groupEnd();

	console.group("warning");
		console.time; 
		console.warn('%c  %s' ,  'background:yellow ; color:black; font-size:20px' ,'Hola en formato alerta');
		console.timeEnd();
	console.groupEnd();