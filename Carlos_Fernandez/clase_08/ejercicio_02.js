var hoy = new Date();
var ayer = new Date(2016, 11, 29);
var hoy_milisegundos = hoy.getTime();
var ayer_milisegundos = ayer.getTime();
var horas = (hoy_milisegundos - ayer_milisegundos) / 3600000;
var dias = horas / 24;
console.log("Las horas desde que empezamos son:", horas);
console.log("Las dias desde que empezamos son:", dias);

