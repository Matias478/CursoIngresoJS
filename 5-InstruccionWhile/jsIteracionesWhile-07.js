/*Enunciado b)”sin banderas”
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var edad;
	var altura;
	var sexo;
	var dinero;
	var CantidadDeHijos;
	var contador;
	var contadorMujeres;
	var personaMasVieja;
	var nombreMasVieja;
	var acumuladorMujeres;
	var promedioMujeres;
	var mujerMasJoven;
	var nombreMasJoven;

	acumuladorMujeres=0;
	contadorMujeres=0;
	contador=0;
	while(contador<4)
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
		
		if(contador==0)
		{
			personaMasVieja=edad;
			nombreMasVieja=nombreIngresado;
		}else
		{
			if(edad>personaMasVieja)
			{
				personaMasVieja=edad;
				nombreMasVieja=nombreIngresado;
			}
		}

		if(sexo=="f")
		{
			if(contadorMujeres==0)
			{
				mujerMasJoven=edad;
				nombreMasJoven=nombreIngresado;
			}else
			{
				if(edad<mujerMasJoven)
				{
					mujerMasJoven=edad;
					nombreMasJoven=nombreIngresado;
				}
			}
			acumuladorMujeres=acumuladorMujeres+altura;
			contadorMujeres++;
		}

		contador++;
	}

	//promedioMujeres=acumuladorMujeres/contadorMujeres;
	
	console.log("el nombre la persona mas vieja es :"+nombreMasVieja);

	if(contadorMujeres!=0)
	{
		promedioMujeres=acumuladorMujeres/contadorMujeres;
		console.log("el promedio de altura de las mujeres es :"+promedioMujeres);
		
		console.log("el nombre de la mujer mas joven es :"+nombreMasJoven);
	}else
	{
		console.log("no se ingresaron mujeres");
	}
	
}//FIN DE LA FUNCIÓN

/*
Enunciado b)”sin banderas”
Se debe ingresar 10 personas con sus datos validados:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
se debe informar:
1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven






								!!!EJERCICIO 7¡¡¡¡

var contador;
	var acumulador;
	var numeroIgresado;
	var respuesta;
	numeroIgresado=0;
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta)
	{
		numeroIgresado=prompt("Ingrese su numero");
		numeroIgresado=parseInt(numeroIgresado);
		
		acumulador=acumulador+numeroIgresado;
		contador=contador+1;	 
		respuesta=confirm("quiere seguir?");//siempre hay que parar el while con alguna variable
											//sino se ejecutara infinitamente
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;


*/