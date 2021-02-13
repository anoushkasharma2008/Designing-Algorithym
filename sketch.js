function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "red";
  moving = createSprite(100,200,100,50);
  moving.shapeColor = "green";
  rect1 = createSprite(600,150,50,50);
  rect2 = createSprite(600,350,50,50);
  rect1.velocityY = 2;
  rect2.velocityY = -2;
}

function draw() {
  background("black"); 
  moving.x = mouseX;
  moving.y = mouseY; 
  if(moving.x-fixed.x<fixed.width/2+moving.width/2 && 
    fixed.x-moving.x<fixed.width/2+moving.width/2 &&
    moving.y-fixed.y<fixed.height/2+moving.height/2 && 
    fixed.y-moving.y<fixed.height/2+moving.height/2){
      fixed.shapeColor = "pink";
      moving.shapeColor = "yellow";
    } else{
      fixed.shapeColor = "red";
      moving.shapeColor = "green";
    }
if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && 
  rect2.x-rect1.x<rect1.width/2+rect2.width/2){
    rect1.velocityX = rect1.velocityX*(-1);
    rect2.velocityX = rect2.velocityX*(-1);
  }
  if(rect1.y-rect2.y<rect1.height/2+rect2.height/2 && 
    rect2.y-rect1.y<rect1.height/2+rect2.height/2){
      rect1.velocityY = rect1.velocityY*(-1);
      rect2.velocityY = rect2.velocityY*(-1);
    }
  drawSprites();
}