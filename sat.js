class Sat extends Phaser.Scene {
    constructor() {
        super('sat');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'redhouse.png');
    }

    create() {
        // this.player = new Player(this, 400, 300);
        // this.cursors = this.input.keyboard.createCursorKeys();
        // define variables
        this.ANG_VELOCITY = 180;    // degrees/second
        this.MAX_VELOCITY = 500;    // pixels/second
        this.DRAG = 0.99;

        //this.met = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, 'met').setScale(SCALE);
        this.met = this.physics.add.sprite(1000, 100, 'met').setScale(SCALE);
        this.met.setDepth(1);
        this.met.setMaxVelocity(this.MAX_VELOCITY);
        this.met.setDamping(true);
        this.met.setDrag(this.DRAG);

        if (!firstsatvisit) {
            // Define the duration and number of flashes
            const duration = 2000; // Duration in milliseconds
            const numFlashes = 4; // Number of times the sprite will flash
            // Define the tween animation
            this.tweens.add({
                targets: this.met,
                alpha: 0, // Make the sprite transparent
                ease: 'Linear',
                duration: duration / (2 * numFlashes), // Divide the duration evenly across the number of flashes
                repeat: numFlashes - 1, // Number of additional flashes (subtracting the initial state)
                yoyo: true, // Make the tween reverse back to its initial state
                onComplete: () => {
                    // Reset the sprite's alpha to 1 (fully opaque) after the tween is complete
                    this.met.alpha = 1;
                }
            });
        }
        else {
            firstsatvisit = false;
        }

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();


        const rectangle = this.add.rectangle(100, 500, 500, 100, 0xFF0000);
        rectangle.setDepth(1);
        rectangle.setStrokeStyle(4, 0x00FF00);

        const rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0xFF0000); // x, y, width, height
        rectangle2.setDepth(1);
        rectangle2.setStrokeStyle(4, 0x00FF00);

        const rectangle3 = this.add.rectangle(1700, 500, 1700, 100, 0xFF0000);
        rectangle3.setDepth(1);
        rectangle3.setStrokeStyle(4, 0x00FF00);

        const rectangle4 = this.add.rectangle(700, 900, 500, 100, 0xFF0000);
        rectangle4.setDepth(1);
        rectangle4.setStrokeStyle(4, 0x00FF00);

        this.house = this.physics.add.sprite(
            800,//x
            800,//y
            'house',//imagename
        )
        this.house.setScale(1, -1);
        this.house.setDepth(1)
        this.house.setScale(1) //resize

        this.house2 = this.physics.add.sprite(
            1400,//x
            900,//y
            'house',//imagename
        )
        this.house2.setScale(1, -1);
        this.house2.setDepth(1)
        this.house2.setScale(1) //resize

        this.house3 = this.physics.add.sprite(
            200,//x
            900,//y
            'house',//imagename
        )
        this.house3.setScale(1, -1);
        this.house3.setDepth(1)
        this.house3.setScale(1) //resize

        this.physics.add.collider(this.met, this.house, togameover, null, this);
        this.physics.add.collider(this.met, this.house2, togameover, null, this);
        this.physics.add.collider(this.met, this.house3, togameover, null, this);
        // Collision callback function
        function togameover() {
            // Trigger the scene change here
            // For example:
            if (lives == 0) {
                this.scene.start('gameover');
                lives = 3;
            }
            else {
                lives--;
                this.scene.start('sat');
            }
        }

        const space = this.add.image(200, 0, 'space');
        space.setOrigin(0);
        space.setDepth(0);
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

        this.physics.add.collider(this.met, this.house, togameover, null, this);
        this.physics.add.collider(this.met, this.house2, togameover, null, this);
        this.physics.add.collider(this.met, this.house3, togameover, null, this);
        // Collision callback function
        function togameover() {
            // Trigger the scene change here
            // For example:
            if (lives == 0) {
                this.scene.start('gameover');
                lives = 3;
            }
            else {
                lives--;
                this.scene.start('water9');
            }
        }

        this.met.setCollideWorldBounds(true);

        // Listen for the worldbounds event
        this.met.on('worldbounds', () => {
            // Trigger the scene change here
            this.scene.start('level_select');
        });
        // this.met.setCollideWorldBounds(true);
        // function update() {
        //   if (this.met.x < 0 || this.met.x > this.sys.canvas.width || this.met.y < 0 || this.met.y > this.sys.canvas.height) {
        //     // Trigger the scene change here
        //     this.scene.start('level_select');
        //   }
        // }
        //this.met.setCollideWorldBounds(true);
        // this.met.on('worldbounds', () => {
        //   // Trigger the scene change here
        //   // For example:
        //   this.scene.start('level_select');
        // });
        // wrap physics object(s) .wrap(gameObject, padding)
        //this.physics.world.wrap(this.met, this.met.width * SCALE / 2);
    }
}