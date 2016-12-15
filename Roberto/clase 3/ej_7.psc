Algoritmo cuenta_letras
	contador = 0;
	Escribir "Introduce la letra que quieres contar: ";
	Leer letra;
	Escribir "Introduce la frase: ";	
	Leer  frase;
	frase = Minusculas(frase);
	letra_teclado = Minusculas(letra);
	cantidad_letras = Longitud(frase);
	posicionLetra = 1;
	Para posicionLetra <-1 Hasta cantidad_letras Con Paso 1 Hacer
		letraElegida = SubCadena(frase,posicionLetra,posicionLetra);
		Si letraElegida = letra_teclado Entonces
			contador = contador + 1;				
		Fin Si		
	Fin Para
	Escribir "La letra ", letra_teclado, " sale ", contador, " veces.";
FinAlgoritmo
