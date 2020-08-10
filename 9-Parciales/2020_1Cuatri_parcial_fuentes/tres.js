/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var personaConMasTemperatura;
	var nombreConMasTemperatura;
	var banderaConMasTemperatura;
	var contadorDeViudos;
	var contadorDehombresSolteros;
	var contadorDehombresViudos;
	var contadorViejosConTemperaturaAlta;
	var edadHombresSolteros;
	var promedioDeEdadHombresSolteros;

	edadHombresSolteros=0;
	contadorViejosConTemperaturaAlta=0;
	contadorDehombresViudos=0;
	contadorDehombresSolteros=0;
	contadorDeViudos=0;
	banderaConMasTemperatura="si";
	respuesta="si";

	while(respuesta=="si")
	{
		nombreIngresado=prompt("ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese su nombre");
		}

		edadIngresada=prompt("ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("error, reingrese su edad");
			edadIngresada=parseInt(edadIngresada);
		}

		sexo=prompt("ingrese f(femenino) o m(asculino)");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, reingrese su sexo");
		}

		estadoCivil=prompt("ingrese su estado civil (soltero, casado o viudo)");
		while(isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("error, reingrese su estado civil (soltero, casado o viudo)");
		}

		temperatura=prompt("ingrese su temperatura corporal");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<0)
		{
			temperatura=prompt("error, reingrese su temperatura corporal");
			temperatura=parseInt(temperatura);
		}

		if(banderaConMasTemperatura=="si")
		{
			personaConMasTemperatura=temperatura;	
			nombreConMasTemperatura=nombreIngresado;
			banderaConMasTemperatura="no";
		}else
		{
			if(temperatura>personaConMasTemperatura)
			{
				personaConMasTemperatura=temperatura;
				nombreConMasTemperatura=nombreIngresado;
			}
		}

		if(edadIngresada>18 && estadoCivil=="viudo")
		{
			contadorDeViudos++;
		}

		if(sexo=="m")
		{
			if(estadoCivil=="soltero")
			{
				edadHombresSolteros=edadHombresSolteros+edadIngresada;
				contadorDehombresSolteros++;
			}
			if(estadoCivil=="viudo")
			{
				contadorDehombresViudos++;
			}
		}

		if(edadIngresada>60 && temperatura>38)
		{
			contadorViejosConTemperaturaAlta++;
		}


		respuesta=prompt("Desea seguir?");
	}

	promedioDeEdadHombresSolteros=edadHombresSolteros/contadorDehombresSolteros;

	document.write("el nombre de la persona con mas temperatura es :"+nombreConMasTemperatura+"<br>");
	document.write("la cant de mayores viudos son :"+contadorDeViudos+"<br>");
	document.write("la cant de hombres solteros son :"+contadorDehombresSolteros+" y la cant de viudos son :"+contadorDehombresViudos+"<br>");
	document.write("la cant de personas de tercera edad que tienen mas de 38 de temperatura son :"+contadorViejosConTemperaturaAlta+"<br>");
	document.write("el promedio de edad de los hombres solteros es :"+promedioDeEdadHombresSolteros+"<br>");

}
