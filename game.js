//import Level_select from './level_select.js';
// import Start from './start.js';
// import Intro from './intro.js';
// import Title from './title.js';
// import Level_select from './level_select.js';
//import Player from './Player.js';

// tame the javashrek
'use strict';

// global variables
let cursors;
let currentScene = 0;
const SCALE = 0.5;
const tileSize = 35;
///////////////
/////////stats//////////////
let lives = 3;
let score = 0;
let fireballcount = 30;
/////////house spawn///////////////
let waterhouse = true;
let waterhouse2 = true;
let waterhouse3 = true;
let sathouse = true;
let sathouse2 = true;
let sathouse3 = true;
let cheesehouse = true;
let cheesehouse2 = true;
let cheesehouse3 = true;
let bluehouse = true;
let bluehouse2 = true;
let bluehouse3 = true;
let earthhouse = true;
let earthhouse2 = true;
let earthhouse3 = true;

/////////respawn flash//////////////
let firstwatervisit = true;
let firstsatvisit = true;
let firstcheesevisit = true;
let firstbluevisit = true;
let firstearthvisit = true;
//this.lives.globalVar = 3;

// main game object
let config = {
    type: Phaser.WEBGL,
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            },
            bounds: {
                x: 0,
                y: 0,
                width: 1920,
                height: 1080
              }
        }
    },
    scene: [Start, Intro, Title, Level_select, Water9, Sat, Cheese, Bluecheese, Earth, Gameover]
};

let game = new Phaser.Game(config);

// const game = new Phaser.Game({
//     scale: {
//         mode: Phaser.Scale.FIT,
//         autoCenter: Phaser.Scale.CENTER_BOTH,
//         width: 1920,
//         height: 1080
//     },
//     scene: [Start, Intro, Title, Level_select, Water9, Sat, Cheese, Bluecheese, Earth, Gameover],
//     //, Water9, Cheese, Bluecheese, Sat, Earth],
//     title: "Sentient Meteor",
// });

