Algoritmo identificar
	
	contador<-0
	
	Mientras contador<3 && password!="Fictizia mola mucho" Hacer
		Escribir "Ingresa tu contrase�a"
		Leer password
		
		Si password="Fictizia mola mucho" Entonces
			Escribir "Bienvenido!"
		Sino
			Escribir "Contrase�a equivocada"
			
			Si contador=2 Entonces
				Escribir "Se ha superado el n�mero de intentos"
			Fin Si
			
		Fin Si
		
		contador<-contador+1
		
	Fin Mientras
	
FinAlgoritmo
