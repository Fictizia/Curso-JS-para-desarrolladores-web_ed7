	
	var nombre = prompt("¿Como te llamas?");

	// bucle while hasta que conteste o muera
    while(!nombre){
        nombre = prompt("¿Como te llamas?")
    }
    //

	testVelocidad = confirm( nombre + " deseas comprobar lo rápido que funciona su navegador");
    
		if(testVelocidad === true){

			console.group("grupo console.log");
		        console.time("tiempo grupo console.log");
		        console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
		        console.timeEnd("tiempo grupo console.log");
	        console.groupEnd();
		}

		else{

			alert("adios")
		}

