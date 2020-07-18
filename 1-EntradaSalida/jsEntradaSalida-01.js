/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
*/

	/*Matias Ferrari
	se pide dos importes, y un porcentaje de descuento (todo con prompt)
	y se muestra el siguiente mensaje:
	"los prodcutos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
	ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
	"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"
	*/
	
	function mostrar() 
{
	
	alert("esto funciona de maravilla");
	
	
	var primerImporte;
	var segundoImporte;
	var porcentajeDeDescuento;
	var sumaDeImportes;
	var descuento;
	var precioConDescuento;
	var iva;
	var precioFinalConIvaYDescuento;

	primerImporte=prompt("ponga el 1er importe:");
	primerImporte=parseInt(primerImporte);

	segundoImporte=prompt("ponga el 2do importe:");
	segundoImporte=parseInt(segundoImporte);

	porcentajeDeDescuento=prompt("ponga su descuento:");
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	sumaDeImportes=primerImporte+segundoImporte;
	
	descuento=porcentajeDeDescuento/100;

	precioConDescuento=(primerImporte+segundoImporte)*descuento;

	iva=(primerImporte+segundoImporte)*21/100;

	precioFinalConIvaYDescuento=precioConDescuento+iva;

	alert("los prodcutos cuestan $"+primerImporte+" y  $"+segundoImporte+", sumados son $"+sumaDeImportes+",tienen un descuento de $"+descuento+" pesos, el precio total con descuento es $"+precioConDescuento+",el iva es de $"+iva+" y el precio final con IVA es $"+precioFinalConIvaYDescuento);


}
