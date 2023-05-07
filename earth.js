class Earth extends Phaser.Scene {
    constructor() {
        super('earth');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'bluehouse.png');
    }

    create() {
        const rectangle = this.add.rectangle(950, 500, 1200, 50, 0xFFFFFF);
        rectangle.setDepth(1);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0x8A9A5B); // x, y, width, height
        rectangle2.setDepth(1);

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
        space.setOrigin(0);
        space.setDepth(0);
    }
}