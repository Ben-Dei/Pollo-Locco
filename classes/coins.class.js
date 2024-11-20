class Coins extends DrawableObjects{

    y_max = 290
    y_min = 30
    constructor (){
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 500 + Math.random() * 500;
        this.y = 50 + Math.random() * (this.y_max - this.y_min) + this.y_min;
    }
}