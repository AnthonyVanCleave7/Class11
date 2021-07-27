var Jaxon, Runner, edges;
var pathImg;
var path;

function preload(){
  //pre-load images
  Runner = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadAnimation("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path = createSprite (200,200);
 path.addAnimation("paths", pathImg);
 path.velocityY = 4;
 path.scale=1.2;
 Jaxon = createSprite (203,350)
 Jaxon.addAnimation("Jax", Runner);
 Jaxon.scale = 0.05
}

edge = createEdgeSprites();
//if(keyDown("right")){
 // Jaxon.x = Jaxon.x +2;
//}
  
Jaxon.collide(edges[2]);
function draw() {
  background(0);
  
  if(keyDown("right")){
    Jaxon.x = Jaxon.x +2;
  }
 
if(keyDown("left")){
  Jaxon.x = Jaxon.x -2;
}

//Jaxon.collide(edges[0]);
  if(path.y > 400)
   path.y = height/2;
  drawSprites();
}
