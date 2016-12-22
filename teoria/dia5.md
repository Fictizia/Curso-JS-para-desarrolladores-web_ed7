# Clase 5


### Asignación por igualdad
```javascript
	var administrador = 'Yo mismo';
	var esAdministrador = (administrador === 'Yo mismo');
```
    
### If... else

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


### Else if...

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```


### Switch

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- **Casos únicos:**
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- **Multiples coincidencias:**
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

### Operador Ternario (?:)

- Estructura:
    ```javascript
    /* 
    -- Una operación por caso --
	condicion ? expresion1 : expresion2 
    
    -- Multiples Operaciones por caso --
	condicion ? (
		operacion1,
		operacion2,
		otraoperacion
	) : ( 
		operacion1,
		operacion2,
		otraoperacion
	);

    -- Evaluaciones multiples --
    	condicion ? expresion1 : condicion2 ? expresion1 : expresion2;
    */
    ```

- Una operación por caso:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

- Evalución múltiple:
```javascript
	var esMiembro = true;
	var esAdulto = true;
	console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tines que esperar aún. Lo siento.");
```

- Múltiples Operaciones:
```javascript
	var mensaje,
	esMiembro = true;
	
	esMiembro ? (
		mensaje = "El pago son 20.00€",
		console.info(mensaje)
	) : (
		mensaje = "El pago son 50.00€",
		console.info(mensaje)
	);
```

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```

**4 -** Diseña un script que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```

**5 -** Diseña un script que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```


**6 -** Diseña un script que al introducir un número nos diga si es par o impar.

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```


**7 -** Diseña un script que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4
	- No tiene que ser divisible entre 100
	- Puede ser divisble entre 100 y entre 400

- Usando *if...else*
```javascript
	// Tu solución!
```

- Usando *Operador Ternario (?:)*
```javascript
	// Tu solución!
```

- Usando *Switch*
```javascript
	// Tu solución!
```

### [Reto Navideño](https://github.com/Fictizia/Curso-JS-para-desarrolladores-web_ed7/issues/9)