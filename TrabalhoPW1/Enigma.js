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
	
	encontraCheck(R){
		for(let i = 0; i < R.length; i++){
			if (R[i].checked) {

				return R[i];
			}
		}
	},

	blockCheck3(){
		var check = this.encontraCheck(document.getElementsByName('nR3'));	
		var R2 = document.getElementsByName('nR2');
		var R1 = document.getElementsByName('nR1');
		for(let i = 0; i < R2.length; i++){
			if(R2[i].value == check.value){
				R2[i].disabled = true;
				document.getElementsByClassName("lR2")[i].style.color = "gray";
			}
			else if(R2[i].value != (this.encontraCheck(R1).value)){
				R2[i].disabled = false;
				document.getElementsByClassName("lR2")[i].style.color = "black";
			}
		}
		for(let i = 0; i < R1.length; i++){
			if(R1[i].value == check.value){
				R1[i].disabled = true;
				document.getElementsByClassName("lR1")[i].style.color = "gray";
			}
			else if(R1[i].value != (this.encontraCheck(R2).value)){
				R1[i].disabled = false;
				document.getElementsByClassName("lR1")[i].style.color = "black";
			}
		}
	},

	blockCheck2(){
		var check = this.encontraCheck(document.getElementsByName('nR2'));	
		var R1 = document.getElementsByName('nR1');
		var R3 = document.getElementsByName('nR3');
		for(let i = 0; i < R1.length; i++){
			if(R1[i].value == check.value){
				R1[i].disabled = true;
				document.getElementsByClassName("lR1")[i].style.color = "gray";
			}
			else if(R1[i].value != (this.encontraCheck(R3).value)){
				R1[i].disabled = false;
				document.getElementsByClassName("lR1")[i].style.color = "black";
			}
		}
		for(let i = 0; i < R3.length; i++){
			if(R3[i].value == check.value){
				R3[i].disabled = true;
				document.getElementsByClassName("lR3")[i].style.color = "gray";
			}
			else if(R3[i].value != (this.encontraCheck(R1).value)){
				R3[i].disabled = false;
				document.getElementsByClassName("lR3")[i].style.color = "black";
			}
		}
	},

	blockCheck1(){
		var check = this.encontraCheck(document.getElementsByName('nR1'));	
		var R2 = document.getElementsByName('nR2');
		var R3 = document.getElementsByName('nR3');
		for(let i = 0; i < R2.length; i++){
			if(R2[i].value == check.value){
				R2[i].disabled = true;
				document.getElementsByClassName("lR2")[i].style.color = "gray";
			}
			else if(R2[i].value != (this.encontraCheck(R3).value)){
				R2[i].disabled = false;
				document.getElementsByClassName("lR2")[i].style.color = "black";
			}
		}
		for(let i = 0; i < R3.length; i++){
			if(R3[i].value == check.value){
				R3[i].disabled = true;
				document.getElementsByClassName("lR3")[i].style.color = "gray";
			}
			else if(R3[i].value != (this.encontraCheck(R2).value)){
				R3[i].disabled = false;
				document.getElementsByClassName("lR3")[i].style.color = "black";
			}
		}
	},

	configuracao(){
		var conf1=["L", "G", "Q", "N", "M", "W", " ", "Y", "V", "T", "E", "B", "O", "D", "U", "H", "Z", "F", "K", "P", "C", "S", "A", "J", "R", "I", "X"];
		var conf2=[" ", "O", "V", "Z", "N", "D", "T", "K", "A", "Q", "L", "C", "J", "R", "W", "Y", "M", "P", "X", "I", "B", "G", "H", "F", "U", "E", "S"];
		var conf3=["M", "C", "K", "E", "U", "V", "N", "I", "T", "H", "P", "Z", "X", "Y", "F", "O", "Q", " ", "S", "A", "G", "J", "L", "B", "D", "W", "R"];
		var conf4=["E", "I", "W", "B", "P", "S", "T", "J", "C", "V", "O", "G", "K", "Z", "H", "F", "N", "L", " ", "M", "D", "R", "Y", "X", "Q", "A", "U"];
		var conf5=["J", "V", "U", "E", "Y", "O", "G", "I", "D", " ", "Q", "Z", "K", "H", "T", "R", "P", "X", "A", "W", "S", "B", "N", "M", "C", "L", "F"];

		var R1 = this.encontraCheck(document.getElementsByName('nR1'));
		var R2 = this.encontraCheck(document.getElementsByName('nR2'));
		var R3 = this.encontraCheck(document.getElementsByName('nR3'));

		switch(R1.value){
			case "conf1":
				this.rotor1 = conf1;
				break;
			case "conf2":
				this.rotor1 = conf2;
				break;
			case "conf3":
				this.rotor1 = conf3;
				break;
			case "conf4":
				this.rotor1 = conf4;
				break;
			case "conf5":
				this.rotor1 = conf5;
				break;
		}

		switch(R2.value){
			case "conf1":
				this.rotor2 = conf1;
				break;
			case "conf2":
				this.rotor2 = conf2;
				break;
			case "conf3":
				this.rotor2 = conf3;
				break;
			case "conf4":
				this.rotor2 = conf4;
				break;
			case "conf5":
				this.rotor2 = conf5;
				break;
		}

		switch(R3.value){
			case "conf1":
				this.rotor3 = conf1;
				break;
			case "conf2":
				this.rotor3 = conf2;
				break;
			case "conf3":
				this.rotor3 = conf3;
				break;
			case "conf4":
				this.rotor3 = conf4;
				break;
			case "conf5":
				this.rotor3 = conf5;
				break;
		}

	}


}
 



