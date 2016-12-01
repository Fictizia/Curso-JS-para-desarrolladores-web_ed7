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
	// Tu solución
```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
	// Tu solución
```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
	// Tu solución
```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
	// Tu solución
```

**6 -** Diseña un programa que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
	// Tu solución
```

**7 -** Diseña un programa que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
	// Tu solución
```

**8 -** Diseña un programa que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
	// Tu solución
```

**9 -**  Diseña un programa para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	// Tu solución
```

**10 -** Diseña un programa que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
	// Tu solución
```

**11 -** Diseña un programa introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
	// Tu solución
```
