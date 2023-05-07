class Bluecheese extends Phaser.Scene {
    constructor() {
        super('bluecheese');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'purplehouse.png');
    }

    create() {
        const rectangle = this.add.rectangle(400, 800, 50, 700, 0xFF8C00);
        rectangle.setDepth(1);
        rectangle.setStrokeStyle(4, 0x4B0082);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0x4B0082); // x, y, width, height
        rectangle2.setDepth(1);
        rectangle2.setStrokeStyle(4, 0xFF8C00);

        const rectangle3 = this.add.rectangle(900, 600, 400, 50, 0xFF8C00);
        rectangle3.setDepth(1);
        rectangle3.setStrokeStyle(4, 0x4B0082);
        rectangle3.setOrigin(0.5);
        rectangle3.setAngle(45);

        const rectangle4 = this.add.rectangle(1700, 600, 200, 50, 0xFF8C00);
        rectangle4.setDepth(1);
        rectangle4.setStrokeStyle(4, 0x4B0082);

        const rectangle5 = this.add.rectangle(1400, 300, 400, 50, 0xFF8C00);
        rectangle5.setDepth(1);
        rectangle5.setStrokeStyle(4, 0x4B0082);

        this.house = this.add.image(
            900,//x
            900,//y
            'house',//imagename
            )
            this.house.setScale(1, -1);
            this.house.setDepth(1)
            this.house.setScale(1) //resize

        this.house2 = this.add.image(
            1700,//x
            900,//y
            'house',//imagename
            )
            this.house2.setScale(1, -1);
            this.house2.setDepth(1)
            this.house2.setScale(1) //resize

        this.house3 = this.add.image(
            200,//x
            900,//y
            'house',//imagename
            )
            this.house3.setScale(1, -1);
            this.house3.setDepth(1)
            this.house3.setScale(1) //resize
            


        const space = this.add.image(200, 0, 'space');
        space.setOrigin(0);
        space.setDepth(0);
    }
}