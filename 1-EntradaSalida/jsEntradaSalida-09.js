/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
	var aumento;
	var sueldoConAumento;
	
	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);
	
    aumento=sueldo*10/100;
	
   
	sueldoConAumento=sueldo + aumento;
	
	txtIdResultado.value= sueldoConAumento;

	alert("su sueldo con aumento : "+sueldoConAumento);
}
/*Matias Ferrari ;)
se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"
*/
function mostrarAumento()
{
	var nombreDelProducto;
	var importeDelProducto;
	var porcentajeDeAumento;
	var aumento;
	var precioFinal;

	nombreDelProducto=prompt("el nombre del producto es: ");

	importeDelProducto=prompt("ingrese su importe aqui:");
	importeDelProducto=parseInt(importeDelProducto);

	porcentajeDeAumento=prompt("ingrese su aumento aqui: ");
	porcentajeDeAumento=parseInt(porcentajeDeAumento);

	aumento=(importeDelProducto*porcentajeDeAumento)/100;

	precioFinal=importeDelProducto+aumento;

	alert("el producto "+nombreDelProducto+" cuesta $"+importeDelProducto+" sin aumento, tiene aumento de $"+aumento+ " y el precio final es: $"+precioFinal+", gracias por su compra");

}