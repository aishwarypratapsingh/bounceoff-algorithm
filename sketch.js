var fixedRect, movingRect,rect1,rect2,rect3,rect4;
var object1, object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=-4;

  movingRect = createSprite(10,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=4;

  /* rect1=createSprite(200,100,50,80);
  rect1.shapeColor="green";

  rect2=createSprite(300,100,50,80);
  rect2.shapeColor="green";

  rect3=createSprite(500,100,50,80);
  rect3.shapeColor="green";

  rect4=createSprite(700,100,50,80);
  rect4.shapeColor="green"; */

}

function draw() {
  background(0,0,0);  
 /* movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rect4)){      //true    
  rect4.shapeColor = "blue";
  movingRect.shapeColor = "blue";

 }
 else    //false
 {
  rect4.shapeColor = "green";
  movingRect.shapeColor = "green";
 }*/

 bounceOff(movingRect,fixedRect);
 
  drawSprites();
}

