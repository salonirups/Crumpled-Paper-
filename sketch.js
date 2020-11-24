
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land;
var bin1,bin2,bin3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	land=new Ground(width/2,690,width,20);
	ball=new Paper(194,685,50);
	bin1=new Container(752,635,80,105)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  land.display();
  ball.display();
  bin1.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:115,y:-80});
}
}



