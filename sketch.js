var bullet, wall
var speed, weight, thickness,damage



function setup() {
  createCanvas(1000,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  
  thickness=random(22,83);
  bullet=createSprite(100,200,50,20)
  wall=createSprite(900,200,thickness,300);
  bullet.shapeColor="black"
  wall.shapeColor = "green"
  bullet.velocityX=speed/10;


}

function draw() {
  background(255,255,255);  
  
 
  
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/22500






if(damage<10){
bullet.shapeColor="green";
}
else{
  bullet.shapeColor="red";
  
}
}
drawSprites();
}




