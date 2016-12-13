Algoritmo Ejercicio9
	intento = 1
	
	Mientras intento < 4 Hacer
		Escribir "Intento n¼", intento, ". Escriba la contrase–a de acceso:"
		Leer password
		
		Si password = "Fictizia mola mucho" entonces
			intento = 4
		Sino	
			intento = intento + 1
		FinSi
		
	Fin Mientras
	
	Si password = "Fictizia mola mucho" Entonces
		Escribir "Puede acceder al curso"
	Sino	
		Escribir "Ya no hay m‡s intentos"
	FinSi
	
FinAlgoritmo
