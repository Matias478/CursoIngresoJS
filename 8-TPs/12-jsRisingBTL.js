/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	//EDAD
	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);

	while(edadIngresada<18 || edadIngresada>90)
	{
		alert("error, edad equivocada");
		edadIngresada=prompt("Ingrese nuevamente su edad");
		edadIngresada=parseInt(edadIngresada);
	}
	//SEXO
	sexoIngresado=prompt("ingrese Femenino o Masculino");
	while(sexoIngresado!="Femenino" && sexoIngresado !="Masculino")
	{
		alert("error");
		sexoIngresado=prompt("ingrese nuevamente Femenino o Masculino");
	}

	//ESTADO CIVIL
	estadoCivilIngresado=prompt("ingrese su estado civil 1(soltero), 2(casado), 3(divorciado), 4(viudo)");
	while(estadoCivilIngresado!="1" && estadoCivilIngresado!="2" && estadoCivilIngresado!= "3" && estadoCivilIngresado!="4")
	{
		alert("error, ese estado civil no es correcto");
		estadoCivilIngresado=prompt("ingrese nuevamente su estado civil");
	}
	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado="Soltero";
			break;
		case "2":
			estadoCivilIngresado="Casado";
			break;
		case "3":
			estadoCivilIngresado="Divorciado";
			break;
		case "4":
			estadoCivilIngresado="Viudo";
			break;
	}
	//SUELDO
	sueldoBruto=prompt("ingrese su sueldo");
	sueldoBruto=parseInt(sueldoBruto);
	
	while(sueldoBruto<8000)
	{
		alert("el sueldo es incorrecto");
		sueldoBruto=prompt("ingrese nuevamente su sueldo");
		sueldoBruto=parseInt(sueldoBruto);
	}
	//LEGAJO
	numeroLegajo=prompt("ingrese un numero legajo");
	numeroLegajo=parseInt(numeroLegajo);
	while(numeroLegajo<1000 || numeroLegajo>9999)
	{
		alert("el numero no es correcto");
		numeroLegajo=prompt("ingrese un numero legajo nuevamente");
		numeroLegajo=parseInt(numeroLegajo);
	}
	//Nacionalidad
	nacionalidad=prompt("ingrese A(Argentino), E(Extranjero), N(Nacionalizado)");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		alert("error, las nacionalidades no coinciden con las pedidas");
		nacionalidad=prompt("ingrese nuevamente si es: A(Argentino), E(Extranjero), N(Nacionalizado)");
	}
	switch(nacionalidad)
	{
		case "A":
			nacionalidad="Argentino";
			break;
		case "E":
			nacionalidad="Extranjero";
			break;
		case "N":
			nacionalidad="Nacionalizado";
			break;
	}


	txtIdEdad.value=edadIngresada;
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoBruto;
	txtIdLegajo.value=numeroLegajo;
	txtIdNacionalidad.value=nacionalidad;
}
