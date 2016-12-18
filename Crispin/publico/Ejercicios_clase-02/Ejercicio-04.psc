Proceso compararVariosNumeros
	
	Escribir "Dise–a un programa que lea tres nœmeros distintos y nos diga cual de ellos es el mayor."
	Escribir " "//separaci—n
	
	Escribir "Valor 1 ="
	Leer valor_1
	
	Escribir "Valor 2 ="
	Leer valor_2
	
	Escribir "Valor 3 ="
	Leer valor_3
	
	Si (valor_1 > valor_2) & (valor_1 > valor_3) Entonces
		Escribir valor_1 " es mayor."
	Sino
		Si valor_2 > valor_3 Entonces
			Escribir valor_2 " es mayor."
			
		Sino
			Escribir valor_3 " es mayor."
		Fin Si
		
	Fin Si
	
FinProceso
