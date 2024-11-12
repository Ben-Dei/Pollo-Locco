class Chicken extends MovableObject {
    
    y = 290;
    IMAGES_CHICKEN_WALK = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_CHICKEN_WALK);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.2 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_CHICKEN_WALK.length;
            let path = this.IMAGES_CHICKEN_WALK[i];
            this.img = this.imgageCache[path];
            this.currentImage++;
        }, 200);
    }

}