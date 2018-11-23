window.onload = initialize;

function initialize() {

	setInterval(mostrarTablero);
}

function mostrarTablero() {
	if(tablero.length != 1){
		var random = Math.floor((Math.random() * 4) + 1);
		tablero.push(random);
		console.log(random);
	}
	if (random == 1) {
		var tablero1 = document.getElementById("tablero1")
		tablero1.style.display = "block";
	}
	if (random == 2) {
		var tablero2 = document.getElementById("tablero2")
		tablero2.style.display = "block";
	}
	if (random == 3) {
		var tablero3 = document.getElementById("tablero3")
		tablero3.style.display = "block";
	}
	if (random == 4) {
		var tablero4 = document.getElementById("tablero4")
		tablero4.style.display = "block";
	}
}

var tablero = [];


var piezas = document.getElementsByClassName("movil");

for(var i = 0; i < piezas.length; i++){
	piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	if(elementSelect != 0){
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

var entorno = document.getElementsByClassName("entorno");

entorno[0]

function reordenar(evt){
	var pieza = evt.target.parentNode;
	var clone = pieza.cloneNode(true);
	var id = pieza.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

var origX = [205,400,598,205,400,598,205,400,598];
var origY = [100,100,100,300,300,300,500,499,500];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<30 && Math.abs(currentPosy-origY[i])<30) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}

var boton1 = document.getElementById("boton1");
boton1.addEventListener("click", hacerInvisible1);

var boton2 = document.getElementById("boton2");
boton2.addEventListener("click", hacerInvisible2);

var boton3 = document.getElementById("boton3");
boton3.addEventListener("click", hacerInvisible3);

var boton4 = document.getElementById("boton4");
boton4.addEventListener("click", hacerInvisible4);

function hacerInvisible1() {
	var tablero2 = document.getElementById("tablero2");
	var tablero3 = document.getElementById("tablero3");
	var tablero4 = document.getElementById("tablero4");
	tablero2.style.display = "none";
	tablero3.style.display = "none";
	tablero4.style.display = "none";
	tablero1.style.display = "block";
}

function hacerInvisible1() {
	var tablero2 = document.getElementById("tablero2");
	var tablero3 = document.getElementById("tablero3");
	var tablero4 = document.getElementById("tablero4");
	tablero2.style.display = "none";
	tablero3.style.display = "none";
	tablero4.style.display = "none";
	tablero1.style.display = "block";
}

function hacerInvisible2() {
	var tablero1 = document.getElementById("tablero1");
	var tablero3 = document.getElementById("tablero3");
	var tablero4 = document.getElementById("tablero4");
	tablero1.style.display = "none";
	tablero3.style.display = "none";
	tablero4.style.display = "none";
	tablero2.style.display = "block";
}

function hacerInvisible3() {
	var tablero2 = document.getElementById("tablero2");
	var tablero1 = document.getElementById("tablero1");
	var tablero4 = document.getElementById("tablero4");
	tablero2.style.display = "none";
	tablero1.style.display = "none";
	tablero4.style.display = "none";
	tablero3.style.display = "block";
}

function hacerInvisible4() {
	var tablero2 = document.getElementById("tablero2");
	var tablero3 = document.getElementById("tablero3");
	var tablero1 = document.getElementById("tablero1");
	tablero2.style.display = "none";
	tablero3.style.display = "none";
	tablero1.style.display = "none";
	tablero4.style.display = "block";
}
