class World {
    character = new Character();
    level = lvl1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.keyboard
        this.draw();
        this.setWorld();

    }

    setWorld(){
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        
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





