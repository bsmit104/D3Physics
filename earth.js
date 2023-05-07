class Earth extends Phaser.Scene {
    constructor() {
        super('earth');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {

    }
}