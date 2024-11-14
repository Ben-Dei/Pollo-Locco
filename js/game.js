
let canvas;
let world;
let keyboard = new KeyBoard();

function init () {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
    
}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 100) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 97) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 102) {
        keyboard.THROW = true;
    }
    console.log(e);
    
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 100) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 97) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 102) {
        keyboard.THROW = false;
    }
    console.log(e);
    
});