function mostrar()
{
    var tipo;
    var cantBolsas;
    var precioBolsa;
    var respuesta;
    var acumuladorPrecio;
    var acumuladorCant;
    var totalBruto;
    var importeConDescuento;
    var descuento;
    var porcentajeDescuento;
    var cantBolsasArena;
    var cantBolsasCal;
    var cantBolsasCemento;
    var tipoConMas;
    var banderaDelPrimero;
    var acumuladorDePrecioBruto;
    var tipoMasCaro;
    var tipoMasCaroPrecio;

    acumuladorDePrecioBruto=0;
    banderaDelPrimero="si";
    cantBolsasArena=0;
    cantBolsasCal=0;
    cantBolsasCemento=0;
    acumuladorCant=0;
    acumuladorPrecio=0;
    respuesta="si";
    while(respuesta=="si")
    {
      tipo=prompt("ingrese el tipo de material de construccion");
      while(tipo!="arena" && tipo!="cal" && tipo!="cemento")
      {
        tipo=prompt("error,  reingrese el tipo de material nuevamente");
      }
      //cantidad de bolsas°°
      cantBolsas=prompt("ingrese la cant");
      cantBolsas=parseInt(cantBolsas);
      while(cantBolsas<0)
      {
        cantBolsas=prompt("error, ingrese la cant nuevamente");
        cantBolsas=parseInt(cantBolsas);
      }
      //precio°°
      precioBolsa=prompt("ingrese el precio");
      precioBolsa=parseInt(precioBolsa);
      while(precioBolsa<0)
      {
        precioBolsa=prompt("error, reingrese el precio");
        precioBolsa=parseInt(precioBolsa);
      }

      if(banderaDelPrimero=="si")
      {
        banderaDelPrimero="no";
        tipoMasCaro=tipo;
        tipoMasCaroPrecio=precioBolsa;
      }else
      {
        if(precioBolsa>tipoMasCaroPrecio)
        {
          tipoMasCaroPrecio=precioBolsa;
          tipoMasCaro=tipo;
        }
      } 
      switch(tipo)
      {
        case "arena":
          cantBolsasArena=cantBolsasArena+cantBolsas;
          break;
        case "cal":
          cantBolsasCal=cantBolsasCal+cantBolsas;
          break;
        case "cemento":
          cantBolsasCemento=cantBolsasCemento+cantBolsas;
          break;
      }
        
      acumuladorCant=acumuladorCant+cantBolsas;
      acumuladorPrecio=acumuladorPrecio+precioBolsa;
      

      respuesta=prompt("Desea seguir?");
    }//fin del while

    if(cantBolsasCal>cantBolsasCemento && cantBolsasCal>cantBolsasArena)  
    {
      tipoConMas="cal";
    }else
    {
      if(cantBolsasCemento>cantBolsasArena)
      {
        tipoConMas="cemento";
      }else
      {
        tipoConMas="arena";
      }
    }

    totalBruto=acumuladorCant*acumuladorPrecio;
    acumuladorDePrecioBruto=acumuladorDePrecioBruto+totalBruto; 

    
    if(cantBolsas>30)       //!!!Solo toma el descuento del 15 %!!!
    {
      porcentajeDescuento=25
    }
    if(cantBolsas>10)
    {
      porcentajeDescuento=15;
    }else
    {
      porcentajeDescuento=0;
    }
   

    if(porcentajeDescuento!=0)
    {  
      descuento=acumuladorDePrecioBruto*porcentajeDescuento/100;
      importeConDescuento=acumuladorDePrecioBruto-descuento;
    }  
    
    document.write("el importe bruto total es :"+acumuladorDePrecioBruto+"<br>");
    document.write("el importe con descuento es :"+importeConDescuento+"<br>");
    document.write("el tipo con mas cant de bolsas es :"+tipoConMas+"<br>");
    document.write("el tipo mas caro es :"+tipoMasCaro+"<br>");

    

}
  /*
  Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
  */