'use strict';

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

let opacity = 0;
let fadingIn = true;

function updateOpc(){
    if(fadingIn) {
        opacity += 0.02;
        if(opacity >= 1) {
            fadingIn = false;
        }
    }
    else {
        opacity -= 0.02;
        if(opacity <= 0) fadingIn = true;
    }
}

function startDraw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.globalAlpha = opacity;
    c.fillStyle = 'white';
    c.font = "20px 고딕";
    c.fillText('시작하려면 스페이스바를 누르십시오.', 330, 220);
    c.globalAlpha = 1;
    
    updateOpc();
    requestAnimationFrame(startDraw);
}
startDraw();


class Sprite {
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 50;
    }
    
    draw() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "blue";
        c.fillRect(this.position.x, this.position.y, 50, 50);
    }
    
    update() {
        this.draw();
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        } 
        else this.velocity.y += gravity;
    }
}

const player = new Sprite({
    position: {
        x: 100,
        y: 250
    },
    velocity: {
        x: 0,
        y: 10,
    },
});

function animate() {
    window.requestAnimationFrame(animate);
    player.draw();
    player.update();
    
}

window.addEventListener("keydown", (e) => {
    if(e.code == 'Space'){
        animate();
    }
});