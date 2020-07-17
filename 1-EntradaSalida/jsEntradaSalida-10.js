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
/*Matias Ferrari
Se pide un importe y un porcentaje descuento por prompt,
 y se muestra el importe con el descuento por alert con el mensaje 
" el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"
   
  function mostrarAumento()
   {

   var importe;
   var porcentajeDescuento;
   var descuento;
   var importeConDescuento;
  
   importe=prompt("ingrese su importe: ");
   importe=parseInt(importe);
   
   porcentajeDescuento=prompt("ingrese su descuento: ");
   porcentajeDescuento=parseInt(porcentajeDescuento);

   descuento=importe*porcentajeDescuento/100;

   importeConDescuento=importe-descuento;



   alert(" el importe es $"+importe+" el total de descuento es $"+descuento+" y el precio final es $"+importeConDescuento+", gracias por su compra");


   !!!! fue un ejercicio de prueba que dijo el profe, anda re chill !!!!

}
*/