Algoritmo Ejercicio5
	Escribir "Escriba un n�mero para extraer los siguientes n�meros impares:"
	Leer numero
	
	Si (numero MOD 2) = 0 Entonces
		numero <- numero + 1
	Sino 
		numero <- numero + 2
	FinSi
	
	u <- numero + 99
	posicion <- 1
	
	Para i<-numero Hasta u Con Paso 2 Hacer		
		Escribir "N�mero impar n�", posicion," : ",i
		posicion <- posicion + 1
	Fin Para
	
FinAlgoritmo
