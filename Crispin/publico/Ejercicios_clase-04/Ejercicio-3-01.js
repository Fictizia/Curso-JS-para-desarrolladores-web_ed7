/* Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto
*/

function operaciones(valor_1, valor_2){
    'use strict';
    console.group("grupo de operaciones");

        console.info("Suma:", valor_1, "+", valor_2, "=", valor_1+valor_2);

        console.info("Resta:",valor_1, "-", valor_2, "=", valor_1-valor_2);

        console.info("División:", valor_1, "/", valor_2, "=",valor_1/valor_2);

        console.info("Multiplicación:", valor_1, "*", valor_2, "=", valor_1*valor_2);

    console.groupEnd();
};

operaciones(2,3);