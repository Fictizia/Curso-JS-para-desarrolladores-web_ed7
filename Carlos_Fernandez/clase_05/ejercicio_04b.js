var dia = "Viernes";
var mes = "Diciembre";
var precio = 50;

(mes == "Diciembre" || mes == "Enero" || mes == "Febrero" || mes == "Marzo") ? (
	(dia != "Viernes" && dia != "Sabado" && dia!= "Domingo") ? (
		precio = (precio*0.25) + precio,
		console.log("Tu precio con descuento es:", precio)
	) : (
		console.log("Tu precio es:", precio)
	)
) : (
	console.log("Tu precio es:", precio)
)