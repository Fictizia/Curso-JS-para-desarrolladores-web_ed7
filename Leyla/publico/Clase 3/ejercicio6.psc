Algoritmo ImprimirSumaPares
	
	Escribir "Ingresa un n�mero"
	Leer numero
	
	contador = 0
	sumaPares = 0
	sumaImpares = 0
	
	Mientras contador < 50 Hacer
		
		Si numero % 2 = 0 Entonces
			sumaPares <- sumaPares + numero
		Sino
			sumaImpares <- sumaImpares + numero
		Fin Si
		
		numero <- numero + 1
		contador <- contador + 1
		
	Fin Mientras
	
	Escribir "Suma n�meros pares: ", sumaPares
	Escribir "Suma n�meros impares: ", sumaImpares
	
	Escribir "El contador: ", contador
	
FinAlgoritmo
