var $contenedorVistaPropiedades = document.getElementById('contenedorVistaPropiedades');
var $titulo = document.getElementById('titulo');
var $parrafo = document.getElementById('parraf');
var $ul = document.getElementById('lista');
var $imagen = document.getElementById('piramides');


$titulo.addEventListener('mouseover', verPropeidadesTitulo);
$titulo.addEventListener('mouseout', vaciarContenedor);
$parrafo.addEventListener('mouseover', verPropeidadesTitulo);
$parrafo.addEventListener('mouseout', vaciarContenedor);
$ul.addEventListener('mouseover', verPropeidadesTitulo);
$ul.addEventListener('mouseout', vaciarContenedor);
$imagen.addEventListener('mouseover', verPropeidadesTitulo);
$imagen.addEventListener('mouseout', vaciarContenedor);

function verPropeidadesTitulo(e){
	var $elementoActual =e.target;
	var idTitulo=$elementoActual.getAttribute('id')
	var nodename =$elementoActual.nodeName;
	var contenido = $elementoActual.textContent;
	$contenedorVistaPropiedades.innerHTML='<b>Id:</b>'+idTitulo+'<br><b>etiqueta:</b>'+nodename+'<br><b>contenido:</b>'+contenido;
}
function vaciarContenedor(){
	$contenedorVistaPropiedades.innerHTML='';
}


