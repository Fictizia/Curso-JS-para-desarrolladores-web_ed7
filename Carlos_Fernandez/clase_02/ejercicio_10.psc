Algoritmo sin_titulo
	
	Escribir "Escribe dia"
	Leer dia
		
	Escribir "Escribe mes"
	Leer mes
		
	Escribir "Escribe año"
	Leer year
	
		
	Si (Longitud(dia+mes+year)!=8)		
		Repetir
			Escribir "Has introducido mal la fecha, por favor vuelve a escribirla" 
			Escribir "Escribe dia"
			Leer dia
			
			Escribir "Escribe mes"
			Leer mes
			
			Escribir "Escribe año"
			Leer year			
		Hasta Que Longitud(dia+mes+year)=8
	FinSi
	
	Segun variable_numerica Hacer
		opcion_1:
			secuencia_de_acciones_1
		opcion_2:
			secuencia_de_acciones_2
		opcion_3:
			secuencia_de_acciones_3
		De Otro Modo:
			secuencia_de_acciones_dom
	Fin Segun

	
FinAlgoritmo
