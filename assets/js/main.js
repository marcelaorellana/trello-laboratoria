//<input type="textarea" name="agregar" id="agregar">

var accion = document.getElementById("linkList");

accion.addEventListener("click", function(){
	
	var cont = document.getElementById("addTareas");
	var inputLista = document.createElement("input");
		inputLista.id = "inputListaId";
		inputLista.placeholder = "add a list..."
	var nuevasTareas = document.createElement("button");
		nuevasTareas.id = "guardar";
	var textoNuevaTarea = document.createTextNode("Save");
	document.getElementById("linkList").parentNode.removeChild(document.getElementById("linkList"));	
	nuevasTareas.appendChild(textoNuevaTarea);	
	cont.appendChild(inputLista);
	cont.appendChild(nuevasTareas);

	var nombreLista = document.getElementById("guardar");
	nombreLista.addEventListener("click", function(){
		if(inputLista.value != ""){
		document.getElementById("inputListaId").parentNode.removeChild(document.getElementById("inputListaId"));	
		var nuevaTarea = document.createElement("h2");
		nuevaTarea.innerHTML = inputLista.value;
		document.getElementById("entrada").appendChild(nuevaTarea);
		document.getElementById("addTareas").removeChild(document.getElementById("guardar"));
	
		var linkAdd = document.createElement("a");
			linkAdd.setAttribute('href', '#');
			linkAdd.setAttribute('id', 'linkAddI');
		var textoboton = document.createTextNode("add a card...");
		linkAdd.appendChild(textoboton);
		document.getElementById("listaTareas").appendChild(linkAdd);

		linkAdd.addEventListener("click", function(){
			
			document.getElementById("listaTareas").removeChild(linkAdd);
			//area de texto a div listaTareas
			var tarjeta = document.createElement("input");
			tarjeta.setAttribute('id', 'addCardId');
			tarjeta.setAttribute('placeholder', 'add a card...')
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
				var nuevaCard = document.createElement("p");
				var valorTarea = document.getElementById('addCardButton').value;
				var textoNuevaCard = document.createTextNode(valorTarea);
				nuevaCard.appendChild(textoNuevaCard);
				document.getElementById("listaTareas").insertBefore(nuevaCard, document.getElementById("listaTareas").firstChild);
				document.getElementById('addCardButton').value = "";
			});


		});
	}
		
	});

});

