/* EJERCICIO 1*/


var listaImgs = document.querySelectorAll('img');
for (var i = 0; i < listaImgs.length; ++i) {
  var elemento = listaImgs[i];
    var ancho = parseInt(window.getComputedStyle(elemento).getPropertyValue('width'));
    var alto = parseInt(window.getComputedStyle(elemento).getPropertyValue('height'));
    if (isNaN(ancho))
    {
        ancho = 200;
    }
    if (isNaN(alto))
    {
        alto = 200;
    }
    var nuevaRuta = 'http://placekitten.com/' + ancho + '/' + alto;
    elemento.setAttribute('src', nuevaRuta);
}

/* EJERCICIO 2*/



var listaArticulos = document.querySelectorAll('article');
var posts [];
for (var i = 0; i < listaArticulos.length; ++i) {
    
  var titular = listaArticulos[i].querySelector('.article-home').textContent;
  var autor = listaArticulos[i].querySelector('.article-author-link').textContent;
  var categoria = listaArticulos[i].querySelector('.article-category').textContent;
    
  var articulos = {
      title: "titular",
      author: "autor",
      category: "categoria"
  }
  
  posts.push(articulos);
}

console.log(posts);