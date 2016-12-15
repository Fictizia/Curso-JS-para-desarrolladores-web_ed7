Algoritmo validarFecha
	
	Escribir "Escribe día"
	Leer dia
	
	Si dia<1 O dia>31 Entonces
		Escribir "Día inválido"
	Sino
		Escribir "Escribe mes"
		Leer mes
		
		Si mes<1 O mes>12 Entonces
			Escribir "Mes inválido"
		Sino
			Escribir "Escribe año"
			Leer anio
			
			Si Longitud(anio)<4 O ConvertirANumero(anio)>2016  Entonces
				Escribir "Año inválido"
			Sino
				
				Si dia<10 Entonces
					ndia<-"0"+ConvertirATexto(dia)
				Sino
					ndia<-ConvertirATexto(dia)
				Fin Si
				
				Si mes<10 Entonces
					nmes<-"0"+ConvertirATexto(mes)
				Sino
					nmes<-ConvertirATexto(mes)
				Fin Si

				Escribir ndia, "/", nmes, "/", anio
				
				Segun mes Hacer
					1:
						tmes<-"Enero"
					2:
						tmes<-"Febrero"
					3:
						tmes<-"Marzo"
					4:
						tmes<-"Abril"
					5:
						tmes<-"Mayo"
					6:
						tmes<-"Junio"
					7:
						tmes<-"Julio"
					8:
						tmes<-"Agosto"
					9:
						tmes<-"Septiembre"
					10:
						tmes<-"Octubre"
					11:
						tmes<-"Noviembre"
					De Otro Modo:
						tmes<-"Diciembre"
				Fin Segun
				
				Escribir dia, " de ", tmes, " de ", anio
	
			Fin Si

		Fin Si

	Fin Si
	
FinAlgoritmo
