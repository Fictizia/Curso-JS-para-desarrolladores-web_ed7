Algoritmo compararTresNumeros
	
	Escribir "Primer nœmero"
	Leer valor1
	
	Escribir "Segundo nœmero"
	Leer valor2
	
	Escribir "Tercer nœmero"
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
	
	Escribir "El nœmero mayor es ", nroMayor
	
FinAlgoritmo
