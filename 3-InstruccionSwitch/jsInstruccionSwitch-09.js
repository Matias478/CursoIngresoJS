function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);
	var precioBase;
	var aumento;
	var descuento;
	var precioFinal;
	
	precioBase=15000
	 
	switch(destinoIngresado)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Invierno":
					aumento=precioBase*20/100;
					precioFinal=precioBase+aumento;
					alert("En invierno cuesta $"+precioFinal);
					break;
				case "Verano":
					descuento=precioBase*20/100;
					precioFinal=precioBase-descuento;
					alert("En verano cuesta $"+precioFinal);
					break;
				default:
					aumento=precioBase*10/100;
					precioFinal=precioBase+aumento;
					alert("En otoño y primavera cuesta $"+precioFinal);
					break;
			}
			break;
		case "Cataratas":
			switch(estacionIngresada)
			{
				case "Invierno":
					descuento=precioBase*10/100;
					precioFinal=precioBase-descuento;
					alert("En invierno cuesta $"+precioFinal);
					break;
				case "Verano":
					aumento=precioBase*10/100;
					precioFinal=precioBase+aumento;
					alert("En verano cuesta $"+precioFinal);
					break;
				default:
					aumento=precioBase*10/100;
					precioFinal=precioBase+aumento;
					alert("En otoño y primavera cuesta $"+precioFinal)
					break;
			}
			break;
		case "Mar del plata":
			switch(estacionIngresada)
			{
				case "Invierno":
					descuento=precioBase*20/100;
					precioFinal=precioBase-descuento;
					alert("En invierno cuesta $"+precioFinal);
					break;
				case "Verano":
					aumento=precioBase*20/100;
					precioFinal=precioBase+aumento;
					alert("En verano cuesta $"+precioFinal);
					break;
				default:
					aumento=precioBase*10/100;
					precioFinal=precioBase+aumento;
					alert("En otoño y primavera cuesta $"+precioFinal);
					break;
			}
			break;
		case "Cordoba":
			switch(estacionIngresada)
			{
				case "Invierno":
					descuento=precioBase*10/100;
					precioFinal=precioBase-descuento;
					alert("En invierno cuesta $"+precioFinal);
					break;
				case "Verano":
					aumento=precioBase*10/100;
					precioFinal=precioBase+aumento;
					alert("En verano cuesta $"+precioFinal);
					break;
				default:
					alert("En otoño y primavera cuesta $"+precioBase);
					break;
			}
			break;
	}

	
	
}//FIN DE LA FUNCIÓN