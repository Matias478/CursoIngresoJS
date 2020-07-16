/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

    suma=numeroUno+numeroDos;

	alert("el resultado es: "+suma);	
}

function restar()
{  
	var numeroUno;
	var numeroDos;
	var resta;
	
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

    resta=numeroUno-numeroDos;

	alert("el resultado es: "+resta);
	
}

function multiplicar()
{ var numeroUno;
	var numeroDos;
	var multiplicacion;
	
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

    multiplicacion=numeroUno*numeroDos;

	alert("el resultado es: "+multiplicacion);
	
}

function dividir()
{var numeroUno;
	var numeroDos;
	var div;
	
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

    div=numeroUno/numeroDos;

	alert("el resultado es: "+div);
	
}

