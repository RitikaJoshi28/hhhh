var iss,issImage;
var spaceCraft,spaceImg1,spaceImg2,spaceImg3,spaceImg4;
var hasDocked=false;
var scene,scenery;
function preload()
{
issImage=loadImage("iss.png");
spaceImg1=loadImage("spacecraft1.png");
spaceImg2=loadImage("spacecraft2.png");
spaceImg3=loadImage("spacecraft3.png");
spaceImg4=loadImage("spacecraft4.png");
scenery=loadImage("spacebg.jpg");
}
function setup() 
{
  createCanvas(600,350);
  iss=createSprite(285,200,50,50);
  iss.addImage("issImg",issImage);
 iss.scale=0.15;
 spaceCraft=createSprite(285,240,50,50);
 spaceCraft.addImage("craft",spaceImg1);
 spaceCraft.scale=0.15;
 scene=createSprite(800,400,20,20);
 scene.addImage("space",scenery);
 scene.scale=1.0;
}

function draw()
 {
  background(255,255,255,255); 
  if(keyDown(LEFT_ARROW))
  {
    spaceCraft.velocityX=-3;
    spaceCraft.addImage(spaceImg1);
  }
  if(keyDown(RIGHT_ARROW))
  {
    spaceCraft.velocityX=3;
    spaceCraft.addImage(spaceImg2);
  }
  if(keyDown(UP_ARROW))
  {
    spaceCraft.velocityY=-3;
    spaceCraft.addImage(spaceImg3);
  }
  if(keyDown(DOWN_ARROW))
  {
    spaceCraft.velocityY=3;
    spaceCraft.addImage(spaceImg4);
  }
  drawSprites();
}