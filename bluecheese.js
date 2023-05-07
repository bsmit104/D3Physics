class Bluecheese extends Phaser.Scene {
    constructor() {
        super('bluecheese');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {

    }
}