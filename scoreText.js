function drawScoreTexts(){
	for (var i = 0; i < scoreTexts.length; i++) {
		scoreTexts[i].draw();
	}
}

var scoreTexts = [];

class ScoreText{
	constructor(x, y, points){
		this.x = x;
		this.y = y;
		this.counter = 0;
		this.points = points;
		scoreTexts.push(this);
	}

	draw(){
		if(this.counter > 30){ scoreTexts.splice(scoreTexts.indexOf(this), 1); }
		this.y -= 2;
		this.counter++;
		ctx.drawImage(tilesetGui, 359, 348, 28, 28, this.x, this.y, 28, 28);
		switch(this.points){
			case 10:
				//1
				ctx.drawImage(tilesetGui, 382, 0, 23, 36, this.x + 28, this.y, 23, 36);
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 23, this.y, 32, 37);
				break;

			case 20:
				//2
				ctx.drawImage(tilesetGui, 359, 271, 29, 37, this.x + 28, this.y, 29, 37);
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 29, this.y, 32, 37);
				break;

			case 30:
				//3
				ctx.drawImage(tilesetGui, 365, 111, 28, 36, this.x + 28, this.y, 28, 36);				
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 28, this.y, 32, 37);
				break;

			case 40:
				//4
				ctx.drawImage(tilesetGui, 359, 233, 30, 36, this.x + 28, this.y, 30, 36);				
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 30, this.y, 32, 37);
				break;

			case 50:
				//5
				ctx.drawImage(tilesetGui, 359, 310, 29, 36, this.x + 28, this.y, 29, 36);				
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 29, this.y, 32, 37);
				break;

			case 100:
				//1
				ctx.drawImage(tilesetGui, 382, 0, 23, 36, this.x + 28, this.y, 23, 36);			
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 23, this.y, 32, 37);
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 23 + 32, this.y, 32, 37);
				break;

			case 250:
				//2
				ctx.drawImage(tilesetGui, 359, 271, 29, 37, this.x + 28, this.y, 29, 37);
				//5
				ctx.drawImage(tilesetGui, 359, 310, 29, 36, this.x + 28 + 29, this.y, 29, 36);
				//0
				ctx.drawImage(tilesetGui, 303, 382, 32, 37, this.x + 28 + 29 + 29, this.y, 32, 37);
				break;
		}
	}
};
