function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					alert("Se viaja");
					break;	
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja igual");
					break;
			}
			break;			
	}

}//FIN DE LA FUNCIÓN