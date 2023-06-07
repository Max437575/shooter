var duckCounter = 0;
var targetCounter = 0;

function spawn(){
    if(player.timer <= 0){
        player.paused = true;
    }
    if(player.paused){ return; }
    
    duckCounter++;
    targetCounter++;
    if(duckCounter > 60){
        if(Math.random() > 0.98){
            var color = Math.random();
            var direction;
            var x = -100;
            if(Math.random() > 0.5){
                direction = "right";
            }else{
                direction = "left";
            }

            if(direction == "left"){
                x = 1180;
            }
            
            if(color < 0.33){ 
                new Duck(x, 0, "yellow", direction);
            }else if(color > 0.33 && 0.66 > color){
                new Duck(x, 0, "brown", direction);
            }else{
                new Duck(x, 0, "white", direction);
            }
            duckCounter = 0;
        }
    }

    if(targetCounter > 60){
        if(Math.random() > 0.99){
            var color = Math.random();
            var direction;
            var x = -100;

            if(Math.random() > 0.5){
                x = Math.round(Math.random() * 900);
                while(x < 100){
                    x = Math.round(Math.random() * 900);
                }
                direction = "up";
                
                if(color < 0.25){
                    new Target(x, 320, "colored", direction);
                }else if(color > 0.25 && 0.5 > color){
                    new Target(x, 320, "red", direction);
                }else if(color > 0.5 && 0.75 > color){
                    new Target(x, 320, "red2", direction);
                }else{
                    new Target(x, 320, "red3", direction);
                }

                targetCounter = 0;
            }else{
                if(Math.random() > 0.5){
                    direction = "right";
                }else{
                    direction = "left";
                    x = 1180;
                }

                if(color < 0.25){
                    new Target(x, 0, "colored", direction);
                }else if(color > 0.25 && 0.5 > color){
                    new Target(x, 0, "red", direction);
                }else if(color > 0.5 && 0.75 > color){
                    new Target(x, 0, "red2", direction);
                }else{
                    new Target(x, 0, "red3", direction);
                }
                targetCounter = 0;
            } 
        }
    }
}