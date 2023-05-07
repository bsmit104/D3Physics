class Cheese extends Phaser.Scene {
    constructor() {
        super('cheese');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {

    }
}