function cienTiradas() {

	for (var dado1 = 0, dado2 = 0, sumanDiez = 0, i = 0; i < 100; i++) {

		dado1 = Math.floor(Math.random() * (7- 1)) + 1;
		dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
    
    console.log("Tirada nº", i, ": ", dado1, "+", dado2, "=", dado1 + dado2)
    
		if ((dado1 + dado2) === 10) {

			sumanDiez++;
		}
	}
console.log(sumanDiez);
}

cienTiradas();