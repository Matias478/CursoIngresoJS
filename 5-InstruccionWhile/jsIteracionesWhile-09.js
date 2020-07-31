/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	numeroIngresado=0;
	banderaDelPrimero="es el primero";      //"es el primero";
	respuesta="si";
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese su numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero="ya se fue";
		}else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
		txtIdMaximo.value=numeroMaximo;
		txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN

/*
while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese su numero");
		numeroIngresado=parseInt(numeroIngresado);

		numeroMaximo=Math.max(numeroIngresado);
		numeroMaximo=parseInt(numeroMaximo);
		//txtIdMaximo.value=numeroMaximo;
		
		numeroMinimo=Math.min(numeroIngresado); 
		numeroMinimo=parseInt(numeroMinimo);
		//txtIdMinimo.value=numeroMinimo;
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
*/