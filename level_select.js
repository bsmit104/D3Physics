class Level_select extends Phaser.Scene {
    constructor() {
        super('level_select');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('blue', 'bluecheese.png');
        this.load.image('cheese', 'cheese.png');
        this.load.image('sat', 'shatturn.png');
        this.load.image('earth', 'earth.png');
        this.load.image('water', 'water9.png');
    }

    create() {
        this.blue = this.add.image(
            400,//x
            500,//y
            'blue',//imagename
            )
            this.blue.setScale(1, -1);
            this.blue.setDepth(1)
            this.blue.setScale(.35) //resize
        
        this.cheese = this.add.image(
            200,//x
            300,//y
            'cheese',//imagename
            )
            this.cheese.setScale(1, -1);
            this.cheese.setDepth(1)
            this.cheese.setScale(.3) //resize

        this.sat = this.add.image(
            900,//x
            750,//y
            'sat',//imagename
            )
            this.sat.setScale(1, -1);
            this.sat.setDepth(1)
            this.sat.setScale(2) //resize

        this.earth = this.add.image(
            1500,//x
            200,//y
            'earth',//imagename
            )
            this.earth.setScale(1, -1);
            this.earth.setDepth(1)
            this.earth.setScale(.3) //resize

        this.water = this.add.image(
            1500,//x
            900,//y
            'water',//imagename
            )
            this.water.setScale(1, -1);
            this.water.setDepth(1)
            this.water.setScale(.3) //resize

        const space = this.add.image(200, 0, 'space');
        //space.scale(.5);
        space.setOrigin(0);
        space.setDepth(0);

        this.blue.background = this.back;
        this.sat.background = this.back;
        this.earth.background = this.back;
        this.water.background = this.back;
        this.cheese.background = this.back;
    }
}