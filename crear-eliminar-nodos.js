var $subContenedor = document.getElementById('sub-contenedor')
var $botonCrearTitulo = document.getElementById('crear-titulo');
var $botonCrearImagen = document.getElementById('crear-imagen');
var $botonCrearParrafo = document.getElementById('crear-parrafo');
var $botonCrearLinea = document.getElementById('crear-linea');
var $botonCrearEnlace = document.getElementById('crear-enlace');



$botonCrearTitulo.addEventListener('click',crearTitulo);
$botonCrearImagen.addEventListener('click',crearImagen);
$botonCrearParrafo.addEventListener('click',crearParrafo);
$botonCrearLinea.addEventListener('click',crearLinea);
$botonCrearEnlace.addEventListener('click',crearEnlace);


function crearTitulo(){
	var titulo = document.createElement('h3')
	var tituloTexto = document.createTextNode('you have made a title')
	titulo.appendChild(tituloTexto)

	var span = document.createElement('span')
	var textSpan = document.createTextNode('x')
	span.appendChild(textSpan)
	span.classList.add('eliminar')
	span.setAttribute('onclick', 'eliminar(this);');
	titulo.appendChild(span)
	$subContenedor.appendChild(titulo)
}
function crearImagen(){
	var contenedorNodo = document.createElement('div')
	contenedorNodo.classList.add('contenedorNodoImg')
	var img = document.createElement('img')
	img.src="egipto.jpg";
	var span = document.createElement('span')
	var textSpan = document.createTextNode('x')
	span.appendChild(textSpan)
	span.classList.add('eliminarImg')
	span.setAttribute('onclick', 'eliminar(this);');
	contenedorNodo.appendChild(span)
	contenedorNodo.appendChild(img)
	$subContenedor.appendChild(contenedorNodo)
}
function crearParrafo(){
	var p = document.createElement('p')
	var textoParrafo = document.createTextNode('you have made a paragrafh :)')
	p.appendChild(textoParrafo)
	var span = document.createElement('span')
	var textSpan = document.createTextNode('x')
	span.appendChild(textSpan)
	span.classList.add('eliminar')
	span.setAttribute('onclick', 'eliminar(this);');
	p.appendChild(span)
	$subContenedor.appendChild(p)
}
function crearLinea(){
	var linea = document.createElement('hr')
	$subContenedor.appendChild(linea)
}
function crearEnlace(){
	var contenedorNodo = document.createElement('div')
	contenedorNodo.classList.add('contenedorNodo')

	var enlace = document.createElement('a')
	enlace.href = 'https://www.google.com.ar/'
	enlace.textContent = "go to google"
	enlace.target = '_blank'
	var span = document.createElement('span')
	var textSpan = document.createTextNode('x')
	span.appendChild(textSpan)
	span.classList.add('eliminarEnlace')
	span.setAttribute('onclick', 'eliminar(this);');
	contenedorNodo.appendChild(span)

	contenedorNodo.appendChild(enlace)
	$subContenedor.appendChild(contenedorNodo)
}

function eliminar(e){
	var elemento = e;
	$subContenedor.removeChild(elemento.parentNode);
	console.log(elemento);
}