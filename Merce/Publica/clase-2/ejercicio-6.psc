Algoritmo Ejercicio6
	Escribir "ÀCuanto vale el producto?"
	Leer precio
	
	Escribir "ÀEn que mes estamos?"
	Leer mes
	
	Escribir "ÀQue dia de la semana es?"
	Leer dia
	
	Si (mes = "diciembre") O (mes = "enero") O (mes = "febrero") O (mes = "marzo") Entonces
		Escribir "En invierno no realizamos descuentos"
	Sino
		Si (dia = "viernes") O (dia = "sabado") O (dia = "domingo") Entonces
			Escribir "No realizamos descuentos ni en viernes ni en fin de semana"
		Sino	
			rebajado = precio*0.25
			Escribir "El precio del producto rebajado es ", rebajado ,"Û"
		FinSi
	FinSi
FinAlgoritmo
