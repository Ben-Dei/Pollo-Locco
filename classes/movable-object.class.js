class MovableObject{
    x = 120;
    y = 285;
    img;
    height = 150;
    width = 100
    imgageCache = [];
    currentImage = 0;
    speed = 0.20;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;


    applyGravity(){
        setInterval(() => {
            if (this.isAboveTheGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveTheGround(){
        return this.y < 180;
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imgageCache[path] = img;
            
        });
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