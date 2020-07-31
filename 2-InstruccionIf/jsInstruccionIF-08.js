function mostrar()
{
	/* ¡¡Agregado A Version usando solo switch!!
	
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
	
	switch(edadIngresada)
	{
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
			alert("Se responsable");
		break;
		default:
			alert("Se responsable ya que sos persona de riesgo");
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			alert("Hagan la tarea");
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			alert("Respeta a tus mayores");
			break;
		
	}	
		switch(estadoDeCivil)
		{
			case "Soltero":
			alert("A vivir la vida");
		break;
			case "Casado":
				switch(edadIngresada)
				{
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					alert("Eres muy joven para no ser soltero");
					break;
					default:
						alert("A disfrutar de la pareja");
				}break;
			case "Divorciado":
				switch(edadIngresada)
				{
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					alert("Eres muy joven para no ser soltero");
					break;
					default:
						alert("A intentar de nuevo");
				}
				break;
		}
	

	
}//FIN DE LA FUNCIÓN

/*								PARTE DEL EJERCICIO DE ARRIBA QUE CAMBIE
case "Casado":
	if(edadIngresada<18)
		{
			alert("Eres muy joven como para no ser soltero");
		}else
		{
			alert("A disfrutar de la pareja");
		}
		break;
		case "Divorciado":
		if(edadIngresada<18)
		{
			alert("Eres muy joven como para no ser soltero");
		}else
		{
			alert("a intentarlo nuevamente");
		}
		break;
		
	EJERCICIO 8
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
	
	---------------------------------------------
											Agregaddo A version if!!
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
	*/

