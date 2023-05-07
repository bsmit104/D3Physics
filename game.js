//import Level_select from './level_select.js';
import Start from './start.js';
import Intro from './intro.js';
import Title from './title.js';
import Level_select from './level_select.js';
//import Player from './Player.js';

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Start, Intro, Title, Level_select],
    //, Water9, Cheese, Bluecheese, Sat, Earth],
    title: "Sentient Meteor",
});

// export default class Player extends Phaser.Physics.Arcade.Sprite {
//     constructor(scene, x, y, textureKey) {
//       super(scene, x, y, textureKey);
      
//       scene.add.existing(this);
//       scene.physics.add.existing(this);
      
//       this.acceleration = 100;
//       this.maxVelocity = 200;
//       this.rotationSpeed = 0.05;
//       this.rotationDirection = 0;
      
//       scene.input.keyboard.on('keydown_RIGHT', () => {
//         this.rotationDirection = 1; // Set rotation direction to right
//       });
      
//       scene.input.keyboard.on('keydown_LEFT', () => {
//         this.rotationDirection = -1; // Set rotation direction to left
//       });
      
//       scene.input.keyboard.on('keyup_RIGHT, keyup_LEFT', () => {
//         this.rotationDirection = 0; // Stop rotation when right or left key is released
//       });
      
//       scene.input.keyboard.on('keydown_UP', () => {
//         this.body.acceleration.setToPolar(this.rotation, this.acceleration); // Set acceleration in the forward direction
//       });
      
//       scene.input.keyboard.on('keyup_UP', () => {
//         this.body.acceleration.set(0); // Stop acceleration when up key is released
//       });
//     }
    
//     preUpdate() {
//       super.preUpdate();
      
//       // Limit velocity to the maximum value
//       if (this.body.velocity.length() > this.maxVelocity) {
//         this.body.velocity.setLength(this.maxVelocity);
//       }
      
//       // Update rotation based on direction and speed
//       this.rotation += this.rotationSpeed * this.rotationDirection;
//     }
//   }





// class Start extends Phaser.Scene {
//     constructor() {
//         super('start');
//     }
//     create() {
//     this.cameras.main.setBackgroundColor('#000000');

//     this.textObject0 = this.add.text(
//             600, //x
//             350,//y
//             "tap to progress", //text
//             {
//                 font: "100px Impact",
//                 color: "#FFFFFF",
//                 align: "center"
//             } //style
//         );
//     //textObject0.setAlpha(1);
//     this.tweens.add({
//         targets: this.textObject0,
//         alpha:0,
//         duration: 2000,
//         repeat: -1,
//     });
//     //textObject0.setAlpha(1);
//     this.tweens.add({
//         targets: this.textObject8,
//         alpha:0,
//         duration: 2000,
//         repeat: -1,
//     });

//     this.input.on('pointerdown', () => this.scene.start('intro'));
//     }
// }

// class Intro extends Phaser.Scene {
//     constructor() {
//         super('intro');
//     }
//     preload(){
//         this.load.path = "./assets/";
//         this.load.audio('logosound', 'logosound.wav');
//         this.load.image('space', 'space3.png');
//         this.load.spritesheet('logonah', 'logonah.png', {
//             frameWidth: 250,
//             frameHeight: 250
//         });
//     }
//     create() {
//         //this.cameras.main.setBackgroundColor('#ffffff');
//         const backgroundMusic = this.sound.add('logosound', { loop: false });
//         backgroundMusic.play();
//     /////////////////animated///////////////////
//         this.imageObject2 = this.add.sprite(
//             900,//x
//             500,//y
//             'logonah',//imagename
//         );
//         this.imageObject2.setDepth(1)
//         this.imageObject2.setScale(5); //resize
//         this.anims.create({
//             key: 'logonah',
//             frames: this.anims.generateFrameNumbers('logonah', {
//                 start: 0,
//                 end: 16
//             }),
//             frameRate: 10,
//             repeat: 0
//         });
//         this.imageObject2.anims.play('logonah', true);
//         this.time.delayedCall(2000, () => {
//             this.tweens.add({
//                 targets: this.imageObject2,
//                 alpha:0,
//                 duration: 2000,
//                 repeat: 0,
//                 onComplete: () => {
//                     this.textObject8 = this.add.text(
//                         850, //x
//                         420,//y
//                         "tap", //text
//                         {
//                             font: "60px Impact",
//                             color: "#00000",
//                             align: "center"
//                         } //style
//                     );
//                     this.tweens.add({
//                         targets: this.textObject8,
//                         alpha:0,
//                         duration: 2000,
//                         repeat: -1,
//                     });
//                 }
//             });
//         }, null, this);
//         this.input.on('pointerdown', () => this.scene.start('title'));

//         const space = this.add.image(200, 0, 'space');
//         //space.scale(.5);
//         space.setOrigin(0);
//         space.setDepth(0);

//         this.imageObject2.background = this.back;
//     }
// }

// class Title extends Phaser.Scene {
//     constructor() {
//         super('title');
//     }
//     preload(){
//         this.load.path = "./assets/";
//         this.load.image('space', 'space3.png');
//         this.load.spritesheet('met', 'metss.png', {
//             frameWidth: 120,
//             frameHeight: 120
//         });
//     }
//     create() {
//         this.imageObject = this.add.sprite(
//             1500,//x
//             700,//y
//             'met',//imagename
//         );
//         this.imageObject.setDepth(1);
//         this.imageObject.setScale(5); //resize
//         this.anims.create({
//             key: 'met',
//             frames: this.anims.generateFrameNumbers('met', {
//                 start: 0,
//                 end: 8
//             }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.imageObject.anims.play('met', true);

//         //this.image.add()
//         this.titleob = this.add.text(
//             600,//x
//             200,//y
//             'Sentient Meteor',//imagename
//             {
//                 font: "100px Impact",
//                 color: "#FF0",
//                 align: "center"
//             }
//             )
//             //this.title.setDepth(1)
//             this.titleob.setDepth(1);
//             this.titleob.setScale(1) //resize
//             const instructions = this.add.text(200, 500, "HOW TO PLAY:\nSmash spaceships with your bod\nPress z to shoot fireballs at alien houses\nDon’t get hit by lasers!", { fontSize: '40px', fill: '#ff0' });
//             instructions.setDepth(1);
//             //this.add.text(50,50, "Adventure awaits!").setFontSize(50);
//         //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
//         const playText = this.add.text(200, 800, 'PLAY', { fontSize: '100px', fill: '#fff' });
//         playText.setDepth(1);
//         playText.setInteractive();
//         playText.on('pointerover', () => {
//             playText.setStyle({ fill: '#ff0' });
//         });
//         playText.on('pointerout', () => {
//             playText.setStyle({ fill: '#fff' });
//         });
//         playText.on('pointerdown', () => {
//             this.scene.start('level_select');
//         });

//         const space = this.add.image(200, 0, 'space');
//         //space.scale(.5);
//         space.setOrigin(0);
//         space.setDepth(0);

//         this.imageObject.background = this.back;
//     }
// }


// class Level_select extends Phaser.Scene {
//     constructor() {
//         super('level_select');
//     }
//     preload(){
//         this.load.path = "./assets/";
//         this.load.image('space', 'space3.png');
//         this.load.image('blue', 'bluecheese.png');
//         this.load.image('cheese', 'cheese.png');
//         this.load.image('sat', 'shatturn.png');
//         this.load.image('earth', 'earth.png');
//         this.load.image('water', 'water9.png');
//         //this.load.image('met', 'meteor.png');
//     }

//     create() {
//         // this.player = new Player(this, 400, 300, 'met');

//         this.blue = this.add.image(
//             400,//x
//             500,//y
//             'blue',//imagename
//             )
//             this.blue.setScale(1, -1);
//             this.blue.setDepth(1)
//             this.blue.setScale(.35) //resize
        
//         this.cheese = this.add.image(
//             200,//x
//             300,//y
//             'cheese',//imagename
//             )
//             this.cheese.setScale(1, -1);
//             this.cheese.setDepth(1)
//             this.cheese.setScale(.3) //resize

//         this.sat = this.add.image(
//             900,//x
//             750,//y
//             'sat',//imagename
//             )
//             this.sat.setScale(1, -1);
//             this.sat.setDepth(1)
//             this.sat.setScale(2) //resize

//         this.earth = this.add.image(
//             1500,//x
//             200,//y
//             'earth',//imagename
//             )
//             this.earth.setScale(1, -1);
//             this.earth.setDepth(1)
//             this.earth.setScale(.3) //resize

//         this.water = this.add.image(
//             1500,//x
//             900,//y
//             'water',//imagename
//             )
//             this.water.setScale(1, -1);
//             this.water.setDepth(1)
//             this.water.setScale(.3) //resize

//         const space = this.add.image(200, 0, 'space');
//         //space.scale(.5);
//         space.setOrigin(0);
//         space.setDepth(0);

//         this.blue.background = this.back;
//         this.sat.background = this.back;
//         this.earth.background = this.back;
//         this.water.background = this.back;
//         this.cheese.background = this.back;
//     }
// }

// const game = new Phaser.Game({
//     scale: {
//         mode: Phaser.Scale.FIT,
//         autoCenter: Phaser.Scale.CENTER_BOTH,
//         width: 1920,
//         height: 1080
//     },
//     scene: [Start, Intro, Title, Level_select],
//     //, Water9, Cheese, Bluecheese, Sat, Earth],
//     title: "Sentient Meteor",
// });