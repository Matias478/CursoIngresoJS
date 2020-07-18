function mostrar()
{
    var integranteDeLaPareja1;
    var integranteDeLaPareja2;
    var pesoDeLaPersona1;
    var pesoDeLaPersona2;
    var sumaDePeso;
    var promedioDePeso;

    integranteDeLaPareja1=prompt("su nombre es: ");
    
    pesoDeLaPersona1=prompt("su peso es: ");
    pesoDeLaPersona1=parseInt(pesoDeLaPersona1);

    integranteDeLaPareja2=prompt("su nombre es: ");
    
    pesoDeLaPersona2=prompt("su peso es: ");
    pesoDeLaPersona2=parseInt(pesoDeLaPersona2);

    sumaDePeso=pesoDeLaPersona1+pesoDeLaPersona2;

    promedioDePeso=sumaDePeso/2;

    alert("ustedes se llaman "+integranteDeLaPareja1+" y "+integranteDeLaPareja2+" pesan "+pesoDeLaPersona1+" y "+pesoDeLaPersona2+" kilos, que sumados son "+sumaDePeso+" kilos y el promedio de peso "+promedioDePeso);



}
