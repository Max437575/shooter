var ducks = [];

function drawDucks(){
    for(var i = 0; i < ducks.length; i++){
        ducks[i].draw();
    }
}

function duckCollision(x, y){
    for(var i = 0; i < ducks.length; i++){
        ducks[i].collision(x, y);
    }
}

class Duck{
    constructor(x, y, color, direction){
        this.x = x;
        this.y = y;
        this.newX = x;
        this.newY = y;
        this.color = color;
        this.direction = direction;
        
        this.shot = false;
        this.velocity = -2;

        ducks.push(this);
    }

    draw(){
        if(this.newY > 1000) { ducks.splice(ducks.indexOf(this), 1); }
        ctx.drawImage(tilesetObj, 650, 258, 34, 127, this.newX + (114 / 2) - (34 / 2), this.newY + 97, 34, 127);
        if(this.shot){
            this.newY += this.velocity;
            this.velocity += 0.2;
            if(this.direction == "left"){
                ctx.drawImage(tilesetObj, 342, 730, 114, 109, this.newX, this.newY, 114, 109);
            }else{
                ctx.drawImage(tilesetObj, 404, 581, 114, 109, this.newX, this.newY, 114, 109);
            }
            return;
        }

        if(!player.paused){
            if(this.direction == "left"){
                this.newX -= 1.5;
            }else{
                this.newX += 1.5;
            }
            this.newY = 30 * Math.sin(this.newX / 40) + 280 + this.y;
        }

        switch (this.color) {
            case "yellow":
                if(this.direction == "left"){
                    ctx.drawImage(tilesetObj, 0, 730, 114, 109, this.newX, this.newY, 114, 109);
                }else{
                    ctx.drawImage(tilesetObj, 431, 111, 114, 109, this.newX, this.newY, 114, 109);
                }
                break;

            case "white":
                if(this.direction == "left"){
                    ctx.drawImage(tilesetObj, 114, 730, 114, 109, this.newX, this.newY, 114, 109);
                }else{
                    ctx.drawImage(tilesetObj, 520, 581, 114, 109, this.newX, this.newY, 114, 109);
                }
                break;

            case "brown":
                if(this.direction == "left"){
                    ctx.drawImage(tilesetObj, 228, 730, 114, 109, this.newX, this.newY, 114, 109);
                }else{
                    ctx.drawImage(tilesetObj, 418, 321, 114, 109, this.newX, this.newY, 114, 109);
                }
                break;
    
            default:
                break;
        }

        if(!player.debug){ return; }
        ctx.fillStyle = "green";
        ctx.fillRect(this.newX, this.newY, 114, 109);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.newX + 34, this.newY + 56, 39, 38);
    }

    collision(x, y){
        if(this.shot){ return false; }
        if(this.newX < x && x < this.newX + 114   &&   this.newY < y && y < this.newY + 109){

            if(this.newX + 34 < x && x < this.newX + 73   &&   this.newY + 56 < y && y < this.newY + 94){
                player.score += 20;
                new ScoreText(this.newX, this.newY, 20);
            }else{
                player.score += 10;
                new ScoreText(this.newX, this.newY, 10);
            }

            this.shot = true;
            return true;
        }
        return false;
    }
};
