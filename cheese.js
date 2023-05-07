class Cheese extends Phaser.Scene {
    constructor() {
        super('cheese');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
    }

    create() {
        const space = this.add.image(200, 0, 'space');
        //space.scale(.5);
        space.setOrigin(0);
        space.setDepth(0);
    }
}