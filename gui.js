var waterY = 0;
var waterX = 0;

function drawStall(){
    //top back
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, 0, 55, 200, 63);
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, 150, 55, 200, 63);
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, 300, 55, 200, 63);

    ctx.drawImage(tilesetStall, 0, 598, 200, 63, canvas.width - 200, 55, 200, 63);
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, canvas.width - 350, 55, 200, 63);
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, canvas.width - 500, 55, 200, 63);
    ctx.drawImage(tilesetStall, 0, 598, 200, 63, canvas.width - 650, 55, 200, 63);
    
    //side
    ctx.drawImage(tilesetStall, 650, 0, 131, 426, 0, 60, 131, 456);
    ctx.drawImage(tilesetStall, 781, 0, 131, 426, canvas.width - 131, 60, 131, 456);
    //rope
    ctx.drawImage(tilesetStall, 0, 762, 40, 21, -8, 282, 40, 21);
    ctx.drawImage(tilesetStall, 0, 762, 40, 21, canvas.width - 40 + 8, 282, 40, 21);
    
    //top
    ctx.drawImage(tilesetStall, 0, 0, 256, 80, 0, 0, 256, 80);
    ctx.drawImage(tilesetStall, 0, 0, 256, 80, 256, 0, 256, 80);
    ctx.drawImage(tilesetStall, 0, 0, 256, 80, 512, 0, 256, 80);
    ctx.drawImage(tilesetStall, 0, 0, 256, 80, 768, 0, 256, 80);
    ctx.drawImage(tilesetStall, 0, 0, 256, 80, 1024, 0, 256, 80);
}

function drawWater(){
    if(!player.paused){
        waterY++;
    }
    var x = 10 * Math.sin(waterY / 40) - 30;
    var y = 10 * Math.sin(waterY / 40) + 378;
    ctx.drawImage(tilesetStall, 0, 802, 1200, 223, x, y, 1200, 223);
}

function drawWaterBg(){
    if(!player.paused){
        waterX++;
    }
    var x = 10 * Math.cos(waterY / 40) + 30;
    var y = 10 * Math.cos(waterY / 40) + 338;
    ctx.drawImage(tilesetStall, 0, 802, 1200, 223, x, y, 1200, 223);
}

function drawGrass(){
    ctx.drawImage(tilesetStall, 0, 1030, 1200, 216, 0, 278, 1200, 216);
    ctx.save();
    ctx.rotate(0.09);
    ctx.drawImage(tilesetStall, 673, 428, 119, 255, 942, 66, 119, 255);
    ctx.restore();
}

function drawTrees(){
    ctx.save();
    ctx.rotate(-0.12);
    ctx.drawImage(tilesetStall, 258, 516, 143, 244, 18, 93, 143, 244);
    ctx.restore();
}

function drawBg(){
    //wood background
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 0, 0, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 256, 0, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 512, 0, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 768, 0, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 1024, 0, 256, 256);
    
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 0, 256, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 256, 256, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 512, 256, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 768, 256, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 1024, 256, 256, 256);
    
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 0, 512, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 256, 512, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 512, 512, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 768, 512, 256, 256);
    ctx.drawImage(tilesetStall, 258, 0, 256, 256, 1024, 512, 256, 256);

    //clouds
    ctx.drawImage(tilesetStall, 403, 516, 134, 82, 675, 141, 134, 82);
    ctx.drawImage(tilesetStall, 0, 663, 141, 84, 285, 180, 141, 84);
}

function drawGui(){
    if(player.paused){
        ctx.drawImage(tilesetIcons, 100, 1000, 100, 100, 578, 612, 100, 100);
    }else{
        ctx.drawImage(tilesetIcons, 100, 1800, 100, 100, 578, 612, 100, 100);
    }

    //ctx.drawImage(tilesetGui2, 190, 98, 100, 100, 0, 0, 150, 150);
    //ctx.drawImage(tilesetGui, 0, 144, 230, 66, canvas.width / 2 - 115, 30, 230, 66);
}

function drawWood(){
    ctx.fillStyle = "#bb8044";
    ctx.fillRect(0, 474, 1080, 720);
}

function drawScore(){
    if(player.score > 9999){ player.score = 9999; }
    var scoreText = player.score;

    if(player.score < 1000){
        scoreText = "0" + player.score;
    }
    if(player.score < 100){
        scoreText = "00" + player.score;
    }
    if(player.score < 10){
        scoreText = "000" + player.score;
    }
    
    ctx.font = "75px digital-7";
    ctx.fillStyle = "black";
    ctx.fillRect(78, 502, 352, 75);

    ctx.fillStyle = "red";
    ctx.fillText("Score:" + scoreText, 84, 564);
}

function drawHighScore(){
    var score = localStorage.getItem("ShootingGalleryHighScore");
    if(score > 9999){ score = 9999; localStorage.setItem("ShootingGalleryHighScore", 9999); }
    if(score == null){ score = 0; }
    var scoreText = score;

    if(score < 1000){
        scoreText = "0" + score;
    }
    if(score < 100){
        scoreText = "00" + score;
    }
    if(score < 10){
        scoreText = "000" + score;
    }
    
    ctx.font = "75px digital-7";
    ctx.fillStyle = "black";
    ctx.fillRect(78, 502 + 120, 488, 75);

    ctx.fillStyle = "red";
    ctx.fillText("Highscore:" + scoreText, 84, 564 + 120);
}

function drawTimer(){
    if(player.timer < 0){ player.timer = 0; }
    var timerText = player.timer;

    if(player.timer < 10){
        timerText = "0" + player.timer;
    }

    ctx.font = "75px digital-7";
    ctx.fillStyle = "black";
    ctx.fillRect(476, 502, 286, 75);

    ctx.fillStyle = "red";
    ctx.fillText("Timer:" + timerText, 482, 564);
}