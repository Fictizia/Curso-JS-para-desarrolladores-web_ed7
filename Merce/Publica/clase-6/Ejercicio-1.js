var pass = "Fictizia mola mucho";
var i = 0;

do {
	var passUser = prompt("La contraseña...")
	i++
} while (passUser !== pass && i !== 3)



var pass = "Fictizia mola mucho";
var passUser = "";
var i = 0;

while (passUser !== pass && i < 3) {
	passUser = prompt("La contraseña...");
	console.log(i);
	i++;
}

var pass = "Fictizia mola mucho";
var passUser = "";

for (var i = 0; i < 3; i++) {
  passUser = prompt ("La contraseña...");
  
  if (passUser === pass) {
  	break;
  }
  console.log(i);
}