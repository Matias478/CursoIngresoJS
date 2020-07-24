function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 o más días")
			break;
	}


}//FIN DE LA FUNCIÓN