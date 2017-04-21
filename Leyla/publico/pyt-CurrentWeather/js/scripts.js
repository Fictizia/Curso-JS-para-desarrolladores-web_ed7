var keyTiempo = keys.keyTiempo;

//http://api.openweathermap.org/data/2.5/weather?q=Majadahonda,ES&units=metric&APPID=d4b4284682c6e9d52b7991716b8e007c

//http://api.openweathermap.org/data/2.5/forecast/daily?q=Majadahonda,ES&units=metric&appid=d4b4284682c6e9d52b7991716b8e007c

function obtenerIconoViento(grados){

	/*
	N 348.75 - 11.25
	NNE 11.25 - 33.75
	NE 33.75 - 56.25
	ENE 56.25 - 78.75
	E 78.75 - 101.25
	ESE 101.25 - 123.75
	SE 123.75 - 146.25
	SSE 146.25 - 168.75
	S 168.75 - 191.25
	SSW 191.25 - 213.75
	SW 213.75 - 236.25
	WSW 236.25 - 258.75
	W 258.75 - 281.25
	WNW 281.25 - 303.75
	NW 303.75 - 326.25
	NNW 326.25 - 348.75
	*/
	var orientacion = '';
	if ( grados > 11.25 && grados <= 33.75 ){
		orientacion = 'nne';
	} else if ( grados > 33.75 && grados <= 56.25 ) {
		orientacion = 'ne';
	} else if ( grados > 56.25 && grados <= 78.75 ) {
		orientacion = 'ene';
	} else if ( grados > 78.75 && grados <= 101.25 ) {
		orientacion = 'e';
	} else if ( grados > 101.25 && grados <= 123.75 ) {
		orientacion = 'ese';
	} else if ( grados > 123.75 && grados <= 146.25 ) {
		orientacion = 'se';
	} else if ( grados > 146.25 && grados <= 168.75 ) {
		orientacion = 'sse';
	} else if ( grados > 168.75 && grados <= 191.25 ) {
		orientacion = 's';
	} else if ( grados > 191.25 && grados <= 213.75 ) {
		orientacion = 'ssw';
	} else if ( grados > 213.75 && grados <= 236.25 ) {
		orientacion = 'sw';
	} else if ( grados > 236.25 && grados <= 258.75 ) {
		orientacion = 'wsw';
	} else if ( grados > 258.75 && grados <= 281.25 ) {
		orientacion = 'w';
	} else if ( grados > 281.25 && grados <= 303.75 ) {
		orientacion = 'wnw';
	} else if ( grados > 303.75 && grados <= 326.25 ) {
		orientacion = 'nw';
	} else if ( grados > 326.25 && grados <= 348.75 ) {
		orientacion = 'nnw';
	} else {
		orientacion = 'n';
	}
	return orientacion;


}

function obtenerHoraUnixUTC(unixTime){
	// Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	var date = new Date(unixTime*1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();

	//(hours < 10) ? '0' + hours : hours;
	//(minutes < 10) ? '0' + minutes : minutes;

	// Will display time in 10:30:23 format
	return hours + ':' + minutes.substr(-2);
}


function obtenerLiteralDia(dia){


	var literal = '';

	switch (dia){
		case 0: literal = 'Sunday'; break;
		case 1: literal = 'Monday'; break;
		case 2: literal = 'Tuesday'; break;
		case 3: literal = 'Wednesday'; break;
		case 4: literal = 'Thursday'; break;
		case 5: literal = 'Friday'; break;
		default: literal = 'Saturday';
	}

	return literal;
	/*
	var dias = ['Sunday', 'Monday', '...']
	return dia > 0 && dia > 6 ? dias[dia] : "Saturday"
	*/
}

function relativeStimation (data){
	/* data = {
	list = ['dias', et...] // lista de la que convertir la información
	day = 1 //el numero presentado por la api/fecha
	}
	*/

	//var dias = ['Sunday', 'Monday', '...']
	return data.day > 0 && data.day > (data.list.lenght -1) ? data.list[data.day] : data.list[data.list.lenght -1]
}


function obtenerLiteralMes(mes){
	var literal = '';

	switch (mes){
		case 0: literal = 'January'; break;
		case 1: literal = 'February'; break;
		case 2: literal = 'March'; break;
		case 3: literal = 'April'; break;
		case 4: literal = 'May'; break;
		case 5: literal = 'June'; break;
		case 6: literal = 'July'; break;
		case 7: literal = 'August'; break;
		case 8: literal = 'September'; break;
		case 9: literal = 'October'; break;
		case 10: literal = 'November'; break;
		default: literal = 'December';
	}
	return literal;
}


/**************************/


/*Petición AJAX*/
function peticionAjax(url, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
    	if(xmlHttp.readyState === 4){
    		var error, data;

    		if(xmlHttp.status === 200){
    			data = JSON.parse(xmlHttp.responseText)
    		} else{
    			error = JSON.parse(xmlHttp.responseText)
    		}
    		callback(error, data)
    	}
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}


function pintarTiempoHoy(err, data){
	console.log( err ? "Error:" + err : "Datos tiempo:" + data.main.temp);
	//document.getElementById('temperatura').innerHTML = 'El tiempo: ' + data.main.temp;
	document.getElementById('tiempo-descripcion').innerHTML = data.weather[0].main;

	//var claseIconoTiempo = 'icon-' + data.weather[0].icon + '-big';
	var claseIconoTiempo = 'iconSprite-' + data.weather[0].icon;
	var claseBody = 'bg-' + data.weather[0].icon;
	var claseIconoViento = 'icon-' + obtenerIconoViento(Number.parseFloat(data.wind.deg));

	console.log('grados viento: ' + Number.parseFloat(data.wind.deg));

	document.getElementById('iconoHoy').classList.add(claseIconoTiempo);
	document.getElementById('Body').classList.add(claseBody);
	document.getElementById('viento').classList.add(claseIconoViento);

	document.getElementById('temp-actual').innerHTML = Math.floor(data.main.temp);
	/*
	document.getElementById('temp-min').innerHTML = Math.floor(data.main.temp_min);
	document.getElementById('temp-max').innerHTML = Math.floor(data.main.temp_max);
	*/

	document.getElementById('humedad').innerHTML = 'Humidity ' + data.main.humidity + '%';
	document.getElementById('viento').innerHTML = 'Wind ' + data.wind.speed;

	document.getElementById('amanecer').innerHTML = 'Sunrise ' + obtenerHoraUnixUTC(data.sys.sunrise);
	document.getElementById('anochecer').innerHTML = 'Sunset ' + obtenerHoraUnixUTC(data.sys.sunset);


}

function pintarPronostico(err, data){

	console.log( err ? "Error:" + err : "Datos:" + data.city + ',' + data.list.length);

	var listadoDias = data.list;
	var fechaNueva = fechaHoy;
	console.info("Fecha nueva: " + fechaNueva.getDate());

	document.getElementById('temp-min').innerHTML = Math.floor(listadoDias[0].temp.min);
	document.getElementById('temp-max').innerHTML = Math.floor(listadoDias[0].temp.max);

	for ( i = 1 ; i < 6 ; i++ ){
		fechaNueva.setDate(fechaNueva.getDate() + 1);
		console.log('dia: ' + fechaNueva.getDay());
		var dia = (fechaNueva.getDate() < 10) ? '0' + fechaNueva.getDate() : fechaNueva.getDate();
		var mes = (fechaNueva.getMonth() < 10) ? '0' + fechaNueva.getMonth() : fechaNueva.getMonth();
		// MIRAR!  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
/*
		var datosDia = `<li>
			<p class='dia-literal'> ${obtenerLiteralDia(fechaNueva.getDay()).substr(0,3).toUpperCase()}</p>
			<p class='dia-fecha'>${dia} / ${mes}</p>
			....
		</li>`
*/

		var datosDia = '';
		datosDia += "<li>";
		datosDia += "<p class='dia-literal'>" + obtenerLiteralDia(fechaNueva.getDay()).substr(0,3).toUpperCase() + "</p>";
		datosDia += "<p class='dia-fecha'>" + dia + ' / ' + mes + "</p>";
		datosDia += "<span class='icon-" + listadoDias[i].weather[0].icon + "'></span>";
		datosDia += "<div class='dia-temperaturas'>";
		datosDia += "<span class='dia-tempmin'>" + Math.floor(listadoDias[i].temp.min) + "</span> / <span class='dia-tempmax'>" + Math.floor(listadoDias[i].temp.max) + "</span>";
		datosDia += "</div>";
		datosDia += "</li>";

		document.getElementById('listado-dias').innerHTML += datosDia;

	}

}

function pintarLocalidadPais (err, data){

	var localidad = data.city;
	//var region = data.regionName;
	var pais = data.country;
	var codigoPais = data.countryCode;
	var urlTiempo = 'http://api.openweathermap.org/data/2.5/weather?q=' + localidad + ',' + codigoPais + '&units=metric&APPID=' + keyTiempo;
	var urlPronostico = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + localidad + ',' + codigoPais + '&units=metric&appid='+ keyTiempo;

	console.log( err ? "Error:" + err : "Datos:" + data.city + ',' + data.countryCode);

	/*pintamos el lugar*/
	document.getElementById('localidad').innerHTML = localidad;
	document.getElementById('pais').innerHTML = pais;



	peticionAjax(urlTiempo, pintarTiempoHoy);
	peticionAjax(urlPronostico, pintarPronostico);

}



/******************************************/
/*MOSTRAR PANTALLA PARA CAMBIAR A PORTRAIT*/
/******************************************/

function readDeviceOrientation() {

		if (Math.abs(window.orientation) == 90) {
			// Landscape
			document.getElementById('coverLandscape').style.display = "table";
			document.getElementById('listadoContenedor').style.display = "none";
			//document.getElementById('Body').style.overflow = "hidden";

		} else {
			// Portrait
			document.getElementById('coverLandscape').style.display = "none";
			document.getElementById('listadoContenedor').style.display = "table";
			//document.getElementById('Body').style.overflow = "visible";
		}
	}


/* inicializacion....*/

/*PINTAMOS LA FECHA ACTUAL*/
	var fechaHoy = new Date();

	var dia = fechaHoy.getDate();
	var diaSemana = fechaHoy.getDay();
	var diaLiteral = obtenerLiteralDia(diaSemana); // relativeStimation({"day": fechaHoy.getDay(), list: week}) (crear variable de meses fuera...)
	var mes = obtenerLiteralMes(fechaHoy.getMonth()); // relativeStimation({"day": fechaHoy.getMonth(), list: months}) (crear variable de meses fuera...)

	document.getElementById('fechaHoy').innerHTML = diaLiteral + ' ' + dia + ', ' + mes; // MIRAR! https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

peticionAjax("http://ip-api.com/json", pintarLocalidadPais);

window.addEventListener("orientationchange", readDeviceOrientation);

// mirar! -> http://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/

//Mirar! -> https://github.com/Fictizia/Curso-JS-para-desarrolladores-web_ed6/blob/master/otros/buenos_dias_madrid/buenos_dias_madrid.html
// Mirar -> http://api.openweathermap.org/data/2.5/forecast?q=Madrid,es&mode=json&lang=sp&units=metric&APPID=
