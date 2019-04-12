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
}//fim de Tabs

function rotores()
{

	var conf1=["L","G" ,"Q" ,"N" ,"M" ,"W" ," " ,"Y" ,"V" ,"T" ,"E" ,"B" ,"O" ,"D" , "U", "H", "Z", "F", "K", "P", "C", "S" , "A", "J", "R", "I", "X"];
	var conf2=[" " , "O", "V", "Z","N" , "D", "T", "K","A" , "Q", "L", "C","J" , "R", "W", "Y","M" , "P", "X", "I","B" , "G", "H","F" , "U", "E", "S"];
	var conf3=["M" , "C", "K", "E","U" , "V", "N", "I","T" , "H", "P", "Z","X" , "Y", "F", "O","Q" , " ", "S", "A","G" , "J", "L","B" , "D", "W", "R"];
	var conf4=["E" , "I", "W", "B","P" , "S", "T", "J","C" , "V", "O", "G","K" , "Z", "H", "F","N" , "L", " ", "M","D" , "R", "Y","X" , "Q", "A", "U"];
	var conf5=["J" , "V", "U", "E","Y" , "O", "G", "I","D" , " ", "Q", "Z","K" , "H", "T", "R","P" , "X", "A", "W","S" , "B", "N","M" , "C", "L", "F"] ;

	var confnR1 = document.getElementById("1Rotor3");
	console.log(confnR1);
	let rotor3
	switch (confnR1){

		case confnR1 === (rotor3 = document.getElementById("Configuração I")):
		elem_Rotor3 = conf1[(document.getElementById("posinR3"))];
		break;


		case confnR1 === (rotor3 = document.getElementById("Configuração II")):
		elem_Rotor3 = conf2[(document.getElementById("posinR3"))];
		break;

		case confnR1 === (rotor3 = document.getElementById("Configuração III")):
		elem_Rotor3 = conf3[(document.getElementById("posinR3"))];
		break;

		case confnR1 === (rotor3 = document.getElementById("Configuração IV")):
		elem_Rotor3 = conf4[(document.getElementById("posinR3"))];
		break;

		case confnR1 === (rotor3 = document.getElementById("Configuração V")):
		elem_Rotor3 = conf5[(document.getElementById("posinR3"))];
		break;

	}

	console.log(rotor1);
	console.log(posicaoR3);
}


function main(){
	rotores();
}






