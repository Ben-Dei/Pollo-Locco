class ThrowableObject extends MovableObject {

    IMAGES_THROWN_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    botlle_throw_sound = new Audio('audio/bottle_throw.mp3');
    botlle_splash_sound = new Audio('audio/bottle_throw_brake.mp3');
    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.loadImages(this.IMAGES_THROWN_BOTTLE);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.throw();
    }


    throw(){
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x +=10;
        }, 25);
    }
    
}