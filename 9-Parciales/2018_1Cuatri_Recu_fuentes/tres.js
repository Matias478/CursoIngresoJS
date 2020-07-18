function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    precio=prompt("ponga su precio aqui: ");
    precio=parseInt(precio);

    porcentajeDeDescuento=prompt("ponga su descuento aqui: ");
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

    descuento=porcentajeDeDescuento/100;

    precioFinal=precio*descuento;
    
    
    elPrecioFinal.value=precioFinal;
}
