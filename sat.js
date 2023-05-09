class LaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
 
		// Initialize the group
		this.createMultiple({
			classType: Laser, // This is the class we create just below
			frameQuantity: 20, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'laser'
		})
	}

  fireLaser(x, y) {
		// Get the first available sprite in the group
		const laser = this.getFirstDead(false);
		if (laser) {
			laser.fire(x, y);
		}
	}
 
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
	}
  preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}
}

class Sat extends Phaser.Scene {
    constructor() {
        super('sat');
        this.inputKeys;
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('space', 'space3.png');
        this.load.image('house', 'redhouse.png');
        this.load.image('laser', 'fireball.png');
    }

    shootLaser() {
        this.laserGroup.fireLaser(this.met.x, this.met.y - 20);
      }
    
      addEvents() {
          // this.input.on('pointermove', (pointer) => {
          //   this.met.x = pointer.x;
          // });
    
          this.input.on('pointerdown', pointer => {
            this.shootLaser();
          });
    
            this.inputKeys = [
                this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
                this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),
            ];
        }

    create() {
        this.addEvents();
    
    this.laserGroup = new LaserGroup(this);
    this.laserGroup.setDepth(1);
    const text = this.add.text(1600, 100, 'LIVES: ' + lives, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text.setDepth(1);
    const text2 = this.add.text(1600, 150, 'SCORE: ' + score, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text2.setDepth(1);
    const text3 = this.add.text(1600, 50, 'FIREBALLS: ' + fireballcount, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text3.setDepth(1);
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


        this.rectangle = this.add.rectangle(100, 500, 500, 100, 0xFF0000);
        this.rectangle.setDepth(1);
        this.rectangle.setStrokeStyle(4, 0x00FF00);

        this.rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0xFF0000); // x, y, width, height
        this.rectangle2.setDepth(1);
        this.rectangle2.setStrokeStyle(4, 0x00FF00);

        this.rectangle3 = this.add.rectangle(1700, 500, 1700, 100, 0xFF0000);
        this.rectangle3.setDepth(1);
        this.rectangle3.setStrokeStyle(4, 0x00FF00);

        this.rectangle4 = this.add.rectangle(700, 900, 500, 100, 0xFF0000);
        this.rectangle4.setDepth(1);
        this.rectangle4.setStrokeStyle(4, 0x00FF00);

        if (sathouse) {
        this.house = this.physics.add.sprite(
            800,//x
            800,//y
            'house',//imagename
        )
        this.house.setScale(1, -1);
        this.house.setDepth(1)
        this.house.setScale(1) //resize
        }

        if (sathouse2) {
        this.house2 = this.physics.add.sprite(
            1400,//x
            900,//y
            'house',//imagename
        )
        this.house2.setScale(1, -1);
        this.house2.setDepth(1)
        this.house2.setScale(1) //resize
        }

        if (sathouse3) {
        this.house3 = this.physics.add.sprite(
            200,//x
            900,//y
            'house',//imagename
        )
        this.house3.setScale(1, -1);
        this.house3.setDepth(1)
        this.house3.setScale(1) //resize
        }

        this.physics.add.collider(this.met, this.house, togameover, null, this);
        this.physics.add.collider(this.met, this.house2, togameover, null, this);
        this.physics.add.collider(this.met, this.house3, togameover, null, this);

        this.physics.add.existing(this.rectangle);
        this.physics.add.existing(this.rectangle2);
        this.physics.add.existing(this.rectangle3);
        this.physics.add.existing(this.rectangle4);
        this.physics.add.collider(this.met, this.rectangle, togameover, null, this);
        this.physics.add.collider(this.met, this.rectangle2, togameover, null, this);
        this.physics.add.collider(this.met, this.rectangle3, togameover, null, this);
        this.physics.add.collider(this.met, this.rectangle4, togameover, null, this);
        // Collision callback function
        function togameover() {
            // Trigger the scene change here
            // For example:
            if (lives == 1) {
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

        this.physics.add.collider(this.laserGroup, this.house, tohit, null, this);
    this.physics.add.collider(this.laserGroup, this.house2, tohit2, null, this);
    this.physics.add.collider(this.laserGroup, this.house3, tohit3, null, this);

        this.physics.add.collider(this.met, this.house, togameover, null, this);
        this.physics.add.collider(this.met, this.house2, togameover, null, this);
        this.physics.add.collider(this.met, this.house3, togameover, null, this);

        this.physics.add.existing(this.rectangle);
    this.physics.add.existing(this.rectangle2);
    this.physics.add.existing(this.rectangle4);
    this.physics.add.collider(this.met, this.rectangle, togameover, null, this);
    this.physics.add.collider(this.met, this.rectangle2, togameover, null, this);
    this.physics.add.collider(this.met, this.rectangle3, togameover, null, this);
    this.physics.add.collider(this.met, this.rectangle4, togameover, null, this);
        // Collision callback function
        function togameover() {
            // Trigger the scene change here
            // For example:
            if (lives == 1) {
                this.scene.start('gameover');
                lives = 3;
            }
            else {
                lives--;
                this.scene.start('water9');
            }
        }

        function tohit() {
            // Trigger the scene change here
            // For example:
            sathouse = false;
            this.house.destroy();
            score += 100;
          }
          function tohit2() {
            // Trigger the scene change here
            // For example:
            sathouse2 = false;
            this.house2.destroy();
            score += 100;
          }
          function tohit3() {
            // Trigger the scene change here
            // For example:
            sathouse3 = false;
            this.house3.destroy();
            score += 100;
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
        this.inputKeys.forEach(key => {
			// If key was just pressed down, shoot the laser. We use JustDown to make sure this only fires once.
			if (Phaser.Input.Keyboard.JustDown(key)) {
				this.shootLaser();
			}
		});
  }
}