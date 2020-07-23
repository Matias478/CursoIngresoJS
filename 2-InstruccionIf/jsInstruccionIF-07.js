function mostrar()
{
	var edadIngresada;
	var estadou;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadou=estadoCivil.value;
	
	
	if(edadIngresada<18 && estadou!="Soltero")
	{
		alert("es muy pequeño para no ser soltero");
	}
	else
	{
		alert("es soltero");
	}

	/* Forma para quemuestre una en cada caso
	if(edadIngresada<18 && estadou!="Soltero")
	{
		alert("es muy pequeño para no ser soltero");
	}
	else
	{
		if(edadIngresada>18 && estadou=="Casado")
		{
		alert("es casado");
		}
		else
		{
			if(edadIngresada>18 && estadou=="Divorciado")
			{
				alert("es Divorciado");
			}
			else
			{
				alert("es soltero");
			}
		}	
	}
	*/
	
}//FIN DE LA FUNCIÓN