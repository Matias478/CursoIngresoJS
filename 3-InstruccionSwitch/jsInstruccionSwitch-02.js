function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			alert("Ya pasamos el frio, ahora el calor!!");
			break;
		default:
			alert("falta para el invierno");
			break;		
 	}



}//FIN DE LA FUNCIÓN