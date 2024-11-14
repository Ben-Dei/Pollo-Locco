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
            this.flippImg();
        }
        // mo.draw(this.ctx);
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    flippImg(){
        this.ctx.save();
        this.ctx.translation(mo.width, 0);
        this.ctx.scale (-1, 1);
        mo.x = mo.x * -1;
    }

}













        // this.enemies.forEach(enemy => {
        //     this.addToMap(enemy);
        // });
        // this.clouds.forEach(cloud => {
        //     this.addToMap(cloud);
        // });
        // this.backgroundObjects.forEach(bgo => {
        //     this.addToMap(bgo);
        // });



