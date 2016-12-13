Algoritmo descuento
	
	Escribir "¿Qué día es?"
	Leer dia
	
	Escribir "¿En qué mes estamos?"
	Leer mes
	
	Escribir "¿Cuál es el precio del producto?"
	Leer precio
	
	Si mes="diciembre" O mes="enero" O mes="febrero" O mes="marzo" Entonces
		Segun dia Hacer
			"lunes":
			"martes":
			"miercoles":
			"jueves":
				precio<-precio-((precio*25)/100)
				Escribir "El precio final del producto con 25 dto. es: ", precio
			De Otro Modo:
				precio<-precio
				Escribir "El precio final del producto es: ", precio
		Fin Segun
	Fin Si	
	
FinAlgoritmo
