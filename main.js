enchant();

window.onload = function() {
	var core = new Core(320, 320);
	core.preload('chara1.png');
	core.onload = function() {
		var bear = new Sprite(32, 32);
		bear.image = core.assets['chara1.png'];
		bear.x = 0;
		bear.y = 0;
		bear.scaleTotal = 1.00;
		core.rootScene.addChild(bear);
		core.fps = 15;
  		bear.on('enterframe', function() {
        		this.x += 10;
			this.y += 3
  	      		this.rotate(3); // 2度ずつ回転
		       	this.scale(1.01, 1.01); // 縦横1.01倍ずつ拡大
			this.scaleTotal += 0.01;
			if (this.scaleTotal > 2) {
				this.scale(0.45,  0.45);
				this.scaleTotal = 1.00;
			}
		       	if (this.x > 320) this.x = 0; // 画面からはみ出したらx座標を0に戻す
			if (this.y > 320) this.y = 0;
    		});
	};
	core.start();

}
