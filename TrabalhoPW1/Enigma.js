//Tabs
function abrePag(Nid, elemento) {
	var i, content, tab;
	content = document.getElementsByClassName("tabcontent");
	for(i = 0; i < content.length; i++){
		content[i].style.display = "none";
	}
	
	tab = document.getElementsByClassName('tab');
	for(i = 0; i < tab.length; i++){
		tab[i].style.backgroundColor = "";
		tab[i].style.color = "white"
	}

	document.getElementById(Nid).style.display = "block";

	elemento.style.backgroundColor = '#f9f3d9';
	elemento.style.color = 'black';
}
//fim de Tabs





