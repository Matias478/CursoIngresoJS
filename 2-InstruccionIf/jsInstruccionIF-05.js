function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);  
	
	/*if(edadIngresada>12 && edadIngresada<18)
	{
		alert("es adolescente");
	}
	else
	{
		alert("no es adolescente");
	}*/
	
	if(!(edadIngresada>12 && edadIngresada<18))
	{
		alert("no es adolescente");
	}
	else
	{
		alert("es adolescente");
	}

	//https://onlinegdb.com/rksHGAHew (ejercicio 6)
}//FIN DE LA FUNCIÓN