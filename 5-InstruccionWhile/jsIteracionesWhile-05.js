/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var raza;
	var peso;
	var temperatura;
	var peligroDeExtincion;
	var edad;
	var respuesta;
	var contador;
	var acumuladorEdad;
	var promedioEdad;
	var elMasPesado;
	var razaDelPesado;
	var cantDeAnimalesEnPeligro;
	var temperaturaMinima;
	var tempearaturaMaximaDeAnimalesEnExticion;
	var banderaDeLaTemperaturaMaxima;
	
	banderaDeLaTemperaturaMaxima="es la mayor";
	cantDeAnimalesEnPeligro=0;
	contador=0;
	acumuladorEdad=0;
	respuesta="si"
	while(respuesta=="si")
	{
		raza=prompt("ingrese la raza");
		while(isNaN(raza)==false)
		{
			raza=prompt("error, reingrese la raza");
		}
		
		peso=prompt("ingrese el peso");
		peso=parseInt(peso);
		while(isNaN(peso)==true || peso<0)
		{
			peso=prompt("error, reingrese los datos");
			peso=parseInt(peso);
		}

		peligroDeExtincion=prompt("ingrese si la raza del animal ingresado esta o no en peligro de extinsion");
		while(peligroDeExtincion!="si" && peligroDeExtincion!="no")
		{
			peligroDeExtincion=prompt("error, reingrese si la raza del animal ingresado esta o no en peligro de extinsion");
		}
		
		temperatura=prompt("ingrese la temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true)
		{
			temperatura=prompt("error, reingrese los datos");
			temperatura=parseInt(temperatura);
		}

		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0)
		{
			edad=prompt("error, reingrese la edad");
			edad=parseInt(edad);
		}

		if(contador==0)    // el mas pesado y su raza
		{
			elMasPesado=peso;
			razaDelPesado=raza;
			temperaturaMinima=temperatura;
		}else
		{
			if(peso>elMasPesado)
			{
				elMasPesado=peso;
				razaDelPesado=raza;
			}
			if(temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
			}
		}

		if(peligroDeExtincion=="si")        // cant de animales peligro de extincion
		{
			if(banderaDeLaTemperaturaMaxima=="es la mayor")   //temperatura maxima de los mismos
			{
				tempearaturaMaximaDeAnimalesEnExticion=temperatura;
				banderaDeLaTemperaturaMaxima="ya no lo es";
			}else
			{
				if(temperatura>tempearaturaMaximaDeAnimalesEnExticion)
				{
					tempearaturaMaximaDeAnimalesEnExticion=temperatura;
				}
			}
			
			cantDeAnimalesEnPeligro++;
		}
		
		acumuladorEdad=acumuladorEdad+edad;
		contador++;
		promedioEdad=acumuladorEdad/contador;
		respuesta=prompt("Desea continuar?");
	}

	document.write("el promedio de edad total es : "+promedioEdad+"<br>");
	document.write("la raza del mas pesado es :"+razaDelPesado+"<br>");
	document.write("la cant de animales en extincion es :"+cantDeAnimalesEnPeligro+"<br>");
	document.write("la temperatura minima es :"+temperaturaMinima+"<br>");
	document.write("la temperatura maxima de animales en exitincion es :"+tempearaturaMaximaDeAnimalesEnExticion+"<br>");



}//FIN DE LA FUNCIÓN
/*
Enunciado b)
de una cantidad de animales indeteminada del zoologico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si esta en peligro de extinsion( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del mas pesado
3-la cantidad de animales en extision que hay


4- la temperatura minima ingresada
5- la tempearatura maxima ingresada de los animales en extinsion





                                   ¡¡¡¡EJERCICIO NUMERO 3!!!!
	var sexoIngresado;
	sexoIngresado = prompt("ingrese F ó M .");

	while(sexoIngresado !="F" && sexoIngresado !="M")
	{
		alert("error");
		sexoIngresado = prompt("ingrese nuevamente F ó M .");
	}

	txtIdSexo.value=sexoIngresado;

*/