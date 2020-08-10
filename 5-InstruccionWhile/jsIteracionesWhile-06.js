function mostrar()
{
	var nombreIngresado;
	var edad;
	var sexo;
	var altura;
	var respuesta;
	var banderaMasAlta;
	var nombreMasAlta;
	var mujerMasAlta;
	var banderaMasVieja;
	var hombreMasViejo;
	var nombreMasViejo;
	var banderaAdolescente;
	var nombrePrimerAdolescente;

	banderaAdolescente="adolescente";
	banderaMasVieja=0;
	banderaMasAlta=1;
	respuesta="si";
	while(respuesta=="si")
	{
		nombreIngresado=prompt("ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese su nombre");
		}

		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0)
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

		sexo=prompt("ingrese f(femenino) o m (masculino)");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, reingrese f(femenino) o m (masculino)");
		}

		if(sexo=="f")
		{	if(banderaMasAlta==1)
			{
				mujerMasAlta=altura;
				nombreMasAlta=nombreIngresado;
				banderaMasAlta=0;
			}else
			{
				if(altura>mujerMasAlta)
				{
					mujerMasAlta=altura;
					nombreMasAlta=nombreIngresado;
				}
			}
		}

		if(sexo=="m")
		{
			if(banderaMasVieja==0)
			{
				hombreMasViejo=edad;
				nombreMasViejo=nombreIngresado;
				banderaMasVieja=1;
			}else
			{
				if(edad>hombreMasViejo)
				{
					hombreMasViejo=edad;
					nombreMasViejo=nombreIngresado;
				}
			}
		}

	
		if(banderaAdolescente=="adolescente")	
		{
			nombrePrimerAdolescente=nombreIngresado;
			banderaAdolescente="ya crecio";
		}else
		{
			if(edad>13 && edad<18)
			{
				nombrePrimerAdolescente=nombreIngresado;
			}
		}


		

		respuesta=prompt("Desea continuar?");
	}

	if(banderaMasAlta!=1)
	{
		
		console.log("el nombre de la mujer mas alta es :"+nombreMasAlta);
	}else
	{
		console.log("no se ingresaron mujeres");
	}

	if(banderaMasVieja!=0)
	{
		console.log("el nombre del hombre mas viejo es :"+nombreMasViejo);
	}else
	{
		console.log("no se ingresaron hombres");
	}
	if(banderaAdolescente!="adolescente")
	{
		console.log("el nombre del primer adolescente es :"+nombrePrimerAdolescente);
	}else
	{
		console.log("no se ingresaron adolescentes");
	}

} //FIN DE LA FUNCIÓN


	/*
Enunciado a)”bandera a full”
de una cantidad de espectadores indeterminada debemos tomar lo siguiente datos
validados:
sexo
altura
edad
nombre
se debe informar:
1-el nombre de la más alta de las mujeres
2-el nombre del más viejo de los hombres
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si hay algún
adolescente)


									¡¡¡¡EJERCICIO 6!!!!
	var acumulador;
	var numeroIngresado;
	var contador;
	
	//numeroIngresado=0;
	acumulador=0;
	
	contador=0;
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese su numero aqui: ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}
		txtIdSuma.value=acumulador;
		txtIdPromedio.value=acumulador/5;
		*/