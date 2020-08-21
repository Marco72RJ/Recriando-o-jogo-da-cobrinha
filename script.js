let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
x: 8 * box,
y: 8 * box
}

let joystick = "right";

function criarBG() {
context.fillStyle = "lightgreen";
context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event){
if(event.keyCode ==37 && joystick != "right") joystick = "left";
if(event.keyCode ==38 && joystick != "down") joystick = "up";
if(event.keyCode ==39 && joystick != "left") joystick = "right";
if(event.keyCode ==40 && joystick != "up") joystick = "down";
}

function iniciarJogo(){
if(cobra[0].x > 15 * box  && joystick == "right") cobra[0].x = 0;
if(cobra[0].x < 0 && joystick == "left") cobra[0].x = 16 * box;
if(cobra[0].y > 15 * box  && joystick == "down") cobra[0].y = 0;
if(cobra[0].y < 0 && joystick == "up") cobra[0].y = 16 * box;

    criarBG();
    criarCobrinha();

    let cobrax = cobra[0].x;
    let cobray = cobra[0].y;

    if(joystick == "right") cobrax += box;
    if(joystick == "left") cobrax -= box;  
    if(joystick == "up") cobray -= box;
    if(joystick == "down") cobray += box;

    cobra.pop();

    let newHead = {
    x: cobrax,
    y: cobray
    }

    cobra.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
