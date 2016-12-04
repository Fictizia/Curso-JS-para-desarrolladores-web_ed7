Proceso Numeros
	
	Escribir "Dise–a un programa que pida por teclado tres nœmeros. Si el primero es negativo, debe sumar los otros dos. Si no multiplicar‡ los tres numeros y mostrar el resultado final incluyendo una referencia a la operaci—n realizada. "
	Escribir " "//separaci—n
	
	Escribir "Valor 1 ="
	Leer valor_1
	
	Escribir "Valor 2 ="
	Leer valor_2
	
	Escribir "Valor 3 ="
	Leer valor_3
	
	Escribir " "//separaci—n
	Si valor_1 < 0 Entonces
		calculo<- valor_2+valor_3
		Escribir "La suma es:" valor_2 " + " valor_3 " = ", calculo
	Sino
		calculo<-valor_1*valor_2*valor_3
		Escribir "La multiplicaci—n es: " valor_1 " * " valor_2 " * " valor_3 " = ", calculo
	Fin Si
	Escribir " "//separaci—n
	
FinProceso
