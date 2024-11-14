class Character extends MovableObject {

    y = 180;
    height = 250;
    speed = 10;
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_WALK = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    world;
    walking_sound = new Audio('audio/running.mp3')
    imageAtWalk = 'img/2_character_pepe/2_walk/W-21.png';
    constructor(){
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);

        this.animate();
        this.walkAnimation();
    }

    animate(){
        setInterval(() => {
            this.walking_sound.pause();
            if (keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
            
        }, 450);
    }

    walkAnimation(){
        if (keyboard.RIGHT || keyboard.LEFT) {
            setInterval(() => {
                let j = this.imageAtWalk % this.IMAGES_WALK.length;
                let path = this.IMAGES_WALK[j];
                this.img = this.imgageCache[path];
                this.imageAtWalk++;
            }, 450);
        }
    }


    jump() {

    }
}