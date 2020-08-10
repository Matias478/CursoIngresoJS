
function mostrar()
{
	var tipo;
	var precio;
	var cantUnidades;
	var marca;
	var fabricante;
	var contador;
	var jabonMasCaro;
	var cantUnidadesJabonMasCaro;
	var jabonMasCaroFabricante;
	var banderaJabonMasCaro;
	var contadorJabon;
	var	contadorBarbijos;
	var	contadorAlcoholes;
	var tipoConMas;
	var acumuladorJabon;
	var	acumuladorAlcohol;
	var acumuladorBarbijos;
	var promedioDeCompra;

	acumuladorAlcohol=0;
	acumuladorBarbijos=0;
	acumuladorJabon=0;
	contadorAlcoholes=0;
	contadorBarbijos=0;
	contadorJabon=0;
	banderaJabonMasCaro="si";

	for(contador=0;contador<5;contador++)
	{
		tipo=prompt("ingrese el tipo de producto: barbijo, jabon o alcohol");
		while(isNaN(tipo)==false || tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo=prompt("error, reingrese el tipo de producto: barbijo, jabon o alcohol");
		}

		precio=prompt("ingrese el precio");
		precio=parseInt(precio);
		while(isNaN(precio)==true || precio<100 || precio>300)
		{
			precio=prompt("error, reingrese el precio");
			precio=parseInt(precio);
		}

		cantUnidades=prompt("ingrese la cant de unidades");
		cantUnidades=parseInt(cantUnidades);
		while(isNaN(cantUnidades)==true || cantUnidades<0 || cantUnidades>1000)
		{
			cantUnidades=prompt("error, reingrese la cant de unidades");
			cantUnidades=parseInt(cantUnidades);
		}

		marca=prompt("ingrese la marca");
		fabricante=prompt("ingrese el fabricante");

		if(banderaJabonMasCaro=="si")
		{
			jabonMasCaro=precio;
			cantUnidadesJabonMasCaro=cantUnidades;
			jabonMasCaroFabricante=fabricante;
			banderaJabonMasCaro="ya se fue perro";
		}else
		{
			if(precio>jabonMasCaro)
			{
				jabonMasCaro=precio;
				cantUnidadesJabonMasCaro=cantUnidades;
				jabonMasCaroFabricante=fabricante;
			}
		}
		switch(tipo)
		{
			case "alcohol":
				contadorAlcoholes++;
				acumuladorAlcohol=acumuladorAlcohol+cantUnidades;
			break;
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijos=acumuladorBarbijos+cantUnidades;
			break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantUnidades;
			break;
		}
		


	}//fin del for
		
	if(contadorAlcoholes>contadorBarbijos && contadorAlcoholes>contadorJabon)
	{
		tipoConMas="alcohol";
		promedioDeCompra=acumuladorAlcohol/contadorAlcoholes;
	}else
	{
		if(contadorBarbijos>contadorJabon)
		{
			tipoConMas="barbijo";
			promedioDeCompra=acumuladorBarbijos/contadorBarbijos;
		}else
		{
			tipoConMas="jabon";
			promedioDeCompra=acumuladorJabon/contadorJabon;
		}
	}

	
	document.write("la cant de unidades del jabon mas caro son "+cantUnidadesJabonMasCaro+" y el fabricante es"+jabonMasCaroFabricante+"<br>");
	document.write("el tipo con mas unidades es :"+tipoConMas+" y su promedio de compra es "+promedioDeCompra+"<br>");
	document.write("la cant ded unidades de barbijos son :"+acumuladorBarbijos+"<br>");

}
