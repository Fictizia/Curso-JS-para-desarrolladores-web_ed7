
//Dise–a un programa que aplique al precio de un producto un descuento 
//cuando se den las siguientes caracteristicas.

//Se aplica un 25% cuando:
//Estamos en los meses de invierno
//Y no es viernes o fin de semana.


Algoritmo ejercicio_6
	
	
	precio = 100
	
	Escribir "numero de mes actual:"
	Leer mes
	
	Escribir "que dia es hoy:"
	Leer dia
	
	//lunes = 1
	//martes = 2
	//miercoles = 3
	//jueves = 4
	//viernes = 5
	//sabado = 6
	//domingo = 7
		
	Si (mes > 11 O  mes < 4) Y (dia !="sabado" Y dia != "domingo") Entonces
		Escribir "el precio es: " ,  precio
		Escribir "con el descuento se ye queda a: " , precio -  (precio*25)/100
	Sino
		Escribir "no cumples los requisitos para el descuento"
	Fin Si

FinAlgoritmo
