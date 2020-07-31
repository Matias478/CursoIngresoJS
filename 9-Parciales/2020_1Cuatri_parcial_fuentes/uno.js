/*
	ebemos realizar la carga de 5(cinco) productos de prevención de contagio, 
		de cada una debo obtener los siguientes datos: 
		el tipo (validar "barbijo" , "jabón" o "alcohol") , 
		el precio (validar entre 100 y 300),
		la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
		la Marca y el fabricante. <br>
		Se debe Informar al usuario lo siguiente:

		a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
		b) Del tipo con mas unidades, el promedio por compra 
		c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var contador=0;
	var tipo;
	var precio;
	var cantDeUnidades;
	var marca;
	var fabricante;
	var banderaPrimerTipo;
	var minimoPrecioAlcohol;
	var minimoPrecioAlcoholFabricante;
	var minimoPrecioAlcoholCant;
	var contadorDeBarbijos=0;
	var contadorDeJabon=0;
	var contadorDeAlcohol=0;
	var acumuladorBarbijos=0;
	var acumuladorJabon=0;
	var acumuladorAlcohol=0;
	var promedioDeCompra;
	banderaPrimerTipo="es el primero";
	while(contador<5)
	{
		tipo=prompt("ingrese su tipo");
		while(tipo!="Barbijo" && tipo!="Jabon" && tipo!="Alcohol")
		{
			tipo=prompt("error, reingrese tipo");
		}
		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("error, reingrese el precio");
			precio=parseInt(precio);
		}
		cantDeUnidades=prompt("ingrese cantidad");
		cantDeUnidades=parseInt(cantDeUnidades);
		while(cantDeUnidades<0 || cantDeUnidades>1000)
		{
			cantDeUnidades=prompt("error, reingrese la cantidad");
			cantDeUnidades=parseInt(cantDeUnidades);
		}
		marca=prompt("ingrese marca");
		fabricante=prompt("ingrese fabricante");                 ///punto A!!
		if(tipo=="Alcohol")
		{
			if(banderaPrimerTipo=="es el primero")
			{
				banderaPrimerTipo="no es el primero";
				minimoPrecioAlcohol=precio;
				minimoPrecioAlcoholCant=cantDeUnidades;
				minimoPrecioAlcoholFabricante=fabricante;
			}else
			{
				if(precio<minimoPrecioAlcohol)
				{
					minimoPrecioAlcohol=precio;
					minimoPrecioAlcoholCant=cantDeUnidades;
					minimoPrecioAlcoholFabricante=fabricante;
				}
			}
		}
		switch(tipo)
		{
			case "Barbijo":
				contadorDeBarbijos=contadorDeBarbijos+1;
				acumuladorBarbijos=acumuladorBarbijos+cantDeUnidades;
				break;
			case "Jabon":
				contadorDeJabon++;
				acumuladorJabon=acumuladorJabon+cantDeUnidades;
				break;
			case "Alcohol":
				contadorDeAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantDeUnidades;
				break;
		}

		contador=contador+1;
	}//sacar el que tiene mas unidades
	if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijos)
	{
		//alcohol
		promedioDeCompra=acumuladorAlcohol/contadorDeAlcohol;
	}else
	{
		if(acumuladorJabon>acumuladorBarbijos)
		{
			//jabon
			promedioDeCompra=acumuladorJabon/contadorDeJabon;
		}else
		{
			//barbijos
			promedioDeCompra=acumuladorBarbijos/contadorDeBarbijos;
		}
	}
	document.write("el mas barato de los alcohol es: "+minimoPrecioAlcohol+" la cant de unidades es: "+minimoPrecioAlcoholCant+" y el fabricante es: "+minimoPrecioAlcoholFabricante+"<br>");
	document.write("el tipo con mas unidades es: "+tipo+" y el promedio de compra es :"+promedioDeCompra+"<br>");
	document.write("hay "+acumuladorJabon+" unidades de jabon"+"<br>");
}
