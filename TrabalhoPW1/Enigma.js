//Objeto da maquina
var maqEnigma = {
	//Tabs
	abrePag(Nid, elemento) {
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
	},//fim de Tabs

	//Plugboard
	cont: 0,
	criaPlugs(elemento) {
		var i, content, div;
		content = elemento.value;

	
		switch(content){
			case "+":
				if(this.cont < 13){
				div = document.createElement("DIV");
				div.innerHTML = `<select>
				<option value=" "> </option>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
				<option value="D">D</option>
				<option value="E">E</option>
				<option value="F">F</option>
				<option value="G">G</option>
				<option value="H">H</option>
				<option value="I">I</option>
				<option value="J">J</option>
				<option value="K">K</option>
				<option value="L">L</option>
				<option value="M">M</option>
				<option value="N">N</option>
				<option value="O">O</option>
				<option value="P">P</option>
				<option value="Q">Q</option>
				<option value="R">R</option>
				<option value="S">S</option>
				<option value="T">T</option>
				<option value="U">U</option>
				<option value="V">V</option>
				<option value="W">W</option>
				<option value="X">X</option>
				<option value="Y">Y</option>
				<option value="Z">Z</option>
				</select>⇌<select>
				<option value=" "> </option>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
				<option value="D">D</option>
				<option value="E">E</option>
				<option value="F">F</option>
				<option value="G">G</option>
				<option value="H">H</option>
				<option value="I">I</option>
				<option value="J">J</option>
				<option value="K">K</option>
				<option value="L">L</option>
				<option value="M">M</option>
				<option value="N">N</option>
				<option value="O">O</option>
				<option value="P">P</option>
				<option value="Q">Q</option>
				<option value="R">R</option>
				<option value="S">S</option>
				<option value="T">T</option>
				<option value="U">U</option>
				<option value="V">V</option>
				<option value="W">W</option>
				<option value="X">X</option>
				<option value="Y">Y</option>
				<option value="Z">Z</option>
				</select>`;
				document.getElementById("plugboard").appendChild(div);
				this.cont++;
				}
				break;

			case "-":
				div = document.getElementById("plugboard");
				if (div.childNodes.length === 0) {
					break;
				}
				else{
					div.removeChild(div.childNodes[div.childNodes.length-1]);
					this.cont--;
					break;
				}
		}
	
	},//fim de Plugboard

	rotor1: null,
	rotor2: null,
	rotor3: null, 
	configuracao(){
		var conf1=["L", "G", "Q", "N", "M", "W", " ", "Y", "V", "T", "E", "B", "O", "D", "U", "H", "Z", "F", "K", "P", "C", "S", "A", "J", "R", "I", "X"];
		var conf2=[" ", "O", "V", "Z", "N", "D", "T", "K", "A", "Q", "L", "C", "J", "R", "W", "Y", "M", "P", "X", "I", "B", "G", "H", "F", "U", "E", "S"];
		var conf3=["M", "C", "K", "E", "U", "V", "N", "I", "T", "H", "P", "Z", "X", "Y", "F", "O", "Q", " ", "S", "A", "G", "J", "L", "B", "D", "W", "R"];
		var conf4=["E", "I", "W", "B", "P", "S", "T", "J", "C", "V", "O", "G", "K", "Z", "H", "F", "N", "L", " ", "M", "D", "R", "Y", "X", "Q", "A", "U"];
		var conf5=["J", "V", "U", "E", "Y", "O", "G", "I", "D", " ", "Q", "Z", "K", "H", "T", "R", "P", "X", "A", "W", "S", "B", "N", "M", "C", "L", "F"];

	}


}
 



