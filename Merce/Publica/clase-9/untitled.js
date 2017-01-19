//1 - Diseña un script que cuente las veces que aparece una determinada letra en una frase.

var frase = [];
var letra = "";
var contador = 0;
frase = prompt("Introduzca una frase:");
letra = prompt("¿Qué letra desea buscar en esta cadena?");


for (var i = 0; i <= frase.length; i++) {
	if (frase[i] === letra) {
		contador++;
	}
}

console.log("Se han encontrado ", contador, "veces la letra ", letra, "en la frase introducida: ", frase);