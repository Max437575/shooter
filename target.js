var sokobanane = new Audio("sokobanane du affe.mp3");

var targets = [];

function drawTargets(){
    for(var i = 0; i < targets.length; i++){
        targets[i].draw();
    }
}

function targetCollision(x, y){
    for(var i = 0; i < targets.length; i++){
        targets[i].collision(x, y);
    }
}

class Target{
    constructor(x, y, color, direction){
        this.x = x;
        this.y = y;
        this.newX = x;
        this.newY = y;
        this.color = color;
        this.direction = direction;

        this.shot = false;
        this.velocity = -2;
        if(direction == "up"){
            this.velocity = -9;
        }

        targets.push(this);
    }

    draw(){
        if(this.newY > 1000) { targets.splice(targets.indexOf(this), 1); }
        if(this.shot){
            this.newY += this.velocity;
            this.velocity += 0.2;
            ctx.drawImage(tilesetObj, 648, 0, 34, 127, this.newX + (113 / 2) - (34 / 2), this.newY + 102, 34, 127);
            ctx.drawImage(tilesetObj, 0, 576, 142, 142, this.newX, this.newY, 113, 113);
            return;
        }

        if(!player.paused){
            if(this.direction == "left"){
                this.newX -= 5;
            }else if(this.direction == "right"){
                this.newX += 5;
            }
            
            if(this.direction != "up"){
                this.newY = 10 * Math.sin(this.newX / 40) + 130 + this.y;
            }
    
            if(this.direction == "up"){
                this.newY += this.velocity;
                this.velocity += 0.2;
            }
        }

        ctx.drawImage(tilesetObj, 648, 0, 34, 127, this.newX + (113 / 2) - (34 / 2), this.newY + 102, 34, 127);
        switch (this.color) {
            case "colored":
                ctx.drawImage(tilesetObj, 0, 432, 142, 142, this.newX, this.newY, 113, 113);
                break;

            case "red":
                ctx.drawImage(tilesetObj, 0, 144, 142, 142, this.newX, this.newY, 113, 113);
                break;

            case "red2":
                ctx.drawImage(tilesetObj, 144, 321, 142, 142, this.newX, this.newY, 113, 113);
                break;

            case "red3":
                ctx.drawImage(tilesetObj, 0, 288, 142, 142, this.newX, this.newY, 113, 113);
                break;
    
            default:
                break;
        }

        if(!player.debug){ return; }
        ctx.fillStyle = "green";
        ctx.fillRect(this.newX, this.newY, 113, 113);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.newX + 36, this.newY + 36, 41.6, 41.6);
    }

    collision(x, y){
        if(this.shot){ return false; }
        if(this.newX < x && x < this.newX + 113   &&   this.newY < y && y < this.newY + 113){

            if(this.newX + 36 < x && x < this.newX + 77.6   &&   this.newY + 36 < y && y < this.newY + 77.6){
                if(this.direction == "up"){
                    player.score += 250;
                    new ScoreText(this.newX, this.newY, 250);
                }else{
                    player.score += 50;
                    new ScoreText(this.newX, this.newY, 50);
                }
            }else{
                if(this.direction == "up"){
                    player.score += 100;
                    new ScoreText(this.newX, this.newY, 100);
                }else{
                    player.score += 30;
                    new ScoreText(this.newX, this.newY, 30);
                }
            }

            this.shot = true;
            this.velocity = -2;
            return true;
        }
        return false;
    }
};
