class SmallChicken extends MovableObject{
    width = 75;
    height = 75;
    y = 355;
    IMAGE_SMALL_CHICKEN_WALK = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGE_SMALL_CHICKEN_WALK);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.2 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        setInterval( () => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGE_SMALL_CHICKEN_WALK);
        }, 200);
    }

}