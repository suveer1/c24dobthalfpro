
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

function setup() {
	var canvas=createCanvas(800, 700);
    p1 = new Papper(700,600);

	engine = Engine.create();
	world = engine.world;
      
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  p1.display()
  
 
}



