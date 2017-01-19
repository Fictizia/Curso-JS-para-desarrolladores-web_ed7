//1 - ¿Que fecha será dentro de 30 días?
function fecha30dias(){

	var fecha = new Date();
	fecha.setDate(fecha.getDate()+30);
	
	console.info('Dentro de 30 días será: ' + fecha.toLocaleString());

}

//2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
function verHorasCurso(){

	var msegPorMinuto = 1000 * 60;
	var msegPorHora = msegPorMinuto * 60;
	var msegPorDia = msegPorHora * 24;

	var fechaCurso = new Date('2016/11/29');
	var fechaActual = new Date();

	var intervalo = fechaActual.getTime() - fechaCurso.getTime();

	//obtener días
	var dias = Math.floor(intervalo / msegPorDia );

	//obtener horas
	var horas = Math.floor(intervalo / msegPorHora );

	console.info('Han pasado ' + horas + ' horas desde que empezó el curso el ' + fechaCurso.toLocaleString()); 
	console.info('Han pasado ' + dias + ' dias desde que empezó el curso el ' + fechaCurso.toLocaleString()); 


}

//3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
function verMilisegundos(){

	var msegPorMinuto = 1000 * 60;
	var msegPorHora = msegPorMinuto * 60;
	var msegPorDia = msegPorHora * 24;

	var fechaFin = new Date('2017/02/09');
	var fechaActual = new Date();

	var milisegundos = fechaFin.getTime() - fechaActual.getTime();

	console.info('Quedan ' + milisegundos + ' para terminar el curso');

	var dias = Math.floor(milisegundos / msegPorDia );
	var horas = Math.floor(milisegundos / msegPorHora );

	console.info('En días: ' + dias);
	console.info('En horas: ' + horas);

}

//4 - ¿Que fecha será dentro de un año y 10 horas más?
function calcularFecha(){

	var fechaActual = new Date();

	//sumamos 1 año
	fechaActual.setFullYear(fechaActual.getFullYear()+1);
	
	//sumamos 10 horas
	fechaActual.setUTCHours(fechaActual.getUTCHours()+10);

	console.info('Dentro de un año y 10 horas será: ' + fechaActual.toLocaleString());

}



//5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.
function fechaCompleta(){

	var fecha = new Date();

	var opciones = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'};
    console.log(fecha.toLocaleString("ja-Jpan", opciones));

    console.log(fecha.toLocaleString("ko-Kore", opciones));

}

