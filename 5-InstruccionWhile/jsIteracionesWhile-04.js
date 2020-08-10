/*						¡¡¡¡ENUNCIADO A!!!!D
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var nombreIngresado;
	var edad;
	var altura;
	var sexo;
	var dinero;
	var CantidadDeHijos;
	var contador;
	//var banderaDelPrimero;
	var edadMasVieja;
	var nombreMasViejo;
	var contadorMujeres;
	var hombreMasViejo;
	var mujerMasAlta;
	//var banderaDeMujerMasAlta;
	var bandraDelHombreMasViejo;
	var alturaDelHombreMasViejo;
	var banderaDePersonaConMasCash;
	var personaConMasDinero;
	var nombreConMasDinero;
	var sexoConMasDinero;
	var contadorMenorCero;
	var acumuladorMujeres;
	var promedioEdadMujeres;

	acumuladorMujeres=0;
	banderaDePersonaConMasCash=1;
	bandraDelHombreMasViejo="el mas viejo";
	contadorMenorCero=0;
	contadorMujeres=0;
	contador=0;

	while(contador<4)    	// contador al 10 lo bajo para ver sdi esta bien
	{
		nombreIngresado=prompt("ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese su nombre");
		}

		edad=prompt("ingrese su edad");    // edad°°|
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0 || edad>115) 
		{
			edad=prompt("error, reingrese su edad");
			edad=parseInt(edad);
		}

		altura=prompt("ingrese su altura"); // alturaa
		altura=parseInt(altura);
		while(isNaN(altura)==true || altura<30 || altura>230)
		{
			altura=prompt("error, reingrese su altura");
			altura=parseInt(altura);
		}

		sexo=prompt("ingrese su sexo"); // sexoooo
		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("error, reingrese su sexo");
		}

		dinero=prompt("ingrese cant de dinero");   //dineroooo
		dinero=parseInt(dinero);
		while(isNaN(dinero)==true)
		{
			dinero=prompt("error, reingrese cant de dinero");
			dinero=parseInt(dinero);
		}

		CantidadDeHijos=prompt("ingrese la cant de hijos");  // cantidad de hijos
		CantidadDeHijos=parseInt(CantidadDeHijos);
		while(isNaN(CantidadDeHijos)==true || CantidadDeHijos<0 || CantidadDeHijos>10)
		{
			CantidadDeHijos=prompt("error, reingrese la cant de hijos");
			CantidadDeHijos=parseInt(CantidadDeHijos);
		}

			// edad mas viejaaaaa!!!!!!
		if(contador==0)//banderaDelPrimero==1 // (contador==0) en este caso se puede usar el contador como bandera, no es necesario la bandera
		{
			edadMasVieja=edad;
			nombreMasViejo=nombreIngresado;
			//banderaDelPrimero=0;
		}else
		{
			if(edad>edadMasVieja)
			{
				edadMasVieja=edad;
				nombreMasViejo=nombreIngresado;
			}
		}

			// cantidad de mujeress!!!!!
		if(sexo=="f")
		{
			if(contadorMujeres==0) // contadorMujeres==0 se puede usar como bandera, no se necdesita bandera 
			{
				mujerMasAlta=altura;
				
			}else
			{
				if(altura>mujerMasAlta)
				{
					mujerMasAlta=altura;
				}
			}
			contadorMujeres++;
			acumuladorMujeres=acumuladorMujeres+edad;
		}else 
		{
			if(sexo=="m")
			{
				if(bandraDelHombreMasViejo=="el mas viejo")   // aca si va bandera porque no tenemos contadores
				{
					hombreMasViejo=edad;
					alturaDelHombreMasViejo=altura;
					bandraDelHombreMasViejo="el mas viejo";
				}else
				{
					if(edad>hombreMasViejo)
					{
						hombreMasViejo=edad;
						alturaDelHombreMasViejo=altura;
					}
				}
			}
		}
		
		if(banderaDePersonaConMasCash==1)
		{
			banderaDePersonaConMasCash=0;
			personaConMasDinero=dinero;
			nombreConMasDinero=nombreIngresado;
			sexoConMasDinero=sexo;
		}else
		{
			if(dinero>personaConMasDinero)
			{
				personaConMasDinero=dinero;
				nombreConMasDinero=nombreIngresado;
				sexoConMasDinero=sexo;
			}
		}

		if(dinero<0)
		{
			contadorMenorCero=contadorMenorCero+1;
		}


		promedioEdadMujeres=acumuladorMujeres/contadorMujeres;
		contador++;
	}

	
	
	document.write("la edad mas vieja es "+edadMasVieja+" y su nombre es "+nombreMasViejo+"<br>");
	document.write("la cant de mujeres es :"+contadorMujeres+"<br>");
	document.write("el hombre mas viejo tiene :"+hombreMasViejo+"<br>");
	document.write("la mujer mas alta mide :"+mujerMasAlta+"<br>");
	document.write("la altura del hombre mas viejo es :"+alturaDelHombreMasViejo+"<br>");
	document.write("el nombre de la persona con mas dinero es "+nombreConMasDinero+" y su sexo es "+sexoConMasDinero+"<br>");
	document.write("la cant de personas con dinero menor a cero "+contadorMenorCero+"<br>");
	document.write("el promedio de las edades de las mujeres son "+promedioEdadMujeres+"<br>");


}//FIN DE LA FUNCIÓN

/*a) Se debe ingresar 10:
nombre
edad (0 y 115)
altura(30 y 230)
sexo(f o m)
Dinero(puede ser positivo o negativo, pero debe ser un numero)
CantidadDeHijos(0, 10)

1- edad mas vieja °
2- nombre de la persona con edad mas vieja°
3- cantidad de mujeres°
4- de los hombres el mas viejo°
5- de las mujeres la mas alta  °
6- la altura del hombre mas viejo°
7- el nombre y sexo de la persona con mas dinero °
8- cantidad de personas con dinero menor a cero °
9- promedio de edad de las mujeres

//while(isNaN(numeroIngresado)==true)


                                     ejercicio N°4
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=0;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(numeroIngresado<0 || numeroIngresado>9)
	{
		alert("error, este numero es incorrecto");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	alert("tu numero es "+numeroIngresado);
	txtIdNumero.value=numeroIngresado;

}//FIN DE LA FUNCIÓN
*/