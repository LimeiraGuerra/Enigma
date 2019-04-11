//Tabs
function abrePag(Nid, elemento, cor) {
	var i, content, tab;
	content = document.getElementsByClassName("tabcontent");
	for(i = 0; i < content.length; i++){
		content[i].style.display = "none";
	}
	
	tab = document.getElementsByClassName('tab');
	for(i = 0; i < tab.length; i++){
		tab[i].style.backgroundColor = "";
	}

	document.getElementById(Nid).style.display = "block";

	elemento.style.backgroundColor = cor;
}
//fim de Tabs





