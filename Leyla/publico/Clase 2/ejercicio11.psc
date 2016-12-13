Funcion unidad <- fUnidad ( numero )
	unidad<-numero%10
Fin Funcion

Funcion decena <- fDecena ( numero )
	decena<-trunc(numero/10)
Fin Funcion

Funcion nromano <- fDRomano ( numero )
	
	Segun numero Hacer
		1:
			nromano<-"X"
		2:
			nromano<-"XX"
		3:
			nromano<-"XXX"
		4:
			nromano<-"XL"
		5:
			nromano<-"L"
		De Otro Modo:
			nromano<-""
	Fin Segun
	
Fin Funcion

Funcion nromano <- fURomano ( numero )
	
	Segun numero Hacer
		0:
			nromano<-""
		1:
			nromano<-"I"
		2:
			nromano<-"II"
		3:
			nromano<-"III"
		4:
			nromano<-"IV"
		5:
			nromano<-"V"
		6:
			nromano<-"VI"
		7:
			nromano<-"VII"
		8:
			nromano<-"VIII"
		De Otro Modo:
			nromano<-"IX"
	Fin Segun
	
Fin Funcion


Algoritmo convertirARomano
	
	Escribir "Ingresa un número menor a 50"
	Leer numero
	
	Si numero<=50 Entonces
		Si numero<10 Entonces
			Escribir "El número en romano es ", fURomano(numero)
		Sino
			Escribir "El número en romano es ", fDRomano(fDecena(numero)), fURomano(fUnidad(numero))
		Fin si
	Sino
		Escribir "Debes ingresar un número menor a 50"
	Fin Si

FinAlgoritmo

