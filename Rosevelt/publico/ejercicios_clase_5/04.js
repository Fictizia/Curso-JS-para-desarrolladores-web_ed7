/*
Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
*/

function precioDescuento (mes, dia, precio){
    if(mes === "diciembre" || mes === "enero" ||mes === "febrero"){
       
        if( dia == "viernes" || dia === "sabado" || dia === "domingo"){
        	console.info("es invierno pero no el dia correcto");
        }else{
        	console.info("cumples las condiciones , el precio con dto es:" , precio - (precio*25)/100 );
        }

    }else{
        console.warn("No tienes descuento");
    }
}
precioDescuento ("enero", "martes" , "100" );



//switch

function precioDescuento (mes, dia, precio){
    switch(true) {
        case ( (mes === "diciembre" || mes === "enero" ||mes === "febrero") && (dia == "viernes" || dia === "sabado" || dia === "domingo") ):
            console.info("cumples las condiciones , el precio con dto es:" , precio - (precio*25)/100 );
            break;;
        default:
            console.warn("No tienes descuento");
    }
}
precioDescuento ("enero", "martes" , "100" );

