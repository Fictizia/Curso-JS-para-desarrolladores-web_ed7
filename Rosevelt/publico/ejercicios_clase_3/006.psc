// Dise–a un programa que imprima la suma de los 50 primeros numeros pares
// y el total de nœmeros impares partiendo de un nœmero dado por el usuario


Proceso contadorEspecial
	Escribir "Dame un nœmero:"
	Leer numero
	
	controlador = 1
	totalImpares = 0
	
	Escribir "Empieza la cuenta!"
	
	Mientras controlador <= 50 Hacer
		
		Si numero % 2 = 0 Entonces
			controlador <- controlador + 1
			totalPares<- totalPares + numero
			numero <- numero + 1
			Escribir numero
		Sino
			totalImpares<- totalImpares + 1
			numero <- numero + 1
		Fin Si
		
	Fin Mientras
	
	Escribir "Total de suma de pares ", totalPares
	Escribir "Total de impares ", totalImpares
	
FinProceso