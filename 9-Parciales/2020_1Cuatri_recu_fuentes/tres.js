/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.

*/
function mostrar()
{
	var nacionalidad;
	var nombreIngresado;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var banderaConMasTemperatura;
	var personaConMasTemperatura;
	var nacionalidadConMasTemperatura;
	var contadorSolteros;
	var contadorViudas;
	var contadorSolteras;
	var contadorViejosConTemperaturaAlta;
	var contadorMujeresCasadas;
	var acumuladorMujeresCasadas;
	var promedioEdadMujeresCasadas;

	contadorMujeresCasadas=0;
	acumuladorMujeresCasadas=0;
	contadorViejosConTemperaturaAlta=0;
	contadorViudas=0;
	contadorSolteras=0;
	contadorSolteros=0;
	banderaConMasTemperatura=1;
	respuesta="si";
	while(respuesta=="si")
	{
		nombreIngresado=prompt("ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese su nombre");
		}

		nacionalidad=prompt("ingrese su nacionalidad");
		while(isNaN(nacionalidad)==false)
		{
			nacionalidad=prompt("error, reingrese su nacionalidad");
		}

		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0)
		{
			edad=prompt("error, reingrese su edad");
			edad=parseInt(edad);
		}

		sexo=prompt("ingrese f(femenino) o m(masculino)");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, reingrese f(femenino) o m(masculino)");
		}

		estadoCivil=prompt("ingrese su estado civil");
		while(isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("error, reingrese su estado civil");
		}

		temperatura=prompt("ingrese su temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<15 || temperatura>60)
		{
			temperatura=prompt("error, reingrese su temperatura");
			temperatura=parseInt(temperatura);
		}

		if(banderaConMasTemperatura==1)
		{
			personaConMasTemperatura=temperatura;
			nacionalidadConMasTemperatura=nacionalidad;
			banderaConMasTemperatura=0;
		}else
		{
			if(temperatura>personaConMasTemperatura)
			{
				personaConMasTemperatura=temperatura;
				nacionalidadConMasTemperatura=nacionalidad;
			}
		}
		if(edad>18 && estadoCivil=="soltero")
		{
			contadorSolteros++;
		}
		if(sexo=="f")
		{
			if(estadoCivil=="casado")
			{
				contadorMujeresCasadas++;
				acumuladorMujeresCasadas=acumuladorMujeresCasadas+edad;
			}
			if(estadoCivil=="soltero")
			{
				contadorSolteras++;
			}else
			{
				if(estadoCivil=="viudo")
				{
					contadorViudas++;
				}
			}
		}
		if(edad>60 && temperatura>38)
		{
			contadorViejosConTemperaturaAlta++;
		}

	

		respuesta=prompt("Desea seguir?");
	}

	promedioEdadMujeresCasadas=acumuladorMujeresCasadas/contadorMujeresCasadas;

	document.write("la nacionalidad de la persona con mas temperatura es :"+nacionalidadConMasTemperatura+"<br>");
	document.write("la cant de mayores de edad que son solteros son :"+contadorSolteros+"<br>");
	document.write("la cant de mujeres solteras son :"+contadorSolteras+" y viudas :"+contadorViudas+"<br>");
	document.write("la cant de personas de la tercera edad que tienen mas de 38 grados de temperatura son :"+contadorViejosConTemperaturaAlta+"<br>");
	document.write("el promedio de las edades de las mujeres casadas es:"+promedioEdadMujeresCasadas+"<br>");




}
