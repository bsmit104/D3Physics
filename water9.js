class Water9 extends Phaser.Scene {
  constructor() {
    super('water9');
    this.inputKeys;
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image('space', 'space3.png');
    this.load.image('bluehouse', 'bluetower.png');
    this.load.image('met', 'meteor.png');
    this.load.image('laser', 'fireball.png');
    /////
    // this.load.image('met', 'meteor.png');
    // this.load.image('fireball', 'fireball.png');
    // this.load.image('yellowBall', 'yellowBall.png');
    // this.load.image('redBall', 'redBall.png');
    // this.load.atlas('particles', 'particles.png', 'particles.json');
    // this.load.scenePlugin('WeaponPlugin', 'lib/WeaponPlugin.js', null, 'weapons');
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

    if (!firstwatervisit) {
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
      firstwatervisit = false;
    }

    // set up Phaser-provided cursor key input
    cursors = this.input.keyboard.createCursorKeys();

    ///////
    // this.bullets = new Bullets(this);

    // this.input.on('pointermove', (pointer) => {

    //   this.met.x = pointer.x;

    // });

    // this.input.on('pointerdown', (pointer) => {

    //   this.bullets.fireBullet(this.met.x, this.met.y);

    // });
    // Create a group for the fireballs
    // const fireballsGroup = this.physics.add.group();

    // // Function to handle shooting fireballs
    // function shootFireball() {
    //   const fireball = fireballsGroup.create(met.x, met.y, 'fireball');
    //   fireball.setVelocity(0, -200);
    // }

    // // Listen for the spacebar key press event
    // const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // this.input.keyboard.on('keydown_SPACE', function () {
    //   shootFireball();
    // });
    /////////////
    this.rectangle = this.add.rectangle(300, 400, 500, 200, 0xFFFFF);
    this.rectangle.setDepth(1);

    this.rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0x1E90FF); // x, y, width, height
    this.rectangle2.setDepth(1);

    this.rectangle4 = this.add.rectangle(1100, 700, 500, 500, 0xFFFFF);
    this.rectangle4.setDepth(1);
    if (waterhouse) {
      this.bluehouse = this.physics.add.sprite(
        700,//x
        900,//y
        'bluehouse',//imagename
      )
      this.bluehouse.setScale(1, -1);
      this.bluehouse.setDepth(1)
      this.bluehouse.setScale(1) //resize
    }

    if (waterhouse2) {
      this.bluehouse2 = this.physics.add.sprite(
        1700,//x
        900,//y
        'bluehouse',//imagename
      )
      this.bluehouse2.setScale(1, -1);
      this.bluehouse2.setDepth(1)
      this.bluehouse2.setScale(1) //resize
    }

    if (waterhouse3) {
      this.bluehouse3 = this.physics.add.sprite(
        200,//x
        900,//y
        'bluehouse',//imagename
      )
      this.bluehouse3.setScale(1, -1);
      this.bluehouse3.setDepth(1)
      this.bluehouse3.setScale(1) //resize
    }


    const space = this.add.image(200, 0, 'space');
    //space.scale(.5);
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

    this.physics.add.collider(this.met, this.bluehouse, togameover, null, this);
    this.physics.add.collider(this.met, this.bluehouse2, togameover, null, this);
    this.physics.add.collider(this.met, this.bluehouse3, togameover, null, this);


    this.physics.add.collider(this.laserGroup, this.bluehouse, tohit, null, this);
    this.physics.add.collider(this.laserGroup, this.bluehouse2, tohit2, null, this);
    this.physics.add.collider(this.laserGroup, this.bluehouse3, tohit3, null, this);
    // this.physics.world.enable(this.rectangle);
    // this.physics.world.enable(this.rectangle2);
    // this.physics.world.enable(this.rectangle4);

    this.physics.add.existing(this.rectangle);
    this.physics.add.existing(this.rectangle2);
    this.physics.add.existing(this.rectangle4);
    this.physics.add.collider(this.met, this.rectangle, togameover, null, this);
    this.physics.add.collider(this.met, this.rectangle2, togameover, null, this);
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
      waterhouse = false;
      this.bluehouse.destroy();
      score += 100;
    }
    function tohit2() {
      // Trigger the scene change here
      // For example:
      waterhouse2 = false;
      this.bluehouse2.destroy();
      score += 100;
    }
    function tohit3() {
      // Trigger the scene change here
      // For example:
      waterhouse3 = false;
      this.bluehouse3.destroy();
      score += 100;
    }

    //this.met.setCollideWorldBounds(true);

    if (!this.physics.world.bounds.contains(this.met.x, this.met.y)) {
      // Scene change logic
      this.scene.start('level_select');
    }

    // Listen for the worldbounds event
    // this.met.on('worldbounds', () => {
    //   // Trigger the scene change here
    //   this.scene.start('level_select');
    // });
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
      // fireballcount--;
    });
  }


  //   // Horizontal movement
  //   if (this.cursors.left.isDown) {
  //     this.player.moveLeft();
  //   } else if (this.cursors.right.isDown) {
  //     this.player.moveRight();
  //   }

  //   // Vertical movement
  //   if (this.cursors.up.isDown) {
  //     this.player.moveUp();
  //   } else if (this.cursors.down.isDown) {
  //     this.player.moveDown();
  //   }
  // }

  // update(time, delta) {
  //     this.player.update();
  //     // wrap the player and asteroids 
  //     this.physics.world.wrap(this.player.sprite, 16);
  // }

}