const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, ball,ground,box2;
var box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var constraintstring;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(200,780,2000,20)

    box1 = new Box(600,500,70,70);
    box2 = new Box(702,500,70,70);
    box3 = new Box(800,500,70,70);
    box4 = new Box(605,400,70,70);
    box5 = new Box(801,400,70,70);
    box6 = new Box(605,300,70,70);
    box7 = new Box(700,300,70,70);
    box8 = new Box(805,300,70,70);
    box9 = new Box(605,200,70,70);
    box10 = new Box(700,200,70,70);
    box11= new Box(805,200,70,70);
    box12= new Box(605,100,70,70);
    box13= new Box(700,100,70,70);
    box14= new Box(805,100,70,70);
    box15= new Box(700,400,70,70);

    ball = new Ball(100,100);
    constraintstring = new pullstring(ball.body,{x:500, y:50});
    console.log(ball);
}

function draw(){
    background("lightblue");
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
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    ground.display();

    ball.display();
    constraintstring.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}