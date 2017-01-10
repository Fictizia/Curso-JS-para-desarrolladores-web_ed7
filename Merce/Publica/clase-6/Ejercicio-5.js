var i = 0;
var i = prompt("Escriba un número");
var fin = 50 + i;

do {
	if (i % 2 !== 0) {
		console.log(i);	
	}
	i++;
} while (i <= fin);



var i = 0;

while (i <= 100) {
	if (i % 2 === 0) {
		console.log(i);
		}
	i++;
}



for (var i = 0; i <= 100; i = i+2) {
	console.log(i);
}