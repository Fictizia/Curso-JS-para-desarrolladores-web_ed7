Algoritmo compararTresNumeros
	
	Escribir "Primer n�mero"
	Leer valor1
	
	Escribir "Segundo n�mero"
	Leer valor2
	
	Escribir "Tercer n�mero"
	Leer valor3
	
	Si valor1 > valor2 Entonces
		nroMayor<-valor1
	Sino
		Si valor1 > valor3
			nroMayor<-valor1
		Sino 
			Si valor2 > valor3
				nroMayor<-valor2
			Sino
				nroMayor<-valor3
			FinSi
		FinSi
	Fin Si
	
	Escribir "El n�mero mayor es ", nroMayor
	
FinAlgoritmo
