/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var raza;
	var peso;
	var temperatura;
	var edad;
	var peligroExtincion;
	var respuesta;
	var contador;
	var acumuladorEdad;
	var promedioEdades;
	var elMasPesado;
	var razaMasPesada;
	var banderaDelPrimero;
	var temperaturaMaxima;

	banderaDelPrimero=1;
	contador=0;
	acumuladorEdad=0;
	respuesta="si";
	while(respuesta=="si")
	{
		raza=prompt("ingrese la raza");
		while(isNaN(raza)==false)
		{
			raza=prompt(" error; reingrese la raza");
		}
		
		peso=prompt("ingrese el peso");
		peso=parseInt(peso);
		while(isNaN(peso)==true || peso<0)
		{
			peso=prompt("error, reingrese el peso");
			peso=parseInt(peso);
		}

		temperatura=prompt("ingrese la temperatura del lugar donde habita");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<-50 || temperatura>70)
		{
			temperatura=prompt("error, reingrese la temperatura del lugar donde habita");
			temperatura=parseInt(temperatura);
		}

		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0 || edad>180)
		{
			edad=prompt("error, reingrese la edad");
			edad=parseInt(edad);
		}

		peligroExtincion=prompt("ingrese si esta o no en peligro de extincion");
		while(isNaN(peligroExtincion)==false || peligroExtincion!="si" && peligroExtincion!="no")
		{
			peligroExtincion=prompt("error, reingrese si esta o no en peligro de extincion");
		}

		if(contador==0)
		{
			elMasPesado=peso;
			razaMasPesada=raza;
		}else
		{
			if(peso>elMasPesado)
			{
				elMasPesado=peso;
				razaMasPesada=raza;
			}
		}

		if(peligroExtincion=="si")	
		{	
			if(banderaDelPrimero==1)
			{
				temperaturaMaxima=temperatura;
				banderaDelPrimero=0;
			}else
			{
				if(temperatura>temperaturaMaxima)
				{
				temperaturaMaxima=temperatura;
				}
			}
		}

		acumuladorEdad=acumuladorEdad+edad;
		contador++;
		respuesta=prompt("Desea seguir?");
	}
	promedioEdades=acumuladorEdad/contador;

	document.write("el promedio de todas las edades es :"+promedioEdades+"<br>");
	document.write("la raza del mas pesado es :"+razaMasPesada+"<br>");
	
	if(banderaDelPrimero!=1)
	{
		document.write("la temperatura maxima es :"+temperaturaMaxima+"<br>");
	}else
	{
		document.write("no hay animales en peligro de extincion");
	}


}//FIN DE LA FUNCIÓN

/*
	Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar los siguientes
datos validados:
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:
1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción

			¡¡¡¡¡Ejercicio n°8!!!!!

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	numeroIngresado=0;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta)
	{
		numeroIngresado=prompt("Ingrese su numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			}	
		}    
		contador=contador+1;
		respuesta=confirm("quiere continuar?");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN


*/