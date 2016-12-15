
// Diseña un programa que nos confirme si un año es bisiesto o no.
//Caracteristicas de un año bisiesto:
//Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
//O puede ser divisble entre 100 y entre 400 

Algoritmo ejercicio_1
	
	Escribir "dame el anio"
	Leer anio
	
	Si (anio MOD 4 = 0  Y anio/100 > 1 ) O (anio MOD 100 = 0 Y anio MOD 400 = 0 ) Entonces
		Escribir anio , " es bisiesto"
	Sino
		Escribir anio , " no es bisiesto"
	Fin Si
	
	
FinAlgoritmo
