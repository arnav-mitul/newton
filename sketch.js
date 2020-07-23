
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var st1,st2,st3,st4,st5;
var Roof;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    Roof= new Box(400,350,600,10);
    bob1= new ball(100,Roof.y+200,80);
    bob2= new ball(200,Roof.y+200,80);
    bob3= new ball(300,Roof.y+200,80);
    bob4= new ball(400,Roof.y+200,80);
    st1= new  String(Roof,bob1);
    st2= new  String(Roof,bob2);
    st3= new  String(Roof,bob3);
    st4= new  String(Roof,bob4);
}


function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  st1.display();
  st2.display();
  st3.display();
  st4.display();
}



