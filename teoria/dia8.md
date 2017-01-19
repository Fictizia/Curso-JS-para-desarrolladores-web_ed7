# Clase 8

**Truco**

Usar getters para modificar fechas (días, meses, etc...)

Nota: Partiendo del ejemplo de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)

- sin *getters*
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(24);
	theBigDay.toLocaleString() // 23/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(32);
	theBigDay.toLocaleString() // 31/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22);
	theBigDay.toLocaleString() // 21/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22 + 32 +24);
	theBigDay.toLocaleString() // 15/9/1962 23:00:00
```

- con *getters* 
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 24);  
	theBigDay.toLocaleString(); // 30/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 32);
	theBigDay.toLocaleString(); // 7/8/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22);
	theBigDay.toLocaleString(); // 28/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22 + 32 + 24);
	theBigDay.toLocaleString(); // 22/9/1962 23:00:00
```

### Ejercicios

**1 -** ¿Que fecha será dentro de 30 días?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setDate(ahora.getDate() + 30);
	console.log("En 30 días será " + ahora.toLocaleString());
```

**2 -** ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
```javascript
	var inicio = new Date(2016, 5, 9, 19, 0, 0);
	console.log("Fecha de inicio: " + inicio.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = ahora - inicio;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Han pasado " + diferencia +"ms");
	console.log("Han pasado "+ segundos +" segundos.");
	console.log("Han pasado "+ minutos +" minutos.");
	console.info("Han pasado "+ horas +" horas.");
	console.info("Han pasado "+ dias +" días.");
```

**3 -** ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
```javascript
	var fin = new Date(2016, 6, 27, 22, 0, 0);
	console.log("Fecha de finalización: " + fin.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = fin - ahora;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Quedan " + diferencia +"ms");
	console.log("Quedan "+ segundos +" segundos.");
	console.log("Quedan "+ minutos +" minutos.");
	console.info("Quedan "+ horas +" horas.");
	console.info("Quedan "+ dias +" días.");
```

**4 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setHours(ahora.getHours() + 10);
	ahora.setFullYear(ahora.getFullYear() + 1);
	console.log("En un año y 10 horas será " + ahora.toLocaleString());
```

**5 -** Imprimir por consola la fecha completa (formato texto) en koreano, japones.
```javascript
	var ahora = new Date();
	
	var opciones = { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	};
	
	console.log(ahora.toLocaleString("ko-KO", opciones));
	console.log(ahora.toLocaleString("ja-JA", { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	}));
```


### String

**Propiedades:**
- .length() *Devuelve la longitud*:
```javascript
var cadena = "Fictizia";

console.log("Fictizia tiene " + cadena.length + " caracteres.");

console.log("Una cadena vacia tiene " + ''.length + " caracteres.");
```
  
**Métodos:**

- .fromCharCode() *Devuelve una cadena creada mediante una secuencia [Unicode](https://www.wikiwand.com/es/Unicode)*:
```javascript
	console.info("Es es el año 2016 ("+ String.fromCharCode(8559,8559,8553,8548,8544) + ")");
```


- .anchor() *Crea un ancla HTML*:
```javascript
	document.body.innerHTML = "Contenidos".anchor("contenidos"); 
	// "<a name="contenidos">Contenidos</a>"
```


- .charAt() *Devuelve el carácter específico*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "'")
```


- .charCodeAt() *Devuelve el valor Unicode*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "', en unicode ("+cadena.charCodeAt(3)+")")
```


- .concat() *Combina el texto de dos o más cadenas*:
```javascript
var cadena1 = "Oh ";
var cadena2 = "qué maravillosa ";
var cadena3 = "mañana'.";
var combinacion = cadena1.concat(cadena2,cadena3);
console.log(combinacion); // devuelve "Oh qué maravillosa mañana'."
```


- .indexOf() *Devuelve el índice o -1*:
```javascript
"Mundo Web".indexOf("Web") // 6
"Mundo Web".indexOf("web") // -1
```


- .lastIndexOf() *Devuelve el índice de la última coincidencia o -1*:
```javascript
"Fictizia".lastIndexOf("i"); // 6
"Fictizia".lastIndexOf("f"); // -1
```


- .link() *Crea un enlace*:
```javascript
var textoActivo="Nuestro Curso"
var url="http://www.fictizia.com/formacion/curso_javascript"
document.body.innerHTML = "Haga click para volver a " + textoActivo.link(url);
```


- .slice() *Devuelve una cadena nueva con una sección de otra*:
```javascript
var cadena = "Fictizia";
console.log(cadena.slice(5)); // zia
console.log(cadena.slice(0, 5)); // Ficti
console.log(cadena.slice(3, -1)); // tizi
```


- .split() *Divide una cadena usando un separador*:
```javascript
function dividirCadena(cadenaADividir,separador) {
   var arregloDeCadenas = cadenaADividir.split(separador);
   console.log('<p>La cadena original es: "' + cadenaADividir + '"');
   console.warn('<br>El separador es: "' + separador + '"');
   console.log("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");

   var elementos = "";
   for (var i=0; i < arregloDeCadenas.length; i++) {
      elementos += arregloDeCadenas[i] + " / ";
   }

   console.info(elementos);

}

var cadenaVerso = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
```


- .substr() *Devuelve los caracteres de una cadena comenzando en la localización especificada, y en el número de caracteres especificado.*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substr(0,5)); // Ficti
console.log("(5,3): "    + cadena.substr(5,3)); // zia
```

- .substring() *Devuelve un subconjunto*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substring(0,5)); // Ficti
```


- .toLocaleLowerCase() *Devuelve todo en minúsculas con las características locales*:
```javascript
console.log('FICTIZIA'.toLocaleLowerCase()); // 'fictizia'
```

- .toLocaleUpperCase(Devuelve todo en mayúsculascon las características locales) **:
```javascript
console.log('fictizia'.toLocaleUpperCase()); // 'FICTIZIA'
```

- .toLowerCase() *Devuelve todo en minúsculas*:
```javascript
console.log('FICTIZIA'.toLowerCase()); // 'fictizia'
```


- .toUpperCase() *Devuelve todo en mayúsculas*:
```javascript
console.log('fictizia'.toUpperCase()); // 'FICTIZIA'
```

- .trim() *Elimina espacios vacios al principio y final de la cadena*:
```javascript
console.log('  Fictizia '.trim()); // 'Fictizia'
```

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```
    
- .isArray():
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```

- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .forEach() *Se ejecuta la función por cada elemnto del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemnto o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor*:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```

- .reduceRight() *Aplica una función a un acumulador y a cada valor (de izq. a dcha.) de un vector para reducirlo a un único valor*:
    ```javascript
  	var reduceRight = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduceRight); // 10
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```

- .sort() **:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

### Ejercicios

**1 -** Diseña un script que cuente las veces que aparece una determinada letra en una frase.

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
	function cuantasVeces (letra, texto) {
		
		var totalVeces = 0;
		var seleccionTexto = texto.split("");
		
		for (var i = 0; i <= seleccionTexto.length; i++) {
			
			if (seleccionTexto[i] === letra){
				totalVeces++
			};
			
		};
		
		return {
			letra: letra, 
			totalVeces: totalVeces, 
			texto: texto
		}
	}

var nombreVar = cuantasVeces ("h", "hola");


if(nombreVar.totalVeces > 0){
	console.log("Tenemos resultados....")
}

console.log("Se repite "+nombreVar.letra+" "+nombreVar.totalVeces+" veces... en "+nombreVar.texto)

```


**Arreglos avanzados**
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```