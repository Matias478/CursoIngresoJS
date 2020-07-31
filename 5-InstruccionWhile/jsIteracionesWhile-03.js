/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var nombreIngresdado;
	var edadIngresada;
	var sexoIngresado;
	var contadorTotal=0;
	var contadorMayores=0;
	var contadorMenores=0;
	var contadorAdolescentes=0;
	var contadorMujeres=0;
	var contadorHombres=0;
	var edadMayor;
	var edadMenor;
	var nombreMayor;
	var nombreMenor;
	var contadorMujeresAddolescentes=0;
	var contadorNiñosHombres=0;
	var respuesta="si";
	var banderaDelPrimero="es el primero";
	var promedioEdades;
	var acumulador=0;
	var acumuladorMujeres=0;
	var acumuladoresHombres=0;
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var contadorEdadesPares=0;
	while(respuesta)
	{
		nombreIngresdado=prompt("ingrese su nombre");
		contadorTotal=contadorTotal+1;
		edadIngresada=prompt("ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		acumulador=acumulador+edadIngresada;
		
		while(edadIngresada<0 || edadIngresada>120)
		{
			alert("error");
			edadIngresada=prompt("ingrese nuevamente su edad");
		}
		if(edadIngresada>17)//edad de mayores
		{
			contadorMayores=contadorMayores+1;
		}else
		{
			if(edadIngresada<18)//edad de menores
			{
				contadorMenores=contadorMenores+1;
			}
			if(edadIngresada>13 && edadIngresada<18)//edad de adolescentesd
			{
				contadorAdolescentes=contadorAdolescentes+1;
			}
			
		}
		if(edadIngresada%2==0)//edades pares
		{
			contadorEdadesPares=contadorEdadesPares+1;
		}
		if(banderaDelPrimero=="es el primero")
		{
			edadMayor=edadIngresada;
			edadMenor=edadIngresada;
			nombreMayor=nombreIngresdado;
			nombreMenor=nombreIngresdado;
			banderaDelPrimero="ya se fue";
		}else
		{
			if(edadIngresada>edadMayor)//mayor edad
			{
				edadMayor=edadIngresada;
				nombreMayor=nombreIngresdado;
			}
			if(edadIngresada<edadMenor)//menor edad
			{
				edadMenor=edadIngresada;
				nombreMenor=nombreIngresdado;
			}
		}
		sexoIngresado=prompt("ingrese F(Femenino) o M(Masculino)");
		while(sexoIngresado!="F" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("error, ingrese nuevamente su sexo");
		}
		if(sexoIngresado=="F")//sexo femenino y la edad de los mismos
		{
			contadorMujeres=contadorMujeres+1;
			acumuladorMujeres=acumuladorMujeres+edadIngresada;
		}else	
		{
			if(sexoIngresado=="M")//sexo masculino y edad de los mismos
			{
				contadorHombres=contadorHombres+1;
				acumuladoresHombres=acumuladoresHombres+edadIngresada;
			}
		}
		if(edadIngresada>13 && edadIngresada<18 && sexoIngresado=="F")//edad de adolescentes mujeres
		{
			contadorMujeresAddolescentes=contadorMujeresAddolescentes+1;
		}
		if(edadIngresada<13 && sexoIngresado=="M")//edad de hombreds niños
		{
			contadorNiñosHombres=contadorNiñosHombres+1;
		}
		
		promedioEdades=acumulador/contadorTotal;
		promedioEdadMujeres=acumuladorMujeres/contadorMujeres;
		promedioEdadHombres=acumuladoresHombres/contadorHombres;
		

	
		respuesta=confirm("¿Desea continuar?");
	}
	
	
	
	document.write("en total son "+contadorTotal+" personas"+"<br>");
	document.write("en total hay "+contadorMayores+" personas mayores de edad"+"<br>");
	document.write("en total hay "+contadorMenores+" personas menores de edad"+"<br>");
	document.write("en total hay "+contadorAdolescentes+" adolescentes"+"<br>");
	document.write("la edad mas vieja es :"+edadMayor+"<br>");
	document.write("la edad mas joven es :"+edadMenor+"<br>");
	document.write("la cant de mujeres son :"+contadorMujeres+"<br>");
	document.write("la cant de hombres son :"+contadorHombres+"<br>");
	document.write("la cant de niños hombres son :"+contadorNiñosHombres+"<br>");
	document.write("la cant de adolescentes mujeres son :"+contadorMujeresAddolescentes+"<br>");  
	document.write("el promedio de las edades son :"+promedioEdades+"<br>");
	document.write("el promedio de las edades de mujeres es :"+promedioEdadMujeres+"<br>");
	document.write("el promedio de las edades de los hombres es :"+promedioEdadHombres+"<br>");
	document.write("la cant de edades pares son :"+contadorEdadesPares+"<br>");
	document.write("el nombre de la persona mas vieja es :"+nombreMayor+"<br>");
	document.write("el nombre de la persona mas joven es :"+nombreMenor+"<br>");

}//FIN DE LA FUNCIÓN

/*
Agregado while


Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/
/*Ejercicio 3

	var claveIngresada;
	claveIngresada = prompt("ingrese su clave aqui");
	
	while(claveIngresada !="utn750")
	{
		alert("error, la clave es incorrecta");
		claveIngresada = prompt("ingrese nuevamente su clave aqui");
	}
	alert("bienvenido");

*/


/*NO ANDA BIEN !!!!
	 //Nombre
	while(respuesta)
	{
		nombreIngresdado=prompt("ingrese su nombre ");

		respuesta=confirm("¿Quiere continuar?");
		contadorTotal=contadorTotal+1;
	}
	 
	 //Edad
	while(respuestaDos)
	{
			//if(edadIngresada>0 || edadIngresada<120)
			
			edadIngresada=prompt("ingrese su edad");
			edadIngresada=parseInt(edadIngresada);
			respuestaDos=confirm("¿Quiere continuar?");
		
		if(edadIngresada<0 || edadIngresada>120)
		{
			alert("error");
		}
			
		if(edadIngresada>17)
		{
			contadorMayores=contadorMayores+1;
		}else
		{
			if(edadIngresada<18)
			{
				contadorMenores=contadorMenores+1;
			}
			if(edadIngresada>13 && edadIngresada<18)
			{
				contadorAdolescentes=contadorAdolescentes+1;
			}
		}
			
		if(banderaDelPrimero=="es el primero")
		{
			edadMayor=edadIngresada;
			edadMenor=edadIngresada;
			banderaDelPrimero=="ya se re fue compa";
		}else
		{
			if(edadIngresada>edadMayor)
			{
				edadMayor=edadIngresada;
			}else
			{
				if(edadIngresada<edadMenor)
				{
					edadMenor=edadIngresada;
				}
			}
		}
		
	}	
	//Sexo

	while(respuestaTres)
	{
		sexoIngresado=prompt("ingrese F(Femenino) o M(Masculino");
		
		//respuestaTres=confirm("¿Desea seguir?");
		if(sexoIngresado=="F")
		{
			contadorMujeres=contadorMujeres+1;
		}else
		{
			if(sexoIngresado=="M")
			{
				contadorHombres=contadorHombres+1;
			}else
			{
				alert("error");
			}
		}
		if(edadIngresada>13 && edadIngresada<18 && sexoIngresado=="F")
		{
			contadorMujeresAddolescentes=contadorMujeresAddolescentes+1;
		}
		if(edadIngresada<13 && sexoIngresado=="M")
		{
			contadorNiñosHombres=contadorNiñosHombres+1;
		}
		respuestaTres=confirm("¿Desea seguir?");
	}

			*/