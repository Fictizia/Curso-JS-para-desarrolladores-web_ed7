
/*
Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] 
de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]
*/


function combine (){
	var uno = ["oscar", "mario"];
	var dos = ["80", 20];
	var tres = ["pera", "manzana"];
	var combine = uno.concat(dos,tres);

	return combine;

}

combine();
