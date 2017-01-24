
/*
¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
*/

function tiempo(){
	var inicio = new Date(2016, 11, 29); 
	//inicio = inicio.toLocaleString();
	var hoy = new Date(); 

	var resta = hoy - inicio;

	var totalHoras = Math.floor(resta / ( 60 * 60 * 1000) );
	console.info('horas transcurridas', totalHoras);
}

tiempo();