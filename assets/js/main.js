mapa = ["/////////////////////////////////////////////////",
	"/_______________________________________________/",
	"/_______________________________________________/",
	"/______**o________***________________**W________/",
	"/_________________***_________________*_________/",
	"/_________________*______________*______________/",
	"/_________________*_____________________*_______/",
	"/____*__*_____________________*___*_____*_______/",
	"*_____*_*____________________****_*_____________/",
	"*_____*_________________________________*_______/",
	"*______________________________________**_______/",
	"*________________________**____________**_______/",
	"/_________________________*_____________________/",
	"/_____________**_*_______***____________________/",
	"/_____________***_______________________________/",
	"/_____________**__________________**____________/",
	"/______**_________________________**____________/",
	"/______**_________________________*_____________/",
	"/________*____________**________________________/",
	"/____________________***________________________/",
	"/___________________*_**________________________/",
	"/_______________________________________________/",
	"/////////////////////////////////////////////////"];

var map2 = ["///////////////////////////////////////////////////////////",
	"/*_*_________________________________*_____________*_*_*_*/",
	"/*_*___*_____________________________*_______*_______*_*_*/",
	"/*___*___*____________*______________*_____*_*_____*_____*/",
	"/*_________*___________*_*___________*_*_*_______*___*___*/",
	"/*_____*_*_______*___________*_______*___*_____*_____*___*/",
	"/*___*_______________________*_______*___*___*_______*___*/",
	"/*_*___________________________*_**__*______________W*_*_*/",
	"/*_*______________**_____*_*_________________________*____/",
	"/*_*_____________*____**___________*______________________/",
	"/*_______________*___*_________*___*_________________*___*/",
	"/*___*___*_____*_______*___*_____________________________*/",
	"/*_____*_____________________________*___________________*/",
	"/*_______*_*________*____*___*_____*_*_*___________*_____*/",
	"/*_______*_*_________________________*_____*_______*_____*/",
	"/*_*_____________*_______*_______*_______________________*/",
	"/*_______*_____*_______*___*_*_____*_____*___*_*_________*/",
	"/*_____*___________*__o*___*_*___*___*_______*_*_*_______*/",
	"/*_*_*______*__________*_*_________*___*_____________*_*_*/",
	"///////////////////////////////////////////////////////////"];


var contador = 1;
var tablero = document.getElementById("game");
var start = document.getElementById("start");
var instructions = document.getElementById("instr");
var arrayCelda = new Array(mapa.length);

for (var i = 0; i < arrayCelda.length; i++) {
	arrayCelda[i] = new Array(mapa[0].length);
}

start.addEventListener("click", function () {
	var menu = document.getElementById("menu");
	menu.style.display = "none";
	dibujarTablero();
});

instructions.addEventListener("click", function () {
	var menu = document.getElementById("menu");
	var instr = document.getElementById("instrucciones");
	menu.style.display = "none";
	instr.style.display = "block";
});

function dibujarTablero() {
	contador++;
	var tabla = document.createElement("table");
	tabla.border = "1";
	for (var i = 0; i < mapa.length; i++) {
		var filas = document.createElement("tr");
		for (var j = 0; j < mapa[i].length; j++) {
			var celda = document.createElement("td");
			if (mapa[i][j] == "*") {
				celda.setAttribute('class', 'pared');
			}
			else if (mapa[i][j] == "o") {
				var img = document.createElement("img")
				celda.setAttribute('class', 'white');
				//img.setAttribute("class", "imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "35px";
				img.style.height = "40px";
				celda.appendChild(img);
				objtCelda = {
					td: celda, x: i, y: j
				}

			}
			else if (mapa[i][j] == "W") {
				var img = document.createElement("img");
				img.src = "assets/img/sarcophagus.png";
				img.style.width = "35px";
				img.style.height = "40px";
				celda.appendChild(img);
				celda.setAttribute("class", "finish");
			}
			else {
				celda.setAttribute('class', 'white');
			}
			filas.appendChild(celda);
			arrayCelda[i][j] = celda;
		}
		tabla.appendChild(filas);
	}
	tablero.appendChild(tabla);
}

var img = document.createElement("img");
document.addEventListener("keydown", function (e) {
	e.preventDefault();
	if (e.keyCode >= 37 && e.keyCode <= 40) {
		if (e.keyCode == 39) { //right
			console.log("presione derecha");
			while (mapa[objtCelda.x][objtCelda.y + 1] == "_") {

				//t = setTimeout(function () {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y + 1];
				objtCelda.y = objtCelda.y + 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
				var parar;
				/*parar = setInterval(any,100);
				 }, 250);
				 */
			}
			if (mapa[objtCelda.x][objtCelda.y + 1] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			} else if (mapa[objtCelda.x][objtCelda.y + 1] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				btnNext.addEventListener("click", crearTablas);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 37) { //left
			while (mapa[objtCelda.x][objtCelda.y - 1] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y - 1];
				objtCelda.y = objtCelda.y - 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x][objtCelda.y - 1] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			}
			else if (mapa[objtCelda.x][objtCelda.y - 1] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				btnNext.addEventListener("click", crearTablas);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 38) { //up
			//miTaxi.up();
			while (mapa[objtCelda.x - 1][objtCelda.y] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x - 1][objtCelda.y];
				objtCelda.x = objtCelda.x - 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x - 1][objtCelda.y] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			}
			else if (mapa[objtCelda.x - 1][objtCelda.y] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				btnNext.addEventListener("click", crearTablas);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 40) { //down 
			while (mapa[objtCelda.x + 1][objtCelda.y] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x + 1][objtCelda.y];
				objtCelda.x = objtCelda.x + 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x + 1][objtCelda.y] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			} else if (mapa[objtCelda.x + 1][objtCelda.y] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				btnNext.addEventListener("click", crearTablas);
				tablero.appendChild(btnNext);
			}
		}
	} else {
		return false;
	}
});

function borrarTable() {
	tablero.innerHTML = '';
}

var back = document.getElementById("back");
back.addEventListener("click", function () {
	var menu = document.getElementById("menu");
	var instr = document.getElementById("instrucciones");
	menu.style.display = "block";
	instr.style.display = "none";

});

function crearTablas() {
	if (contador == 1) {
		//map2
		//dibujarTablero(map2);
		dibujarTablero();

	}
	if (contador == 2) {
		//map3
		//dibujarTablero(map3);
		dibujarTablero();

	}
	if (contador == 3){
		dibujarTablero();
		//alert("JUEGO TERMINADO");
		contador = 0;
	}
}