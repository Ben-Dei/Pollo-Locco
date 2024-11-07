class World {
    character = new Character();
    enimies = [
    new Robot(),
    new Robot(),
    new Robot(),

    ];

    ctx;


    constructor(canvas){
        this.ctx = canvas.getContext('2d');
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

    };

}



// 192 x 48
// für ein frame 192 / 4
// 48 char höhe