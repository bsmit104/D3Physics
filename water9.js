class Water9 extends Phaser.Scene {
    constructor() {
        super('water9');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'bluetower.png');
    }

    create() {
        // const rectangle = this.add.rectangle(400, 300, 200, 150, 0xFF0000);
        // // Additional rectangle properties and behaviors
        // rectangle.setDepth(1);
        // rectangle.setStrokeStyle(4, 0x00FF00);
        // rectangle.setOrigin(0.5);
        // rectangle.setAngle(45);

        const rectangle = this.add.rectangle(300, 400, 500, 200, 0xFFFFF);
        // Additional rectangle properties and behaviors
        rectangle.setDepth(1);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0x1E90FF); // x, y, width, height
        // Additional rectangle properties and behaviors
        rectangle2.setDepth(1);
        // rectangle2.setOrigin(0.5);

        // const rectangle3 = this.add.rectangle(1700, 500, 1700, 100, 0x1E90FF);
        // rectangle3.setDepth(1);

        const rectangle4 = this.add.rectangle(1100, 700, 500, 500, 0xFFFFF);
        rectangle4.setDepth(1);

        this.house = this.add.image(
            700,//x
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
        //space.scale(.5);
        space.setOrigin(0);
        space.setDepth(0);
    }
}