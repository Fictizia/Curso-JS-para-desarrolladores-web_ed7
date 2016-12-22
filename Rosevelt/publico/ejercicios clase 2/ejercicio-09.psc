


//  Dise–a un programa para identificar a los clientes autorizados a entrar a nuestro sistema.
//	caracter’sticas:
//	La palabra clave es "Fictizia mola mucho"
//	Solo existen tres intentos
//	Si se pasan los tres intentos. Se despliega un mensaje informativo.
		


Algoritmo ejercicio_9
	
	contrasena = "fictizia"
	acierto = Falso
	intentos = 0
	
	Mientras intentos < 3  Y acierto = Falso Hacer
		Escribir "dime la contrasena"
		leer contrasenaUsuario
		
		Si contrasena = contrasenaUsuario  Entonces
			Escribir "contrasena correcta"
			acierto = Verdadero
		Sino
			Escribir "contrasena incorrecta"
		Fin Si
		
		intentos = intentos + 1
		
	Fin Mientras
	
	Si intentos >= 3 Entonces
		Escribir "has superado los tres intentos"
	Fin Si
	
FinAlgoritmo






