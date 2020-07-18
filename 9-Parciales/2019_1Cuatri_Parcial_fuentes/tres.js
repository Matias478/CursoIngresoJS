function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioConDescuento;


    precio=prompt("ponga el precio: ");
    precio=parseInt(precio);

    porcentajeDeDescuento=prompt("ponga su descuento: ");
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

    descuento=precio*porcentajeDeDescuento/100;

    precioConDescuento=precio-descuento;

    elPrecioFinal.value=precioConDescuento;



}
