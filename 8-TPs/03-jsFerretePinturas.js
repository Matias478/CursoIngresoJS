/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFarenheit;
    var temperaturaCentigrados;
    
    temperaturaFarenheit=txtIdTemperatura.value;
    temperaturaFarenheit=parseInt(temperaturaFarenheit);

    temperaturaCentigrados=(temperaturaFarenheit-32) * 5/9;

    alert(temperaturaFarenheit+" en Farenheit son "+temperaturaCentigrados+" centigrados");

}

function CentigradosFahrenheit () 
{
    var temperaturaCentigrados;//tomo variable
    var temperaturaFarenheit;

    temperaturaCentigrados=txtIdTemperatura.value;//tomo el id
    temperaturaCentigrados=parseInt(temperaturaCentigrados);//transformo el number

    temperaturaFarenheit=(temperaturaCentigrados*9/5) + 32;//hago la cuenta

    alert(temperaturaCentigrados+" en Centigrados son "+temperaturaFarenheit+" Farenheit");//y muestro el resultado

}
//( °F − 32) × 5/9 =  °C
//( °C × 9/5) + 32 =  °F
