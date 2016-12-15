//  Diseña un programa que simula cien tiradas de dos dados 
//  y contar las veces que entre los dos suman 10.


Algoritmo ejercicio_9
	
	controlador = 0
	sumaron10 = 0
	
	Mientras controlador < 100 Hacer
		dado1 = azar(7)
		dado2 = azar(7)
		Escribir dado1 + dado2
		
		Si dado1 + dado2 = 10 Entonces
			sumaron10 = sumaron10 + 1
		Fin Si
		
		controlador = controlador + 1
		
	Fin Mientras
	
	Escribir "total coincidencias : " sumaron10
	
FinAlgoritmo
