var $contenedor = document.getElementById('sub-contenedor');
var $botonAzul = document.getElementById('color-azul');
var $botonRojo = document.getElementById('color-rojo');
var $botonVerde = document.getElementById('color-verde');
var $botonNegro = document.getElementById('color-negro');

$botonAzul.addEventListener('click', cambiarColor);
$botonRojo.addEventListener('click', cambiarColor);
$botonVerde.addEventListener('click', cambiarColor);
$botonNegro.addEventListener('click', cambiarColor);


function cambiarColor(e){
	var elemento=e.target
	var dataColor=elemento.dataset.color
	switch(dataColor){
		case 'azul':
		$contenedor.style.borderColor='blue'
		break;
		case 'rojo':
		$contenedor.style.borderColor='red'
		break;
		case 'verde':
		$contenedor.style.borderColor='green'
		break;
		case 'negro':
		$contenedor.style.borderColor='black'
		break;
	}
}
