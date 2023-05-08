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
let lives = 3;
let firstwatervisit = true;
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

