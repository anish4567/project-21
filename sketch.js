var bullet, wall
var speed, weight



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(55,1400)
  car=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;
if(wall.x.car.x < (car.width+wall.width)/2)
car.velocityX = 0
var deformation = 0.5 * weight * speed * speed/22509
bullet.shapeColor("white");
thickness=random(22,83);
wall.shapeColor(80,80,80);
speed=random(223,321);
weight=random(30,52);
car.shapeColor=color(230,230,0);
if(deformation<100 && deformation>100)
car.shapeColor=color(230,230,0);
}
if(deformation<100)
car.shapeColor=color(230,230,0);

if(hascollided(bullet,wall))
{
bullet.velocityX = 0
var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(damage>10)
wall.shapeColor=color(255,0,0)

}
if(damage<10)
wall.shapeColor=color(0,255,0)
  
function hasCollided() {
bulletRightEdge=bullet.x+bullet.width;
wall.leftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}




}

