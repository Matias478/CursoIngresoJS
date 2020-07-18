/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	
	
	numeroUno=txtIdNumeroDividendo.value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=txtIdNumeroDivisor.value;
	numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno%numeroDos;
	
	alert("el resultado es: "+resultado);
}
/*Matias Ferrari
se pide el ancho y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
mostrar el siguiente mensaje.
"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"

	function terreno()
{
	var largo;
	var ancho;
	var perimetro;
	var superficie;


	largo=prompt("el largo del terreno es: ");
	largo=parseInt(largo);

	ancho=prompt("el ancho del terreno es: ");
	ancho=parseInt(ancho);

	perimetro=(largo*2)+(ancho*2);
	superficie=largo*ancho;


	alert("el terreno tiene "+largo+" x "+ancho+" su perimetro total es de "+perimetro+" y la superficie es de "+superficie);


}*/
