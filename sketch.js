
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render;
var world;

var dustbinObject,paperObject,groundObject;


function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObject = new Dustbin(1200,650);
	groundObject = new Ground(width/2,670,width,20);
    paperObject = new Paper(200,450,40);

	var render = Render.create({
		element : document.body,
	   engine : engine,
	   options:{
		   width : 1200,
		   height : 700,
		   wireframes : false
	   }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   groundObject.display();
   dustbinObject.display();
   paperObject.display();
  
 
}

  function keyPressed(){
	  if (keyCode===UP_ARROW) {
		   
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	  }
  }
