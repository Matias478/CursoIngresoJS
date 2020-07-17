/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{//declaro variables
    var productoUno;
    var productoDos;
    var productoTres;
    var suma;
//tomo la variable
    productoUno=txtIdPrecioUno.value;
    productoUno=parseInt(productoUno);

    productoDos=txtIdPrecioDos.value;
    productoDos=parseInt(productoDos);//transformo la variable

    productoTres=txtIdPrecioTres.value;
    productoTres=parseInt(productoTres);

    suma=productoUno+productoDos+productoTres;//hago la operacion

    alert("el precio final es: "+suma);// y lo muestro por alert


}
function Promedio () 
{
	var productoUno;
    var productoDos;
    var productoTres;
    var suma;
    var promedio;
    
    productoUno=txtIdPrecioUno.value;
    productoUno=parseInt(productoUno);
   
    productoDos=txtIdPrecioDos.value;
    productoDos=parseInt(productoDos);

    productoTres=txtIdPrecioTres.value;
    productoTres=parseInt(productoTres);

    suma=productoUno+productoDos+productoTres;

    promedio=suma/3;

    alert("el promedio es: "+promedio);



}
function PrecioFinal () 
{
    var productoUno;
    var productoDos;
    var productoTres;
    var suma;
    var iva;
    var precioFinal;


    productoUno=txtIdPrecioUno.value;
    productoUno=parseInt(productoUno);

    productoDos=txtIdPrecioDos.value;
    productoDos=parseInt(productoDos);

    productoTres=txtIdPrecioTres.value;
    productoTres=parseInt(productoTres);

    suma=productoUno+productoDos+productoTres;

    iva=suma*21/100;

    precioFinal=suma+iva;

    alert("El precio final es: "+precioFinal);


}