const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, ball,ground,box2;
var box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var constraintstring;
var bg,bgImg;
var house,houseImg;
var GftPack,GftPackImg
var bal,balImg;
var palm,palmImg;

function preload(){
houseImg=loadImage("/Assets/House1.png");
bgImg=loadImage("/Assets/669166.jpg");
GftPackImg=loadImage("/Assets/Presents.png");
//balImg=loadImage("/Assets/Hearts.png");
palmImg=loadImage("/Assets/palm.png");
greet=loadImage("/Assets/Pentapati.png");
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    
    bg=createSprite(500,400,10,10);
    bg.addImage("bg",bgImg);
    bg.scale=0.8;

    house=createSprite(600,300,10,10);
    house.addImage("house",houseImg);
    house.scale=0.4;
        
    palm=createSprite(40,370,10,10);
    palm.addImage("house",palmImg);
    palm.scale=0.1;

    GftPack1=createSprite(1050,640,10,10);
    GftPack1.addImage("bg",GftPackImg);
    GftPack1.scale=0.2;

   
    
    ground = new Ground(200,790,2000,20)

    box1 = new Box(300,700,70,120);
    box2 = new Box(420,700,70,120);
    box3 = new Box(540,700,70,120);
    box4 = new Box(300,600,70,120);
    box5 = new Box(420,600,70,120);
    box6 = new Box(540,600,70,120);
    box7 = new Box(300,500,70,120);
    box8 = new Box(420,500,70,120);
    box9 = new Box(540,500,70,120);
   
    ball = new Ball(20,20);
    constraintstring = new pullstring(ball.body,{x:160, y:100});
    //console.log(ball);
    setTimeout(greetings,5000);
    
}

function draw(){
    background("lightblue");
   drawSprites();
    Engine.update(engine);

    box1.display();
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
   
    ground.display();

    ball.display();
    constraintstring.display(); 
        }

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function greetings(){
   var  greeting=createSprite(600,130,10,10);
    greeting.addImage("greet",greet);
    greeting.scale=0.3;
}