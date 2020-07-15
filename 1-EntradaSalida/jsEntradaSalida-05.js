/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
    var edadIngresado;

	nombreIngresado=txtIdNombre.value;
	edadIngresado=txtIdEdad.value;
	
	alert("usted se llama "+nombreIngresado+" y tiene "+edadIngresado+" años");
	//alert("Usted se llama " ++ " y tiene " ++ " años"); se sustituye elnombre y la edad por el signo + y las otras palabras van entre comillas
	/*alert("usted se llama "+nombreIngresado);
      alert("y tiene "+edadIngresado+" años");
    espacio en las palabras adentro de las comillas para que no este todo junto
*/


}


