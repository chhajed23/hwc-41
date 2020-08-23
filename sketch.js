const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drop,thunder;
var man;
function preload(){
    
}

function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

man=createSprite(200,300,100,10);
man.shapeColor="red"

}

function draw(){
    background(0);
    Engine.update(engine);
    drawSprite();
}   

