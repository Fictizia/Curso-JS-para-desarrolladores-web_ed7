//  Diseña un programa que imprima los números impares entre un número dado por el usuario 
//  y los siguientes 50 números.

Algoritmo ejercicio_5
	
	Escribir "dame el numero"
	Leer numero
	
	controlador = 1
	
	Mientras controlador <= 50 Hacer
		
		Si numero % 2 = 0 Entonces  // si es par le suma 1 
			numero <- numero + 1
			controlador <- controlador + 1
		Sino
			Escribir numero //  si es impar lo imprime directamente
			controlador <- controlador + 1
			numero <- numero + 1
		Fin Si

	Fin Mientras
	
	
FinAlgoritmo
