Algoritmo sin_titulo

	
	
	Para intentos<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Introduce la contraseľa:";
		Leer pwd;
		Si pwd = "hola" Entonces
			Escribir "Contraseľa correcta, bienvenido";
			intentos <-4;
		Sino
			Escribir "Error ", intentos;
			Si intentos=3 Entonces
				Escribir "Contraseľa incorrecta, chao!";
			
			Fin Si
		Fin Si
	Fin Para

	
	
	
FinAlgoritmo
