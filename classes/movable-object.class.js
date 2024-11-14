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

    }


    moveLeft(){
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}