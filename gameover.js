
class Gameover extends Phaser.Scene {
    constructor() {
        super('gameover');
    }
    create() {
    this.cameras.main.setBackgroundColor('#FF0000');

    this.textObject0 = this.add.text(
            600, //x
            350,//y
            "GAME OVER\ntap to play again", //text
            {
                font: "100px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject0,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject8,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });

    this.input.on('pointerdown', () => this.scene.start('title'));
    }
}