/* 1 - Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:

Objetivos:

Captura el nombre del usuario usando prompt
Pregunta al usuario si desea "comprobar lo rápido que funciona su navegador".
En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
En caso negativo mostraremos un alert informativo.
*/

var nombre = prompt("¿Como te llamas?");
var respuesta = confirm("Hola "+nombre+", ¿quieres comprobar lo rápido que funciona tu navegador?");

if (respuesta === true) {
    console.log("Muy bien!", nombre, "ahora podremos ver lo que tardan los diferentes procesos");
        console.group("velocidad del proceso");

            console.group("grupo console.log");
                console.time("tiempo del grupo console.log");
                    console.log(nombre);
                console.timeEnd("tiempo del grupo console.warn");
            console.groupEnd("");

            console.group("grupo console.info");
                console.time("tiempo del grupo console.info");
                    console.info(nombre);
                console.timeEnd("tiempo del grupo console.info");
            console.groupEnd("");

            console.group("grupo console.warn");
                console.time("tiempo del grupo console.warn");
                    console.warn(nombre);
                console.timeEnd("tiempo del grupo console.warn");
            console.groupEnd("");

        console.groupEnd("");
} else {
    console.log("Has cancelado");
}


