function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    precio=prompt("ponga el precio aqui: ");
    precio=parseInt(precio);

    porcentajeDeDescuento=prompt("ponga su % descuento ");
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);
    
    descuento=porcentajeDeDescuento/100;

    precioFinal=precio*descuento;

    elPrecioFinal.value=precioFinal;
}
