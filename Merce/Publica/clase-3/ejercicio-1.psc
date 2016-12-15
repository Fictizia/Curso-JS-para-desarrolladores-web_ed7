Algoritmo Ejercicio1
	Escribir "Escriba el a–o que piense que es bisiesto:"
	Leer numero
	
	Si (numero MOD 4) = 0 Y (numero MOD 100) != 0 Entonces
		Si (numero MOD 100) = 0 Y (numero MOD 400) = 0 Entonces
			Escribir "Es bisiesto"	
		FinSi
	Sino
		Escribir "Va a ser que no lo es"
	FinSi
FinAlgoritmo
