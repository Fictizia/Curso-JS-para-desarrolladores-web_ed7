Algoritmo TiradasDados
	
	Escribir "Dise–a un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10."
	Escribir " "//separaci—n
		
    coincidencias <- 0
	contador <- 0
		
	Mientras contador <= 100 Hacer
			
		dado1 <- azar(7)
		dado2 <- azar(7)
		tirada <- dado1 + dado2
			
		Si tirada = 10 Entonces
			coincidencias = coincidencias +1
		Fin Si
			
		contador = contador + 1
			
	Fin Mientras
		
	Escribir "Los dados sumaron 10 un total de " coincidencias " veces"
		    
FinAlgoritmo