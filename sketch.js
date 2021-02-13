

	
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint = Matter.Constraint;
	
	
		
function preload(){
	seige=loadImage("polygon.png");
  }

	function setup() {
		createCanvas(1600, 700);
		rectMode(CENTER);
	
	
		engine = Engine.create();
		world = engine.world;
	
	
		groundObject=new ground(width/2,670,width,20);
		groundObject2=new ground(800,400,250,20)
		groundObject3=new ground(1180,300,250,20)

		
		
	    block1=new block(714,360,40,40)
	    block2=new block(770,360,40,40)
	    block3=new block(825,360,40,40)
	    block4=new block(880,360,40,40)
        block5=new block(800,250,40,40)
	    block6=new block(770,307,40,40)
	    block7=new block(825,307,40,40)

		
	    block8=new block(1155,260,40,40)
	    block9=new block(1210,260,40,40)
	    block10=new block(1100,260,40,40)
	    block11=new block(1265,260,40,40)
        block12=new block(1210,205,40,40)
	    block13=new block(1155,205,40,40)
	    block14=new block(1185,152,40,40)

	  
		polygon= Bodies.circle(50,200,20);
		 World.add(world,polygon);

		slingShot = new slingi (this.polygon, {x:100,y:200});
		
		

	
		Engine.run(engine);
		
	  
	}
	
	
	function draw() {
	  rectMode(CENTER);
	
background("green")

	  groundObject.display()
	  groundObject2.display()
	  groundObject3.display()

	  block1.display();

	  block1.display()
	  block2.display();
	  block3.display();
	  block4.display();
	  block5.display();
	  block6.display();
	  block7.display();

	  block8.display()
	  block9.display();
	  block10.display();
	  block11.display();
	  block12.display();
	  block13.display();
	  block14.display();

	  slingShot.display();
	
	
	imageMode (CENTER)

image(seige,polygon.position.x, polygon.position.y,40,40);

slingShot.display();

}

function mouseDragged (){

Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}); }

function mouseReleased (){

slingShot.fly();

}
	
	