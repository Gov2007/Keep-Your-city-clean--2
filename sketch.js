
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1, dustbin2, dustbin3, paperObject, ground1;
var binImage , bin;

function preload()
{
 binImage = loadImage("sprites/dustbingreen.png");
 

}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
  
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  
  ground1 = new ground(width/2, 400, width, 10,{
    isStatic: true
  });
  

  bin = createSprite(650,320,10,70);
  bin.addImage(binImage);
  bin.scale = 0.5;

  dustbin1 = new dustbin(902,505,10,120);
  dustbin2 = new dustbin(962,565,130,10);
  dustbin3 = new dustbin(1024,505,10,120);
  paperObject = new paper(100,300,50);
    

  Engine.run(engine);
  World.add(world, ground1);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.update(engine);
 
  display();

 
  drawSprites();
  
 
}
function keyPressed() {
  if(keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:175,y:-178});
  }
}


function display() {
  ground1.display();
  paperObject.display(); 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
                                                                                         
}

