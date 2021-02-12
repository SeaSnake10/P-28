
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var wall1,wall2,wall3;
var ball

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,690,900,10)
	
	wall1 = new Can(590,610,10,150)
	wall2 = new Can(700,610,10,150)
	wall3 = new Can(645,680,140,20)
	ball = new Paper(100,680,30,30)

    sling = new Launcher(ball.body,{x:200,y:450})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
  
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}