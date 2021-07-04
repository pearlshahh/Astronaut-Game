var bath
function preload(){
  bg =loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png","bath1.png","bath2.png","bath1.png","bath2.png","bath1.png","bath2.png","bath1.png",)
  brush= loadAnimation("brush.png")
  drink=loadAnimation("drink1.png","drink2.png","drink1.png","drink2.png")
  eat=loadAnimation("eat1.png","eat2.png","eat1.png","eat2.png")
  gym=loadAnimation("gym11.png","gym12.png","gym11.png","gym12.png","gym11.png","gym12.png")
  moving=loadAnimation("move.png","move.png","move1.png","move1.png")
  sleep=loadAnimation("sleep.png")

  
}
function setup() {
  createCanvas(800,400);
 Astronaut=createSprite(400, 200);
 Astronaut.addAnimation("sleeping",sleep)
Astronaut.scale=0.1

}

function draw() {
  background(bg);  
edges=createEdgeSprites()
Astronaut.bounceOff(edges)
if (keyDown("UP_ARROW")){
  Astronaut.addAnimation("brushing",brush)
  Astronaut.changeAnimation("brushing")
  Astronaut.y= 350;
  Astronaut.velocityX=0
  Astronaut.velocityY=0

}
if (keyDown("DOWN_ARROW")){
  Astronaut.addAnimation("bathing",bath)
  Astronaut.changeAnimation("bathing")
  Astronaut.y= 200;
  Astronaut.velocityX=0
  Astronaut.velocityY=0
}
if (keyDown("LEFT_ARROW")){
  Astronaut.addAnimation("moving",moving)
  Astronaut.changeAnimation("moving")
  
  Astronaut.velocityX=1
  Astronaut.velocityY=1
}
if (keyDown("RIGHT_ARROW")){
  Astronaut.addAnimation("drink",drink)
  Astronaut.changeAnimation("drink")
  Astronaut.y= 300;
  Astronaut.velocityX=0
  Astronaut.velocityY=0
}
if (keyDown("space")){
  Astronaut.addAnimation("gyming",gym)
  Astronaut.changeAnimation("gyming")
  Astronaut.y= 350;
  Astronaut.velocityX=0
  Astronaut.velocityY=0
}
if (keyDown("a")){
  Astronaut.addAnimation("eating",eat)
  Astronaut.changeAnimation("eating")
  Astronaut.y= 350;
  Astronaut.velocityX=0
  Astronaut.velocityY=0
}

  drawSprites();
}