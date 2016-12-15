Algoritmo sin_titulo
	
	
	system_pass = "Fictizia"
	contador = 0
	
	Mientras contador < 3 & acceso = Falso
		Escribir "Introduce tu Contraseña:"
		Leer user_pass
		Si user_pass = system_pass
			acceso = Verdadero
			Escribir "Estas dentro <3"
		FinSi
		contador = contador + 1
	FinMientras
	
	Si contador = 3
		Escribir "Lo siento has agotado los intentos"
	FinSi
	
	
	
FinAlgoritmo
