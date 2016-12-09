Algoritmo Ejercicio11
	
	
	Mientras (numero < 1) O (numero > 49) Hacer
		Escribir "Escriba un numero del 1 al 50:"
		Leer numero
	Fin Mientras
	
	texto = ConvertirATexto(numero)	
	digitos = Longitud(texto)
	
	Si digitos = 1 Entonces
		unidades = Subcadena(texto,1,1)
	Sino
		decenas = Subcadena (texto,1,1)
		unidades = Subcadena (texto,2,2)
	Fin Si
	
	Si digitos > 1 Entonces
		num_decenas = ConvertirANumero(decenas)
		decenas = ""
	
		Segun num_decenas Hacer
			4:
				decenas = "XL"
			De Otro Modo:
				Para i<-1 Hasta num_decenas Con Paso 1 Hacer
					decenas = Concatenar(decenas,"X")					
					
					i = i + 1
				Fin Para
		Fin Segun
	FinSi
	
	num_unidades = ConvertirANumero(unidades)
	unidades = ""
	
	Segun num_unidades Hacer
		5:
			unidades = "V"
		9:
			unidades = "IX"
		De Otro Modo:	
			Si num_unidades < 5 entonces
				Para i<-1 Hasta num_unidades Con Paso 1 Hacer
					unidades = Concatenar(unidades,"I")
				Fin Para	
			Sino	
				unidades = "V"
				Para i<-6 Hasta num_unidades Con Paso 1 Hacer
					unidades = Concatenar(unidades,"I")
				Fin Para
			FinSi
	Fin Segun
	
	Escribir decenas, unidades
	
FinAlgoritmo