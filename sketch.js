
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1,body2,body3,ball1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	body1 = new dustbin(700,height-40,200,20);
    body2 = new dustbin(600,height-130,20,200);
	body3 = new dustbin(800,height-130,20,200);

	ball1 = new ball(200,height-30,40);
	
	ground1 = new ground(500,height-17,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


body1.display();
body2.display();
body3.display();
ball1.display();
ground1.display();

//ball1.setCollider("circle",0,0,ball1.radius);
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:150,y:-400})

}



}



