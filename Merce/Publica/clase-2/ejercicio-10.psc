Algoritmo Ejercicio10
	Escribir "Escriba el nœmero del d’a"
	Leer dia
	
	Si (dia > 31 ) O (dia < 1 ) Entonces
		Escribir "El d’a es incorrecto"
	Sino
		Escribir "Escriba el nœmero del mes"
		Leer mes
		
		mmes = ConvertirATexto(mes)
		
		Si (mes > 12 ) O (mes < 1 ) Entonces
			Escribir "El mes es incorrecto"
		Sino
			Si mes<10 Entonces
				mmes = Concatenar("0",mmes)
			FinSi
			
			Escribir "Escriba el nœmero del a–o"
			Leer anyo
			
			Si (anyo > 2020 ) O (anyo < 1900 ) Entonces
				Escribir "El a–o es incorrecto"				
			Sino	
				Escribir dia, "/", mmes, "/", anyo
				Segun mes Hacer
					1:
						mes_texto = "enero"
					2:
						mes_texto = "febrero"
					3:
						mes_texto = "marzo"
					4:
						mes_texto = "abril"
					5:
						mes_texto = "mayo"
					6:
						mes_texto = "junio"	
					7:
						mes_texto = "julio"
					8:
						mes_texto = "agosto"
					9:
						mes_texto = "septiembre"
					10:
						mes_texto = "octubre"
					11:
						mes_texto = "noviembre"	
					De Otro Modo:
						mes_texto = "diciembre"
				Fin Segun
				
				Escribir dia, " de ", mes_texto, " de ", anyo
			FinSi			
		FinSi
	FinSi

	
	
	
	
FinAlgoritmo
