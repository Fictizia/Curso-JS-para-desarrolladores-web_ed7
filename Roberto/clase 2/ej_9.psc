Algoritmo sin_titulo

	
	
	Para intentos<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Introduce la contrase–a:";
		Leer pwd;
		Si pwd = "hola" Entonces
			Escribir "Contrase–a correcta, bienvenido";
			intentos <-4;
		Sino
			Escribir "Error ", intentos;
			Si intentos=3 Entonces
				Escribir "Contrase–a incorrecta, chao!";
			
			Fin Si
		Fin Si
	Fin Para

	
	
	
FinAlgoritmo
