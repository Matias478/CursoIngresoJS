function mostrar()
{
	
	var acumulador;
	var numeroIngresado;
	var contador;
	
	//numeroIngresado=0;
	acumulador=0;
	
	contador=0;
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese su numero aqui: ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}
		txtIdSuma.value=acumulador;
		txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN