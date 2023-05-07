class Sat extends Phaser.Scene {
    constructor() {
        super('sat');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {

    }
}