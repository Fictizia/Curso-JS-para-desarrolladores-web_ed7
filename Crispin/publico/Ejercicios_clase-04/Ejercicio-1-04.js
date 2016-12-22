/* 4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
*/

var nombre = "Hola, soy Crispin";
console.time("presentacion");

    console.group("grupo console.log");
	    console.time("tiempo del grupo console.log");
    	console.log("%c %s", "color: transparent; text-shadow:1px 1px 2px transparent, 0 0 0.2em darkblue; font-size:30px; font-family:fantasy" ,nombre);
    	console.timeEnd("tiempo del grupo console.log");
    console.groupEnd();

    console.group("grupo console.info");
	    console.time("tiempo del grupo console.info");
    	console.info("%c %s", "background-color:#B0E0E6; color: #ffffff;  font-size:30px; font-family:monospace" ,nombre);
    	console.timeEnd("tiempo del grupo console.info");
    console.groupEnd();

    console.group("grupo console.warn");
	    console.time("tiempo del grupo console.warn");
    	console.warn("%c %s", "color: #333; font-size:30px; font-family:monospace" ,nombre);
    	console.timeEnd("tiempo del grupo console.warn");
    console.groupEnd();

console.timeEnd("presentacion");