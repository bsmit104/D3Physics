// import Player from "./Player.js";

class Water9 extends Phaser.Scene {
    constructor() {
        super('water9');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'bluetower.png');
        this.load.image('met', 'met.png');
        /////
        // this.load.image('met', 'meteor.png');
        // this.load.image('fireball', 'fireball.png');
        // this.load.image('yellowBall', 'yellowBall.png');
        // this.load.image('redBall', 'redBall.png');
        // this.load.atlas('particles', 'particles.png', 'particles.json');
        // this.load.scenePlugin('WeaponPlugin', 'lib/WeaponPlugin.js', null, 'weapons');
    }

    create() {
        this.player = new Player(this, 400, 300);
        this.cursors = this.input.keyboard.createCursorKeys();
        // // create controls (using phaserControlsPlugin)
        // this.controls.add({
        //     name: 'cursorCustom',
        //     active: true,
        //     controls: {
        //         up: 'UP',
        //         down: 'DOWN',
        //         left: 'LEFT',
        //         right: 'RIGHT',
        //         space: 'SPACE',
        //         autofire: 'F'
        //     }
        // });
        // this.controls.createWasdKeys();
        // // add player and asteroid groups to store sprites
        // this.playerGroup = this.physics.add.group();

        // // create player ship
        // this.player = new Player(this, 320, 240);

        // this.particles = this.add.particles('particles');
        // this.explosionEmitter = this.particles.createEmitter({
        //     frame: ['redBall', 'yellowBall'],
        //     speed: 150,
        //     scale: {
        //         start: 0.05,
        //         end: 0
        //     },
        //     alpha: {
        //         start: 1,
        //         end: 0
        //     },
        //     lifespan: 5000,
        //     on: false
        // });

        ///////
        const rectangle = this.add.rectangle(300, 400, 500, 200, 0xFFFFF);
        rectangle.setDepth(1);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0x1E90FF); // x, y, width, height
        rectangle2.setDepth(1);

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

    update() {
        // Horizontal movement
        if (this.cursors.left.isDown) {
          this.player.moveLeft();
        } else if (this.cursors.right.isDown) {
          this.player.moveRight();
        }
  
        // Vertical movement
        if (this.cursors.up.isDown) {
          this.player.moveUp();
        } else if (this.cursors.down.isDown) {
          this.player.moveDown();
        }
      }

    // update(time, delta) {
    //     this.player.update();
    //     // wrap the player and asteroids 
    //     this.physics.world.wrap(this.player.sprite, 16);
    // }

}