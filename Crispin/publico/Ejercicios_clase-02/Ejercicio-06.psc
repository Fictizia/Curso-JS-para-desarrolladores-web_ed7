Proceso PrecioProducto
	
	Escribir " Dise–a un programa que aplique al precio de un producto un 25% de descuento cuando estamos en los meses de invierno y no es viernes o fin de semana."
	Escribir " "//separaci—n
	
	Escribir "Precio:"
	Leer precio
	
	Escribir "Posici—n del d’a de la semana:"
	Leer dia
	
	Segun dia Hacer
		1:
			Escribir "Lunes"
			dia=1
		2:
			Escribir"Martes"
			dia=1
			
		3:
			Escribir "Miercoles"
			dia=1
		4:
			Escribir "Jueves"
			dia=1
		5:
			Escribir "Viernes"
			dia=0
		6:
			Escribir "S‡bado"
			dia=0
		7: 
			Escribir "Domingo"
			dia=0
			
		De Otro Modo:
			Escribir "El nœmero introducido no es valido"
			
	Fin Segun
	
	
	Escribir "Mes:"
	Leer mes
	
	Segun mes Hacer
		1:
			Escribir "Enero"
		2:
			Escribir "Febrero"
		3:
			Escribir "Marzo"
		4:
			Escribir "Abril"
		5:
			Escribir "Mayo"
		6:
			Escribir "Junio"
		7:
			Escribir "Julio"
		8:
			Escribir "Agosto"
		9:
			Escribir "Septiembre"
		10: 
			Escribir "Octubre"
		11:
			Escribir "Noviembre"
		12:
			Escribir "Diciembre"
		De Otro Modo:
			Escribir "El nœmero introducido no es valido"
	Fin Segun
	
	
	Si (dia=1)Y(mes>=12 o mes>=3) Entonces
		
			precio_descuento<-precio - (precio*25)/100
			Escribir "Precio con 25% de descuento:", precio_descuento
		
	Sino
		Escribir "Precio: ", precio
		Escribir "Ningœn descuento aplicado."
	Fin Si
	
	
FinProceso