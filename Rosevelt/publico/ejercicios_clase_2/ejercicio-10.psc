

//Dise�a un programa que confirme si una fecha es 
//valida y adem�s devuelva la fecha en dos formatos diferentes.
	
//Caracter�sticas:
//	El usuario introduce tres n�meros (d�a, mes, a�o)
//	Validar la fecha. En caso de error incluir un mensaje informativo.
//	Despu�s de validar, devolvemos la fecha en formato DD/MM/AAAA
//	Convertimos el n�mero del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)


Algoritmo ejercicio_10
	
	
	Escribir "dime el dia"
	Leer dia
	
	Escribir "dime el mes"
	Leer mes
	
	Escribir "dime el d�o"
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
