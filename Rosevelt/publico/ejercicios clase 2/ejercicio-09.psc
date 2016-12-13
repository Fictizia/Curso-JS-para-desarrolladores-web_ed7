


//  Dise–a un programa para identificar a los clientes autorizados a entrar a nuestro sistema.

//	caracter’sticas:
//	La palabra clave es "Fictizia mola mucho"
//	Solo existen tres intentos
//	Si se pasan los tres intentos. Se despliega un mensaje informativo.
		


Algoritmo ejercicio_9
	
	contrasena = "fictizia mola mucho"
	intentos = 0
	
	Escribir "dime la contrasena"
	Leer contrasena_ingreasada
	
	Mientras intentos < 3 Hacer
		
		Si contrasena = contrasena_ingreasada Entonces
			Escribir "contrasena correcta"
		Sino
			Escribir "contrasena incorrecta"
		Fin Si
		
		intentos = intentos + 1
		
	Fin Mientras
	
	
	
FinAlgoritmo
