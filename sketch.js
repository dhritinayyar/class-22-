const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(300,390,600,20,ground_options);
    World.add(world,ground);

    var ball_options ={

    restitution : 0.9   

    }

    ball = Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill ("blue");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
    fill ("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
}