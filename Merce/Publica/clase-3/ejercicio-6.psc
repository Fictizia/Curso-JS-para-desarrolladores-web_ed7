Algoritmo Ejercicio6
	Escribir "Escriba un nœmero:"
	Leer numero
	
	Si (numero MOD 2) = 0 Entonces
		par = VERDADERO
		suma_pares <- numero + 2
		suma_impares <- numero + 1
	Sino
		impar = FALSO
		suma_pares <- numero + 1
		suma_impares <- numero + 2
	FinSi
	
		suma <- "La suma de "	
		Para i<-suma_pares Hasta (suma_pares+99) Con Paso 2 Hacer
			suma <- suma, 
		Fin Para
		
FinAlgoritmo
