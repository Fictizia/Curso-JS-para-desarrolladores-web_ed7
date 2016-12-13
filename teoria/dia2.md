# Clase 2

### Importante: 

Puente la próxima semana. Próxima clase el Martes día 13.

### Importante: Open Souce Weekends

![img](https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/b/8/1/c/highres_455807132.jpeg)


Meetup para amantes del Open Source. Nos reunimos una mañana de sábado al mes para crear cosas alucinantes.


- [**Apuntate!**](https://www.meetup.com/es-ES/Open-Source-Weekends/events/235616954/)
- [**Grupo de Slack**](https://invitations-osweekends.herokuapp.com/)
- [**Facebook**](https://www.facebook.com/osweekends)
- [**Twitter**](https://twitter.com/os_weekends)

### Pseudocódigo

> El pseudocódigo (o falso lenguaje) es una descripción de alto nivel compacta e informal del principio operativo de un programa informático u otro algoritmo.

> Utiliza las convenciones estructurales de un lenguaje de programación real, pero está diseñado para la lectura humana en lugar de la lectura mediante máquina, y con independencia de cualquier otro lenguaje de programación. Normalmente, el pseudocódigo omite detalles que no son esenciales para la comprensión humana del algoritmo, tales como declaraciones de variables, código específico del sistema y algunas subrutinas. *Fuente: [Wikiwand](http://www.wikiwand.com/es/Pseudoc%C3%B3digo)*

**Partes:**
- Definición del Problema:
 - Entrada (Datos de Entrada)
 - Proceso (Modificaciones)
 - Salida (Datos finales)
- Cabecera:
 - Variables, Constantes, etc...
- Cuerpo:
 - Inicio, Instrucciones, Fin


**PSeInt:**

![PSeInt_logo](http://pseint.sourceforge.net/logo-header.png)

> ...una invitación a entrar en el maravilloso mundo de la programación...

- [Descargar](http://pseint.sourceforge.net/descargas.php)
- [Noticias](http://pseint.sourceforge.net/index.php?page=noticias.php)
- [Documentacion](http://pseint.sourceforge.net/index.php?page=documentacion.php)
- [Exportar](http://pseint.sourceforge.net/index.php?page=psexport.html)


**Trabajando con PSeInt**

- No utilizaremos:
  - Arreglos
  - Objetos
  - Definición explícita
  - Expresiones coloquiales
  - Exportaciones

**Variables:**
- Numéricos
 - Enteros
 ```
  -123, 12, 0...
 ```
 - Reales
 ```
  1.75, 3.1415...
 ```

- Carácter (cadenas)
```
	'texto', "más textos..."
```
- Lógico (Boleanos)
```
	VERDADERO o FALSO
```

**Expresiones:**
- Operadores
- Funciones


**Acciones Secuenciales:**
-  Asignación
```
	(variable)<-(expresion);
	
	// Otra opción
	(variable) = (expresión); 
```
-  Lectura (asignacion desde el ambiente)
```
	Leer (variable)
```
-  Escritura (muestra en el ambiente)
```
	Escribir (variable)
```
-  Otras
```
	// Limpiar ventana
	Borrar Pantalla; 
	// Simulacion evento tecla
	Esperar tecla; 
	// Parar temporalmente
	Esperar (numero) Segundos; 
```

**Estructuras de control:**
- Condicionales:
  - Simple (if)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Fin Si
  ```
  - Valor por defecto (if... else)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Sino
		(acciones_por_falso)
	Fin Si
  ``` 
  - Casos (Switch)
  ```
	Segun (variable_numerica) Hacer
		(opcion_1):
			(secuencia_de_acciones_1)
		(opcion_2):
			(secuencia_de_acciones_2)
		(opcion_3):
			secuencia_de_acciones_3)
		De Otro Modo:
			(secuencia_de_acciones_dom)
	Fin Segun 
  ```
- Bucles:
  - Mientras (while)
  Solo si se cumple la condicion se ejecutará
  ```
	Mientras (expresion_logica) Hacer
		(secuencia_de_acciones)
	Fin Mientras
  ```
  - Para (for)
  Se ejecutará un número limitado de veces.
  ```
	Para (variable_numerica)<-(valor_inicial) Hasta (valor_final) Con (Paso) paso Hacer
		(secuencia_de_acciones)
	Fin Para
  ```
  - Repetir (Do... While)
  Se ejecuta una vez al menos.
  ```
	Repetir
		(secuencia_de_acciones)
	Hasta Que (expresion_logica)
  ```


### Diagramas de flujo

> El diagrama de flujo o diagrama de actividades es la representación gráfica del algoritmo o proceso. Se utiliza en disciplinas como programación, economía, procesos industriales y psicología cognitiva.

> Estos diagramas utilizan símbolos con significados definidos que representan los pasos del algoritmo, y representan el flujo de ejecución mediante flechas que conectan los puntos de inicio y de fin del proceso. *Fuente: [Wikiwand](https://www.wikiwand.com/es/Diagrama_de_flujo)*


- **Teoría**
![img_simbolos](https://image.jimcdn.com/app/cms/image/transf/dimension=480x10000:format=jpg/path/s37cc796afdd27ec2/image/ib9531583fa25cd50/version/1367814535/image.jpg)


- **Ejemplo**
![img_diagrama](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DiagramaFlujoLampara.svg/440px-DiagramaFlujoLampara.svg.png) 


**Demostración:**
- Problema:
 - Objetivo: Calcular el área de un triángulo
 - Fórmula: (base*altura)/2

- Solución:
 - Pseudocódigo:
 ```
 Proceso areaTriangulo
 	altura<-4
 	base<-6
 	resultado<-(base*altura)/2
 	Escribir "El resultado es ", resultado
 FinProceso
 ``` 
 - Código:
 ```javascript
 	var altura = 4;
 	var base = 6;
 	var resultado = (base*altura)/2;
 	console.log("El resultado es ", resultado);
 ```

### Ejercicios

**1 -** Diseña un programa que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto
```
Proceso calculosVarios
	Escribir "El primer numero:"
	Leer valor1
	
	Escribir "El segundo segundo numero:"
	Leer valor2
	
	// Suma
	calculo <- valor1+valor2
	Escribir "El valor de la suma es: ", calculo
	
	// Resta
	calculo <- valor1-valor2
	Escribir "El valor de la resta es: ", calculo
	
	// División
	calculo <- valor1/valor2
	Escribir "El valor de la división es: ", calculo
	
	// Multiplicación
	calculo <- valor1*valor2
	Escribir "El valor de la multiplicación es: ", calculo
	
FinProceso
```

**2 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
Proceso porcentajeAlumnos
	Escribir "El número de mujeres:"
	Leer cantidadMujeres
	
	Escribir "El número de hombres:"
	Leer cantidadHombres
	
	// Suma
	totalAlumnos <- cantidadHombres + cantidadMujeres
	Escribir "El total de alumnos es: ", totalAlumnos
	
	// Porcentaje mujeres
	porcentajeMujeres <- (cantidadMujeres*100)/totalAlumnos
	Escribir "El total de mujeres es: ", cantidadMujeres
	Escribir "El % de mujeres es: ", porcentajeMujeres
	
	// Porcentaje hombres
	porcentajeHombres <- (cantidadHombres*100)/totalAlumnos
	Escribir "El total de hombres es: ", cantidadHombres
	Escribir "El % de hombres es: ", porcentajeHombres

FinProceso
```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
Proceso compararNumeros
	Escribir "El primer número:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Si valor1 > valor2 Entonces
		Escribir valor1, " es mayor"
	Fin Si
	
	Si valor1 < valor2 Entonces
		Escribir valor2, " es mayor"
	Fin Si
	
	Si valor1 = valor2 Entonces
		Escribir "son iguales"
	Fin Si
	
FinProceso
```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
Proceso compararVariosNumeros
	Escribir "El primer número:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Escribir "El tercer valor:"
	Leer valor3
	
	Si (valor1 > valor2) & (valor1 > valor3) Entonces
		Escribir valor1, " es mayor"
	Sino
		Si valor2 > valor3 Entonces
			Escribir valor2, " es mayor"
		Sino
			Escribir valor3, " es mayor"
		Fin Si
	Fin Si
	
FinProceso
```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
	Proceso jugandoConNumeros
	    Escribir "El primer número:"
	    Leer valor1
		
	    Escribir "El segundo valor:"
	    Leer valor2
		
		Escribir "El tercer valor:"
	    Leer valor3
		
		Si valor1 < 0 Entonces
			calculo <- valor2 + valor3
			Escribir "El resutlado de la suma es ", calculo
		Sino 
			calculo <- valor1 * valor2 * valor3
			Escribir "El resutlado de la multiplicacion es ", calculo		
		FinSi
	
	FinProceso
```

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
	Proceso calcularDescuento
	    Escribir "¿En que mes estamos?"
	    Leer mes
		
	    Escribir "¿En que día estamos?"
	    Leer diaSemana
		
	    Escribir "¿Cuanto vale el producto?"
	    Leer precio	
		
		descuento <- 25*precio/100
		precioConDescuento <- precio - descuento
		
		
		Si mes = "Diciembre" | mes = "Enero" | mes = "Febrero"  Entonces
			Si diaSemana = "Viernes" | diaSemana = "Sabado" | diaSemana  = "Domingo"  Entonces
				Escribir "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar ", precio
			Sino
				Escribir "BINGO! Has acertado de mes y días. Debes pagar solamente ", precioConDescuento
			Fin Si
		Sino 
			Escribir "No se aplica descuento.. ven en invierno mejor!. Debes pagar ", precio		
		FinSi
	
	FinProceso
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
	 Proceso esPositivo
		Escribir "Dame un número:"
		Leer numero
		
		Si numero < 0 Entonces
			Escribir numero, " es negativo"
		Sino 
			Escribir numero, " es positivo"
		FinSi
	
	FinProceso 
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
	Proceso esPar
		Escribir "Dame un número:"
		Leer numero
		
		Si numero %2 = 0 Entonces
			Escribir numero, " es par"
		Sino 
			Escribir numero, " es impar"
		FinSi
	
	FinProceso
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	Proceso eureka
		clave <- "Fictizia mola mucho"
		acierto <- FALSO
		contador <- 0
		
		Mientras contador < 3 & acierto = FALSO Hacer
			Escribir "Dime el secreto:"
			Leer secreto
			
			Si secreto = clave Entonces
				acierto <- VERDADERO
				Escribir secreto, " es la clave que esperaba!"
			Sino
				Escribir secreto, " no es correcto."
			Fin Si
			
			contador<- contador+1
			
		Fin Mientras
		
		Si contador >= 3 Entonces
			Escribir "Lo siento... pero has agotado los 3 intentos."
		Fin Si
	
	FinProceso
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
	Proceso verificadorDeFechas
		
		Escribir "Dime el Año:"
		Leer year
		
		Escribir "Dime el Mes:"
		Leer month
		
		Escribir "Dime el Dia:"
		Leer day
		
		fecha <- ConvertirATexto(day) + "/" + ConvertirATexto(month) + "/" + ConvertirATexto(year)
	
		Si day <= 31 & day > 0 & month <= 12 & month > 0 & year > 0  Entonces
			Escribir "La fecha es correcta ", fecha
			
			Segun month Hacer
				1:
					fechaDetalle <- ConvertirATexto(day) + "de Enero de " + ConvertirATexto(year)
				2:
					fechaDetalle <- ConvertirATexto(day) + "de Febrero de " + ConvertirATexto(year)
				3:
					fechaDetalle <- ConvertirATexto(day) + "de Marzo de " + ConvertirATexto(year)
				4: 
					fechaDetalle <- ConvertirATexto(day) + "de Abril de " + ConvertirATexto(year)
				5:
					fechaDetalle <- ConvertirATexto(day) + "de Mayo de " + ConvertirATexto(year)
				6:
					fechaDetalle <- ConvertirATexto(day) + "de Junio de " + ConvertirATexto(year)
				7:
					fechaDetalle <- ConvertirATexto(day) + "de Julio de " + ConvertirATexto(year)
				8:
					fechaDetalle <- ConvertirATexto(day) + "de Agosto de " + ConvertirATexto(year)
				9:
					fechaDetalle <- ConvertirATexto(day) + "de Septiembre de " + ConvertirATexto(year)
				10:
					fechaDetalle <- ConvertirATexto(day) + "de Octubre de " + ConvertirATexto(year)
				11: 
					fechaDetalle <- ConvertirATexto(day) + "de Noviembre de " + ConvertirATexto(year)
				12:
					fechaDetalle <- ConvertirATexto(day) + "de Diciembre de " + ConvertirATexto(year)
			Fin Segun
			
			Escribir "La fecha en otro formato: ", fechaDetalle
			
		Sino
			Escribir "Error! los datos no son correctos!"
		Fin Si
		
	FinProceso 
```

11 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
	Proceso conversionRomana
		Escribir "Dame un número:"
		Leer numero
		
		numeroOriginal <- numero
		numeroRomano <- ""
		
		Si numero <= 50 & numero > 0 Entonces
			
				Mientras numero > 0 Hacer
					// Escribir "Numero: ", numero
					
					Si numero = 50 Entonces
						numeroRomano = "L"
						numero = 0
					Fin Si
					
					Si numero >= 40 & numero < 50 Entonces
						numeroRomano = numeroRomano + "XL"
						numero = numero - 40
					Fin Si
					
					Si numero >= 10 & numero < 40 Entonces
						numeroRomano = numeroRomano + "X"
						numero = numero - 10
					Fin Si	
					
					Si numero = 9 Entonces
						numeroRomano = numeroRomano + "IX"
						numero = numero - 9
					Fin Si		
					
					Si numero = 8 Entonces
						numeroRomano = numeroRomano + "VIII"
						numero = numero - 8
					Fin Si	
					
					Si numero = 7 Entonces
						numeroRomano = numeroRomano + "VII"
						numero = numero - 7
					Fin Si	
					
					Si numero = 6 Entonces
						numeroRomano = numeroRomano + "VI"
						numero = numero - 6
					Fin Si	
					
					Si numero = 5 Entonces
						numeroRomano = numeroRomano + "V"
						numero = numero - 5
					Fin Si	
					
					Si numero = 4 Entonces
						numeroRomano = numeroRomano + "IV"
						numero = numero -4
					Fin Si
					
					Si numero <= 3 & numero > 0 Entonces
						numeroRomano = numeroRomano + "I"
						numero = numero - 1
					Fin Si		
					
				Fin Mientras
				
				Escribir numeroOriginal " en números romanos es " numeroRomano
		Sino
			Escribir numeroOriginal " NO es un número valido (0-50)"
		Fin Si
		
	FinProceso
```