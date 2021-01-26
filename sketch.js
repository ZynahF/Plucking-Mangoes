const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg, mangos

function preload()
{
	
	//boyImg.loadImage("sprites/boy.png")

}

function setup(){

	createCanvas(800, 700)
	
	engine = Engine.create();
	world = engine.world;

	boy = Bodies.rectangle(400,350,100,100)
	World.add(world, boy)

	mangos = new mango(100,100,15)
	
	Engine.run(engine)
	
	}


function draw(){
	background(0)

    Engine.update(engine);

	rectMode(CENTER)
	
	rect(400,350,100,100)

	mangos.display()
	
	
	}