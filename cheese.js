class Cheese extends Phaser.Scene {
  constructor() {
    super('cheese');
    this.inputKeys;
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image('space', 'space3.png');
    this.load.image('phouse', 'purplehouse.png');
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

    ////////////////stats////////////////////////
    const text = this.add.text(1600, 100, 'LIVES: ' + lives, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text.setDepth(1);
    const text2 = this.add.text(1600, 150, 'SCORE: ' + score, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text2.setDepth(1);
    const text3 = this.add.text(1600, 50, 'FIREBALLS: ' + fireballcount, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    text3.setDepth(1);

    // define variables
    this.ANG_VELOCITY = 180;    // degrees/second
    this.MAX_VELOCITY = 500;    // pixels/second
    this.DRAG = 0.99;

    ////////////met spawn////////////////////
    this.met = this.physics.add.sprite(1000, 100, 'met').setScale(SCALE);
    this.met.setDepth(1);
    this.met.setMaxVelocity(this.MAX_VELOCITY);
    this.met.setDamping(true);
    this.met.setDrag(this.DRAG);

    //////////////////respawn/////////////////////
    if (!firstcheesevisit) {
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
      firstcheesevisit = false;
    }

    // set up Phaser-provided cursor key input
    cursors = this.input.keyboard.createCursorKeys();

    /////////////////rectangle spawn////////////////////
    this.rectangleGroup4 = this.physics.add.group([
    this.add.rectangle(400, 300, 200, 150, 0xFF8C00)
    .setDepth(1)
    .setStrokeStyle(4, 0x00FF00)
    .setOrigin(0.5),
    //this.rectangle.setAngle(45);

    this.add.rectangle(900, 1300, 2100, 700, 0xFF8C00) // x, y, width, height
    .setDepth(1)
    .setStrokeStyle(4, 0x00FF00),

    this.add.rectangle(900, 500, 200, 150, 0xFF8C00)
    .setDepth(1)
    .setStrokeStyle(4, 0x00FF00)
    .setOrigin(0.5),
    //this.rectangle3.setAngle(-45);

    this.add.rectangle(1700, 500, 200, 150, 0xFF8C00)
    .setDepth(1)
    .setStrokeStyle(4, 0x00FF00)
    .setOrigin(0.5),
    //this.rectangle4.setAngle(-45);

    this.add.rectangle(1400, 300, 200, 150, 0xFF8C00)
    .setDepth(1)
    .setStrokeStyle(4, 0x00FF00)
    .setOrigin(0.5)
  ]);

    // this.rectangle = this.add.rectangle(400, 300, 200, 150, 0xFF8C00);
    // this.rectangle.setDepth(1);
    // this.rectangle.setStrokeStyle(4, 0x00FF00);
    // this.rectangle.setOrigin(0.5);
    // //this.rectangle.setAngle(45);

    // this.rectangle2 = this.add.rectangle(900, 1300, 2100, 700, 0xFF8C00); // x, y, width, height
    // this.rectangle2.setDepth(1);
    // this.rectangle2.setStrokeStyle(4, 0x00FF00);

    // this.rectangle3 = this.add.rectangle(900, 500, 200, 150, 0xFF8C00);
    // this.rectangle3.setDepth(1);
    // this.rectangle3.setStrokeStyle(4, 0x00FF00);
    // this.rectangle3.setOrigin(0.5);
    // //this.rectangle3.setAngle(-45);

    // this.rectangle4 = this.add.rectangle(1700, 500, 200, 150, 0xFF8C00);
    // this.rectangle4.setDepth(1);
    // this.rectangle4.setStrokeStyle(4, 0x00FF00);
    // this.rectangle4.setOrigin(0.5);
    // //this.rectangle4.setAngle(-45);

    // this.rectangle5 = this.add.rectangle(1400, 300, 200, 150, 0xFF8C00);
    // this.rectangle5.setDepth(1);
    // this.rectangle5.setStrokeStyle(4, 0x00FF00);
    // this.rectangle5.setOrigin(0.5);
    //this.rectangle5.setAngle(45);

    //////////////////////house spawn/////////////////////
    if (cheesehouse) {
      this.phouse = this.physics.add.sprite(
        900,//x
        900,//y
        'phouse',//imagename
      )
      this.phouse.setScale(1, -1);
      this.phouse.setDepth(1)
      this.phouse.setScale(1) //resize
    }

    if (cheesehouse2) {
      this.phouse2 = this.physics.add.sprite(
        1700,//x
        900,//y
        'phouse',//imagename
      )
      this.phouse2.setScale(1, -1);
      this.phouse2.setDepth(1)
      this.phouse2.setScale(1) //resize
    }

    if (cheesehouse3) {
      this.phouse3 = this.physics.add.sprite(
        200,//x
        900,//y
        'phouse',//imagename
      )
      this.phouse3.setScale(1, -1);
      this.phouse3.setDepth(1)
      this.phouse3.setScale(1) //resize
    }

    const space = this.add.image(200, 0, 'space');
    space.setOrigin(0);
    space.setDepth(0);
  }

  update() {
    // const text = this.add.text(1700, 100, 'lives: ' + lives, { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' });
    // text.setDepth(1);
    // physics methods adapted from the Phaser 3 Asteroids Example 👍
    // handle input

    ///////////////////movement///////////////////////
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

    ////////////////collisions/////////////////////
    this.physics.add.collider(this.met, this.phouse, togameover, null, this);
    this.physics.add.collider(this.met, this.phouse2, togameover, null, this);
    this.physics.add.collider(this.met, this.phouse3, togameover, null, this);

    this.physics.add.overlap(this.laserGroup, this.phouse, tohit, null, this);
    this.physics.add.overlap(this.laserGroup, this.phouse2, tohit2, null, this);
    this.physics.add.overlap(this.laserGroup, this.phouse3, tohit3, null, this);

    // this.physics.add.existing(this.rectangle);
    // this.physics.add.existing(this.rectangle2);
    // this.physics.add.existing(this.rectangle3);
    // this.physics.add.existing(this.rectangle4);
    // this.physics.add.existing(this.rectangle5);
    // this.physics.add.collider(this.met, this.rectangle, togameover, null, this);
    // this.physics.add.collider(this.met, this.rectangle2, togameover, null, this);
    // this.physics.add.collider(this.met, this.rectangle3, togameover, null, this);
    // this.physics.add.collider(this.met, this.rectangle4, togameover, null, this);
    // this.physics.add.collider(this.met, this.rectangle5, togameover, null, this);
    this.physics.add.collider(this.met, this.rectangleGroup4, togameover, null, this);

    // this.physics.add.overlap(this.laserGroup, this.rectangle, toexpl, null, this);
    // this.physics.add.overlap(this.laserGroup, this.rectangle2, toexpl, null, this);
    // this.physics.add.overlap(this.laserGroup, this.rectangle3, toexpl, null, this);
    // this.physics.add.overlap(this.laserGroup, this.rectangle4, toexpl, null, this);
    // this.physics.add.overlap(this.laserGroup, this.rectangle5, toexpl, null, this);
    this.physics.add.overlap(this.laserGroup, this.rectangleGroup4, toexpl, null, this);

    function toexpl(a, b) {
      //debugger;
      boom = true;
      a.hit(true);
    }

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
        this.scene.start('cheese');
      }
    }

    ///////////////destroy houses////////////////
    function tohit(a, b) {
      if (b.setActive == true) {
      cheesehouse = false;
      this.phouse.destroy();
      score += 100;
      }
    }
    function tohit2(a, b) {
      if (b.setActive == true) {
      cheesehouse2 = false;
      this.phouse2.destroy();
      score += 100;
      }
    }
    function tohit3(a, b) {
      if (b.setActive == true) {
      cheesehouse3 = false;
      this.phouse3.destroy();
      score += 100;
      }
    }

    ////////////////////to menu/////////////////////
    if (!this.physics.world.bounds.contains(this.met.x, this.met.y)) {
      // Scene change logic
      this.scene.start('level_select');
    }

    //////////////shooot///////////////////
    this.inputKeys.forEach(key => {
      // If key was just pressed down, shoot the laser. We use JustDown to make sure this only fires once.
      if (Phaser.Input.Keyboard.JustDown(key)) {
        this.shootLaser();
      }
    });
  }
}