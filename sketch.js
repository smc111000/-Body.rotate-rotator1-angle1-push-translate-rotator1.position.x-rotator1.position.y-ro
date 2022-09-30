

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1=60;
var angle2=60;
var angle3=60;
var angle4=60;
var angle5=60;
var angle6=60;
function preload(){
	
}

function setup() {
	//estilizando os corpos aqui 
	fill("brown"); 
	rectMode(CENTER); 
	ellipseMode(RADIUS);
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic:true
	   }

	plane = Bodies.rectangle(100,400,650,20,plane_options);
	World.add(world,plane);
    

    block1=Bodies.rectangle(100,400,150,20,plane_options);
	World.add(world,block1);

	block2=Bodies.rectangle(100,400,150,20,plane_options);
	World.add(world,block2);

	 //crie múltiplos de corpos de partículas var
	particle_options = { 
		restitution:0.4, friction:0.02
	 }

	  //crie todos os três corpos de rotadores
	   var rotator_options={
		 isStatic:true
		 };

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

    particle1 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle1);

	particle2 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle3);

	particle4 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle4);

	particle5 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle5);

	particle6 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle6);

  
}

function draw() {
  background(200);
  Engine.update(engine);
 
  Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,100,20);
  pop();
  angle1+=0.2;

  Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,100,20);
  pop();
  angle2+=0.2;

  Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,100,20);
  pop();
  angle3+=0.2;

  drawSprites();
 
}


	


