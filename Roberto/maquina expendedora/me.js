var productos = [{
        id: "1",
        nombre: "Chocolate",
        precio: "10",
        stock: 5
    },
    {
        id: "2",
        nombre: "Patatas",
        precio: 5,
        stock: 0
    },
    {
        id: "3",
        nombre: "Donuts",
        precio: 20,
        stock: 10
    },
    {
        id: "4",
        nombre: "Sandwich",
        precio: 50,
        stock: 15
    },
    {
        id: "5",
        nombre: "Palmera de chocolate",
        precio: 10,
        stock: 10
    },
];
var clientes = [];
var clientes = [{
    // admin
    nombre: "Ulises Gascón",
    usuario: "ulises",
    contraseña: "pass",
    tipo: "admin",
    presupuesto: 1000,
    gasto: []
}, {
    nombre: "Carlos Perez",
    usuario: "cPerez",
    contraseña: "pass2",
    tipo: "usuario",
    presupuesto: 100,
    gasto: []
}];
// Máquina expendedora:
var maquinaExpendedora = {
    admin: {
        secreto: "ficticiaMola"
    },
    herramientas: {
        esUsuario: function (usuario) {
            var existe = false;
            for (var i = 0; i < clientes.length; i++) {

                if (clientes[i].usuario === usuario) {
                    existe = true;
                    break;
                }
            }
            return existe;
        },
        existeProducto: function (idProducto) {
            var existe = false;
            for (var i = 0; i < productos.length; i++) {

                if (productos[i].id === idProducto) {
                    existe = true;
                    break;
                }
            }
            return existe;
        }
    },
    gestionClientes: {
        agregar: function (clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (!maquinaExpendedora.herramientas.esUsuario(objeto.usuario)) {
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
        eliminar: function (clave, usuario) {
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
        saldoTotal: function (clave, usuario) {
            var saldoDisponible = -1;
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                    saldoDisponible = clientes[i].presupuesto;
                    break;
                }
            }
            return saldoDisponible;
        },
        gastoTotal: function (clave, usuario) {
            var gastoAcumulado = false;
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                    gastoAcumulado = clientes[i].gasto;
                    break;
                }
            }
            return gastoAcumulado;
        }
    },

    gestionProductos: {
        consumirProducto: function (clave, usuario, idProducto) {
            var productoDisponible = -1;
            if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                for (var i = 0; i < productos.length; i++) {
                    if (idProducto === productos[i].id) {
                        productos[i].stock -= 1;
                        for (var j = 0; j < clientes.length; j++) {
                            if (clientes[j].usuario === usuario && clientes[j].contraseña === clave) {
                                clientes[j].presupuesto = clientes[j].presupuesto - productos[i].precio;
                            }
                        }
                        return productos[i];
                    } else {
                        console.warn("ERROR - El producto no existe");
                    }

                }


            } else {
                console.warn("ERROR - El usuario no existe");
            }

            return productoDisponible;
        },

        agregarProducto: function (clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (!maquinaExpendedora.herramientas.existeProducto(objeto.id)) {
                    if (objeto.nombre && objeto.precio && objeto.id && objeto.stock) {
                        productos.push(objeto);
                        console.info("Producto Agregado con exito");
                        return true;
                    } else {
                        console.warn("ERROR - Faltan datos!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - El producto ya existe!");
                    return false;
                }
            } else {
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        },

        eliminarProducto: function (clave, usuario) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (maquinaExpendedora.herramientas.existeProducto(usuario)) {
                    for (var i = 0; i < productos.length; i++) {
                        if (productos[i].id === usuario) {
                            productos.splice(i, 1);
                            break;
                        }
                    }
                    console.info("Producto Eliminado con exito");
                    return true;

                } else {
                    console.warn("ERROR - El producto no existe!");
                    return false;
                }
            } else {
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        },
        
        disponibilidadStock: function(clave){
            if (clave === maquinaExpendedora.admin.secreto) {
                for (var i = 0; i < productos.length; i++) {
                    if(productos[i].stock>0){
                       console.log(productos[i].id,"-", productos[i].nombre,": Quedan", productos[i].stock,"unidades") 
                    }
                            
                }
                var fecha = new Date();
                var year = fecha.getUTCFullYear();
                var mes = fecha.getUTCMonth();
                var dia = fecha.getDate();
                console.info("Fecha del informe: ",dia , "/", mes+=1, "/", year);
            }else {
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        }
        
    },
    gestionSaldoClientes: {
        agregarSaldo: function (usuario, cantidad) {
            if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                for (var i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuario === usuario) {
                        clientes[i].presupuesto += cantidad;
                        console.info("Tu saldo actual se ha incrementado en ", cantidad, " ahora es de ", clientes[i].presupuesto);
                        break;
                    }
                }
            } else {
                console.warn("ERROR - El usuario no existe!");
                return false;
            }
        },
         retirarSaldo: function (usuario, cantidad) {
            if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                for (var i = 0; i < clientes.length; i++) {
                    var comprobarCantidad = 0;
                    if (clientes[i].usuario === usuario) {
                        comprobarCantidad = clientes[i].presupuesto - cantidad;
                        if (comprobarCantidad >= 0){
                            clientes[i].presupuesto -= cantidad;
                        console.info("Hemos reducido su saldo en ", cantidad, " ahora es de ", clientes[i].presupuesto);
                        break;
                        }
                        else{
                            console.info("No se ha podido realizar la operación: Está intentando retirar más puntos de los que dispone (",clientes[i].presupuesto,")");
                        }
                        
                    }
                }
            } else {
                console.warn("ERROR - El usuario no existe!");
                return false;
            }
        },
         resetearSaldo: function (clave, usuario, cantidad) {
              if (clave === maquinaExpendedora.admin.secreto) {
            if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                for (var i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuario === usuario) {
                        clientes[i].presupuesto = cantidad;
                        console.info("Hemos resetado su saldo ahora es de ", clientes[i].presupuesto);
                        break;
                    }
                }
            } else {
                console.warn("ERROR - El usuario no existe!");
                return false;
            }
        } else {
                console.warn("ERROR - Contraseña Erronea!");
                return false;
            }
        }
        
    }
};
// Testeando esUsuario:
maquinaExpendedora.herramientas.esUsuario("ulises"); // true
maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false
// Testeando agregar:
maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "ulises"
}); // ERROR - El usuario ya existe!
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "ulises2"
    , presupuesto: 1000
}); // ERROR - Faltan datos!
maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
    usuario: "ulises2"
    , presupuesto: 1000
    , tipo: "admin"
    , pass: "pass2"
    , nombre: "Ulises2"
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
//Testeando consummirProductos productos
maquinaExpendedora.gestionProductos.consumirProducto("pass", "ulises", "1");
//Testeando agregarProductos
maquinaExpendedora.gestionProductos.agregarProducto("hola"); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProductos.agregarProducto("ficticiaMola", {
    id: "4"
}); // ERROR - El producto ya existe!
maquinaExpendedora.gestionProductos.agregarProducto("ficticiaMola", {
    id: "7"
    , nombre: "Coca-cola"
}); // ERROR - Faltan datos!
maquinaExpendedora.gestionProductos.agregarProducto("ficticiaMola", {
    id: "7"
    , nombre: "Coca-cola"
    , precio: 30
    , stock: 50
});
// Testeando borrarProductos:
maquinaExpendedora.gestionProductos.eliminarProducto(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProductos.eliminarProducto("ficticiaMola", "15"); // ERROR - El producto no existe!
maquinaExpendedora.gestionProductos.eliminarProducto("ficticiaMola", "1"); // Producto Eliminado con exito
// Testeando agregarSaldo:
maquinaExpendedora.gestionSaldoClientes.agregarSaldo("ulises", 500);
maquinaExpendedora.gestionSaldoClientes.retirarSaldo("ulises", 500);
maquinaExpendedora.gestionSaldoClientes.resetearSaldo("ficticiaMola","ulises", 0);

maquinaExpendedora.gestionProductos.disponibilidadStock("ficticiaMola");