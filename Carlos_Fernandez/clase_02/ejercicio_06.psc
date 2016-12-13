Algoritmo sin_titulo
	Escribir "En que mes estamos?"
	Leer mes
	Escribir "Que día es hoy?"
	Leer dia
	Escribir "Precio del producto?"
	Leer precio
	
	Si (mes="Diciembre" || mes="Enero" || mes="Febrero" || mes="Marzo")
		Si (dia!="Viernes" || mes!="Sabado" || mes!="Domingo")
			Escribir "Precio rebajado:", precio-(precio*0.25)
		FinSi
	SiNo
		Escribir "Precio normal:", precio
	FinSi
	

	
FinAlgoritmo
