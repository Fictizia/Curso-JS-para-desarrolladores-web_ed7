// ¿Qué fecha será dentro de 30 días?
function fechaEn30() {
	var en30 = new Date(2017, 0, 17);
	en30.setDate(en30.getDate() + 30);

	console.log("Será el ", en30);
}

fechaEn30();


// ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
function transcursoHoras() {
	var inicio = new Date(2016, 10, 29);
	var hoy = new Date (2017, 0, 17);
	
	
	var horas = hoy - inicio;

	horas = ((horas / 1000) / 60) / 60;
	console.log("Han pasado", horas, "horas");
	
}

transcursoHoras();

function transcursoDias() {
	var inicio = new Date(2016, 10, 29);
	var hoy = new Date (2017, 0, 17);
	
	
	var dias = hoy - inicio;

	dias = (((dias / 1000) / 60) / 60) / 24;
	console.log("Han pasado", dias, "dias");
	
}

transcursoDias();


// ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

function futuroMs() {
	var fin = new Date(2017, 01, 09);
	var hoy = new Date (2017, 0, 17);
	
	
	var ms = fin - hoy;

	console.log("Faltan", ms, "milisegundos para que termine el curso");	
}

futuroMs();

function futuroHoras() {
	var fin = new Date(2017, 01, 09);
	var hoy = new Date (2017, 0, 17);
	
	
	var horas = fin - hoy;
	horas = ((horas / 1000) / 60) / 60;

	console.log("Faltan", horas, "horas para que termine el curso");	
}

futuroHoras();

function futuroDias() {
	var fin = new Date(2017, 01, 09);
	var hoy = new Date (2017, 0, 17);
	
	
	var dias = fin - hoy;
	dias = (((dias / 1000) / 60) / 60) / 24;

	console.log("Faltan", dias, "dias para que termine el curso");	
}

futuroDias();


// ¿Que fecha será dentro de un año y 10 horas más?
function fechaEn365() {
	var hoy = new Date(2017, 0, 17);
	var en365 = new Date(2017, 0, 17);
	en365.setDate(en365.getDate() + 365 + (10 / 24));

	console.log("Será el ", en365);
}

fechaEn365();

// Imprimir por consola la fecha completa (formato texto) en koreano, japones.
var ahora = new Date();
    console.info(ahora.toLocaleString());

    console.info(ahora.toLocaleString("kr-KR"));
    console.info(ahora.toLocaleString("jp-JP"));







