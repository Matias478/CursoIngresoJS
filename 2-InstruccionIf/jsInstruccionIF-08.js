function mostrar()
{
	/* ¡¡Agregado A!!
	
	Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"
	*/

	var edadIngresada;
	var estadoDeCivil;
	
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoDeCivil=estadoCivil.value;
	
	if(edadIngresada>17)
	{
		alert("Se responsable");
	
		if(edadIngresada>59)
		{
			alert("Ya que sos persona de alto riesgo");
		}
		if(estadoDeCivil=="Casado")
		{
			alert("a disfrutar la pareja");	
		}else
		{
			if(estadoDeCivil=="Soltero")
			{
				alert("a vivir la vida");
			}
			
		}
						
	}
	else
	{
		alert("Respeta a tus mayores");
		
		if(edadIngresada<13)
		{
			alert("Hagan la tarea");
		}else
		{
			if(estadoDeCivil!="Soltero")
			{
				alert("es muy pequeño para no ser soltero");
			
			}
		}
	}	
		if(estadoDeCivil=="Divorciado")
		{
			alert("a intentarlo nuevamente");
		}
	
	

	
	
	/*if(edadIngresada>60)
	{
		alert("Se responsable ya que sos persona de alto riesgo");
	}*/
	
	
	
	
	/*sEJERCICIO 8
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
	*/
}//FIN DE LA FUNCIÓN

/* 
else
	{
		if(estadoDeCivil=="Divorciado")
		{
			alert("a intentarlo nuevamente");
		}	
			
*/