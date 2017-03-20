
function moveup() {
	redball.top = redball.top -10;
}

function movedown() {
	redball.top=redball.top +10;
}

function moveleft() {
	redball.left=redball.left -10;
}

function moveright() {
	redball.left=redball.left +10;
}

function myFunction(){
	alert("The Sky");
	}
							 
function moveupright() {
	redball.top=redball.top -10;
	redball.left=redball.left +10;
}

function movedownleft() {
	redball.top=redball.top +10;
	redball.left=redball.left -10;
}

function movedownright() {
	redball.top=redball.top +10;
	redball.left=redball.left +10;
}

function moveupleft() {
	redball.top=redball.top -10;
	redball.left=redball.left -10;
}

function movesquare() {
	redball.left=redball.left -200;
	redball.top=redball.top +200;
	redball.left=redball.left +200;
	redball.top=redball.top -200;
}

function movetriangle() {
	redball.top=redball.top +200;
	redball.left=redball.left +200;
	redball.left=redball.left -400; 
	redball.top=redball.top -200;
	redball.left=redball.left +200;
}

function moveoctagon() {
	moveright();
	moveright();
	moveright();
	movedownright();
	movedownright();
	movedownright();
	movedown();
	movedown();
	movedown();
	movedownleft();
	movedownleft();
	movedownleft();
	moveleft();
	moveleft();
	moveleft();
	moveupleft();
	moveupleft();
	moveupleft();
	moveup();
	moveup();
	moveup();
	moveupright();
	
}

function moveupagain() {
if (redball.top>50){
redball.top=redball.top -20;
}
else {
alert("WHAT THE HELL YOU DOIN!");
}
}

function movedownagain() {
if (redball.top>300){
alert("BACK CROSS THE GUN LINE!")
}
else {
redball.top=redball.top +10;
}
}
 
function moverightagain() {
if (redball.left>550){
alert("MOONWALK YO ASS BACK THE OTHER WAY!")
}
else {
redball.left=redball.left +10;
}
} 	

function moveleftagain() {
if (redball.left <0){
alert("MOONWALK YO ASS BACK THE OTHER WAY!")
}
else {
redball.left=redball.left -10;
}
} 	