//import Level_select from './level_select.js';
// import Start from './start.js';
// import Intro from './intro.js';
// import Title from './title.js';
// import Level_select from './level_select.js';
//import Player from './Player.js';

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Start, Intro, Title, Level_select, Water9, Sat, Cheese],
    //, Water9, Cheese, Bluecheese, Sat, Earth],
    title: "Sentient Meteor",
});

