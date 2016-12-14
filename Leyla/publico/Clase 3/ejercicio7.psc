Algoritmo contarLetra
	
	Escribir "Ingresa un texto"
	Leer texto
	
	contador = 0
	carTexto = ""
	nroLetras = 0
	
	Mientras contador <= Longitud(texto) Hacer
		
		carTexto <- SubCadena(texto,contador,contador)
		Escribir "Estoy en: ", carTexto
		
		Si carTexto = "o" Entonces
			nroLetras <- nroLetras + 1
		Fin Si
		
		contador <- contador+1
		
	Fin Mientras
	
	Escribir "El número de letra o en el texto es de ", nroLetras
	
	
FinAlgoritmo
