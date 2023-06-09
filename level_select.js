// import Player from './Player.js';
class LaserGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        // Call the super constructor, passing in a world and a scene
        super(scene.physics.world, scene);
        // fireballcount--;
        // Initialize the group
        this.createMultiple({
            classType: Laser, // This is the class we create just below
            frameQuantity: 30, // Create 30 instances in the pool
            active: false,
            visible: false,
            key: 'laser'
        })
        //checkCollision.none = true;
        // for (let i of this.getChildren()) i.body.enable = false;
    }

    fireLaser(x, y) {
        // fireballcount--;
        // Get the first available sprite in the group
        const laser = this.getFirstDead(false);
        if (laser) {
            laser.fire(x, y);
            //checkCollision.none = false;
            // this.physics.add.collider(laser, this.rectangle, handleCollision, null, this);
        }
        // this.body.enable = true;
    }
/////////////fix me//////////////////
    laserhit(x) {
        const laser = this.getFirstDead(false);
        if (laser) {
            laser.hit(x);
        }
    }
    ////////////////////////////////////

}

class Laser extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'laser');
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(900);
        boom = true;
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.y <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
    ///////////////fix me//////////////////
    hit(x) {
        if (x) {
            this.setActive(false);
            this.setVisible(false);
            //this.destroy();
        }
    }

    vis(x) {
        if (this.setActive(false)) {
            return true;
        }
        else {
            return false;
        }
    }
    /////////////////////////////////////
}
class Level_select extends Phaser.Scene {
    constructor() {
        super('level_select');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('blue', 'bluecheese.png');
        this.load.image('cheese', 'cheese.png');
        this.load.image('sat', 'shatturn.png');
        this.load.image('earth', 'earth.png');
        this.load.image('water', 'water9.png');
        this.load.image('met', 'meteor.png');
        this.load.image('ball', 'fireball.png');
    }

    create() {
        firstwatervisit = true;
        firstsatvisit = true;
        firstcheesevisit = true;
        firstbluevisit = true;
        firstearthvisit = true;
        const text = this.add.text(1600, 100, 'LIVES: ' + lives, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
        text.setDepth(1);
        const text2 = this.add.text(1600, 150, 'SCORE: ' + score, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
        text2.setDepth(1);
        const text3 = this.add.text(1600, 50, 'FIREBALLS: ' + fireballcount, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
        text3.setDepth(1);
        // const player = createPlayer(this, 400, 300, 'playerSpriteKey');
        // this.add.existing(player);

        this.ANG_VELOCITY = 180;    // degrees/second
        this.MAX_VELOCITY = 500;    // pixels/second
        this.DRAG = 0.99;

        this.met = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, 'met').setScale(SCALE);
        this.met.setDepth(1);
        this.met.setMaxVelocity(this.MAX_VELOCITY);
        this.met.setDamping(true);
        this.met.setDrag(this.DRAG);

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();
        /////////////////////////////////
        // this.createMultiple({
        //     frameQuantity: 5,
        //     key: 'ball',
        //     active: false,
        //     visible: false,
        //     classType: ball
        // });

        // fire (x, y) {
        //     this.body.reset(x, y);
        //     this.setActive(true);
        //     this.setVisible(true);
        //     this.setVelocityY(-300);
        // }

        // fireBullet(x, y){
        //     const ball = this.getFirstDead(false);
        //     if (ball) {
        //         ball.fire(x, y);
        //     }
        // }

        // this.ball = new Bullets(this);
        // this.input.on('pointermove', (pointer) =>
        // {
        //     this.met.x = pointer.x;
        // });

        // this.input.on('pointerdown', (pointer) =>
        // {
        //     this.bullets.fireBullet(this.met.x, this.met.y);
        // });
        ///////////////////////

        this.blue = this.physics.add.sprite(
            400,//x
            500,//y
            'blue',//imagename
        )
        this.blue.setScale(1, -1);
        this.blue.setDepth(1)
        this.blue.setScale(.35) //resize

        this.cheese = this.physics.add.sprite(
            200,//x
            300,//y
            'cheese',//imagename
        )
        this.cheese.setScale(1, -1);
        this.cheese.setDepth(1)
        this.cheese.setScale(.3) //resize

        this.sat = this.physics.add.sprite(
            900,//x
            750,//y
            'sat',//imagename
        )
        this.sat.setScale(1, -1);
        this.sat.setDepth(1)
        this.sat.setScale(2) //resize

        this.earth = this.physics.add.sprite(
            1500,//x
            200,//y
            'earth',//imagename
        )
        this.earth.setScale(1, -1);
        this.earth.setDepth(1)
        this.earth.setScale(.3) //resize

        this.water = this.physics.add.sprite(
            1500,//x
            900,//y
            'water',//imagename
        )
        this.water.setScale(1, -1);
        this.water.setDepth(1)
        this.water.setScale(.3) //resize

        // Enable physics for the sprites
        //this.met.setCollideWorldBounds(true);
        //this.water.setCollideWorldBounds(true);
        // this.sat.setCollideWorldBounds(true);
        // this.earth.setCollideWorldBounds(true);
        // this.cheese.setCollideWorldBounds(true);
        // this.bluecheese.setCollideWorldBounds(true);

        // this.input.on('pointerdown', () => this.scene.start('water9'));
        this.physics.add.collider(this.met, this.water, towater, null, this);
        this.physics.add.collider(this.met, this.earth, toearth, null, this);
        this.physics.add.collider(this.met, this.cheese, tocheese, null, this);
        this.physics.add.collider(this.met, this.sat, tosat, null, this);
        this.physics.add.collider(this.met, this.blue, toblue, null, this);
        // Collision callback function
        function towater() {
            // Trigger the scene change here
            // For example:
            this.scene.start('water9');
        }
        function toearth() {
            // Trigger the scene change here
            // For example:
            this.scene.start('earth');
        }
        function tocheese() {
            // Trigger the scene change here
            // For example:
            this.scene.start('cheese');
        }
        function toblue() {
            // Trigger the scene change here
            // For example:
            this.scene.start('bluecheese');
        }
        function tosat() {
            // Trigger the scene change here
            // For example:
            this.scene.start('sat');
        }

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

    update() {
        // physics methods adapted from the Phaser 3 Asteroids Example 👍
        // handle input
        if (cursors.up.isDown) {
            this.physics.velocityFromRotation(this.met.rotation - Math.PI / 2 * 3, 200, this.met.body.acceleration);
            // this.upKey.tint = 0xFACADE;     // tint keyboard key
        } else {
            this.met.setAcceleration(0);
            // this.upKey.tint = 0xFFFFFF;     // un-tint key
        }

        if (cursors.left.isDown) {
            this.met.setAngularVelocity(-this.ANG_VELOCITY);
            // this.leftKey.tint = 0xFACADE;   // tint keyboard key
        } else if (cursors.right.isDown) {
            this.met.setAngularVelocity(this.ANG_VELOCITY);
            // this.rightKey.tint = 0xFACADE;   // tint keyboard key
        } else {
            this.met.setAngularVelocity(0);
            // this.leftKey.tint = 0xFFFFFF;   // un-tint keys
            // this.rightKey.tint = 0xFFFFFF;
        }

        // wrap physics object(s) .wrap(gameObject, padding)
        this.physics.world.wrap(this.met, this.met.width * SCALE / 2);
    }
}