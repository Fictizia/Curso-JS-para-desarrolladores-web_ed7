Algoritmo Ejercicio7
	Escribir "Escriba una frase:"
	Leer frase
	frase = Minusculas(frase)
	long = Longitud(frase)
	
	Escribir "Escriba la letra que quiere buscar:"
	Leer letra
	letra = Minusculas(letra)
	
	extraida = ""
	contador = 0
	
	Para i<-1 Hasta long Con Paso 1 Hacer
		extraida = SubCadena(frase,i,i)
		
		Si extraida = letra Entonces
			contador = contador + 1
		FinSi
	Fin Para
	
	Escribir "En la frase ", frase, " se han encontrado ", contador, " ", letra "(s)" 
	
FinAlgoritmo
