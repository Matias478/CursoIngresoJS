function mostrar()
{
	var edadIngresada;
	
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("es mayor");
	}
	else
	{
		if(edadIngresada>12 && edadIngresada<18)
		{
			alert("es adolescente");
		}
		else
		{
			alert("es menor");
		}
	}




}//FIN DE LA FUNCIÓN