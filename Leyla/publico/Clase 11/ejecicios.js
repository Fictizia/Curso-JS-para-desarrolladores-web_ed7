/************************
1 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.
*************************/

//Obtengo todas las imágenes de la página elmundotoday
var listaImgs = document.querySelectorAll('img');

//recorremos las imágenes
for (var i = 0; i < listaImgs.length; ++i) {
	var elemento = listaImgs[i];
	var ancho = parseInt(window.getComputedStyle(elemento).getPropertyValue('width'));
	var alto = parseInt(window.getComputedStyle(elemento).getPropertyValue('height'));

	//algunas imágenes tienen asignado "auto" como valor en width o height, así que asigno un valor por defecto
	if(isNaN(ancho)){
		ancho = 100;
	}
	if(isNaN(alto)){
		alto = 100;
	}

	//creo un nuevo valor src con imágenes de gatitos
	var nuevoSrc = 'http://placekitten.com/' + ancho + '/' + alto;
	
	//cambio el valor de la imagen
	elemento.setAttribute('src', nuevoSrc);

}

/**********************
2 - Diseña un script que agrupe todos los titulares, sus autores y categorias dentro de Genbeta:dev
y luego vacíe el html para cargar una lista hecha por nosotros con la información previamente recolectada.
***********************/

//Guardo todos los post
var listadoPost = document.querySelectorAll('.article-home');

var listadoObjetos = [];

//Recorro el listado de post y creo un objeto con el titular, categoria y autor
//Uso el try catch en caso de que no existiera alguno de los tres valores
for (var i = 0; i < listadoPost.length; ++i) {
  
  	var sTitular = "", sCategoria = "", sAutor = "";

  	try {
		sTitular = listadoPost[i].querySelector('.article-home-header a').textContent;
  	} catch (e0){
  		sTitular = "no definido";
  	}

  	try {
		sCategoria = listadoPost[i].querySelector('.article-category a').textContent;
  	} catch (e1){
  		sCategoria = "no definido";
  	}

	try {
		sAutor = listadoPost[i].querySelector('.article-author a').textContent;
  	} catch (e2){
  		sAutor = "no definido";
  	}

  	var objPost = { titular: sTitular, categoria: sCategoria, autor: sAutor };

	listadoObjetos.push(objPost);
}

//Limpio el html
document.body.textContent = "";

//creo lista <ol>
document.body.innerHTML += "<ol class='lista'></ol>";

//recorro el listado de objetos y los pinto en la lista
for (var i = 0; i < listadoObjetos.length; ++i) {

	var sHtml = "<li><h2>" + listadoObjetos[i].titular + "</h2>" + "<h5>Categoría : " + listadoObjetos[i].categoria + "</h5>" + "<p>Autor : " + listadoObjetos[i].autor + "</p></li>";
	document.querySelector('.lista').innerHTML += sHtml;

}


