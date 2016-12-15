Algoritmo sin_titulo
	Escribir "Introduce un numero: ";
	Leer num;
	Si num MOD 4 = 0 && num MOD 100 != 0 Entonces
		Escribir "Este a–o es bisiesto";
	Sino
		Si num % 100 = 0 && num % 400 = 0 Entonces
			Escribir "Este a–o es bisiesto";
		Sino
			Escribir "Este a–o no es bisiesto";
		Fin Si
	Fin Si
FinAlgoritmo
