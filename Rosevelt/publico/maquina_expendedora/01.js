/*Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

Características:

Solo los usuarios registrados pueden usar la máquina
El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
Para agilizar la reposición de lo consumido... la maquina debe controlar en stock*/


/*	Paso 1 - Creamos los primeros objetos básicos: */
/*  Paso 2 - Creamos los primeros perfiles en el Array de clientes:*/

var maquinaExpendedora = {};

// Demo Producto:


var productos = [{
    nombre: 'barritas',
    stock: 5,
    precio: 5,
    disponible: true,
    ubicacion: "A2",
}, {
    nombre: 'zumo',
    stock: 10,
    precio: 10,
    disponible: true,
    ubicacion: "A3",
}, {
    nombre: 'galletas',
    stock: 15,
    precio: 15,
    disponible: true,
    ubicacion: "A4",
}];

// Demo Cliente:
var clientes = [{
    // admin
    nombre: "Ulises Gascón",
    usuario: "ulises",
    contraseña: "pass",
    tipo: "admin",
    presupuesto: "1000",
    gasto: []
}, {
    nombre: "Carlos Perez",
    usuario: "cPerez",
    contraseña: "pass2",
    tipo: "usuario",
    presupuesto: "100",
    gasto: []
}];

/*Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades*/
var maquinaExpendedora = {

    admin: {
        secreto: "ficticiaMola"
    },

    herramientas: {
        esUsuario: function(usuario) {
            var existe = false;
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].usuario === usuario) {
                    existe = true;
                    break;
                }
            }
            return existe;
        }
    },

    gestionClientes: {
        agregar: function(clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (!maquinaExpendedora.herramientas.esUsuario(objeto.usuario)) {
                    // comprueba si existe es = false, lo pasa a true con "!"  para qu entre en el if
                    if (objeto.nombre && objeto.pass && objeto.tipo && objeto.presupuesto) {
                        clientes.push(objeto);
                        console.info("usuario Agregado con exito");
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
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        },

        eliminar: function(clave, usuario) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                    for (var i = 0; i < clientes.length; i++) {
                        if (clientes[i].usuario === usuario) {
                            clientes.splice(i, 1);
                            break;
                        }
                    }
                    console.info("Usuario Eliminado con exito");
                    return true;

                } else {
                    console.warn("ERROR - El usuario no existe!");
                    return false;
                }
            } else {
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        },

        saldoTotal: function(clave, usuario) {
            var saldoDisponible = -1;
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                    saldoDisponible = clientes[i].presupuesto;
                    break;
                }
            }
            return saldoDisponible;
        },

        gastoTotal: function(clave, usuario) {
            var gastoAcumulado = false;
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                    gastoAcumulado = clientes[i].gasto;
                    break;
                }
            }
            return gastoAcumulado;
        },

        consumirProducto: function(clave, usuario, ubicacion) {
            var disponibilidad = -1;
            for (var i = 0; i < productos.length; i++) {
                if (productos[i].ubicacion === ubicacion) {

                    for (j = 0; j < clientes.length; j++) {
                        if (clientes[j].usuario === usuario && clientes[j].presupuesto > productos[i].precio) {

                            if (productos[i].stock > 0) {
                                productos[i].stock -= 1;
                                console.log(productos[i].nombre);
                                console.log(clientes[j].usuario);
                                console.log(productos[i].stock);
                                break;
                            } else {
                                console.info("producto agotado");
                                return disponibilidad;
                            }

                        } else {
                            console.log("no tienes saldo suficiente");
                        }
                    }
                    break;

                } else {
                    console.info("el producto no existe");
                    return disponibilidad;
                }
            }
        }
    }
};

maquinaExpendedora.gestionClientes.consumirProducto("pass", "ulises", "A2");
