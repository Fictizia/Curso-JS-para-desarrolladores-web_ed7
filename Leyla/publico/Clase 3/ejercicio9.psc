Algoritmo DosDados
	
	Escribir "Iniciando tiradas.."
	
	i = 0
	contadorSuma = 0
	
	Mientras i < 100 Hacer

		Repetir
			dado1 = azar(7)
			dado2 = azar(7)
		Hasta Que dado1!=0 && dado2!=0
		
		Escribir "dado1: ", dado1
		Escribir "dado2: ", dado2
		Escribir "*suma de dados: ", dado1 + dado2
		
		Si dado1 + dado2 = 10 Entonces
			contadorSuma = contadorSuma + 1
		Fin Si
		
		i = i + 1
	
	Fin Mientras
	
	Escribir "Los dados han sumado 10: ", contadorSuma, " veces"
	
	
FinAlgoritmo
