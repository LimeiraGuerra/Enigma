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






















function configuracao(rotor1, rotor2, rotor3)// esses rotores vão no final retornar a configuração escolhida pelo usuário?
//e esses rotores estarão dentro de um objeto? 
{

	var conf1=["L","G" ,"Q" ,"N" ,"M" ,"W" ," " ,"Y" ,"V" ,"T" ,"E" ,"B" ,"O" ,"D" , "U", "H", "Z", "F", "K", "P", "C", "S" , "A", "J", "R", "I", "X"];
	var conf2=[" " , "O", "V", "Z","N" , "D", "T", "K","A" , "Q", "L", "C","J" , "R", "W", "Y","M" , "P", "X", "I","B" , "G", "H","F" , "U", "E", "S"];
	var conf3=["M" , "C", "K", "E","U" , "V", "N", "I","T" , "H", "P", "Z","X" , "Y", "F", "O","Q" , " ", "S", "A","G" , "J", "L","B" , "D", "W", "R"];
	var conf4=["E" , "I", "W", "B","P" , "S", "T", "J","C" , "V", "O", "G","K" , "Z", "H", "F","N" , "L", " ", "M","D" , "R", "Y","X" , "Q", "A", "U"];
	var conf5=["J" , "V", "U", "E","Y" , "O", "G", "I","D" , " ", "Q", "Z","K" , "H", "T", "R","P" , "X", "A", "W","S" , "B", "N","M" , "C", "L", "F"] ;


//Ver qual configuração o usúario digitou no Rotor 3

	var confnR3 = true;
	var confEscolhida_R3;
	switch (confnR3){

		case confnR3 === (confEscolhida_R3 = document.getElementById("CI3").value):
			rotor3 = conf1;
			break;

		case confnR3 === (confEscolhida_R3 = document.getElementById("CII3").value):
			rotor3 = conf2;
			break;

		case confnR3 === (confEscolhida_R3 = document.getElementById("CIII3").value):
			rotor3 = conf3;
			break;

		case confnR3 === (confEscolhida_R3 = document.getElementById("CIV3").value):
			rotor3 = conf4;
			break;

		case confnR3 === (confEscolhida_R3 = document.getElementById("CV3").value):
			rotor3 = conf5;
			break;
/*
* Nesse parte, era para a função ver qual configuração seria adotada nos botões de
*configuração dos rotores, pensei que se eles fossem selecionados receberiam true, se não fossem...receberiam false.
*Então utilizei o ID para buscar a informação.
* Será que precisa de um value?
*/

}



	//Ver qual configuração o usúario digitou no Rotor 2

	var confnR2 = true;
	var confEscolhida_R2;
	switch (confnR2){

		case confnR2 === (confEscolhida_R2 = document.getElementById("CI2").value):
			rotor2 = conf1;
			break;

		case confnR2 === (confEscolhida_R2 = document.getElementById("CII2").value):
			rotor2 = conf2;
			break;

		case confnR2 === (confEscolhida_R2 = document.getElementById("CIII2").value):
			rotor2 = conf2;
			break;

		case confnR2 === (confEscolhida_R2 = document.getElementById("CIV2").value):
			rotor2 = conf4;
			break;

		case confnR3 === (confEscolhida_R2 = document.getElementById("CV2").value):
			rotor2  = conf5;
			break;

	
	}




	//Ver qual configuração o usúario digitou no Rotor 1

	var confnR1 = true;
	var confEscolhida_R1;
	switch (confnR1){

		case confnR1 === (confEscolhida_R1 = document.getElementById("CI1").value):
			rotor1 = conf1;
			break;

		case confnR1 === (confEscolhida_R1 = document.getElementById("CII1").value):
			rotor1 = conf2;
			break;

		case confnR1 === (confEscolhida_R1 = document.getElementById("CIII1").value):
			rotor1 = conf2;
			break;

		case confnR1 === (confEscolhida_R1 = document.getElementById("CIV1").value):
			rotor1 = conf4;
			break;

		case confnR1 === (confEscolhida_R1 = document.getElementById("CV1").value):
			rotor1  = conf5;
			break;

	}
}


function posicaoInicial(posicaoRotor1, posicaoRotor2, posicaoRotor3)
{
	posicaoRotor1 = document.getElementById("nNR1").value;
	posicaoRotor2 = document.getElementById("nNR2").value;
	posicaoRotor3 = document.getElementById("nNR3").value;


	
}


function main(){



	var maquinaEnigma = {


		configuracao : function configuracao(){
		 	var rotor1;
		 	var rotor2;
		 	var rotor3;
		 }

		posicaoInicial : function posicaoInicial(){
			var posicaoRotor1;
			var posicaoRotor2;
			var posicaoRotor3;

		}

		


	}
}






