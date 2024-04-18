let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;
document.body.appendChild(rrafshi);

const ctx = rrafshi.getContext('2d');

let bgrReady = false;
let bgrImg = new Image();
bgrImg.src = "images/background.png";
bgrImg.onload = function () {
    ctx.drawImage(bgrImg, 0, 0);
}

let macaReady = false;
let maca = {};
maca.speed = 5
maca.x = 300;
maca.y = 300;
let macaImg = new Image();
macaImg.src = "images/cat.png";
macaImg.onload = function () {
    macaReady = true;
}

let miuReady = false;
let miu = {};
miu.x = 50;
miu.y = 50;
let miuImg = new Image();
miuImg.src = "images/mouse.png";
miuImg.onload = function () {
    miuReady = true;
}



addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") {
        maca.y -= maca.speed;
    }
    if (e.key == "ArrowDown") {
        maca.y += maca.speed;
    }
    if (e.key == "ArrowRight") {
        maca.x += maca.speed;
    }
    if (e.key == "ArrowLeft") {
        maca.x -= maca.speed;
    }
});

let render = function () {
    if (bgrReady) { ctx.drawImage(bgrImg, 0, 0); }
    if (macaReady) { ctx.drawImage(macaImg, maca.x, maca.y); }
    if (miuReady) { ctx.drawImage(miuImg, miu.x, miu.y); }
}

setInterval(render, 500);