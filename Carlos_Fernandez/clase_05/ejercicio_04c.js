var dia = "Lunes";
var mes = "Enero";
var precio = 50;

switch (true){
	case (mes == "Diciembre" || mes == "Enero" || mes == "Febrero" || mes == "Marzo"):
		switch (true){
			case (dia != "Viernes" && dia != "Sabado" && dia!= "Domingo"):
				precio = (precio*0.25) + precio;
				console.log("Tu precio con descuento es:", precio);
				break;
			default:
				console.log("Tu precio es:", precio);
		}
		break;
	default:
		console.log("Tu precio es:", precio);
}
