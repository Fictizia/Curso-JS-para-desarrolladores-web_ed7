var ahora = new Date();

var opciones = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'};
    console.log(ahora.toLocaleString("de-DE", opciones));