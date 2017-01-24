var stringer = "Lorem Ipsum es simplemente el texto de relleno";
var longitud = stringer.length;
var numero_de_es = 0;

for(var i = 0; i < longitud; i++){
	if (stringer.substr(i,1) == "e"){
		numero_de_es ++;
	}
}

console.log(numero_de_es);