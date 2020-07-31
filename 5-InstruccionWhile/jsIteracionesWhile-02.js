/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=10; 
	while(contador>0)
	{
		console.log(contador);
		contador=contador-1;
	}

}//FIN DE LA FUNCIÓN

/*						Para escribir en la pagina con document.write!!

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	var numero;

	numero=0;//1era parte inicializacion de variabe
	while(numero<4)//2da Parte logica correcta
	{
		document.write("<br>"+numero);
		numero=numero+1;//3era modificar elvalor parala logica
	}

	// cuanto vale numero aqui?	
	document.write("<br>"+ numero);

}
*/