
	// Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones

	var nombre = "rosevelt"
	console.time("prueba de tiempo");
		console.log(nombre);
		console.error("Hola en formato error");
		console.warn("Hola en formato alerta");
	console.timeEnd("fin de prueba de tiempo")