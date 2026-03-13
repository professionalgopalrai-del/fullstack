const box = document.getElementById("box");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let timer;

function moveBox() {
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientWidth - box.clientWidth;


    const x = Math.random() *maxX;
    const y = Math.random() * maxY;

    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click" , () => {
    score++;
    scoreText.textContent = score;
    moveBox;
});

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreText.textContent = score;
    timeText.textContent = timeLeft;

    box.style.display = "block";
    moveBox();

    timer = setInterval(() => {
        timeLeft--;
        timeText.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            box.style.display = "none";
            alert("Game Over! Your Score: " +score);
        }


    }, 1000);
}


startBtn.addEventListener("click", startGame);z