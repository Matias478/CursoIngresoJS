/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var importeConDescuento;
	
	importe=txtIdImporte.value;
	importe=parseInt(importe);
	
	descuento=importe*25/100;

	importeConDescuento=importe - descuento;//siempre para sacar el dedscuento es el mas grande menos el mas chico

	txtIdResultado.value= importeConDescuento;


	
	alert("su importe con descuento es: "+importeConDescuento);

}

