var state = 0;
var scale = 2500;
var numero = "";

function change(){
	
	if(state == 0){
		state = 1;
		expand();
		
		setTimeout(function(){
		document.getElementById("change").className = "chaalien";
		document.getElementById("pantalla").className = "panalien";
		document.getElementById("eliminar").className = "botalien";
		document.getElementById("borrar").className = "botalien";
		document.getElementById("pote").className = "botalien";
		document.getElementById("divirest").className = "botalien";
		document.getElementById("divi").className = "botalien";
		document.getElementById("mult").className = "botalien";
		document.getElementById("rest").className = "botalien";
		document.getElementById("point").className = "botalien";
		document.getElementById("result").className = "botalien";
		document.getElementById("sum").className = "botalien";
		document.getElementById("9").className = "botalien";
		document.getElementById("8").className = "botalien";
		document.getElementById("7").className = "botalien";
		document.getElementById("6").className = "botalien";
		document.getElementById("5").className = "botalien";
		document.getElementById("4").className = "botalien";
		document.getElementById("3").className = "botalien";
		document.getElementById("2").className = "botalien";
		document.getElementById("1").className = "botalien";
		document.getElementById("0").className = "botalien";
		document.getElementById("main").className = "malien";
		document.getElementById("body").className = "balien";
		
		document.getElementById("eliminar").innerHTML = "&#5844;";
		document.getElementById("borrar").innerHTML = "&#5842;";
		document.getElementById("pote").innerHTML = "&#5855;";
		document.getElementById("divirest").innerHTML = "&#5827;";
		document.getElementById("divi").innerHTML = "&#5831;";
		document.getElementById("mult").innerHTML = "&#5857;";
		document.getElementById("rest").innerHTML = "&#5823;";
		document.getElementById("point").innerHTML = "&#5837;";
		document.getElementById("result").innerHTML = "&#5861;";
		document.getElementById("sum").innerHTML = "&#5829;";
		document.getElementById("9").innerHTML = "&#5792;";
		document.getElementById("8").innerHTML = "&#5794;";
		document.getElementById("7").innerHTML = "&#5798;";
		document.getElementById("6").innerHTML = "&#5803;";
		document.getElementById("5").innerHTML = "&#5809;";
		document.getElementById("4").innerHTML = "&#5810;";
		document.getElementById("3").innerHTML = "&#5815;";
		document.getElementById("2").innerHTML = "&#5817;";
		document.getElementById("1").innerHTML = "&#5818;";
		document.getElementById("0").innerHTML = "&#5852;";
		
		document.getElementById("pantalla").innerHTML= "";
		
		document.getElementById("music").pause();
		document.getElementById("music").setAttribute('src', "cave-of-light-13566.mp3");
		document.getElementById("music").load();
		document.getElementById("music").play();
		},600);
		
	}else{
		state = 0;
		expand();
		
//		document.getElementsByClassName()
		
		setTimeout(function(){
		document.getElementById("change").className = "chanormal";
		document.getElementById("pantalla").className = "pannormal";
		document.getElementById("eliminar").className = "botnormal";
		document.getElementById("borrar").className = "botnormal";
		document.getElementById("pote").className = "botnormal";
		document.getElementById("divirest").className = "botnormal";
		document.getElementById("divi").className = "botnormal";
		document.getElementById("mult").className = "botnormal";
		document.getElementById("rest").className = "botnormal";
		document.getElementById("point").className = "botnormal";
		document.getElementById("result").className = "botnormal";
		document.getElementById("sum").className = "botnormal";
		document.getElementById("9").className = "botnormal";
		document.getElementById("8").className = "botnormal";
		document.getElementById("7").className = "botnormal";
		document.getElementById("6").className = "botnormal";
		document.getElementById("5").className = "botnormal";
		document.getElementById("4").className = "botnormal";
		document.getElementById("3").className = "botnormal";
		document.getElementById("2").className = "botnormal";
		document.getElementById("1").className = "botnormal";
		document.getElementById("0").className = "botnormal";
		document.getElementById("main").className = "mnormal";
		document.getElementById("body").className = "bnormal";
		
		document.getElementById("eliminar").innerHTML = "AC";
		document.getElementById("borrar").innerHTML = "&#8592;";
		document.getElementById("pote").innerHTML = "^";
		document.getElementById("divirest").innerHTML = "%";
		document.getElementById("divi").innerHTML = "/";
		document.getElementById("mult").innerHTML = "*";
		document.getElementById("rest").innerHTML = "-";
		document.getElementById("point").innerHTML = ".";
		document.getElementById("result").innerHTML = "=";
		document.getElementById("sum").innerHTML = "+";
		document.getElementById("9").innerHTML = "9";
		document.getElementById("8").innerHTML = "8";
		document.getElementById("7").innerHTML = "7";
		document.getElementById("6").innerHTML = "6";
		document.getElementById("5").innerHTML = "5";
		document.getElementById("4").innerHTML = "4";
		document.getElementById("3").innerHTML = "3";
		document.getElementById("2").innerHTML = "2";
		document.getElementById("1").innerHTML = "1";
		document.getElementById("0").innerHTML = "0";
		
		document.getElementById("pantalla").innerHTML= "";
		
		document.getElementById("music").pause();	
		document.getElementById("music").setAttribute('src', "lady-of-the-80x27s-128379.mp3");
		document.getElementById("music").load();
		document.getElementById("music").play();
	},600);
	}
}

function expand(){
	scale = 2400;
	document.getElementById("white").style.scale = "1";
	document.getElementById("white").style.height = "1px";
	document.getElementById("white").style.width = "1px";
	document.getElementById("white").style.transform = "scale("+scale+")";
	setTimeout(function(){
		document.getElementById("white").style.opacity = "0";
	},1000);
	setTimeout(function(){
		scale = -1;
		document.getElementById("white").style.transform = "scale("+scale+")";
		document.getElementById("white").style.height = "0px";
		document.getElementById("white").style.width = "0px";
		document.getElementById("white").style.opacity = "1";
		},1500);
}

function alien(){
	if(state == 1){
		document.getElementById("musicbot").play();
	}
}	

function add(num){
	alien();
	if(state == 0){
//		if(document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "" ||  document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "+" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "-" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "*" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "/" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "%" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "^" || document.getElementById("pantalla").innerHTML.charAt(document.getElementById("pantalla").innerHTML.length) == "." && num == "." || num == "+" || num == "-" || num == "*" || num == "/" || num == "%" || num == "^"){
				
//		}else{
			document.getElementById("pantalla").innerHTML+=num;
//		}
	}else{
		numero += num;
		switch(num){
					case 0:
						document.getElementById("pantalla").innerHTML += "&#5852;";
					break
					case 1:
						document.getElementById("pantalla").innerHTML += "&#5818;";
					break
					case 2:
						document.getElementById("pantalla").innerHTML += "&#5817;";
					break
					case 3:
						document.getElementById("pantalla").innerHTML += "&#5815;";
					break
					case 4:
						document.getElementById("pantalla").innerHTML += "&#5810;";
					break
					case 5:
						document.getElementById("pantalla").innerHTML += "&#5809;";
					break
					case 6:
						document.getElementById("pantalla").innerHTML += "&#5803;";
					break
					case 7:
						document.getElementById("pantalla").innerHTML += "&#5798;";
					break
					case 8:
						document.getElementById("pantalla").innerHTML += "&#5794;";
					break
					case 9:
						document.getElementById("pantalla").innerHTML += "&#5792;";
					break
					case ".":
						document.getElementById("pantalla").innerHTML += "&#5837;";
					break
					case "+":
						document.getElementById("pantalla").innerHTML += "&#5829;";
					break
					case "-":
						document.getElementById("pantalla").innerHTML += "&#5823;";
					break
					case "/":
						document.getElementById("pantalla").innerHTML += "&#5831;";
					break
					case "*":
						document.getElementById("pantalla").innerHTML += "&#5857;";
					break
					case "%":
						document.getElementById("pantalla").innerHTML += "&#5827;";
					break
					case "^":
						document.getElementById("pantalla").innerHTML += "&#5855;";
					break
		}
	}
}

function erase(){
	alien();
	if(state == 0){
	document.getElementById("pantalla").innerHTML=document.getElementById("pantalla").innerHTML.substring(0,document.getElementById("pantalla").innerHTML.length -1);
	}else{
	numero = numero.substring(0,numero.length -1);
	document.getElementById("pantalla").innerHTML=document.getElementById("pantalla").innerHTML.substring(0,document.getElementById("pantalla").innerHTML.length -1);	
	}
}

function AC(){
	alien();
	if(state == 0){
	document.getElementById("pantalla").innerHTML= "";
	}else{
	document.getElementById("pantalla").innerHTML= "";
	numero = "";
	}
} 

function resultado(){
	alien();
	if(state == 0){
		if(document.getElementById("pantalla").innerHTML == ""){
		document.getElementById("pantalla").innerHTML = "0";
		}else if(document.getElementById("pantalla").innerHTML == "255"){
			document.getElementById("music").pause();
			document.getElementById("karate").style.height = "100vh";
			document.getElementById("karate").style.width = "100vw";
			document.getElementById("karate").style.backgroundColor = "black";
			document.getElementById("karate").style.opacity = "1";
			document.getElementById("karate").play();
			document.getElementById("karate").loop = true;
		}else{
			document.getElementById("pantalla").innerHTML = eval(document.getElementById("pantalla").innerHTML);
		}
	}else{
		numero = eval(numero); 
		document.getElementById("pantalla").innerHTML = "";
		numero = numero.toString();
		for(i = 0;i<numero.length;i++){
			switch(numero.charAt(i)){
				case "0":
					document.getElementById("pantalla").innerHTML += "&#5852;";
				break
				case "1":
					document.getElementById("pantalla").innerHTML += "&#5818;";
				break
				case "2":
					document.getElementById("pantalla").innerHTML += "&#5817;";
				break
				case "3":
					document.getElementById("pantalla").innerHTML += "&#5815;";
				break
				case "4":
					document.getElementById("pantalla").innerHTML += "&#5810;";
				break
				case "5":
					document.getElementById("pantalla").innerHTML += "&#5809;";
				break
				case "6":
					document.getElementById("pantalla").innerHTML += "&#5803;";
				break
				case "7":
					document.getElementById("pantalla").innerHTML += "&#5798;";
				break
				case "8":
					document.getElementById("pantalla").innerHTML += "&#5794;";
				break
				case "9":
					document.getElementById("pantalla").innerHTML += "&#5792;";
				break
				case ".":
					document.getElementById("pantalla").innerHTML += "&#5837;";
				break
				case "-":
					document.getElementById("pantalla").innerHTML += "&#5823;";
				break
				default:
					document.getElementById("pantalla").innerHTML = "&#5852;";
			}
		}
	}
}

/*
function sumar(){
	resultado()
	if(x != ""){
		op = "+";
	}else{
		op = "";
	}
}

function restar(){
	resultado()
	if(x != ""){
		op = "-";
	}else{
		op = "";
	}
}

function multiplicar(){
	resultado()
	if(x != ""){
		op = "*";
	}else{
		op = "";
	}
}

function dividir(){
	resultado()
	if(x != ""){
		op = "/";
	}else{
		op = "";
	}
}

function resto(){
	resultado()
	if(x != ""){
		op = "%";
	}else{
		op = "";
	}
} 

function potencia(){
	resultado()
	if(x != ""){
		op = "^";
	}else{
		op = "";
	}
}
*/