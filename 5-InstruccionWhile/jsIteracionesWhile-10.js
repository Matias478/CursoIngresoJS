/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;                            //falta la cant de numeros pares!!!
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorDeCeros=0;
	var contadorDeNumerosPares=0;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaDePositivosYNegativos;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese su numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				contadorPositivos=contadorPositivos+1;
			}
			if(numeroIngresado%2==0)
			{
				contadorDeNumerosPares=contadorDeNumerosPares+1;
			}
			
		}
		
		contadorDeCeros=contadorDeCeros+1
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioNegativos=sumaNegativos/contadorNegativos;
	promedioPositivos=sumaPositivos/contadorPositivos;
	diferenciaDePositivosYNegativos=sumaPositivos-sumaNegativos;
	//numeropar=numeroIngresado%2==0
	
	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cant de numeros negativos son :"+contadorNegativos+"<br>");
	document.write("la cant de numeros positivos son :"+contadorPositivos+"<br>");
	document.write("la cant de ceros es :"+contadorDeCeros+"<br>");
	document.write("la cant de numeros pares es :"+contadorDeNumerosPares+"<br>");
	document.write("el promedio de los numeros negativos es :"+promedioNegativos+"<br>");
	document.write("el promedio de los positivos es :"+promedioPositivos+"<br>");
	document.write("la diferencia es :"+diferenciaDePositivosYNegativos+"<br>");

}//FIN DE LA FUNCIÓN