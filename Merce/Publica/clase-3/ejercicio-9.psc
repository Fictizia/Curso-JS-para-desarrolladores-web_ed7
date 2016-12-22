Algoritmo Ejercicio9
	Escribir "Se van a lanzar dos dados:"

		contador = 0
		
		Para i<-1 Hasta 100 Con Paso 1 Hacer
			
		dado1 <- azar(7)
		dado2 <- azar(7)
			
		Si dado1 + dado2 = 10 Entonces
			contador = contador + 1
		FinSi
		
		Escribir "Resultado tirada n¼", i, ": ", dado1, "+", dado2, "=", dado1+dado2
	
	Fin Para
		
	Escribir "Se han contado ", contador, " tiradas de dados que suman 10"		
	
FinAlgoritmo
