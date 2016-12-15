Algoritmo sin_titulo
	
	Escribir "Dime un numero"
	Leer num
	
	contador = 0
	
	Mientras contador <= 50 Hacer
		
		Si num % 2 = 0
			totalPares = totalPares + num
		FinSi
		
		Si num % 2 != 0
			totalImpares = totalImpares + 1
		FinSi
		
		num = num + 1
		contador = contador + 1	
		
	FinMientras
	
	Escribir "Total suma de pares " , totalPares
	Escribir "Total de impares ", totalImpares
	
FinAlgoritmo
