/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIgresado;
	var respuesta;
	numeroIgresado=0;
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta)
	{
		numeroIgresado=prompt("Ingrese su numero");
		numeroIgresado=parseInt(numeroIgresado);
		
		acumulador=acumulador+numeroIgresado;
		contador=contador+1;	 
		respuesta=confirm("quiere seguir?");//siempre hay que parar el while con alguna variable
											//sino se ejecutara infinitamente
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN