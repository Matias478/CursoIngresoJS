function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
		  alert("que comiences bien el año!!!.");
		  break;
		case "Marzo":
		  alert("A clases!!");
		  break;
		case "Julio":
		  alert("Se vienen las vacaciones");
		  break;
		case "Diciembre":
		  alert("Felices fiestas!!");
		  break;
	}


}//FIN DE LA FUNCIÓN
/*
case: se ejecuta hasta que se encuentra con un break, ¡¡NUNCA PUEDE IR LOGICA,SOLO VALORES LITERALES!!
break: se encarga de separar los case
default: es el else de todos los posibles cases

*/