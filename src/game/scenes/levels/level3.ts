import LevelBase from "./levelBase"
import PlayerInventory from "../../characters/playerInventory"

export default class extends LevelBase {

    playerInventoryBase: PlayerInventory

    constructor() {
        super('level3')
    }

    init(data: any) {
        super.init(undefined)
        this.playerInventoryBase = data.playerInventory
    }

    preload() {
    }

    create() {
        super.create()

        this.player.inventory = this.playerInventoryBase

        this.platforms.scene2(this)

        this.movingPlatforms.scene2()

        this.thornes.scene2()

        this.coins.scene2()
        this.coins.addTween(this)

        this.door = this.add.image(1800, 424, 'door').getBounds()

    }

    update(elapsedTime: number) {
        super.update(elapsedTime)
        if (this.door.contains(this.player.x, this.player.y)) {
            this.scene.start('win')
        }
    }

}
