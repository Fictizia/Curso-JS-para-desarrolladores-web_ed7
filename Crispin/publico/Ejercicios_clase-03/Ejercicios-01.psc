Algoritmo AnoBisiesto
	
	Escribir "Dise–a un programa que nos confirme si un a–o es bisiesto o no. Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100 o puede ser divisble entre 100 y entre 400."
	Escribir " "//separaci—n	

	Escribir "Escribe un A–o:"
	Leer ano
	
	Si ano % 4 = 0 & ano % 100 <> 0 Entonces
		Escribir "Amigo, el a–o " ano " es bisiesto!"
		
	Sino
		
		Si ano % 400 = 0 & ano % 100 = 0 Entonces
			Escribir "El a–o " ano " es bisiesto!"
		Sino
			Escribir "El a–o " ano " no es bisiesto!"
		Fin Si
		
	Fin Si
	
FinAlgoritmo
