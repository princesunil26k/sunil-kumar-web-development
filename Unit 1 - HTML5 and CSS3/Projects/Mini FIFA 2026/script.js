const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player;
let ball;
let score = 0;
let timer = 60;
let gameRunning = false;

function startGame(){

    document.getElementById("menu").style.display = "none";
    document.getElementById("gameArea").style.display = "block";

    const country =
        document.getElementById("country").value;

    document.getElementById("teamName").textContent =
        country;

    player = {
        x:100,
        y:250,
        size:25
    };

    ball = {
        x:150,
        y:250,
        r:12,
        speedX:0
    };

    gameRunning = true;

    gameLoop();
}

function drawField(){

    ctx.fillStyle="#2faa45";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="white";
    ctx.lineWidth=3;

    ctx.strokeRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvas.width/2,0);
    ctx.lineTo(canvas.width/2,canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
        canvas.width/2,
        canvas.height/2,
        70,
        0,
        Math.PI*2
    );
    ctx.stroke();

    ctx.strokeRect(
        canvas.width-120,
        180,
        120,
        140
    );
}

function drawPlayer(){

    ctx.fillStyle="blue";

    ctx.beginPath();

    ctx.arc(
        player.x,
        player.y,
        player.size,
        0,
        Math.PI*2
    );

    ctx.fill();
}

function drawBall(){

    ctx.fillStyle="white";

    ctx.beginPath();

    ctx.arc(
        ball.x,
        ball.y,
        ball.r,
        0,
        Math.PI*2
    );

    ctx.fill();
}

function updateBall(){

    ball.x += ball.speedX;

    ball.speedX *= 0.98;

    if(
        ball.x > canvas.width-120 &&
        ball.y > 180 &&
        ball.y < 320
    ){

        score++;

        document.getElementById("score")
        .textContent = score;

        resetBall();
    }

    if(ball.x > canvas.width){

        resetBall();
    }
}

function resetBall(){

    ball.x = player.x + 50;
    ball.y = player.y;
    ball.speedX = 0;
}

document.addEventListener("keydown",function(e){

    if(!gameRunning) return;

    const speed = 10;

    if(e.key==="ArrowUp"){
        player.y -= speed;
    }

    if(e.key==="ArrowDown"){
        player.y += speed;
    }

    if(e.key==="ArrowLeft"){
        player.x -= speed;
    }

    if(e.key==="ArrowRight"){
        player.x += speed;
    }

    if(e.code==="Space"){

        ball.x = player.x + 30;
        ball.y = player.y;

        ball.speedX = 15;
    }

});

function gameLoop(){

    if(!gameRunning) return;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawField();
    drawPlayer();
    drawBall();
    updateBall();

    requestAnimationFrame(gameLoop);
}

setInterval(function(){

    if(!gameRunning) return;

    timer--;

    document.getElementById("timer")
    .textContent = timer;

    if(timer <= 0){

        gameRunning = false;

        alert(
            "Full Time!\n\nFinal Score: "
            + score
        );
    }

},1000);