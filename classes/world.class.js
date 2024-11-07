class World {
    character = new Character();
    enemies = [
        new Robot(),
        new Robot(),
        new Robot(),
    ];

    ctx;
    currentFrame = 0; // Der aktuelle Frame des Charakters
    frameInterval = 100; // Zeit in Millisekunden, um zwischen Frames zu wechseln
    lastFrameTime = 0; // Speichert die Zeit des letzten Frame-Wechsels

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
    }

    draw(timestamp) {
        if (timestamp - this.lastFrameTime > this.frameInterval) {
            this.lastFrameTime = timestamp;
            this.currentFrame++;
            if (this.currentFrame > 3) {
                this.currentFrame = 0; // Zurück zum ersten Frame, wenn das Ende erreicht ist
            }
        }

        let frameWidth = 48; // Breite jedes Frames im Spritesheet
        let frameX = this.currentFrame * frameWidth; // x-Position des aktuellen Frames im Bild

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(
            this.character.img,
            frameX, 0,
            frameWidth, this.character.height,
            this.character.x, this.character.y,
            frameWidth, this.character.height
        );
    }

    startAnimation() {
        const animate = (timestamp) => {
            this.draw(timestamp);
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
}




// 192 x 48 px
// für ein frame 192 / 4 = 48 px
// 48 char höhe und breite