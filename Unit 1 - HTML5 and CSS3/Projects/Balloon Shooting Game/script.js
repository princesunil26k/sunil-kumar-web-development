const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let lives = 3;
let timeLeft = 60;
let gameRunning = true;

const balloons = [];

function createBalloon() {

    const colors = [
        "red",
        "blue",
        "gold",
        "green"
    ];

    const color =
        colors[Math.floor(Math.random() * colors.length)];

    let points = 10;

    if(color === "blue") points = 20;
    if(color === "gold") points = 50;
    if(color === "green") points = 15;

    balloons.push({
        x: Math.random() * (canvas.width - 60) + 30,
        y: canvas.height + 50,
        radius: 25,
        speed: 1 + Math.random() * 2,
        color: color,
        points: points
    });
}

function drawBalloon(balloon){

    ctx.beginPath();
    ctx.arc(
        balloon.x,
        balloon.y,
        balloon.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = balloon.color;
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(
        balloon.x,
        balloon.y + balloon.radius
    );

    ctx.lineTo(
        balloon.x,
        balloon.y + balloon.radius + 20
    );

    ctx.stroke();
}

function updateGame(){

    if(!gameRunning) return;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for(let i = balloons.length - 1; i >= 0; i--){

        balloons[i].y -= balloons[i].speed;

        drawBalloon(balloons[i]);

        if(balloons[i].y < -50){

            balloons.splice(i,1);

            lives--;

            document.getElementById("lives").textContent = lives;

            if(lives <= 0){
                endGame();
            }
        }
    }

    requestAnimationFrame(updateGame);
}

canvas.addEventListener("click", function(event){

    if(!gameRunning) return;

    const rect =
        canvas.getBoundingClientRect();

    const mouseX =
        event.clientX - rect.left;

    const mouseY =
        event.clientY - rect.top;

    for(let i = balloons.length - 1; i >= 0; i--){

        let dx =
            mouseX - balloons[i].x;

        let dy =
            mouseY - balloons[i].y;

        let distance =
            Math.sqrt(dx * dx + dy * dy);

        if(distance <= balloons[i].radius + 10){

            score += balloons[i].points;

            document.getElementById("score")
            .textContent = score;

            balloons.splice(i,1);

            break;
        }
    }
});

function endGame(){

    gameRunning = false;

    document.getElementById("finalScore")
    .textContent = score;

    document.getElementById("gameOver")
    .classList.remove("hidden");
}

setInterval(function(){

    if(gameRunning){
        createBalloon();
    }

},1000);

const timerInterval =
setInterval(function(){

    if(!gameRunning){
        clearInterval(timerInterval);
        return;
    }

    timeLeft--;

    document.getElementById("timer")
    .textContent = timeLeft;

    if(timeLeft <= 0){
        endGame();
    }

},1000);

updateGame();