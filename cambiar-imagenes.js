
var $contenedor = document.getElementById('sub-contenedor');
var $botonPiramides = document.getElementById('piramides');
var $botonCataratas = document.getElementById('cataratas');
var $botonLeon = document.getElementById('leon');
var $botonNinguna = document.getElementById('ninguna');

$botonPiramides.addEventListener('click', cambiarImagen);
$botonCataratas.addEventListener('click', cambiarImagen);
$botonLeon.addEventListener('click', cambiarImagen);
$botonNinguna.addEventListener('click', cambiarImagen);

function cambiarImagen(e){
	var elemento=e.target
	var dataImagen=elemento.dataset.imagen
	switch(dataImagen){
		case 'piramides':
		$contenedor.setAttribute('class','sub-contenedor')
		$contenedor.classList.add('egipto')
		break;
		case 'cataratas':
		$contenedor.setAttribute('class','sub-contenedor')
		$contenedor.classList.add('cataratas')
		break;
		case 'leon':
		$contenedor.setAttribute('class','sub-contenedor')
		$contenedor.classList.add('leon')
		break;
		case 'ninguna':
		$contenedor.setAttribute('class','sub-contenedor')
		break;
	}
}

/*function cambiarApiramides(){
	$contenedor.setAttribute('class','sub-contenedor')
	$contenedor.classList.add('egipto')
}
function cambiarAcataratas(){
	$contenedor.setAttribute('class','sub-contenedor')
	$contenedor.classList.add('cataratas')
}
function cambiarAleon(){
	$contenedor.setAttribute('class','sub-contenedor')
	$contenedor.classList.add('leon')
}
function cambiarAninguna(){
	$contenedor.setAttribute('class','sub-contenedor')
}*/