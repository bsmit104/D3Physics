class Level_select extends Phaser.Scene {
    constructor() {
        super('level_select');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {

    }
}