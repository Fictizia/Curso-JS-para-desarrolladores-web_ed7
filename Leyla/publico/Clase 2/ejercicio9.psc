Algoritmo identificar
	
	contador<-0
	
	Mientras contador<3 && password!="Fictizia mola mucho" Hacer
		Escribir "Ingresa tu contraseña"
		Leer password
		
		Si password="Fictizia mola mucho" Entonces
			Escribir "Bienvenido!"
		Sino
			Escribir "Contraseña equivocada"
			
			Si contador=2 Entonces
				Escribir "Se ha superado el número de intentos"
			Fin Si
			
		Fin Si
		
		contador<-contador+1
		
	Fin Mientras
	
FinAlgoritmo
