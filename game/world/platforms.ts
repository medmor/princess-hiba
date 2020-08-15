export default class extends Phaser.Physics.Arcade.StaticGroup {

  movingPlatforms: MovingPlatform[] = []
  

  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)
  }

  scene1(){
    this.create(250, 500, 'ground')
    this.create(800, 500, 'ground')
    this.create(1400, 500, 'ground')
    this.create(1800, 500, 'ground')


    this.create(500, 474, 'block1')
    this.create(600, 449, 'block2')
    this.create(780, 449, 'block2')
    this.create(880, 474, 'block1')
  }

  scene2(scene: Phaser.Scene){
    this.create(150, 500, 'ground2')
    this.create(300, 424, 'block4')
   
  }

  updateMovingPlatforms(){

  }
}

class MovingPlatform{
  constructor(
    public target: Phaser.Physics.Arcade.Sprite,
    public maxX: number,
    public minX: number,
    public maxY: number,
    public minY: number)
    {
      this.target.setX(this.maxX)
      this.target.setY(this.maxY)
      
      this.target.setY(200)
    }
}