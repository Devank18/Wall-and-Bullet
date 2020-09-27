
var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(233,321)
  weight=random(30,52)


  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=("white")
  bullet.velocityX =speed;


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230)

}


function draw() {
  background(0,0,0);

  thickness = random(22,83)
  speed=random(233,321)
  weight=random(30,52)

  function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }

  if(hascollided(wall,bullet)){
    bullet.velocityX=0;
    var damge =0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor(255,0,0);
    }
    if(damage<10)
    wall.shapeColor(0,255,0);
  }

  wall.display();
  bullet.display()

  drawSprites();
}