class MovableObject{
    x = 120;
    y = 285;
    img;
    height = 150;
    width = 100
    imgageCache = [];
    

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

    moveRight(){

    }


    moveLeft(){
        
    }

}