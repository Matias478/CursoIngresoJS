function mostrar()
{
	var edadIngresada;
	var estadou;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadou=estadoCivil.value;

	if(edadIngresada<18 && estadou!="Soltero")
	{
		
	}
	else
	{
		if(edadIngresada>18 && estadou=="Soltero")
		{
			alert("Es soltero y no es menor");
		}
	}



}//FIN DE LA FUNCIÓN