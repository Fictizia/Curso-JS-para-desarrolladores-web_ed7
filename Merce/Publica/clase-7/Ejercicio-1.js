function moneda() {
	cara = Math.floor(Math.random() * (2 - 0)) + 0;
	console.log(cara);

	if (cara === 1) {
		console.log("Ha salido cara");
	} else {
		console.log("Ha sido cruz");
	}

}

moneda();