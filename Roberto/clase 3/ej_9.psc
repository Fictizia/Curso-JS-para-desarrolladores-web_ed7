Algoritmo sin_titulo
	tiradas= 1;
	Mientras tiradas< 101 Hacer
		
	
		Escribir "Tirada ", tiradas;
	dado1 = azar(6);	
	dado1= dado1 + 1;
	dado2 = azar(6);	
	dado2= dado1 + 1;	
	Escribir dado1, ", ", dado2;
	suma = dado1 + dado2;
	Escribir "Suma de tirada ", tiradas, ": ", suma;
	Si suma = 10 Entonces
		contador = contador + 1;	
	Fin Si
	
	tiradas = tiradas + 1;
Fin Mientras
Escribir "Ha habido ", contador, " veces que las tiradas han sumado 10";
FinAlgoritmo
