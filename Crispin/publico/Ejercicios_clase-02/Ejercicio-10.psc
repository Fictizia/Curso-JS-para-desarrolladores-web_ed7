Algoritmo Fecha
	
	
	Escribir "Escribir un d’a"
	Leer dia
	
	Si dia<=30 Entonces
		Escribir""
	Sino
		Escribir "El nœmero del mes introducido no es v‡lido"
	Fin Si	
	
	Escribir "Escribir un mes"
	Leer mes
	
	Si mes<=12 Entonces
		Escribir""
	Sino
		Escribir "El nœmero del mes introducido no es v‡lido"
	Fin Si
	
	Si mes=2 Entonces
		Si dia>28 Entonces
			Escribir "El nœmero del d’a introducido no es v‡lido"
		Fin Si
	FinSi
	Segun mes Hacer
		1:
			Escribir "Enero"
		2:
			Escribir "Febrero"
		3:
			Escribir "Marzo"
		4:
			Escribir "Abril"
		5:
			Escribir "Mayo"
		6:
			Escribir "Junio"
		7:
			Escribir "Julio"
		8:
			Escribir "Agosto"
		9:
			Escribir "Septiembre"
		10: 
			Escribir "Octubre"
		11:
			Escribir "Noviembre"
		12:
			Escribir "Diciembre"
		De Otro Modo:
			Escribir "El nœmero introducido no es valido"
	Fin Segun
	
	
	Escribir "Escribir una a–o"
	Leer ano
	
	Si (ano>2016)O(ano<0) Entonces
		Escribir "El nœmero del a–o introducido no es v‡lido"
	FinSi
	
	Si (dia<=9) Entonces
		cero_dia=0
	Sino
		cero_dia=null
	Fin Si
	
	Si mes<=9 Entonces
		cero_mes=0
	Sino
		cero_mes=null
	Fin Si	
	
	Escribir cero_dia,dia,"/", cero_mes,mes,"/", ano
	
FinAlgoritmo
