var dia = "Martes";
var mes = "Diciembre";
var precio = 50;

if (mes == "Diciembre" || mes == "Enero" || mes == "Febrero" || mes == "Marzo"){
	if(dia != "Viernes" && dia != "Sabado" && dia!= "Domingo"){
		precio = (precio*0.25) + precio;
		console.log("Tu precio con descuento es:", precio);
	}else{
		console.log("Tu precio es:", precio);
	}
} else {
		console.log("Tu precio es:", precio);
}