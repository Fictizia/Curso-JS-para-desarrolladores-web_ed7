
/*
¿Que fecha será dentro de 30 días?
*/

var dia = new Date();
console.log('hoy es:', dia.toLocaleString());
dia.setDate(dia.getDate()+30);
dia.toLocaleString();
console.log('dentro de 30 dias sera: ' , dia.toLocaleString());