

//Diseña un programa que confirme si una fecha es 
//valida y además devuelva la fecha en dos formatos diferentes.
	
//Características:
//	El usuario introduce tres números (día, mes, año)
//	Validar la fecha. En caso de error incluir un mensaje informativo.
//	Después de validar, devolvemos la fecha en formato DD/MM/AAAA
//	Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)


Algoritmo ejercicio_10
	
	
	Escribir "dime el dia"
	Leer dia
	
	Escribir "dime el mes"
	Leer mes
	
	Escribir "dime el dño"
	Leer anio
	
		
		Si dia < 31 Y mes < 13  Entonces
			Escribir "fecha valida"
			
			Si mes = 12 Entonces
				ConvertirATexto(mes) + "de Enero de"
			Fin Si
			
			Escribir "la fecha es: ", mes
			
		Sino
			Escribir "fecha erronea"
		Fin Si
			
	
FinAlgoritmo
