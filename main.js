var canvas = /** @type {HTMLCanvasElement}*/(document.getElementById("canvas"));
var ctx = canvas.getContext("2d");


var player = new Player();

function draw(){
    ctx.fillStyle = "#bbbbbb";
    ctx.fillRect(0, 0, 1920, 1080);

    drawBg();
    drawTrees();
    
    //targets
    drawTargets();
    
    drawGrass();
    drawWaterBg();
    
    //ducks
    drawDucks();
    
    drawWater();
    drawWood();
    drawStall();

    //gui
    drawScore();
    drawHighScore();
    drawTimer();
    drawGui();

    //player
    player.draw();

    drawScoreTexts();

    spawn();
}
setInterval(draw, 1000 / 60);
