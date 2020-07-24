/*Matias Ferrari !!!

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
{
    var cantDeLamparas;
    var marcaDeLamparas;
    var precioBrutoDeLasLamparas;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;
    var aumento10;
    var precioFinalConAumento;

    porcentajeDeDescuento=0;
    cantDeLamparas=txtIdCantidad.value;
    cantDeLamparas=parseInt(cantDeLamparas);

    marcaDeLamparas=Marca.value;

    precioBrutoDeLasLamparas=cantDeLamparas*35;
    //descuento=precioBrutoDeLasLamparas*porcentajeDeDescuento/100;
    //precioFinal=precioBrutoDeLasLamparas-descuento;

   if(cantDeLamparas>5)
   {
       porcentajeDeDescuento=50;
   }else
   {
       if(cantDeLamparas==5)
       {
            if(marcaDeLamparas=="ArgentinaLuz")
            {
                porcentajeDeDescuento=40;
            }else
            {
                porcentajeDeDescuento=30;
            }
       }else
       {
           if(cantDeLamparas==4)
           {
               if(marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")
               {
                    porcentajeDeDescuento=25;
               }else
               {
                   porcentajeDeDescuento=20;
               }
           }else
           {
               if(cantDeLamparas==3)
               {
                   if(marcaDeLamparas=="ArgentinaLuz")
                   {
                        porcentajeDeDescuento=15;
                   }else
                   {
                        if(marcaDeLamparas=="FelipeLamparas")
                        {
                            porcentajeDeDescuento=10;
                        }else
                        {    
                            if(marcaDeLamparas!="ArgentinaLuz" && "FelipeLamparas")
                            {
                                porcentajeDeDescuento=5;
                            }
                        }
                   }
               }
           }
       }
   }
    
    
    
    
    descuento=precioBrutoDeLasLamparas*porcentajeDeDescuento/100;
    precioFinal=precioBrutoDeLasLamparas-descuento;
    txtIdprecioDescuento.value=precioFinal;

    aumento10=precioBrutoDeLasLamparas*10/100;
    precioFinalConAumento=precioFinal+aumento10;
    
    
    if(precioFinal>120)
    {
        alert("Usted pago "+aumento10+" de IIBB, siendo el precio final "+precioFinalConAumento+" con el impuesto que se pagó");
        txtIdprecioDescuento.value=precioFinalConAumento;
    }

   // aumento10=precioBrutoDeLasLamparas*10/100;
    //precioFinalConAumento=precioFinal+aumento10;


}
/*
 
 function CalcularPrecio ()         !!PRIMER INTENTO FALLIDO!!
{
    var cantDeLamparas;
    var marcaDeLamparas;
    var precioBrutoDeLasLamparas;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    porcentajeDeDescuento=0;
    cantDeLamparas=txtIdCantidad.value;
    cantDeLamparas=parseInt(cantDeLamparas);

    marcaDeLamparas=Marca.value;

    precioBrutoDeLasLamparas=cantDeLamparas*35;
    //descuento=precioBrutoDeLasLamparas*porcentajeDeDescuento/100;
    //precioFinal=precioBrutoDeLasLamparas-descuento;

    if(cantDeLamparas>5)
    {
        porcentajeDeDescuento=50;

    }else
    {
        if(cantDeLamparas==5 && marcaDeLamparas=="ArgentinaLuz")
        {
            porcentajeDeDescuento=40;
        }else
        {
            porcentajeDeDescuento=30;
            
            if(cantDeLamparas==4 && marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")
            {
                porcentajeDeDescuento=25;

                
            }else
            {
                porcentajeDeDescuento=20;
                
                if(cantDeLamparas==3 && marcaDeLamparas=="ArgentinaLuz")
                {
                    porcentajeDeDescuento=15;
                }else
                {
                    if(cantDeLamparas==3 && marcaDeLamparas=="FelipeLamparas")
                    {
                        porcentajeDeDescuento=10;
                    }else
                    {
                        porcentajeDeDescuento=5;

                    }
                }
            }
        
        }
        
    }
    

 function CalcularPrecio ()        !!SEGUNDO INTENTO NO ANDA BIEN NI EL B NI EL C!!
 {
     var cantDeLamparas;
     var marcaDeLamparas;
     var precioBrutoDeLasLamparas;
     var porcentajeDeDescuento;
     var descuento;
     var precioFinal;
 
     porcentajeDeDescuento=0;
     cantDeLamparas=txtIdCantidad.value;
     cantDeLamparas=parseInt(cantDeLamparas);
 
     marcaDeLamparas=Marca.value;
 
     precioBrutoDeLasLamparas=cantDeLamparas*35;
     //descuento=precioBrutoDeLasLamparas*porcentajeDeDescuento/100;
     //precioFinal=precioBrutoDeLasLamparas-descuento;
 
     if(cantDeLamparas>5)
     {
         porcentajeDeDescuento=50;
 
     }else
     {
         if(cantDeLamparas==5 && marcaDeLamparas=="ArgentinaLuz")
         {
             porcentajeDeDescuento=40;
         }else
         {
             porcentajeDeDescuento=30;
             
                 if(cantDeLamparas==4 && marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")
                 {
                     porcentajeDeDescuento=25;
                 }else
                 {
                     porcentajeDeDescuento=20;
                         
                         if(cantDeLamparas==3 && marcaDeLamparas=="ArgentinaLuz")
                         {
                             porcentajeDeDescuento=15;
                         }else
                         {
                             if(cantDeLamparas==3 && marcaDeLamparas=="FelipeLamparas")
                             {
                                 porcentajeDeDescuento=10;
                             }else
                             {
                                 if(cantDeLamparas==3)
                                 {
                                     porcentajeDeDescuento=5;
                                 }
                                 
                             }    
                     
                         }      
                 }
         
         }
         
     }
     
     
     
     
     
     
     descuento=precioBrutoDeLasLamparas*porcentajeDeDescuento/100;
     precioFinal=precioBrutoDeLasLamparas-descuento;
     txtIdprecioDescuento.value=precioFinal;
 
 
 
 
 
 }
 */