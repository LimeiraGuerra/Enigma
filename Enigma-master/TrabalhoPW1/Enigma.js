//Objeto da maquina
var maqEnigma = {

	//Config dos rotores
	rotor1: null,
	rotor2: null,
	rotor3: null,

	conf1: ["L", "G", "Q", "N", "M", "W", " ", "Y", "V", "T", "E", "B", "O", "D", "U", "H", "Z", "F", "K", "P", "C", "S", "A", "J", "R", "I", "X"],
	conf2: [" ", "O", "V", "Z", "N", "D", "T", "K", "A", "Q", "L", "C", "J", "R", "W", "Y", "M", "P", "X", "I", "B", "G", "H", "F", "U", "E", "S"],
	conf3: ["M", "C", "K", "E", "U", "V", "N", "I", "T", "H", "P", "Z", "X", "Y", "F", "O", "Q", " ", "S", "A", "G", "J", "L", "B", "D", "W", "R"],
	conf4: ["E", "I", "W", "B", "P", "S", "T", "J", "C", "V", "O", "G", "K", "Z", "H", "F", "N", "L", " ", "M", "D", "R", "Y", "X", "Q", "A", "U"],
	conf5: ["J", "V", "U", "E", "Y", "O", "G", "I", "D", " ", "Q", "Z", "K", "H", "T", "R", "P", "X", "A", "W", "S", "B", "N", "M", "C", "L", "F"],

	//define a configuração dos rotores
	configuracao: function(){

		var R1 = encontraCheck(document.getElementsByName('nR1'));
		var R2 = encontraCheck(document.getElementsByName('nR2'));
		var R3 = encontraCheck(document.getElementsByName('nR3'));

		switch(R1.value){
			case "conf1":
				this.rotor1 = this.conf1;
				break;
			case "conf2":
				this.rotor1 = this.conf2;
				break;
			case "conf3":
				this.rotor1 = this.conf3;
				break;
			case "conf4":
				this.rotor1 = this.conf4;
				break;
			case "conf5":
				this.rotor1 = this.conf5;
				break;
		}

		switch(R2.value){
			case "conf1":
				this.rotor2 = this.conf1;
				break;
			case "conf2":
				this.rotor2 = this.conf2;
				break;
			case "conf3":
				this.rotor2 = this.conf3;
				break;
			case "conf4":
				this.rotor2 = this.conf4;
				break;
			case "conf5":
				this.rotor2 = this.conf5;
				break;
		}

		switch(R3.value){
			case "conf1":
				this.rotor3 = this.conf1;
				break;
			case "conf2":
				this.rotor3 = this.conf2;
				break;
			case "conf3":
				this.rotor3 = this.conf3;
				break;
			case "conf4":
				this.rotor3 = this.conf4;
				break;
			case "conf5":
				this.rotor3 = this.conf5;
				break;
		}
	},

	//Posições iniciais dos rotores
	posicao1i: 0,
	posicao2i: 0,
	posicao3i: 0,

	//define as posições iniciais
	posicaoInicial: function(){
		var p1 = document.getElementById("NR1");
		var p2 = document.getElementById("NR2");
		var p3 = document.getElementById("NR3");

		this.posicao1i = Number(p1.value);
		this.posicao2i = Number(p2.value);
		this.posicao3i = Number(p3.value);
	},

	//Posições dos rotores enquanto a maquina funciona
	posicao1a: null,
	posicao2a: null,
	posicao3a: null,

	//lista dos plugs escolhidos
	//Ta escrito a mão porque ainda nao tem a funcao de criar plugboard
	plugboard: ['A', 'X', 'F', 'S', 'L', 'T', 'J', 'D', 'Q', 'N', 'P', 'I'],

	//encontra os pares de plugs e substitui para a letra correspondente
	setPlugs: function(letra){
		for (let i = 0; i < this.plugboard.length; i++){
			if (this.plugboard[i] == letra) {
				if (i % 2 == 0) {
					letra = this.plugboard[i+1];
				}
				else{
					letra = this.plugboard[i-1];
				}
				break;
			}
		}
		return letra;
	},

	//Criptografa letra por letra
	criptografar: function(letra){
		letra = this. trocarChar(letra);
		if (this.verificaLetra(letra)) {
			letra = this.setPlugs(letra);
			var indice = this.BuscarIndice_Letra(letra, this.rotor1);
			indice = this.Emparelhamento(indice, this.posicao1a, this.posicao2a, this.posicao3a);
			letra = this.rotor3[indice];
			letra = this.setPlugs(letra);
			this.posicao1a = this.GiraGira(this.posicao1a, this.posicao2a, this.posicao3a);
			var posicoes = this.overflow(this.posicao1a, this.posicao2a, this.posicao3a);
			this.posicao1a = posicoes[0];
			this.posicao2a = posicoes[1];
			this.posicao3a = posicoes[2];
		}
		return letra;	
	},

	//Descriptografa a letra por letra
	descriptografar: function(letra){
		letra = this.setPlugs(letra);
		var indice = this.BuscarIndice_Letra(letra, this.rotor3);
		indice = this.Emparelhamento(indice, this.posicao3a, this.posicao2a, this.posicao1a);
		letra = this.rotor1[indice];
		letra = this.setPlugs(letra);
		this.posicao1a = this.GiraGira(this.posicao1a, this.posicao2a, this.posicao3a);
		var posicoes = this.overflow(this.posicao1a, this.posicao2a, this.posicao3a);
		this.posicao1a = posicoes[0];
		this.posicao2a = posicoes[1];
		this.posicao3a = posicoes[2];
		return letra;	
	},
	//encontra o mmc de 2 numeros
	 MMC : function(X, Y){
		let resto;
		let mdc = X;
		let mmc = 0;
		let aux=Y;	
		while(resto!=0){
	 		resto = mdc % aux;
	 		mdc=aux;
	 		aux=resto; 
	 	}

		mmc =(X*Y)/mdc;
			return mmc;
	},

	//encontra o mmc de 3 numeros
	encontrarMMC : function(posicao1, posicao2, posicao3){
	 	var numeros =[posicao1, posicao2, posicao3];
	 	numeros.sort((a, b)=>a-b);
	 	if (numeros[0]!=0){
	  		var resultado = this.MMC(numeros[2], numeros[1]);
	  		resultado = this.MMC(resultado, numeros[0]);
	  		return resultado
	 	}
	},

	//verifica se a pos do rotor 1 é primo
	 primo : function(num) {
		if (num === 0) {
			return true
		}
		else {
			let cont = 0;
			for (var i=1; i<=num; i++){
				if (num % i === 0){
					cont+=1
				}
			}	
	   		if (cont === 2){ 
	    		return true
	    	}
	    	else{
	    	   	return false
	    	}
		}
	},
	//verifica se o char é letra ou nao
	verificaLetra:function (letra){
		var ascii = letra.charCodeAt(0);

		if (ascii === 32 || (ascii > 64 && ascii < 91)) {
			return true
		}
		else{
			return false
		}
	},
	
	//reinicia os rotores se as posicoes forem maiores que os indices
	overflow : function (primeiro, segundo, terceiro){
		var pos;
		if (primeiro > 26){
			primeiro -= 27;
			segundo += 1;
		}
		if (segundo > 26){
			segundo = 0;
			terceiro += 1;
		}
		if (terceiro > 26){
			terceiro = 0;
			primeiro += 1;
		}

		pos = [primeiro, segundo, terceiro];
		if (primeiro > 26 || segundo > 26) {
			pos = this.overflow(primeiro, segundo, terceiro);
		}
		return pos
	},

	//troca letras especiais por normais
	trocarChar:function (letra){
		switch(letra) {
			case "Á":
				letra = letra.replace("Á", "A");
				break;

			case "Ã":
				letra = letra.replace("Ã", "A");
				break;

			case "Â":
				letra = letra.replace("Â", "A");
				break;

			case "À":
				letra = letra.replace("À", "A");
				break;

			case "É":
				letra = letra.replace("É", "E");
				break;

			case "Ê":
				letra = letra.replace("Ê", "E");
				break;

			case "Í":
				letra = letra.replace("Í", "I");
				break;

			case "Ó":
				letra = letra.replace("Ó", "O");
				break;

			case "Õ":
				letra = letra.replace("Õ", "O");
				break;

			case "Ô":
				letra = letra.replace("Ô", "O");
				break;

			case "Ú":
				letra = letra.replace("Ú", "U");
				break;

			case "Ç":
				letra = letra.replace("Ç", "C");
				break;
		}
		return letra
	},

	//Encontra a posição da letra rotor inicial
	BuscarIndice_Letra : function (letra, rotor){
		var posLetra_Rotor
		for(let i = 0; i < rotor.length; i++){
			if (letra === rotor[i]){
				posLetra_Rotor = i;
				break;
			}
		}
		return posLetra_Rotor
	},

	//Encontra o emparelhamento de acordo com a posição da letra nos rotores
	Emparelhamento:function (posLetra_Rotor, primeiro, segundo, terceiro){
		posLetra_Rotor = segundo + posLetra_Rotor - primeiro;
		
		if (posLetra_Rotor < 0) {
			posLetra_Rotor += 27;
		}else if (posLetra_Rotor > 26) {
			posLetra_Rotor -= 27;
		}

		posLetra_Rotor = terceiro + posLetra_Rotor - segundo;

		if (posLetra_Rotor < 0) {
			posLetra_Rotor += 27;
		}else if (posLetra_Rotor > 26) {
			posLetra_Rotor -= 27;
		}

		return posLetra_Rotor
	},

	//Gira o rotor de entrada de acordo com essas condicoes
	GiraGira:function (primeiro, segundo, terceiro){
		if (primeiro > 0 && segundo > 0 && terceiro > 0 && this.encontrarMMC(primeiro, segundo, terceiro) > 1000){
			primeiro += 3;

		}else if (segundo % 2 === 0){
				if (primeiro > 3 && primeiro % 6 === 0){
					primeiro += 2;
				}else if (this.primo(primeiro)) {
						primeiro += 2;
					}else{
						primeiro += 1;
					}
			}

			else{
				if (primeiro > 3 && primeiro % 6 === 0){
					primeiro += 1;
				}else if (this.primo(primeiro)) {
						primeiro += 1;
					}else{
						primeiro += 2;
					}
			}
			return primeiro
	},


}//Fim do Objeto


 
 // inicio Tabs
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

//bloqueia qualquer coisa que não seja numeros e também bloqueia acima de 26
function blockNum(){
	mudanca();
	var tecla = event.which;
	var valor = event.target.value;
		
	if (tecla != 8) {
		if((tecla < 48 || tecla > 57) && (tecla < 96 || tecla > 105)){
			event.preventDefault();
		}else if(valor.length == 2){
			event.preventDefault();

		}else if(Number(valor + event.key) > 26){
			event.target.value = 26;
			event.preventDefault();
			}
	}
}

//retorna qual radio ta selecionado
function encontraCheck(R){
	for(let i = 0; i < R.length; i++){
		if (R[i].checked) {
			return R[i];
		}
	}
}

//bloqueia os radios correspondentes
var R1 = document.getElementsByName('nR1');
var R2 = document.getElementsByName('nR2');
var R3 = document.getElementsByName('nR3');

function blockChecks(r1, r2, r3, label, label2){
	mudanca();

	for(let i = 0; i < r3.length; i++){
		if( (r2[i].checked || r1[i].checked) && !r3[i].checked){
			r3[i].disabled = true;
			document.getElementsByClassName(label2)[i].style.color = "gray";
		}
		else{
			r3[i].disabled = false;
			document.getElementsByClassName(label2)[i].style.color = "black";
		}
	}

	for(let i = 0; i < r1.length; i++){
		if( (r2[i].checked || r3[i].checked) && !r1[i].checked){
			r1[i].disabled = true;
			document.getElementsByClassName(label)[i].style.color = "gray";
		}
		else{
			r1[i].disabled = false;
			document.getElementsByClassName(label)[i].style.color = "black";
		}
	}
}

//cria os plugs dinamicamente
var cont = 0;
function criaPlugs(elemento) {
	var i, content, div;
	content = elemento.value;

	
	switch(content){
		case "+":
			if(cont < 13){
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
			cont++;
			}
			break;

		case "-":
			div = document.getElementById("plugboard");
			if (div.childNodes.length === 0) {
				break;
			}
			else{
				div.removeChild(div.childNodes[div.childNodes.length-1]);
				cont--;
				break;
			}
	}
}

//Reinicia tudo antes de começar
function start(funcao, par1, par2){
	if (maqEnigma.rotor1 == null) {
		alert("!!Por favor, salve antes de prosseguir!!");
	}
	else if (funcao != undefined){
		funcao(par1, par2);
	}
		maqEnigma.posicao1a = maqEnigma.posicao1i;
		maqEnigma.posicao2a = maqEnigma.posicao2i;
		maqEnigma.posicao3a = maqEnigma.posicao3i;
		document.getElementById("boxSaidaF").value = "";
		document.getElementById("boxSaidaV").value = "";
		document.getElementById("boxEntradaV").value = "";
}

function mudanca(){
	maqEnigma.rotor1 = null;
}



//retira o texto da caixa e transforma em array de chars
function pegaTexto(){
	document.getElementById("boxSaidaF").value = "";
	var texto = document.getElementById("boxEntradaF").value.toUpperCase();
	texto.split('');
	for(let i = 0; i < texto.length; i++){
		//falta um if pra cripto/descripto
		var char = maqEnigma.criptografar(texto[i]);
		document.getElementById("boxSaidaF").value += char;
	}
}

//guarda todas as posicoes passadas
var posPas = [];

//retorna as posicoes anteriores dos rotores
function retornaPos(){
	posPas.splice(posPas.length-3, 3);
	if (posPas.length === 0) {
		maqEnigma.posicao1a = maqEnigma.posicao1i;
		maqEnigma.posicao2a = maqEnigma.posicao2i;
		maqEnigma.posicao3a = maqEnigma.posicao3i;
	}
	else{
		maqEnigma.posicao1a = posPas[posPas.length-3];
		maqEnigma.posicao2a = posPas[posPas.length-2];
		maqEnigma.posicao3a = posPas[posPas.length-1];
	}
}

//retira o valores das teclas
function tecladoVirtual(){
	var teclas = document.getElementById("teclado");
	var alvo = event.target;

	if (alvo.tagName === "BUTTON") {
		let C = alvo.value;
		switch(C){
			case "\\n":
				C = '\n';
				document.getElementById("boxEntradaV").value += C;
				document.getElementById("boxSaidaV").value += C;
				break;

			case "\\b":
				retornaPos();
				document.getElementById("boxEntradaV").value = document.getElementById("boxEntradaV").value.slice(0, -1);
				document.getElementById("boxSaidaV").value = document.getElementById("boxSaidaV").value.slice(0, -1);
				break;

			default:
				document.getElementById("boxEntradaV").value += C;
				//if cripto/descripto
				var char = maqEnigma.criptografar(C);
				posPas.push(maqEnigma.posicao1a, maqEnigma.posicao2a, maqEnigma.posicao3a);
				document.getElementById("boxSaidaV").value += char;
				break;
		}
	}
}







