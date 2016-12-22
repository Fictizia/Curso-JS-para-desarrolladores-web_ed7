/* 2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
Especificaciones:
Imprimir tu nombre usando console.log, console.info, console.warn
*/

var nombre = "Hola, soy Crisp\241n";
    console.time("presentacion");
    console.log(nombre);
    console.info(nombre);
    console.warn(nombre);
    console.timeEnd("presentacion");