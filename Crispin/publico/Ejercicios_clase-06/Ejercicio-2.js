/* 2 - Diseña un script que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
*/


var i = 0;

for (var j = 0; j < 100; j++) {

	var dado1 = Math.floor(Math.random() * (7 - 1)) + 1
	var dado2 = Math.floor(Math.random() * (7 - 1)) + 1

	console.log("Dado 1: ", dado1, " - Dado2: ", dado2);

	if (dado1 + dado2 === 10) {
		i++;
	}
}

console.log("Suman 10: ", i, " veces.");