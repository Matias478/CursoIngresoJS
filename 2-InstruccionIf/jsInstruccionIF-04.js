function mostrar()
{
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	/*
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("es adolescente");
		}
	}*/
	
	//Forma con operaddores logicos
	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("es un adoslescente");
	}

	


}//FIN DE LA FUNCIÓN