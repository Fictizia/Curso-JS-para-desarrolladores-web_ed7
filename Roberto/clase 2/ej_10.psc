Algoritmo sin_titulo
	Escribir "Introduce el d’a:";
	Leer dia;
	Escribir "Introduce el mes:";
	Leer mes;
	Escribir "Introduce el a–o:";
	Leer year;
	Si dia <= 0 O mes<=0 O year<=0 Entonces
		Escribir "Has introducido campos incorrectos";
	Sino
		Si dia >31 Entonces
			Escribir "El d’a es incorrecto";
		Sino
			Si mes>12 Entonces
				Escribir "El mes es incorrecto";
			Sino
				Si year<1900 Entonces
					Escribir  "El a–o tiene que ser mayor a 1900";
				Sino
					Escribir dia, "/", mes,"/", year;
					Si mes=1 Entonces
						nombreMes<-"Enero";	
					Fin Si
					Si mes=2 Entonces
						nombreMes<-"Febrero";	
					Fin Si
					Si mes=3 Entonces
						nombreMes<-"Marzo";	
					Fin Si
					Si mes=4 Entonces
						nombreMes<-"Abril";	
					Fin Si
					Si mes=5 Entonces
						nombreMes<-"Mayo";	
					Fin Si
					Si mes=6 Entonces
						nombreMes<-"Junio";	
					Fin Si
					Si mes=7 Entonces
						nombreMes<-"Julio";	
					Fin Si
					Si mes=8 Entonces
						nombreMes<-"Agosto";	
					Fin Si
					Si mes=9 Entonces
						nombreMes<-"Septiembre";	
					Fin Si
					Si mes=10 Entonces
						nombreMes<-"Octubre";	
					Fin Si
					Si mes=11 Entonces
						nombreMes<-"Noviembre";	
					Fin Si
					Si mes=12 Entonces
						nombreMes<-"Diciembre";	
					Fin Si
					Escribir  dia, " de ", nombreMes, " de ", year;
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	
	
	
	
	
	
	
	
FinAlgoritmo
