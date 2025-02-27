class Endboss extends MovableObject{
    
    height = 500;
    width = 300;
    y = - 45;
    
    IMAGES_CHICKEN_BOSS_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ]

    constructor(){
        super().loadImage(this.IMAGES_CHICKEN_BOSS_ALERT[0]);
        this.loadImages(this.IMAGES_CHICKEN_BOSS_ALERT);
        // this.x = 700;
        this.x = 2500;
        this.animate();
    }

    animate(){

        setInterval(() => {
            this.playAnimation(this.IMAGES_CHICKEN_BOSS_ALERT);
        }, 200);
        
    
    }
}