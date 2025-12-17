const card = document.querySelector(".card");
const music = document.getElementById("music");
const insideCard = document.querySelector(".inside")

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPartcles = [];

function createConfetti() {
    for (let i=0; i< 100; i++) {
        confettiPartcles.push({
            x: Math.random() * canvas.width,
            y:Math.random() *canvas.height - canvas.height,
            r:Math.random() * 6 + 4,
            d:Math.random() * 20 + 10,
            color:`hsl(${Math.random() * 360}, 100%, 50%)` ,
            tilt: Math.random() * 10 - 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPartcles.forEach(p => {
        ctx.beginPath();
        // FIXED: Changed ctx.fillstyle to ctx.fillStyle
        ctx.fillStyle = p.color; 
        
        // FIXED: Changed p.till to p.tilt
        ctx.moveTo(p.x + p.tilt, p.y);
        ctx.lineTo(p.x + p.tilt +p.r / 2, p.y + p.r);
        ctx.lineTo(p.x + p.tilt - p.r / 2, p.y + p.r);
        
        ctx.closePath();
        ctx.fill();
        p.y += p.d / 2;
        if (p.y > canvas.height) p.y = -10;
    });
    requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();


function openCard() {
    card.classList.add("open");
    music.play();
}

function closeCard() {
    card.classList.remove("open");
    music.pause();
    music.currentTime = 0;
}

