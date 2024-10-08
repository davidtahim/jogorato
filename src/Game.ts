import Phaser from "phaser";
export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }
    preload() {
        this.load.image('background','house/bg_repeat_340x640.png')
    }
    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.tileSprite(0,0,width,height,'background')
        .setOrigin(0)
    }
}