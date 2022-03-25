const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, bg, g2;
let consntraintLog, slingShot;
let gameState = "on";


function preload(){
//bg = loadImage("sprites/bg.png");
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    g2 = new Ground(150, 355, 300, 276);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //Log6 = new Log(230,180,80,PI/2);

    bird = new Bird(200,50);
    slingShot = new SlingShot(bird.body, {
        x: 200, y:50
    });
    //constraintLog = new Log(230, 180, 80, PI/2);
    /*let options = {
        bodyA: bird.body,
        bodyB: constraintLog.body,
        stifness: 0.04,
        length: 10
    }*/

   // let chain = Constraint.create(options)
   // World.add(world, chain)
}

function draw(){
   // background(bg);
   if (backgroundImg)
   background(backgroundImg);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

g2.display();

bird.display();
    //Log6.display();
    slingShot.display();
    
    //constraintLog.display();
    //strokeWeight(3);
    //line(bird.body.position.x,bird.body.position.y, constraintLog.body.position.x,constraintLog.body.position.y);
}

getTime();

function mouseDragged(){
    if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body,{
        x: mouseX,
        y: mouseY
    })
}
}
function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}
function keypressed(){
   // if (keyCode===32){
 //slingShot.atack(bird.body); 
 console.log("hola");
   // } 
}
async function getTime(){
 let response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");      
let Json = await response.json();
let datetime = Json.datetime;
let hour = datetime.slice(11,13);
console.log(Json);
console.log(hour);
if (hour>=06 && hour<=19){
bg = "sprites/bg.png";   
}
else{
    bg = "sprites/bg2.png";     
}
backgroundImg = loadImage(bg);
console.log(backgroundImg);
}