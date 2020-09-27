
var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=("white")
  bullet.velocityX =speed;


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

}


function draw() {
  background(0,0,0);

  thickness = random(22,83)
  speed=random(233,321)
  weight=random(30,52)

  var damage
  damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(Wallthickness * Wallthickness * Wallthickness)
  if(damage>10){
    bulletWeight=32
    bulletSpeed=223
    Wallthickness=40
    damage=3.68
    wall.shapeColor=("green")
  }
  if(damage<10)
  bulletWeight=32
  bulletSpeed=223
  Wallthickness=70
  damage=12.43
  wall.shapeColor("red")

  wall.display();
  bullet.display()
  
  drawSprites();
}