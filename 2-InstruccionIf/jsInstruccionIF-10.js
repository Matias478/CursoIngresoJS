function mostrar()
{
	var notas;
	console.log=Math.floor(Math.random() * 10) + 1;
	notas=console.log;
	if(notas>9 )
	{
		alert("EXCELENTE");
	}
	else
	{
		if(notas>4 && notas<9)
		{
			alert("APROBO");
		}
		else
		{
			alert("VAMOS QUE LA PROXIMA SE PUEDE");
		}
	}


}//FIN DE LA FUNCIÓN