const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12, box13, box14, box15;
var stopper;
var baseGround;
var catapult;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    //Higher Level Ground
    ground1 = new Ground(300, 150, 100, 15);
    //Lower Level Ground
    ground2 = new Ground(400, 250, 110, 15);

    //LEVEL 1 - ROW 1 - LOWER
    box1 = new Box(410, 180, 20, 20, 240,128,128);
    box2 = new Box(430, 180, 20, 20, 144,238,144);
    box3 = new Box(450, 180, 20, 20, 0,128,128);
    box4 = new Box(390, 180, 20, 20, 0,191,255);
    box5 = new Box(370, 180, 20, 20, 138,43,226);
    box6 = new Box(350, 180, 20, 20, 188,143,143);

    //ROW 2
    box7 = new Box(380, 150, 20, 20, 255,240,245);
    box8 = new Box(400, 150, 20, 20, 199,21,133);
    box9 = new Box(420, 150, 20, 20, 72,61,139);
    
    //ROW 3
    box10 = new Box(400, 160, 20, 20, 153 ,50,204);
    
    //LEVEL 2 - ROW 1 - HIGHER
    box11 = new Box(280, 130, 35, 35, 221,160,221);
    box12 = new Box(320, 130, 35, 35, 135,206,250);
    //ROW 2 
    box13 = new Box(280, 100, 30, 30, 64,224,208);
    box14 = new Box(320, 100, 30, 30, 152,251,152 );
    //ROW 3
    box15 = new Box(300, 80, 25, 25, 255,215,0);

    fill("white");
    stopper = new Box(100, 230, 30,30, 255,255,255);
    slingshot = new SlingShot(stopper.body,{x:100, y:230});

    
    catapult = new Ground(100,280,10,40 );
    baseGround = new Ground(100,360,100, 160);
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    stopper.display();
    //log6.display();
    slingshot.display();    
    
    catapult.display();
    baseGround.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stopper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
    stopper.velocityX = 12;
}
