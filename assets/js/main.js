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
	
		var linkAdd = document.createElement("a");
			linkAdd.setAttribute('href', '#');
			linkAdd.setAttribute('id', 'linkAddI');
		var textoboton = document.createTextNode("añade tarea");
		linkAdd.appendChild(textoboton);
		document.getElementById("listaTareas").appendChild(linkAdd);

		linkAdd.addEventListener("click", function(){
			
			document.getElementById("listaTareas").removeChild(linkAdd);
			//area de texto a div listaTareas
			var tarjeta = document.createElement("input");
			tarjeta.setAttribute('id', 'addCardId');
			document.getElementById("listaTareas").appendChild(tarjeta);
			

			//crea boton dentro de div divListId
			var divLista = document.createElement("div");
				tarjeta.setAttribute('id', 'divListaId');
			var botonLista = document.createElement("button");
				tarjeta.setAttribute('id', 'addCardButton');
			var textoBoton = document.createTextNode("guardar");
			botonLista.appendChild(textoBoton);
			divLista.appendChild(botonLista);
			document.getElementById("addList").appendChild(divLista);

			botonLista.addEventListener("click",function(){
				alert("HOLA");
				console.log(valorTarea);
				var nuevaCard = document.createElement("p");
				//nuevaCard.innerHTML = valorTarea;
				var valorTarea = document.getElementById('addCardButton').value;
				var textoNuevaCard = document.createTextNode(valorTarea);
				nuevaCard.appendChild(textoNuevaCard);
				document.getElementById("listaTareas").insertBefore(nuevaCard, document.getElementById("listaTareas").firstChild);
				document.getElementById('addCardButton').value = "";
			});


		});
	
	});

});

