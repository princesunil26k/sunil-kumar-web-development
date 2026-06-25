const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;

const balloons = [];

function createBalloon() {
    balloons.push({
        x: Math.random() * 750,
        y: 500,
        radius: 25,
        speed: 2 + Math.random() * 3,
        color: `hsl(${Math.random()*360},100%,50%)`
    });
}

function drawBalloon(balloon) {

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

    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(balloon.x, balloon.y + balloon.radius);
    ctx.lineTo(balloon.x, balloon.y + balloon.radius + 20);
    ctx.stroke();
}

function updateGame() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for(let i = balloons.length - 1; i >= 0; i--) {

        balloons[i].y -= balloons[i].speed;

        drawBalloon(balloons[i]);

        if(balloons[i].y < -50) {
            balloons.splice(i,1);
        }
    }

    requestAnimationFrame(updateGame);
}

canvas.addEventListener("click", function(e){

    const rect = canvas.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for(let i = balloons.length - 1; i >= 0; i--) {

        let dx = mouseX - balloons[i].x;
        let dy = mouseY - balloons[i].y;

        let distance =
            Math.sqrt(dx*dx + dy*dy);

        if(distance < balloons[i].radius){

            balloons.splice(i,1);

            score++;

            document.getElementById("score").textContent = score;

            break;
        }
    }
});

setInterval(createBalloon,1000);

updateGame();