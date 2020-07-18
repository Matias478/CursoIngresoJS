
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;
     
    largo=prompt("ponga el largo aqui: ");
    largo=parseInt(largo);

    ancho=prompt("ponga el ancho aqui: ");
    ancho=parseInt(ancho);

    perimetro=(largo*2)+(ancho*2);

    alert("El perimetro es: "+perimetro);



}
