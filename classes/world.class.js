class World {
    character = new Character();
    level = lvl1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusHealthBar = new StatusHealthBar();
    statusCoinBar = new CoinCollectBar();
    statusBottleBar = new ThrowableBottleBar();
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.keyboard
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects(){
        
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)){
                this.character.getHit();
                this.statusHealthBar.setPercentageForHealthBar(this.character.energy);
            }
        })
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusHealthBar);
        this.addToMap(this.statusCoinBar);
        this.addToMap(this.statusBottleBar);
        this.ctx.translate(this.camera_x,0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        
        this.ctx.translate(-this.camera_x, 0);


        requestAnimationFrame( () => this.draw());
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flippImg(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flippImgBack(mo)
        }
    }

    flippImg(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale (-1, 1);
        mo.x = mo.x * -1;
    }

    flippImgBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}




