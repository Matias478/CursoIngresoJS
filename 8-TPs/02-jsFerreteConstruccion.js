/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largoDelRectangulo;
   var anchoDelRectangulo;
   var cantDeAlambre;
   var perimetro;

   largoDelRectangulo=txtIdLargo.value;
   largoDelRectangulo=parseInt(largoDelRectangulo);
   
   anchoDelRectangulo=txtIdAncho.value;
   anchoDelRectangulo=parseInt(anchoDelRectangulo);

   perimetro=(anchoDelRectangulo*2)+(largoDelRectangulo*2)
   
   cantDeAlambre=perimetro*3;

   alert("la cantidad de alambre a comprar es de "+cantDeAlambre+" metros");

}
function Circulo () 
{
    var radioDelCirculo;
    var cantDeAlambre;
    var perimetro;
    radioDelCirculo=txtIdRadio.value;
    radioDelCirculo=parseInt(radioDelCirculo);
    
    perimetro=(radioDelCirculo*2)*3.14;

    cantDeAlambre=perimetro*3;

    //cantDeAlambre=((radioDelCirculo*2)*3.14)*3;

     alert("la cantidad de alambre a comprar seria de "+cantDeAlambre+" metros");
}
function Materiales () 
{
    var longitud;
    var ancho;
    var calculaCemento;
    var calculaCal;
    var superficie;
    calculaCal=3;
    calculaCemento=2;

    longitud=txtIdLargo.value;
    longitud=parseInt(longitud);

    ancho=txtIdAncho.value;
    ancho=parseInt(ancho);

    superficie=longitud*ancho;

    calculaCal=superficie*3;
    calculaCemento=superficie*2;
  
    alert("Las bolsas que necesitamos para cubir los "+ancho+" metros de ancho mas el largo del terreno de "+longitud+ " metros se necesitan "+calculaCemento+" bolsas de cemento y "+calculaCal+" bolsas de cal ");
	




}