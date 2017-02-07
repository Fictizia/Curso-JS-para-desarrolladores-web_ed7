# Clase 12

### Ejercicios

**1 -** Realiza una pagina web que muestre la cuenta atrás para terminar el curso en días, horas, minutos y segundos.
Objetivos Adicionales:
- Además debería de seguir actualizando la cuenta atrás de manera dinámica.
- Los datos horarios siempre deben mostrarse con dos dígitos, añadiendo un cero a la izquierda cuando sea necesario.

Nota: Podría ser muy útil usar *setTimeout* para lanzar una función cada cierto tiempo.

- [Solucion](../OTROS/cuenta-atras.html)

### Testing

**Estado actual:**

![testing_graph](http://ashleynolan.co.uk/assets/img/blog/tooling-survey/2015/q7.jpg)


**Objetivos:**
- Código que verifica el funcionamiento de otro código.
- Deben poder realizarse de manera automática.
- Cubrir mayor cantidad de código posible.
- Independientes entre si.
- Capaces de ejercutarse infinidad de veces.
- Pueden agruparse en Test Suites.
- Uso de colores y mensajes claros.

- Ejemplo:
```javascript
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
    
    // Test
    function testSumar(){
      if (sumar(1, 2) !== 3) {
        document.write('<p style="color: red;">sumar(1, 2) ERROR - No devuelve 3</\p>');
      } else {
        document.write('<p style="color: green;">sumar(1, 2) OK</p>');
      }
    
      if (sumar("2", 2) !== 4) {
        document.write('<p style="color: red;">sumar("2", 2) ERROR - No devuelve 4</p>');
      } else {
        document.write('<p style="color: green;">sumar("2", 2) OK</p>');
      }
    }
```

### Test Driven Development (TDD)

> Desarrollo guiado por pruebas de software, o Test-driven development (TDD) es una práctica de ingeniería de software que involucra otras dos prácticas: Escribir las pruebas primero (Test First Development) y Refactorización (Refactoring). Para escribir las pruebas generalmente se utilizan las pruebas unitarias (unit test en inglés). En primer lugar, se escribe una prueba y se verifica que las pruebas fallan. A continuación, se implementa el código que hace que la prueba pase satisfactoriamente y seguidamente se refactoriza el código escrito. El propósito del desarrollo guiado por pruebas es lograr un código limpio que funcione. La idea es que los requisitos sean traducidos a pruebas, de este modo, cuando las pruebas pasen se garantizará que el software cumple con los requisitos que se han establecido [Wikiwand](https://www.wikiwand.com/es/Desarrollo_guiado_por_pruebas)

- Primero los test
- Depués el código (Refactorización <-> Testing)
    - Ciclo de Vida:
        - Escribe los tests
        - Ejecuta los tests (Sin código, solo probando los propios tests)
        - Escribe el código suficiente para que pasen los tests.
        - Ejecuta los tests
        - Refactoriza
        - Repite


### Behavior Driven Development (BDD)

> En la Ingeniería de Software, behavior-driven development o desarrollo guiado por el comportamiento (DGC), es un proceso de desarrollo de software que surgió a partir del desarrollo guiado por pruebas (DGP). El desarrollo guiado por el comportamiento combina las técnicas generales y los principios del DGP, junto con ideas del diseño guiado por el dominio y el análisis y diseño orientado a objetos para proveer al desarrollo de software y a los equipos de administración, con herramientas compartidas y un proceso compartido de colaboración en el desarrollo de software.

> Aunque el DGC es esencialmente una idea sobre cómo el desarrollo de software debería ser administrado tanto por los intereses del negocio como por el entendimiento técnico, la práctica del DGC asume el uso de herramientas de software especializadas para asistir en el proceso de desarrollo. Aunque estas herramientas son comúnmente desarrolladas específicamente para su uso en proyectos de DGC, se pueden ver como formas especializadas de las herramientas que asisten en el DGP. Las herramientas sirven para agregar automatización para el lenguaje ubicuo (lenguaje estructurado alrededor del modelo de dominio, utilizado en el diseño guiado por el dominio para conectar actividades entre miembros del equipo), el cual es el tema central del DGC. [Wikiwand](http://www.wikiwand.com/es/Desarrollo_guiado_por_comportamiento)

- Orientado al comportamiento 
- Se comprueban que las funcionalidades cumplan lo que se espera de ellas

### Frameworks:

**[QUnit](https://api.qunitjs.com/)**
- [Documentación](https://api.qunitjs.com/) 
- Utilizado por jQuery 
```javascript
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
        
    // Test
    test("test de la funcion sumar(p1, p2)", function() {
      equal(sumar( 1, 2), 3, "1 + 2 = 3" );
      notEqual(sumar( "2", 2), "4", " 2(cadena) + 2 != 4(cadena) ");
    });
```

**[Mocha](https://mochajs.org/)**
- Muy popular
- En necesario incluir [Chai](http://chaijs.com/)
```javascript       
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
            
    // Test
    mocha.setup('bdd');
    var expect = chai.expect;
    var should = chai.should();
    describe("Test de la funcion sumar(p1, p2)", function() {
      it('1 + 2 = 3', function() {
        expect(sumar( 1, 2)).to.equal(3);
      });
            
      it('\"2\" + 2 != \"4\"', function() {
        expect(sumar( "2", 2)).not.equal("4");
      });
            
    });
            
    mocha.run()
```

### QUnit

**Preparando el entorno:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit</title>
  <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
</body>
</html>
```
- [Demo](../OTROS/qunit.html)

**[API Doc](http://api.qunitjs.com/):**

- [Assert](http://api.qunitjs.com/category/assert/)
	- assert.async() *JUnit espera la finalización de una operación/es asíncrona/s*:
		- Un caso
		```javascript
			QUnit.test( "Probando una llamada asíncrona assert.async() test", function( assert ) {
			  var llamadaTermianda = assert.async();
			  setTimeout(function() {
			    assert.ok( true, "Unica llamada terminada.");
			    llamadaTermianda();
			  }, 500 );
			});
		```
		- Multiples casos
		```javascript
			QUnit.test( "Multiples llamadas asíncronas realizadas", function( assert ) {
			  assert.expect( 3 );
			  var llamadaTermianda = assert.async( 3 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Primera llamada terminada." );
			    llamadaTermianda();
			  }, 7000 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Segunda llamada terminada." );
			    llamadaTermianda();
			  }, 6000 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Tercera llamada terminada." );
			    llamadaTermianda();
			  }, 5000 );
			});
		```
	- assert.deepEqual() *Comparación estrcita*:
	```javascript
		QUnit.test("testing equal()", function() {
			var a = {'nombre' : 'Luis'};
			var b = a;
			deepEqual(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis'};
			deepEqual(a, b, "el objeto a y el b son iguales");
		});	
	```
	- assert.equal() *Comparación no estricta*:
	```javascript
		QUnit.test("testing equal()", function() {
			equal(1, 1, "1 es 1");
			equal("1","1", "\"1\" es \"1\"");
			equal(1, "1", "1 es \"1\"");
			equal(1, true, "1 es true");
			equal(1, !false, "1 no es false");
			
			// (objetos)
			var a = {'nombre' : 'Luis'};
			var b = a;
			equal(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis'};
			equal(a, b, "el objeto a y el b son iguales");
		});	
	```
	- assert.expect() *Especifica el número de comparaciones*:
	```javascript
		QUnit.test( "Usando assert.expect() ", function( assert ) {
		  assert.expect( 2 );
		 
		  function calcular( x, operacion ) {
		    return operacion( x );
		  }
		 
		  var resultado = calcular( 2, function( x ) {
		    assert.ok( true, "calcular() llama a la función operacion." );
		    return x * x;
		  });
		 
		  assert.equal( resultado, 4, "2 al cuadrado es 4" );
		});
	```
	- assert.notDeepEqual() *Comparación desigual estrcita*:
	```javascript
	    QUnit.test("testing equal()", function() {
	        var a = {'nombre' : 'Luis'};
		var b = {'nombre' : 'Alberto'};
	        notDeepEqual(a, b, "el objeto a y el b no son iguales");
	    }); 
	```
	- assert.notEqual() *Comparación desigual no estrcita*:
	```javascript
	    QUnit.test("testing notEqual()", function() {
	        notEqual(true, false, "1 no es false");
	    }); 
	```
	- assert.notOk() *Comparación de un valor boleano (false)*:
	```javascript
		QUnit.test( "Testeando assert.notOk()", function( assert ) {
		  assert.notOk( false, "test false" );
		  assert.notOk( "", "test cadena vacía" );
		  assert.notOk( NaN, "test NaN" );
		  assert.notOk( null, "test null" );
		  assert.notOk( undefined, "test undefined" );
		  // Fallará desde aquí
		  assert.notOk( true, "test true" );
		  assert.notOk( 1, "test número 1 " );
		  assert.notOk( "algo", "Test cadena no vacía" );
		});	
	```
	- assert.notPropEqual() *Comparación de las propiedades de dos objetos (false)*:
	```javascript
		QUnit.test( "Testeando notPropEqual()", function( assert ) {
			var a = {'nombre' : 'Luis', 'valor' : 2};
			var b = {'nombre' : 'Luis', 'valor' : '2'};
			notPropEqual(a, b, "el objeto a y el b no son iguales");
		});	
	```
	- assert.notStrictEqual() *Comparación estricta (false)*:
	```javascript
		QUnit.test( "Testeando assert.notStrictEqual()", function( assert ) {
		  assert.notStrictEqual( 1, "1", "1 y '1' mismo valor, pero diferente tipo" );
		});
	```
	- assert.ok() *Comparación de un valor boleano (true)*:
	```javascript
	    QUnit.test( "Testeando assert.ok()", function( assert ) {
	      assert.ok( true, "test true" );
	      assert.ok( 1, "test número 1 " );
	      assert.ok( "algo", "Test cadena no vacía" );
	    }); 
	```
	- assert.propEqual() *Comparación de las propiedades de dos objetos (true)*:
	```javascript
		QUnit.test( "Testeando propEqual()", function( assert ) {
			var a = {'nombre' : 'Luis', 'valor' : 2};
			var b = a;
			propEqual(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis', 'valor' : '2'};
			propEqual(a, b, "el objeto a y el b son iguales");
		});	
	```

	- assert.strictEqual() *Comparación estricta (true)*:
	```javascript
		QUnit.test("Testeando equal()", function() {
			strictEqual(1, 1, "1 is 1");
			strictEqual("1","1", "\"1\" is \"1\"");
			strictEqual(1, "1", "1 is \"1\"");
			strictEqual(1, true, "1 is true");
			strictEqual(1, !false, "1 is not false");
		});	
	```


- [Callbacks](http://api.qunitjs.com/category/callbacks/)
	- QUnit.begin() *Dispara un callback cuando empieza el test suite*:
	```javascript
		QUnit.begin(function( details ) {
		  console.log( "Total de Tests:", details.totalTests );
		});	
	```
	- QUnit.done() *Dispara un callback cuando termina el test suite*:
	```javascript
		QUnit.done(function( details ) {
		  console.log( "Total: ", details.total, " Fallados: ", details.failed, " Pasados: ", details.passed, " Tiempo: ", details.runtime );
		});
	```
	- QUnit.log() *Dispara un callback cuando termina una comprobación*:
	```javascript
		QUnit.log(function( details ) {
		  console.log( "Log: ", details.result, details.message );
		});
	```
	- QUnit.moduleDone() *Dispara un callback cuando termina un módulo*:
	```javascript
		QUnit.moduleDone(function( details ) {
		  console.log( "Módulo terminado: ", details.name, "Fallos/Total: ", details.failed, details.total );
		});	
	```
	- QUnit.moduleStart() *Dispara un callback cuando empieza el módulo*:
	```javascript
		QUnit.moduleStart(function( details ) {
		  console.log( "Módulo empezado: ", details.name );
		});
	```
	- QUnit.testDone() *Dispara un callback cuando termina un test*:
	```javascript
		QUnit.testDone(function( details ) {
		  console.log( "Test terminado: ", details.module, details.name, "Fallados/total: ", details.failed, details.total, details.duration );
		});
	```
	- QUnit.testStart() *Dispara un callback cuando empieza un test*:
	```javascript
		QUnit.testStart(function( details ) {
		  console.log( "Ahora: ", details.module, details.name );
		});
	```


- [Test](http://api.qunitjs.com/category/test/)
	- QUnit.module() *Agrupar los tests bajo una misma etiqueta*:
		- Usando módulos:
		```javascript
			QUnit.module( "Módulo A", function(){
				QUnit.test( "Ejemplo básico", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 2", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
			});
			
			QUnit.module( "Módulo B", function(){
				QUnit.test( "Ejemplo básico 3", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 4", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
			});
		```
		- Usando sub-módulos:
		```javascript
			QUnit.module( "Módulo A", function(){
				QUnit.test( "Ejemplo básico", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 2", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
			});
			
			QUnit.module( "Módulo B", function(){
				QUnit.test( "Ejemplo básico 3", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 4", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
			
				QUnit.module( "Módulo B.1", function() {
				    QUnit.test( "Ejemplo básico 5", function( assert ) {
				      assert.ok( true, "Espero true..." );
				    });
				});
			});
		```

	- QUnit.only() *Bloque todos los tests y solamente .only() se ejecutará*:
	```javascript
		QUnit.module( "Módulo A", function(){
			QUnit.only( "Ejemplo básico", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
			QUnit.test( "Ejemplo básico 2", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
		});	
	```
	- QUnit.skip() *Salta el test*:
	```javascript
		QUnit.module( "Módulo A", function(){
			QUnit.test( "Ejemplo básico", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
			QUnit.skip( "Ejemplo básico 2", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
		});
	```


**[Plugins](https://qunitjs.com/plugins/):**
- [Ninja Theme](https://github.com/Krinkle/qunit-theme-ninja) 
- [Html](https://github.com/JamesMGreene/qunit-assert-html)


### Resumen:

**Comparaciones de Igualdad**:

- .equal() *Comparación NO estrcita ( x == y)*
- .ok() *Comprobación boleana estricta ( x == true)*
- .strictEqual() *Comparación estrcita ( x === y)*

- Especiales:
	- .deepEqual() *Comparación recursiva para Expresiones regulares, Objetos, Arrays, Fechas, Funciones...*
	- .propEqual() *Comprobación estricta de las propiedades de un objeto*


**Comparaciones de Desigualdad**:

- .notEqual() *Comparación NO estrcita (x != y)*
- .notOk() *Comprobación boleana NO estricta ( x == false)*
- .notStrictEqual() *Comparación estrcita ( x !== y)*

- Especiales:
	- .notDeepEqual() *Comparación recursiva para Expresiones regulares, Objetos, Arrays, Fechas, Funciones...*
	- .notPropEqual() *Comprobación estricta de las propiedades de un objeto*



### Ejercicios

Todos los ejercicios deben seguir el mismo proceso:
- Escribir las pruebas primero (Test First Development)
- Refactorización (Refactoring)

**1 -** Diseña un script que lea dos números y realice los siguientes cálculos:
- Características:
	- Valor de su suma
	- Valor de su resta
	- Valor de su division
	- Valor de su producto

- Pruebas necesarias:
	- Comprobar si ambos parámetros son números
	- Comprobar si uno o varios parámetros son cadenas

```javascript
	// Tu solución!
```


**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Pruebas necesarias:
	- Comprobar si ambos parámetros son números
	- Comprobar si uno o varios parámetros son cadenas
	- Comprueba si todos los parámetros son iguales

```javascript
	// Tu solución!
```


**3 -** Diseña un script que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Pruebas necesarias:
	- Comprobar si uno o varios los parámetros son números
	- Comprobar si uno o varios parámetros son cadenas
	- Comprobar cada uno de los meses del invierno
	- Comprobar cada día de la semana
	- Comprobar precios negativos
	- Comprobar "diaSemana": "Sabado" y "Sábado"
	- Comprobar "diaSemana": "Sabado" y "Sábado"

```javascript
	// Tu solución!
```


**4 -** Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- El año mínimo es 1970
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DIASEMANA, DD de MES de AAAA)

```javascript
	// Tu solución!
```


**5 -** Diseña un script que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.

```javascript
	// Tu solución!
```

**6 -** Diseña un script introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```javascript
	// Tu solución!
```

**7 -** Agrupa todo el código y los test:
- Requisitos: 
	- Utiliza una estructura de archivos acorde

```javascript
	// Tu solución!
```