/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese F ó M .");

	while(sexoIngresado !="F" && sexoIngresado !="M")
	{
		alert("error");
		sexoIngresado = prompt("ingrese nuevamente F ó M .");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN