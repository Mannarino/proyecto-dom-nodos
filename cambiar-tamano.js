var $contenedorPadre = document.getElementById('sub-contenedor').parentNode;
var $botonSmall = document.getElementById('small');
var $botonMediun = document.getElementById('mediun');
var $botonBig = document.getElementById('big');
var $botonReset = document.getElementById('reset');

$botonSmall.addEventListener('click', cambiarTamano);
$botonMediun.addEventListener('click', cambiarTamano);
$botonBig.addEventListener('click', cambiarTamano);
$botonReset.addEventListener('click', cambiarTamano);

function cambiarTamano(e){
	var elemento=e.target
	var dataTamano=elemento.dataset.tamano
	switch(dataTamano){
		case 'small':
		$contenedorPadre.setAttribute('class','col-4')
		break;
		case 'mediun':
		$contenedorPadre.setAttribute('class','col-6')
		break;
		case 'big':
		$contenedorPadre.setAttribute('class','col-12')
		break;
		case 'reset':
		$contenedorPadre.setAttribute('class','col-8')
		break;
	}
}
