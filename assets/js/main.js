var accion = document.getElementById("agregar");
accion.addEventListener("click", function(){
	
	var cont = document.getElementById("addTareas");
	var nuevasTareas = document.createElement("button");
		nuevasTareas.id = "guardar";
	var textoNuevaTarea = document.createTextNode("tareas");	
	nuevasTareas.appendChild(textoNuevaTarea);	
	cont.appendChild(nuevasTareas);

	var nombreLista = document.getElementById("guardar");
	nombreLista.addEventListener("click", function(){
		
		document.getElementById("agregar").parentNode.removeChild(document.getElementById("agregar"));	
		var nuevaTarea = document.createElement("p");
		nuevaTarea.innerHTML = accion.value;
		document.getElementById("entrada").appendChild(nuevaTarea);
		document.getElementById("addTareas").removeChild(document.getElementById("guardar"));
	
	

	});
});

