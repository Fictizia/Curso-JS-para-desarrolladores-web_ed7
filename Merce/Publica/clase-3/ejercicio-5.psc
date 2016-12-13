Algoritmo Ejercicio5
	Escribir "Escriba un nœmero para extraer los siguientes nœmeros impares:"
	Leer numero
	
	Si (numero MOD 2) = 0 Entonces
		numero <- numero + 1
	Sino 
		numero <- numero + 2
	FinSi
	
	u <- numero + 99
	posicion <- 1
	
	Para i<-numero Hasta u Con Paso 2 Hacer		
		Escribir "Nœmero impar n¼", posicion," : ",i
		posicion <- posicion + 1
	Fin Para
	
FinAlgoritmo
