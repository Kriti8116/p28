
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, slingShot;

function preload()
{
	boyImg= loadImage("boy.png")

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(950,300);
ground= new Ground(300,600,1300,20);
mango1 = new Mango(900,100,30);
mango2 = new Mango(970,130,30);
stone= new Stone(235,420,30)
slingshot = new SlingShot(stone.body,{x:335, y:420});
  


}


function draw() {
  rectMode(CENTER);
  background("white");
  
image(boyImg,200,340,200,300);
tree.display();
ground.display();
mango1.display();
mango2.display();
stone.display();
slingshot.display();



 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
