Algoritmo calcularPorcentajeHM
		
	Escribir "Nro de mujeres"
	Leer cantMujeres
	
	Escribir "Nro de hombres"
	Leer cantHombres
	
	cantAlumnos<-cantMujeres+cantHombres
	porcentajeH<-(cantHombres*100)/cantAlumnos
	porcentajeM<-(cantMujeres*100)/cantAlumnos
	
	Escribir "Porcentaje de hombres: ", porcentajeH, "%"
	Escribir "Porcentaje de mujeres: ", porcentajeM, "%"
	
FinAlgoritmo
