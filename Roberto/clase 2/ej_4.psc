Algoritmo Comparativa_de_numeros
	Escribir "Escribe el primer numero: ";
	Leer numero1;
	Escribir "Escribe el segundo n�mero: ";
	Leer numero2;
	Escribir  "Escribe el tercer n�mero: ";
	Leer numero3;
	Si numero1 > numero2 Entonces
		Si numero1 > numero3  Entonces
			Escribir "El n�mero mayor es ", numero1;
		Sino
			
			Si numero1 = numero3 Entonces
				Escribir "Hay dos n�meros iguales ", numero1, " y ", numero3;	
			Sino
				Escribir "El numero mayor es el ", numero3;				
			Fin Si
		
		Fin Si
	Sino
		Si numero1 = numero2 Entonces
			Si numero1>numero3 Entonces
				Escribir "Hay dos n�meros iguales ", numero1, " y ", numero2;	
			Sino
				Si numero1= numero3 Entonces
					Escribir "Hay tres n�meros iguales ", numero1, ", ", numero2, " y ", numero3;
				Sino
					Escribir "Hay dos n�meros iguales ", numero1, " y ", numero2;	
				Fin Si
			Fin Si
		Sino
			Si numero2 > numero3 Entonces
				Escribir "El n�mero mayor es ", numero2;
			Sino
				Si numero2 = numero3 Entonces
					Si numero1 = numero3 Entonces
						Escribir "Hay tres n�meros iguales ", numero1, ", ", numero2, " y ", numero3;
					Sino
						Escribir "Hay dos n�meros iguales ", numero2, " y ", numero3;
					Fin Si
					
					
				Sino
					Escribir "El n�mero mayor es ", numero3;
				Fin Si
			Fin Si
		Fin Si
		

	Fin Si
FinAlgoritmo
