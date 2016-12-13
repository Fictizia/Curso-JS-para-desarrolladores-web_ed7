Algoritmo imprimirNumerosUsuario
	
	Escribir "Ingresa un nœmero"
	Leer numero
	
	contador = 0
	
	Mientras contador < 50 Hacer
		
		Si numero % 2 != 0 Entonces
			Escribir numero
		Fin Si
		
		numero <- numero + 1
		contador <- contador + 1
		
	Fin Mientras
	
FinAlgoritmo
