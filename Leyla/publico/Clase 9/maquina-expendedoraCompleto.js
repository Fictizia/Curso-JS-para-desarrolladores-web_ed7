/*
Paso 1 - Creamos los primeros objetos básicos:

Maquina Expendedora (Objeto)
Productos (Array)
Clientes (Array)
*/
//var maquinaExpendedora = {}; debe contener todas las variables y métodos que se podrán hacer en ella
var aProductos = [];
var aClientes = [];

/*
Paso 2 - Creamos los primeros perfiles en el Array de clientes:

Propiedades:
Nombre (String)
Usuario (String)
Contraseña (String)
Tipo usuario (String)
Presupuesto (Number)
Gastos (Array)
*/
aClientes.push({
	nombre: 'leyla',
	usuario:'ley',
	pass: '1689',
	tipo: 'admin',
	presupuesto: 100,
	gastos: []
});

aClientes.push({
	nombre: 'denilson',
	usuario:'deni',
	pass: '0706',
	tipo: 'usuario',
	presupuesto: 50,
	gastos: [12,10,15]
});

aClientes.push({
	nombre: 'cecilia',
	usuario:'ceci',
	pass: '1812',
	tipo: 'usuario',
	presupuesto: 25,
	gastos: []
});

aProductos.push({
	codigo: 'A14',
	nombre:'oreo',
	precio: 5,
	stock: 10
});

aProductos.push({
	codigo: 'A57',
	nombre:'agua mineral',
	precio: 15,
	stock: 15
});

aProductos.push({
	codigo: 'A10',
	nombre:'galletas',
	precio: 10,
	stock: 25
});

aProductos.push({
	codigo: 'A05',
	nombre:'kit kat',
	precio: 100,
	stock: 25
});

/*
Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades

Metodos:

Consultar saldo de un cliente
Devolverá el saldo existente o -1 en caso de error
Comprobaremos la contraseña y el usuario
Consultar gastos de un cliente
Devolverá un array o false en caso de error
Comprobaremos la contraseña y el usuario
Agregar un cliente
Eliminar un cliente
Caracteristicas:

Evitaremos que se registren usuarios que ya existan
Evitaremos eliminar usuarios que no existan
Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola
*/

/*
var producto = {
	codigo:
	nombre:
	precio:
	stock:
}
*/

var maquinaExpendedora = {
	admin: {
		secreto: 'ficticiaMola'
	},
	herramientas: {
		esUsuario: function(usuario){
			var existe = false;
			for(i = 0; i < aClientes.length; i++){
				if(aClientes[i].usuario === usuario){
					existe = true;
					break;
				}

			}
			return existe;
		},
		esProducto: function(nombre){
			var existe = false;
			for(i = 0; i< aProductos.length; i++){
				if(aProductos[i].nombre === nombre){
					existe = true;
					break;
				}

			}
			return existe;
		},
		obtenerPass: function(usuario){
			var pass = -1;
			for(i = 0; i < aClientes.length; i++){
				if(aClientes[i].usuario === usuario){
					pass = aClientes[i].pass;
					break;
				}
			}
			return pass;
		},
		stockProducto: function(nombre){
			var stock = 0;
			for(i = 0; i < aProductos.length; i++){
				if(aProductos[i].nombre === nombre){
					stock = aProductos[i].stock;
					break;
				}
			}
			return stock;
		},
		obtenerPosUsuario: function(usuario){
			var pos = -1;
			for(i = 0; i < aClientes.length; i++){
				if(aClientes[i].usuario === usuario){
					pos = i;
					break;
				}
			}
			return pos;
		},
		obtenerPosProducto: function(nombre){
			var pos = -1;
			for(i = 0; i < aProductos.length; i++){
				if(aProductos[i].nombre === nombre){
					pos = i;
					break;
				}
			}
			return pos;
		}
	},
	gestionClientes: {
		agregar: function(clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (!maquinaExpendedora.herramientas.esUsuario(objeto.usuario)) {
                    if (objeto.nombre && objeto.pass && objeto.tipo && objeto.presupuesto) {
                        aClientes.push(objeto);
                        console.info("usuario Agregado con éxito");
                        return true;
                    } else {
                        console.warn("ERROR - Faltan datos!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - El usuario ya existe!");
                    return false;
                }
            } else {
                console.warn("ERROR - Contraseña Errónea!");
                return false;
            }
        },
        eliminar: function(clave, usuario) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                    for (var i = 0; i < aClientes.length; i++) {
                        if (aClientes[i].usuario === usuario) {
                            aClientes.splice(i, 1);
                            break;
                        }
                    }
                    console.info("Usuario Eliminado con éxito");
                    return true;

                } else {
                    console.warn("ERROR - El usuario no existe!");
                    return false;
                }
            } else {
                console.warn("ERROR - Contraseña Errónea!");
                return false;
            }
        },
        saldoTotal: function(clave, usuario) {
            var saldoDisponible = -1;
            for (var i = 0; i < aClientes.length; i++) {
                if (aClientes[i].usuario === usuario && aClientes[i].pass === clave) {
                    saldoDisponible = aClientes[i].presupuesto;
                    break;
                }
            }
            return saldoDisponible;
        },
        gastoTotal: function(clave, usuario) {
            var gastoAcumulado = false;
            for (var i = 0; i < aClientes.length; i++) {
                if (aClientes[i].usuario === usuario && aClientes[i].pass === clave) {
                    gastoAcumulado = aClientes[i].gasto;
                    break;
                }
            }
            return gastoAcumulado;
        },
        agregarSaldo: function(clave, usuario, puntos){
        	if (clave === maquinaExpendedora.admin.secreto) {
        		if (maquinaExpendedora.herramientas.esUsuario(usuario)) {

        			var posUsuario = maquinaExpendedora.herramientas.obtenerPosUsuario(usuario);
        			aClientes[posUsuario].presupuesto += puntos;
        			console.info('El saldo ha sido actualizado con éxito!');
        			return true;

        		} else {
        			console.warn("ERROR - El usuario no existe!");
                    return false;
        		}

        	} else {
        		console.warn("ERROR - Contraseña Errónea!");
                return false;
        	}
        },
        retirarSaldo: function(clave, usuario, puntos){
        	if (clave === maquinaExpendedora.admin.secreto) {
        		if (maquinaExpendedora.herramientas.esUsuario(usuario)) {

        			var posUsuario = maquinaExpendedora.herramientas.obtenerPosUsuario(usuario);

        			if (aClientes[posUsuario].presupuesto > 0 && aClientes[posUsuario].presupuesto > puntos){
        				aClientes[posUsuario].presupuesto -= puntos;
        				console.info('El saldo ha sido retirado con éxito!');
        				return true;
        			} else {
        				console.warn('No se puede realizar la operación, el usuario no cuenta con puntos suficientes');
        				return false;
        			}
        			
        		} else {
        			console.warn("ERROR - El usuario no existe!");
                    return false;
        		}

        	} else {
        		console.warn("ERROR - Contraseña Errónea!");
                return false;
        	}
        },
        resetearSaldo: function(clave, usuario){
        	if (clave === maquinaExpendedora.admin.secreto) {
        		if (maquinaExpendedora.herramientas.esUsuario(usuario)) {

        			var posUsuario = maquinaExpendedora.herramientas.obtenerPosUsuario(usuario);
        			aClientes[posUsuario].presupuesto = 0;
        			console.info('Se ha reseteado correctamente el saldo del usuario');
        			return true;
        			
        		} else {
        			console.warn("ERROR - El usuario no existe!");
                    return false;
        		}

        	} else {
        		console.warn("ERROR - Contraseña Errónea!");
                return false;
        	}
        }

	},
	gestionProductos: {
		agregar: function(clave, objeto){
			if(clave === maquinaExpendedora.admin.secreto){
				if(objeto.codigo && objeto.nombre && objeto.stock && objeto.precio){
 					if (!maquinaExpendedora.herramientas.esProducto(objeto.nombre)) {
 						aProductos.push(objeto);
 						console.info("Producto agregado con éxito!");
 						return true;
 					} else {
 						console.warn("ERROR - El producto ya existe!");
                        return false;
 					}
 				} else {
 					console.warn("ERROR - Faltan datos");
                    return false;	
 				}
			} else {
				console.warn("ERROR - Contraseña Errónea!");
                return false;
			}

		},
		eliminar: function(clave, nombre){
			if(clave === maquinaExpendedora.admin.secreto){
				if (maquinaExpendedora.herramientas.esProducto(nombre)) {
					for (var i = 0; i < aProductos.length; i++) {
                        if (aProductos[i].nombre === nombre) {
                            aProductos.splice(i, 1);
                            break;
                        }
                    }
                    console.info("Producto eliminado con éxito");
                    return true;
				} else {
					console.warn("ERROR - El producto no existe!");
                    return false;
				}
			} else {
				console.warn("ERROR - Contraseña Errónea!");
                return false;
			} 
		},
		informeStock: function(clave){
			if(clave === maquinaExpendedora.admin.secreto){

				console.info('====================');
				console.info('Inventario Productos');
				console.info('====================');

				for(i = 0; i < aProductos.length; i++){
					console.info('Código: ' + aProductos[i].codigo + ' | ' + 'Nombre: ' + aProductos[i].nombre + ' | ' + 'Stock: ' + aProductos[i].stock);
				}

				var fecha = new Date();
				console.log("Fecha " + fecha.toLocaleString());

			} else {
				console.warn("ERROR - Contraseña Errónea!");
                return false;
			} 

		}

	},
	cliente: {
		consumirProducto: function(usuario, pass, producto){
			if (maquinaExpendedora.herramientas.esUsuario(usuario)){
				if(maquinaExpendedora.herramientas.obtenerPass(usuario) === pass){
					if(maquinaExpendedora.herramientas.esProducto(producto)){
						if(maquinaExpendedora.herramientas.stockProducto(producto) != 0){

							var posUsuario = maquinaExpendedora.herramientas.obtenerPosUsuario(usuario);
							var posProducto = maquinaExpendedora.herramientas.obtenerPosProducto(producto);

							if (aProductos[posProducto].precio > aClientes[posUsuario].presupuesto){
								console.warn('No cuenta con puntos suficientes para realizar la compra!');
								return false;
							} else {
								aClientes[posUsuario].presupuesto -= aProductos[posProducto].precio;
								aProductos[posProducto].stock -= 1;

								//Guardamos el gasto
								aClientes[posUsuario].gastos.push(aProductos[posProducto].precio);

								console.info('Compra realizada con éxito!');
								return true;
							}

						} else {
							console.warn("ERROR - El producto elegido está agotado!");
                			return false;
						}

					} else {
						console.warn("ERROR - El producto no existe!");
                		return false;
					} 

				} else {
					console.warn("ERROR - El password no es correcto!");
                	return false;
				}

			} else {
				console.warn("ERROR - No existe un cliente registrado con ese usuario!");
                return false;
			}
		}
	}

};


// Testeando esUsuario:
maquinaExpendedora.herramientas.esUsuario("deni"); // true
maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false

// Testeando agregar:
maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "deni"
}); // ERROR - El usuario ya existe!
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "ulises2",
    presupuesto: 1000
}); // ERROR - Faltan datos! 
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "ulises2",
    presupuesto: 1000,
    tipo: "admin",
    pass: "pass2",
    nombre: "Ulises2"
}); // usuario Agregado con exito

// Testeando borrar:
maquinaExpendedora.gestionClientes.eliminar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.eliminar("ficticiaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.eliminar("ficticiaMola", "Yo mismo"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.eliminar("ficticiaMola", "ulises2"); // Usuario Eliminado con exito

// Testeando Saldo:
maquinaExpendedora.gestionClientes.saldoTotal(); // -1
maquinaExpendedora.gestionClientes.saldoTotal("pass", "ulises"); // 1000

// Testrando Gasto:
maquinaExpendedora.gestionClientes.gastoTotal(); // false
maquinaExpendedora.gestionClientes.gastoTotal("pass", "ulises"); // []

// Testeando producto
maquinaExpendedora.herramientas.esProducto("oreo"); 

// Testeando agregar producto
maquinaExpendedora.gestionProductos.agregar(); //ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProductos.agregar("ficticiaMola"); //PREGUNTAR ESTO!!
maquinaExpendedora.gestionProductos.agregar("ficticiaMola", {
    nombre: "oreo"
}); // ERROR - Faltan datos!

maquinaExpendedora.gestionProductos.agregar("ficticiaMola", {
	codigo: "A42",
    nombre: "oreo",
    precio: 11,
    stock: 16
}); // ERROR - El producto ya existe!

maquinaExpendedora.gestionProductos.agregar("ficticiaMola", {
	codigo: "A42",
    nombre: "lacacitos",
    precio: 11,
    stock: 16
}); // El producto ha sido agregado con éxito!

//Testeando borrar
maquinaExpendedora.gestionProductos.eliminar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProductos.eliminar("ficticiaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionProductos.eliminar("ficticiaMola", "galletas"); // El producto ha sido eliminado con éxito!

//Testeando agregarSaldo
maquinaExpendedora.gestionClientes.agregarSaldo(); // ERROR - Contraseña Erronea
maquinaExpendedora.gestionClientes.agregarSaldo("ficticiaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.agregarSaldo("ficticiaMola",'ulises',15); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.agregarSaldo("ficticiaMola",'ceci',15); // El saldo ha sido actualizado con éxito!

//Testeando retirarSaldo
maquinaExpendedora.gestionClientes.retirarSaldo(); // ERROR - Contraseña Erronea
maquinaExpendedora.gestionClientes.retirarSaldo("ficticiaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.retirarSaldo("ficticiaMola",'ulises',15); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.retirarSaldo("ficticiaMola",'deni',15); // El saldo ha sido retirado con éxito!
maquinaExpendedora.gestionClientes.retirarSaldo("ficticiaMola",'deni',35); // No se puede realizar la operación, el usuario no cuenta con puntos suficientes

//Testeando resetearSaldo
maquinaExpendedora.gestionClientes.resetearSaldo(); // ERROR - Contraseña Errónea!
maquinaExpendedora.gestionClientes.resetearSaldo("ficticiaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.resetearSaldo("ficticiaMola",'ulises'); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.resetearSaldo("ficticiaMola",'deni'); // Se ha reseteado correctamente el saldo del usuario

maquinaExpendedora.gestionClientes.agregarSaldo("ficticiaMola",'deni',40); // El saldo ha sido actualizado con éxito!

//Testeando consumirProducto
maquinaExpendedora.cliente.consumirProducto(); //ERROR - No existe un cliente registrado con ese usuario!
maquinaExpendedora.cliente.consumirProducto('ulises','1541','oreo'); //ERROR - No existe un cliente registrado con ese usuario!
maquinaExpendedora.cliente.consumirProducto('deni','1541','oreo'); //ERROR - El password no es correcto!
maquinaExpendedora.cliente.consumirProducto('deni','0706','coca cola'); // ERROR - El producto no existe!
maquinaExpendedora.cliente.consumirProducto('deni','0706','oreo'); // Compra realizada con éxito!
maquinaExpendedora.cliente.consumirProducto('ceci','1812','kit kat'); // No cuenta con puntos suficientes para realizar la compra!

//Testeando informeStock
maquinaExpendedora.gestionProductos.informeStock(); // ERROR - Contraseña Errónea!
maquinaExpendedora.gestionProductos.informeStock('ficticiaMola'); 
/*
====================
Inventario Productos
====================
Código: A14 | Nombre: oreo | Stock: 1
Código: A57 | Nombre: agua mineral | Stock: 15
Código: A10 | Nombre: galletas | Stock: 25
Código: A05 | Nombre: kit kat | Stock: 25
Fecha 31/1/2017 12:44:31
*/
