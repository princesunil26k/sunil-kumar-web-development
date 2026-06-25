const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let gameOver = false;

const player = {
    x: 375,
    y: 520,
    width: 50,
    height: 50,
    speed: 7
};

const bullets = [];
const enemies = [];

const keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;

    if(e.code === "Space"){
        bullets.push({
            x: player.x + 22,
            y: player.y
        });
    }
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function drawPlayer(){

    ctx.fillStyle = "cyan";

    ctx.beginPath();

    ctx.moveTo(player.x + 25, player.y);
    ctx.lineTo(player.x, player.y + 50);
    ctx.lineTo(player.x + 50, player.y + 50);

    ctx.closePath();
    ctx.fill();
}

function drawBullets(){

    ctx.fillStyle = "yellow";

    bullets.forEach(bullet => {

        ctx.fillRect(
            bullet.x,
            bullet.y,
            5,
            15
        );
    });
}

function drawEnemies(){

    enemies.forEach(enemy => {

        ctx.fillStyle = "red";

        ctx.fillRect(
            enemy.x,
            enemy.y,
            40,
            40
        );
    });
}

function updatePlayer(){

    if(keys["ArrowLeft"]){
        player.x -= player.speed;
    }

    if(keys["ArrowRight"]){
        player.x += player.speed;
    }

    if(player.x < 0){
        player.x = 0;
    }

    if(player.x > canvas.width - player.width){
        player.x = canvas.width - player.width;
    }
}

function updateBullets(){

    for(let i = bullets.length - 1; i >= 0; i--){

        bullets[i].y -= 8;

        if(bullets[i].y < 0){
            bullets.splice(i,1);
        }
    }
}

function updateEnemies(){

    for(let i = enemies.length - 1; i >= 0; i--){

        enemies[i].y += enemies[i].speed;

        if(enemies[i].y > canvas.height){

            gameOver = true;

            alert(
                "Game Over!\nScore: " + score
            );

            location.reload();
        }
    }
}

function checkCollisions(){

    for(let i = enemies.length - 1; i >= 0; i--){

        for(let j = bullets.length - 1; j >= 0; j--){

            let enemy = enemies[i];
            let bullet = bullets[j];

            if(
                bullet.x < enemy.x + 40 &&
                bullet.x + 5 > enemy.x &&
                bullet.y < enemy.y + 40 &&
                bullet.y + 15 > enemy.y
            ){

                enemies.splice(i,1);
                bullets.splice(j,1);

                score += 10;

                document.getElementById("score")
                .textContent = score;

                break;
            }
        }
    }
}

function spawnEnemy(){

    enemies.push({

        x: Math.random() * (canvas.width - 40),

        y: -40,

        speed: 2 + Math.random() * 2
    });
}

setInterval(spawnEnemy,1000);

function gameLoop(){

    if(gameOver) return;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    updatePlayer();
    updateBullets();
    updateEnemies();
    checkCollisions();

    drawPlayer();
    drawBullets();
    drawEnemies();

    requestAnimationFrame(gameLoop);
}

gameLoop();