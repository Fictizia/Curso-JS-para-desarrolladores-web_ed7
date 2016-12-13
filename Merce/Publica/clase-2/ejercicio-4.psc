Algoritmo Ejercicio4
	Escribir "Escriba un numero:"
	Leer numero1
	
	Escribir "Escriba otro numero:"
	Leer numero2
	
	Escribir "Escriba otro numero:"
	Leer numero3
	
	Si (numero1>numero2) && (numero1>numero3) Entonces
		Escribir "El primer numero es el mayor de todos"
	Sino 
		Si (numero2>numero3) Entonces
			Escribir "El segundo numero es el mayor de todos"
		Sino
			Escribir "El tercer numero es el mayor de todos"
		FinSi
	FinSi
FinAlgoritmo
