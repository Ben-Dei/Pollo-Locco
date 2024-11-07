class movableObject{
    x = 20;
    y = 215;
    img;
    height= 48;
    width= 192;
    sWidth= 48;
    sHeight= 48;
    

    loadImage(path){
        this.img = new Image();
        this.img.src = path;

    }

    moveRight() {
        console.log('moving right');
        
    }

    moveLeft(){
        
    }
}