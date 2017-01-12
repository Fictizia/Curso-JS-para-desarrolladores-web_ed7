var contador = 0;
var numero = 46;
var numero_romano;

while(contador < 50){
	if (numero == 50){
		numero_romano = "L";
	}
	if(numero >= 40 && numero < 50){
		numero = numero - 40;
		numero_romano = "XL";
	}
	if(numero >= 30 && numero < 40){
		numero = numero - 30;
		numero_romano = "XXX";
	}
	if(numero >= 20 && numero < 30){
		numero = numero - 20;
		numero_romano = "XX";
	}
	if(numero >= 10 && numero < 20){
		numero = numero - 10;
		numero_romano = "X";
	}
	if(numero == 9){
		numero = numero - 9;
		numero_romano = numero_romano + "IX";
	}
	if(numero == 8){
		numero = numero - 8;
		numero_romano = numero_romano + "IIX";
	}
	if(numero == 7){
		numero = numero - 7;
		numero_romano = numero_romano + "IIIX";
	}
	if(numero == 6){
		numero = numero - 6;
		numero_romano = numero_romano + "VI";
	}
	if(numero == 5){
		numero = numero - 5;
		numero_romano = numero_romano + "V";
	}
	if(numero == 4){
		numero = numero - 4;
		numero_romano = numero_romano + "IV";
	}
	if(numero == 3){
		numero = numero - 3;
		numero_romano = numero_romano + "III";
	}
	if(numero == 2){
		numero = numero - 2;
		numero_romano = numero_romano + "II";
	}
	if(numero == 1){
		numero = numero - 1;
		numero_romano = numero_romano + "I";
	}
	contador++;
}

console.log(numero_romano);