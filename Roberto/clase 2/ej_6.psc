Algoritmo sin_titulo
	Escribir "Introduce el precio del producto: ";
	Leer precio;
	Escribir "¿En qué mes estamos?";
	Leer mes;
	Si mes = "Diciembre" O mes = "Enero" O mes ="Febrero" O mes = "Marzo" O mes = "diciembre" O mes = "enero" O mes ="febrero" O mes = "marzo" Entonces
		precio <- precio*0.75;
		Escribir "El precio final es de ", precio;
	Sino
		Escribir "El precio final es de ", precio;
	Fin Si
FinAlgoritmo
