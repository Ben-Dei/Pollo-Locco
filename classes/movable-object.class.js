class MovableObject extends DrawableObjects{
    speed = 0.20;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    getHit(){
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead(){
        return this.energy == 0;
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveTheGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveTheGround(){
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }



    playAnimation(images){
        let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imgageCache[path];
            this.currentImage++;
    }

    moveRight(){
        this.x += this.speed;
}


    moveLeft(){
            this.x -= this.speed;            
    }
}