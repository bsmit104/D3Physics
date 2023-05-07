class Cheese extends Phaser.Scene {
    constructor() {
        super('cheese');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'orangetower.png');
    }

    create() {
        const rectangle = this.add.rectangle(400, 300, 200, 150, 0xFF8C00);
        rectangle.setDepth(1);
        rectangle.setStrokeStyle(4, 0x00FF00);
        rectangle.setOrigin(0.5);
        rectangle.setAngle(45);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0xFF8C00); // x, y, width, height
        rectangle2.setDepth(1);
        rectangle2.setStrokeStyle(4, 0x00FF00);

        const rectangle3 = this.add.rectangle(900, 500, 200, 150, 0xFF8C00);
        rectangle3.setDepth(1);
        rectangle3.setStrokeStyle(4, 0x00FF00);
        rectangle3.setOrigin(0.5);
        rectangle3.setAngle(-45);

        const rectangle4 = this.add.rectangle(1700, 500, 200, 150, 0xFF8C00);
        rectangle4.setDepth(1);
        rectangle4.setStrokeStyle(4, 0x00FF00);
        rectangle4.setOrigin(0.5);
        rectangle4.setAngle(-45);

        const rectangle5 = this.add.rectangle(1400, 300, 200, 150, 0xFF8C00);
        rectangle5.setDepth(1);
        rectangle5.setStrokeStyle(4, 0x00FF00);
        rectangle5.setOrigin(0.5);
        rectangle5.setAngle(45);

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