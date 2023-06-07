const tilesetObj = new Image();
tilesetObj.src = "gfx/shooting-gallery-pack/Spritesheets/spritesheet_objects.png";
const tilesetStall = new Image();
tilesetStall.src = "gfx/shooting-gallery-pack/Spritesheets/spritesheet_stall.png";
const tilesetGui = new Image();
tilesetGui.src = "gfx/shooting-gallery-pack/Spritesheets/spritesheet_hud.png";
const tilesetIcons = new Image();
tilesetIcons.src = "gfx/gameicons/Spritesheet/sheet_black2x.png";
const tilesetGui2 = new Image();
tilesetGui2.src = "gfx/uipack_fixed/Spritesheet/greySheet.png";


class Player{
    constructor(){
        this.mouseX = 540;
        this.mouseY = 360;
        this.debug = false;
        this.xxx = 0;
        this.yyy = 0;
        this.zzz = 0;
        this.score = 0;
        this.timer = 60;
        this.fpsCounter = 0;
        this.paused = false;

        document.addEventListener("mousemove", (e) =>{
            var rect = canvas.getBoundingClientRect();
            var scaleX = canvas.width / rect.width;
            var scaleY = canvas.height / rect.height;
        
            this.mouseX = Math.round((e.clientX - rect.left) * scaleX);
            this.mouseY = Math.round((e.clientY - rect.top) * scaleY);
        });

        document.addEventListener("keydown", (e) =>{
            if(e.key == "1"){
                if(!this.debug){
                    this.debug = true;
                }else{
                    this.debug = false;
                }
            }
            var ye = 2;
            if(e.key == "w"){
                this.yyy -= ye;
            }
            if(e.key == "s"){
                this.yyy += ye;
            }
            if(e.key == "a"){
                this.xxx -= ye;
            }
            if(e.key == "d"){
                this.xxx += ye;
            }
            
            if(e.key == "q"){
                this.zzz -= ye;
            }
            if(e.key == "e"){
                this.zzz += ye;
            }
        });

        document.addEventListener("mousedown", (e) =>{
            if(this.timer <= 0){ return; }
            if(578 < this.mouseX && this.mouseX < 678   &&   612 < this.mouseY && this.mouseY < 712){
                if(this.paused){
                    this.paused = false;
                }else{
                    this.paused = true;
                }
            }

            if(this.paused){ return; }
            targetCollision(this.mouseX, this.mouseY);
            duckCollision(this.mouseX, this.mouseY);
            if(player.score > localStorage.getItem("ShootingGalleryHighScore")){
                localStorage.setItem("ShootingGalleryHighScore", player.score);
            }
        });
    }

    draw(){
        if(!player.paused){
            this.fpsCounter++;
            if(this.fpsCounter >= 60){
                this.fpsCounter = 0;
                this.timer--;
                if(this.timer == 0){
                    for (var i = 0; i < ducks.length; i++) {
                        ducks[i].shot = true;
                    }
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].shot = true;
                    }
                }
            }
        }

        //gun
        ctx.drawImage(tilesetObj, 144, 0, 142, 319, this.mouseX + 60, this.mouseY + 30/*515*/, 142, 319);
        ctx.drawImage(tilesetGui, 221, 323, 46, 46, this.mouseX - 16, this.mouseY - 16, 32, 32);

        if(this.debug){
            ctx.font = "30px Comic Sans Ms"
            ctx.fillStyle = "black";
            ctx.fillRect(this.mouseX - 16, this.mouseY - 16, 32, 32);
            ctx.fillText(this.mouseX + ":" + this.mouseY + " Score: " + this.score + " Timer: " + this.timer, 0, 30);
            ctx.globalAlpha = 0.75;
        }else{
            ctx.globalAlpha = 1;
        }
    }
};