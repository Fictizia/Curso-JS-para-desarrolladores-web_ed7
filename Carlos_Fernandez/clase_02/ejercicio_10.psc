Algoritmo sin_titulo
	
	
	Mientras acceso1 = Falso Hacer
	
		Escribir "Escribe dia"
		Leer dia
			
		Escribir "Escribe mes"
		Leer mes
			
		Escribir "Escribe año"
		Leer year
		
		
		dia = ConvertirATexto(dia)
		mes = ConvertirATexto(mes)
		year = ConvertirATexto(year)
		
		fecha1 = dia + "/" + mes + "/" + year
		
		Si dia > 0 & dia <= 31 & mes > 0 & mes <= 12 & year > 0
			acceso1 = Verdadero
		FinSi
		
	Fin Mientras
	
	Escribir "Tu fecha es:", fecha1
	
	
	Segun mes Hacer
		1:
			mes = "Enero"
		2:
			mes = "Febrero"
		3:
			mes = "Marzo"
		4:
			mes = "Abril"
		5:
			mes = "Mayo"
		6:
			mes = "Junio"
		7:
			mes = "Julio"
		8:
			mes = "Agosto"
		9:
			mes = "Septiembre"
		10:
			mes = "Octubre"
		11:
			mes = "Noviembre"
		12:
			mes = "Diciembre"
	Fin Segun
	
	fecha2 = dia + "/" + mes + "/" + year
	Escribir "Tu fecha es también se puede escribir como:", fecha2	

	
FinAlgoritmo
