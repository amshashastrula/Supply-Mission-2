var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	r1 = new Rectangle(400, 600, 250, 10);
	r2 = new Rectangle(300, 600, 10, 80);
	r3 = new Rectangle(500, 600, 10, 80);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//boxBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//RectangleBody1 = Bodies.rectangle(width/2 , 200 , width, 650 , {restitution:0.5, isStatic:true});
    //World.add(world, RectangleBody1);
	
	Engine.run(engine);
  
	//Matter.Body.setStatic(<body Name>, false);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  r1.display();
  r2.display();
  r3.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }

}



