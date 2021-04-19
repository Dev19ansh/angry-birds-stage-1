const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,430,70,70);
    box2 = new Box(800,430,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(700,430);
    log1= new Log(700,400,300,PI/2)
    
    box3 = new Box(600,330,70,70);
    box4 = new Box(800,330,70,70);
    pig2 = new Pig(700,330);
    log2 = new Log(700,300,300,PI/2);
    box5= new Box(700,230,70,70);
    log3 = new Log(650,200,150,PI/7);
    log4 = new Log(750,200,150,-PI/7);
    bird1 = new Bird(100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}