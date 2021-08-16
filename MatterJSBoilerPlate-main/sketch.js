
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1349, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(0, height - 1, width * 2, 1);


	Engine.run(engine);

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2

	}

		ball = Bodies.circle(200,100,20,ball_options);
		World.add(world,ball);

		rectMode(CENTER);
		ellipseMode(RADIUS);
		  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  drawSprites();
  ball.display();
  ground.display();

 
}



