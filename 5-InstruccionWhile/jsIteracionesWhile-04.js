/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=0;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(numeroIngresado<0 || numeroIngresado>9)
	{
		alert("error, este numero es incorrecto");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	alert("tu numero es "+numeroIngresado);
	txtIdNumero.value=numeroIngresado;

}//FIN DE LA FUNCIÓN