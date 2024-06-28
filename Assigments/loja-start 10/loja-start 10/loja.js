const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d')
const bgGame = new Image();
bgGame.src = "images/background.png";

let ticTimer = 15;
let Points = 0;
let button = document.createElement('button')

let bgReady = false;
bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 0;
catObj.width = 128;
catObj.height = 128;
catObj.speed = 10;

let catReady = false;
const catImg = new Image();
catImg.src = 'images/cat.png';
catImg.onload = function () {
    catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54
mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = 30 + Math.floor(Math.random() * 396);

let miuReady = false;
const miuImg = new Image();
miuImg.src = 'images/mouse.png'
miuImg.onload = function () {
    miuReady = true
}

function render() {
    if (bgReady) {
        ctx.drawImage(bgGame, 0, 0);
    }
    if (catReady) {
        ctx.drawImage(catImg, catObj.x, catObj.y);
    }
    if (miuReady) {
        ctx.drawImage(miuImg, mouseObj.x, mouseObj.y);
    }

    if (catObj.x > 500) { catObj.x = -50; }
    if (catObj.x < -51) { catObj.x = 499; }
    if (catObj.y > 460) { catObj.y = -50; }
    if (catObj.y < -53) { catObj.y = 407; }

    if ((catObj.x + catObj.width) > mouseObj.x && (catObj.y + catObj.height) > mouseObj.y && (catObj.x - 1) < (mouseObj.x + mouseObj.width) && (catObj.y) < (mouseObj.y + mouseObj.height)) {
        mousePos();
        if (ticTimer != 0) {
            Points++
        }
    };

    if (ticTimer == 0) {
        mouseObj.x = 3000;
        if (Points >= 10) {
            ctx.fillStyle = "white";
            ctx.fillText("You Win!", 220, 200);
            button.textContent = "Start Over"
            button.addEventListener('click', function () {
                location.reload()
            })
        }
        else {
            ctx.fillStyle = "red";
            ctx.fillText("Game Over", 220, 200);
            button.textContent = "Start Over"
            button.addEventListener('click', function () {
                location.reload()
            })
        }
        document.body.appendChild(button);
    }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " + Points, 10, 25);

    ctx.fillText("Timer: " + ticTimer, 420, 25);
}


addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        catObj.x += catObj.speed
    }
    if (e.key == "ArrowLeft") {
        catObj.x -= catObj.speed
    }
    if (e.key == "ArrowUp") {
        catObj.y -= catObj.speed
    }
    if (e.key == "ArrowDown") {
        catObj.y += catObj.speed
    }
});

function timer() {
    if (ticTimer == 0) {
        clearInterval(timeRunner)
    }
    else { ticTimer--; }


}

function mousePos() {
    mouseObj.x = Math.floor(Math.random() * 460);
    mouseObj.y = 30 + Math.floor(Math.random() * 396);
}



const renderFrame = setInterval(render, 1);
const timeRunner = setInterval(timer, 1000);
