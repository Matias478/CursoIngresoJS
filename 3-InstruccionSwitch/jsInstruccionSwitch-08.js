function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Hace Frio");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Hace Calor");
			break;
		case "Ushuaia":
			alert("Te congelas");
			break;
	}


}//FIN DE LA FUNCIÓN