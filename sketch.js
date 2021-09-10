var road
var jaxon
var leftb,rightb,edges

function preload(){
 //pre-load images
 jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")
 roadImage = loadImage("path.png")
}

function setup(){
 createCanvas(400,400);
   //create sprites here
  road = createSprite(200,200);  
  road.addImage(roadImage)
  road.velocityY= 4;
  road.scale = 1.20

  jaxon = createSprite(200,350,400,200);  
  jaxon.addAnimation("running", jaxon_running)
  jaxon.scale = 0.06

  leftb = createSprite(0,200,60,400);
  leftb.visible = false

  rightb = createSprite(400,200,60,400);
  rightb.visible = false
}

function draw() {
 background("blue");
 road.velocityY = 4
 if(road.y > 400){
   road.y = height/2
 }
 jaxon.x = World.mouseX
 
  edges = createEdgeSprites()
  jaxon.collide(edges[3])
  jaxon.collide(leftb)
  jaxon.collide(rightb)
 drawSprites();
}

