let canvas =
 document.getElementById("gameCanvas");

let ctx = canvas.getContext("2d");

let box = 20;
let snake = [{ x: 9 * box, y: 10 *box}];
let direction = "";
let food = {

    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box

};

document.addEventListener("keydown", event =>{

    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";

});

function drawGame() {
    ctx.clearRect(food.x, food.y, box, box);

    for (let i = 0;i < snake.length; i++) { 
        ctx.fillStyle = i === 0 ? "lime" : "white";
        ctx.fillRect(snake[i].x, snake[i].y,box, box);
    }

    let headX = snake[0].x;
    let headY = snake[0].y;


    if (direction === "LEFT") headX -= box;
    if (direction === "UP") headY -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "DOWN") headY += box;
   

    if (headX === food.x && headY === food.y) {
        food ={

            x: Math.floor(Math.random() *19 + 1) * box,
            y:Math.floor(Math.random() * 19 + 1) * box

        };
    } else {
        snake.pop();
    }


    let newHead = {x: headX, y:headY };

    if(
        headX < 0 || headX >= 400 ||
        headY < 0 || headY >= 400 ||
        collision(newHead, snake)
    ) {

        clearInterval(game);
        alert("Game Over!");

    }

    snake.unshift(newHead);
}

function collision(head, array) {
    return array.some(segment => segment.x === head.x && segment.y === head.y);

}

let game = setInterval(drawGame, 150);