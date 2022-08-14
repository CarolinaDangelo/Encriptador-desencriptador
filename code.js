function encriptacion() {
	var mensaje = document.getElementById("mensaje").value;
	var textoCifrado = mensaje.replace(/e/igm,"enter");
	var textoCifrado = textoCifrado.replace(/o/igm,"ober");
	var textoCifrado = textoCifrado.replace(/i/igm,"imes");
	var textoCifrado = textoCifrado.replace(/a/igm,"ai");
	var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

	document.getElementById("img-secreto").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
	document.getElementById("portapapeles").style.display = "none";
}

function desencriptacion() {
	var mensaje = document.getElementById("mensaje").value;
	var textoCifrado = mensaje.replace(/enter/igm,"e");
	var textoCifrado = textoCifrado.replace(/ober/igm,"o");
	var textoCifrado = textoCifrado.replace(/imes/igm,"i");
	var textoCifrado = textoCifrado.replace(/ai/igm,"a");
	var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

	document.getElementById("img-secreto").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
	document.getElementById("portapapeles").style.display = "none";
}

function copiar() {
	var mensajeSecreto = document.querySelector("#texto2");
	mensajeSecreto.select();
	document.execCommand("copy");
	document.getElementById("portapapeles").style.display = "inherit";
}