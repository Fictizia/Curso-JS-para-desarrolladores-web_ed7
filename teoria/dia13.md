# Clase 13

### Eventos

**Funcionamiento:**

[Soporte](http://caniuse.com/#search=addEventListener)

- Podemos escuchar eventos y enlazar funciones (*event handler*)
![img_pro_bu](http://i.stack.imgur.com/liJ5u.png)

[Demo](http://jsfiddle.net/L79xw5ye/)


**Propagación:**
- *Capturing* desde *document* hasta el elemento
- *Target* impacta el elemento
- *Bubbling* sube desde el elemento hasta *document*
	 

**Usando Eventos (clásico):**

Solo una función por evento
```html
	<button onclick="cambiarFondo()">Cambia el fondo</button>
```
	
```javascript
	function cambiarFondo() {
		// color = 'rgb(0-255,0-255,0-255'
		var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
		color += Math.floor((Math.random() * 255)) + ',';
		color += Math.floor((Math.random() * 255)) + ')';
		document.body.style.backgroundColor= color;
		console.info("Nuevo color:", color);
	}
```

**Usando Eventos (actualidad):**

- Usando Eventos (Callbacks)
	- Multiples funciones por evento
	- Necesidad de compatibilizar para IE8

- Propiedades
	```javascript
		// Callback - Manejador de Eventos
		function manejadorEventos(elEvento) {
		  	// Compatibilizar el evento
		  	var evento = elEvento || window.event;
		  	// Imprimir detalles
		  	console.log("-----------------------------")
		  	console.log("Type: "+evento.type); // Tipo
		  	console.log("Bubbles: "+evento.bubbles);
		  	console.log("Cancelable: "+evento.cancelable);
		  	console.log("CurrentTarget: ", evento.currentTarget);
			console.log("DefaultPrevented: "+evento.defaultPrevented);
			console.log("EventPhase: "+evento.eventPhase);
			console.log("Target: ", evento.target);
			console.log("TimeStamp: "+evento.timeStamp);
			console.log("IsTrusted: "+evento.isTrusted); // true - Usuario o false - Script
			console.log("=============================")
			// Desactivamos
			if (document.removeEventListener){ 
				document.removeEventListener('click', manejadorEventos);
				console.info("Listener quitado con exito");
			} else { // IE8
				document.detachEvent('onclick', manejadorEventos);
				console.info("Listener quitado con exito");
			}
		}
		// Añadimos Listener
		document.addEventListener('click', manejadorEventos);
	```	

- Métodos:
	- .addEventListener() *Añadir un evento a un elemento del DOM*:
	```javascript
	document.body.addEventListener('click', function (e) {
	    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
	    color += Math.floor((Math.random() * 255)) + ',';
	    color += Math.floor((Math.random() * 255)) + ')';
	    document.body.style.backgroundColor= color;
	    console.info("Nuevo color:", color);
	});
	```
	- .attachEvent() *Añadir un evento a un elemento del DOM (<= IE8)*:
	```javascript
	document.attachEvent('onclick', function (e) {
	    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
	    color += Math.floor((Math.random() * 255)) + ',';
	    color += Math.floor((Math.random() * 255)) + ')';
	    document.body.style.backgroundColor= color;
	    console.info("Nuevo color:", color);
	});
	```
	- .removeEventListener() *Elimina un evento previamente añadido*:
	```javascript
	function cambiarColor (){
	    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
	    color += Math.floor((Math.random() * 255)) + ',';
	    color += Math.floor((Math.random() * 255)) + ')';
	    document.body.style.backgroundColor= color;
	    console.info("Nuevo color:", color);
	}
	
	document.body.addEventListener('click', cambiarColor);
	document.body.removeEventListener('click', cambiarColor);
	```
	- .detachEvent() *Elimina un evento previamente añadido (<= IE8)*:
	```javascript
	function cambiarColor (){
	    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
	    color += Math.floor((Math.random() * 255)) + ',';
	    color += Math.floor((Math.random() * 255)) + ')';
	    document.body.style.backgroundColor= color;
	    console.info("Nuevo color:", color);
	}
	
	document.body.attachEvent('onclick', cambiarColor);
	document.body.detachEvent('onclick', cambiarColor);
	```
	- .dispatchEvent() *Lanza un evento manualmente*:
	```javascript
	document.body.addEventListener('click', function (e) {
	    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
	    color += Math.floor((Math.random() * 255)) + ',';
	    color += Math.floor((Math.random() * 255)) + ')';
	    document.body.style.backgroundColor= color;
	    console.info("Nuevo color:", color);
	});
	
	var lanzadorEventos = new Event('click');
	document.body.dispatchEvent(lanzadorEventos);
	```

**Referencia de event.type:**
- Ratón
	- click	*Cuando... se hace click de ratón*
	- dblclick	*Cuando... se hace doble click de ratón*

- Teclado
	- keydown	*Cuando... se presionó la tecla*
	- keypress	*Cuando... se presiona la tecla*
	- keyup	*Cuando... se deja de pulsar la tecla*

- [Más eventos](https://developer.mozilla.org/es/docs/Web/Reference/Events)


**Gestionando el flujo:**
- Deteniendo el flujo:
	- *.preventDefault()* evita el comportamiento por defecto (ex: Link -> nueva URL)
	- *.stopPropagation()* evita la propagación por el DOM (bubble) pero permite la acción por defecto.

- Gestión de Eventos:
	- Gestión (asociar un evento por elemento)
	```html
		<ul id="miNav">
			 <li><a href="#nosotros">¿Quienes Somos?</a></li>
			 <li><a href="#objetivos">Los objetivos</a></li>
			 <li><a href="#equipo">Nuestro Equipo</a></li>
			 <li><a href="#detalles">Más detalles</a></li>
			 <li><a href="#contacta">Contactanos</a></li>
		</ul>
	```
	```javascript
	   var miNav = document.getElementById("miNav");
	   var miNavLinks = miNav.getElementsByTagName("a");
	   for (var i = 0; i < miNavLinks.length; i++) {
	     miNavLinks[i].onclick = function(){
	        console.info(this.innerHTML);
	     }
	   }
	```
- Delegación de eventos:
	- Delegación (asociar un único evento al padre de los elementos)
	```html
		<ul id="miNav">
			 <li><a href="#nosotros">¿Quienes Somos?</a></li>
			 <li><a href="#objetivos">Los objetivos</a></li>
			 <li><a href="#equipo">Nuestro Equipo</a></li>
			 <li><a href="#detalles">Más detalles</a></li>
			 <li><a href="#contacta">Contactanos</a></li>
		</ul>
	```
	```javascript
	   var miNav = document.getElementById("miNav");
	   miNav.onclick = function(evento){
	      var evento = evento || window.event;
	      var elemento = evento.target || evento.srcElement;
	      console.info(elemento.innerHTML);
	   }
	```

- Creación de Eventos Personalizados
	- ejemplo:
	```javascript
		var evento = new Event('miEventoInventado');
		
		document.body.addEventListener('miEventoInventado', function (e) {
			console.info(e); // {isTrusted: false}
		});
		
		document.body.dispatchEvent(evento);
	```

### Programación dirigida a eventos

> La programación dirigida por eventos es un paradigma de programación en el que tanto la estructura como la ejecución de los programas van determinados por los sucesos que ocurran en el sistema, definidos por el usuario o que ellos mismos provoquen.

> Para entender la programación dirigida por eventos, podemos oponerla a lo que no es: mientras en la programación secuencial (o estructurada) es el programador el que define cuál va a ser el flujo del programa, en la programación dirigida por eventos será el propio usuario —o lo que sea que esté accionando el programa— el que dirija el flujo del programa. Aunque en la programación secuencial puede haber intervención de un agente externo al programa, estas intervenciones ocurrirán cuando el programador lo haya determinado, y no en cualquier momento como puede ser en el caso de la programación dirigida por eventos. [Wikiwand](https://www.wikiwand.com/es/Programaci%C3%B3n_dirigida_por_eventos)

- **Ejemplo:**
	```javascript
		var eventos = {
			agregar: null,
			quitar: null,
			manejador: function(evento) {
		        console.group("Manejador de Eventos");
			        console.log("-----------------------------");
		            console.log("Type: " + evento.type); // Tipo
		            console.log("Bubbles: " + evento.bubbles); // sube por el DOM
		            console.log("Cancelable: " + evento.cancelable);
		            console.log("CurrentTarget: ", evento.currentTarget);
		            console.log("DefaultPrevented: " + evento.defaultPrevented);
		            console.log("EventPhase: " + evento.eventPhase);
		            console.log("Target: ", evento.target);
		            console.log("TimeStamp: " + evento.timeStamp);
		            console.log("IsTrusted: " + evento.isTrusted); // true - Usuario o false - Script
		            console.log("=============================");
		        console.groupEnd();
		    }
		}
		
		// Init-time branching (Patrón)
		if (typeof window.addEventListener === 'function') {
		    eventos.agregar = function(el, type, fn) {
		    	el.addEventListener(type, fn, false);
			};
		    eventos.quitar = function(el, type, fn) {
		    	el.removeEventListener(type, fn, false);
		    };
		} else { // Soporte para IE8
		    eventos.agregar = function(el, type, fn) {
		        el.attachEvent('on' + type, fn);
		    };
		    eventos.quitar = function(el, type, fn) {
		        el.detachEvent('on' + type, fn);
		    };
		}
		
		eventos.agregar(document.body, 'click', function (e) {
			var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
			color += Math.floor((Math.random() * 255)) + ',';
			color += Math.floor((Math.random() * 255)) + ')';
			document.body.style.backgroundColor= color;
			console.info("Nuevo color:", color);
		})
	```


### Trabajando con APIs

*CRUD*

- Create:
  - Method (POST):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
    - Respuesta 409 - Conflicto, ya existe
- Read:
  - Method (GET):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado
- Update:
  - Method (PUT):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
- Delete:
  - Method (DELETE):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado


![HTTP Protocolo](http://fundamentos-redes.wikispaces.com/file/view/3.3.2_Servicio_WWW_y_HTTP.jpg/255291246/960x432/3.3.2_Servicio_WWW_y_HTTP.jpg)

- Por tipología:
  - 1xx Informativas
  - 2xx Peticiones Correctas
  - 3xx Redirecciones
  - 4xx Errores Cliente
  - 5xx Errores Servidor


- [Lista de respuestas HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- [Especificación](https://tools.ietf.org/html/rfc2616#section-10)

- [API RTVE](https://github.com/UlisesGascon/RTVE-API)

### AJAX

![Ajax comparación](http://gemsres.com/story/feb07/338111/fig1.jpg)

*Con Jquery*

```javascript
    function peticionJqueryAjax (url) {

	    $.ajax({
	        dataType: "json",
	        url: url,
	    })
	     .done(function( data, textStatus, jqXHR ) {
	         if ( console && console.log ) {
	             console.log( "La solicitud se ha completado correctamente." );
	             console.log( data );
	         }
	     })
	     .fail(function( jqXHR, textStatus, errorThrown ) {
	         if ( console && console.log ) {
	             console.log( "La solicitud a fallado: " +  textStatus);
	         }
	    });
	
	}
	
	peticionJqueryAjax ("<---URL---->");
```

*Vainilla JS*

- *readyState*:
    - 0 es *uninitialized*
    - 1 es *loading*
    - 2 es *loaded*
    - 3 es *interactive*
    - 4 es *complete*

```javascript
    function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                console.info(JSON.parse(xmlHttp.responseText));
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
                console.info(JSON.parse(xmlHttp.responseText));
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

    peticionAjax("<---URL---->");
```

### JSON

- JSON.parse()
  - Analiza la cadena y retorna los valores

- JSON.stringify()
  - Analiza los valores y retorna una cadena 

### JSONP

- json (formato)
  ```javascript
    { foo: 'bar' }
  ```
- callback (cliente)
  ```javascript
    mycallback = function(data){
      alert(data.foo);
    };
  ```
  
- peticion (cliente)
  ```javascript
    var url = "http://www.example.net/sample.aspx?callback=mycallback";
  ```
  
- respuesta (servidor)
  ```javascript
    mycallback({ foo: 'bar' });
  ```

- Ejemplo de CORS y JSONP con [php de formandome](http://www.formandome.es/javascript/cors-vs-jsonp-solicitudes-ajax-entre-dominios/)
  ```php
    <?php
    header('content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");
     
    //Cadena de conexión:
    $connect = mysql_connect("localhost", "usuario", "pwd")
    or die('Could not connect: ' . mysql_error());
     
    //seleccionamos bbdd:
    $bool = mysql_select_db("database", $connect);
    if ($bool === False){
       print "No puedo encontrar la bbdd: $database";
    }
     
    //inicializamos el cliente en utf-8:
    mysql_query('SET names utf8');
   
    $query = "SELECT * FROM futbolistas";
     
    $result = mysql_query($query) or die("SQL Error: " . mysql_error());
    $data = array();
    // obtenemos los datos:
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $data[] = array(
            'id' => $row['id'],
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'posicion' => $row['posicion'],
            'equipo' => $row['equipo'],
            'dorsal' => $row['dorsal'],
            'desc' => $row['desc'],
    	'imagen' => $row['imagen']
          );
    }
     
    //codificamos en json:
    $json = json_encode($data);
     
    //enviamos json o jsonp según venga o no una función de callback:
    echo isset($_GET['callback'])
        ? "{$_GET['callback']}($json)"
        : $json;
    ?>
  ```

Soporte en cliente (librerías):
- Jquery:
  ```javascript
    // Using YQL and JSONP
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
     
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
     
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
     
        // Tell YQL what we want and that we want JSON
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
     
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });  
  ```
- [jsonp.js de Przemek Sobstel](https://github.com/sobstel/jsonp.js/blob/master/jsonp.js)
- [J50Npi.js de Roberto Decurnex](https://github.com/robertodecurnex/J50Npi/blob/master/J50Npi.js)


### Ejercicios

1 - Sacar en el html la respuesta de [OMDB](http://omdbapi.com/) para la pelicula Hackers

```javascript
	 function peticionAjax (movieName) {
	  var xmlHttp = new XMLHttpRequest(),
	                cURL = 'http://www.omdbapi.com/?t='+movieName+'&y=&plot=short&r=json';
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    var datos = (JSON.parse(xmlHttp.responseText));
	                    var contenido = "";
	                    contenido += "<h1>"+datos.Title+"</h1>"
	                    contenido += "<p>"+datos.Plot+"</p>"
	                    document.body.innerHTML = contenido;
	                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", cURL, true );
	            xmlHttp.send();
	}
	
	peticionAjax("Hackers");
```

2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401


```javascript
	var contenido = "";
  	function temperaturaCiudad (ciudad) {
        var xmlHttp = new XMLHttpRequest(),
        APIKey = '', // Puedes usar una cuenta gratuita -> http://openweathermap.org/price
        cURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&APPID='+APIKey;
    
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = (JSON.parse(xmlHttp.responseText));
	              contenido += "<h1>"+datos.name+"</h1>"
	              contenido += "<p>"+datos.weather[0].description+"</p>"
	              document.body.innerHTML = contenido;
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                datos = JSON.parse(xmlHttp.responseText);
                console.error("ERROR! 404");
                console.info(datos);
            }
        };
    
        xmlHttp.open( "GET", cURL, true );
        xmlHttp.send();
    }
    
    temperaturaCiudad("Madrid");
    temperaturaCiudad("Barcelona");
    temperaturaCiudad("Valencia");
```

3 - Jugando con [datos abiertos](http://datos.gob.es/), saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.


```javascript
    function peticionAjax (url) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    var datos = (JSON.parse(xmlHttp.responseText));
                        console.log(datos)
	                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", url, true );
	            xmlHttp.send();
	}
    
    
    // Utilizamos un proxy como http://crossorigin.me para solucionar el problema de CORS	
	peticionAjax("http://crossorigin.me/http://opendata.gijon.es/descargar.php?id=163&tipo=JSON");

```

```
// Podemos encontrar errores en las respuestas.
// cuadromando[5] ...

    calle: "Faustina &#193;lvarez Garc&#237;a"
    latitud: 43.526376045
    longitud: -5.685764873
    numero: ""
    potencia_w_: 17321

// ...
```