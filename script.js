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

function iniciarJogo(){

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
