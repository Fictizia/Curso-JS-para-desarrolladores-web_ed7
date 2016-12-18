Proceso LogIn
	
	Escribir "Dise–a un programa para identificar a los clientes autorizados a entrar a nuestro sistema."
	Escribir " "//separaci—n
	
	contador<-0
	acierto<-Falso
	
	Mientras (contador < 3 Y acierto=falso) Hacer
		
		Escribir "Clave de acceso"
		Leer clave_acceso
		
		Si clave_acceso="Fictizia mola mucho" Entonces
			Escribir "acceso permitido :)"
			acierto<-Verdadero
		Fin Si
		
		contador<-contador+1
		
	Fin Mientras

	Si (contador=3 Y acierto=falso) Entonces
		
		Escribir "Ya no tienes m‡s intentos :("
		
	FinSi
	
FinProceso
